/**
 * Grabarte 3D · cargador del front (pequeño, se carga en todas las páginas públicas).
 *  - Descarga el visor 3D (grabarte-3d.js) solo cuando la pieza está cerca de la pantalla (en la ficha; la portada no lo usa).
 *  - Portada: entradas, rotación de piezas en la cabecera y paso del texto escrito a la ficha.
 *  - Engancha la tienda: valida el texto, sube la captura de la pieza y envía los datos del grabado con el carrito (SHOP_BEFORE_ADD).
 *  - Gestiona la ventana «Pedir encargo por correo».
 * Sin dependencias.
 */
(function () {
  'use strict';
  var BASE = (window.SHOP && window.SHOP.base) || '';
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function wait(ms) { return new Promise(function (res) { setTimeout(function () { res(null); }, ms); }); }
  function rootOf(el) { return el.closest('[data-g3d-root]') || el.closest('.product__grid') || null; }
  /** Producto activo: en el configurador con pestañas cambia sin recargar (data-g3d-pid); en la ficha es el de siempre */
  function pidOf(root) { return String((root && root.getAttribute('data-g3d-pid')) || (cfgOf(root) || {}).productId || ''); }
  function cfgOf(root) { var s = root && $('[data-g3d-stage]', root); try { return s ? JSON.parse(s.getAttribute('data-g3d-config') || '{}') : {}; } catch (e) { return {}; } }

  /* ---------- visor: carga bajo demanda ---------- */
  function load(stage) {
    if (stage._g3d) return;
    stage._g3d = true;
    var root = rootOf(stage) || stage.parentNode;
    var cfg = cfgOf(root);
    cfg.bg = cfg.bg || getComputedStyle(stage).backgroundColor || '#efe9dd';
    root._g3dReady = import(cfg.module)
      .then(function (m) { return m.mount(root, cfg); })
      .then(function (api) {
        stage.setAttribute('data-ready', '1');
        var l = $('[data-g3d-loading]', stage); if (l) l.remove();
        return api;
      })
      .catch(function (err) {
        if (window.console) console.warn('Grabarte 3D: no se pudo cargar el visor', err);
        var l = $('[data-g3d-loading]', stage); if (l) l.textContent = 'No se ha podido cargar la vista 3D. Puedes comprar igualmente: el texto se graba tal como lo escribas.';
        return null;
      });
  }
  var stages = $$('[data-g3d-stage]');
  if (stages.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { io.unobserve(en.target); load(en.target); } });
      }, { rootMargin: '400px 0px' });
      stages.forEach(function (s) { io.observe(s); });
    } else { stages.forEach(load); }
  }

  /* ---------- portada: cabecera que va enseñando las piezas + capítulos de color ----------
     Todo son imágenes fijas: aquí no se carga three.js ni se usa WebGL (el 3D que se gira está en la ficha de cada pieza).
     Este bloque hace tres cosas: las entradas al llegar a pantalla, la rotación de la cabecera y llevar el texto escrito a la ficha. */
  $$('[data-gsc]').forEach(function (scene) {
    var calm = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    // entrada: los textos y las piezas aparecen al llegar a pantalla (con «reducir movimiento», solo con un fundido; ver grabarte-3d.css)
    var rv = $$('[data-rv]', scene);
    if ('IntersectionObserver' in window) {
      scene.classList.add('is-armed');
      var rio = new IntersectionObserver(function (es) {
        es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); rio.unobserve(en.target); } });
      }, { rootMargin: '0px 0px -14% 0px', threshold: 0.12 });
      rv.forEach(function (el) { rio.observe(el); });
    }

    var box = $('[data-gsc-show]', scene);
    var input = $('[data-gsc-text]', scene), go = $('[data-gsc-go]', scene);
    var links = $$('[data-gsc-link]', scene);
    var slides = box ? $$('.gsc__slide', box) : [];
    var n = slides.length, cur = 0, timer = 0, inView = true, typing = false, held = false, steps = 0;
    var EVERY = 4600;   // ms que se queda cada pieza en la cabecera
    var reduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    var LAPS = reduced ? 1 : 3;   // vueltas completas por las piezas y se queda quieta (la cabecera no se mueve para siempre)

    // el texto escrito en la cabecera viaja a la ficha: ?texto=… en el botón de la pieza que se ve y en el de cada capítulo
    function typed(max) { return String(input ? input.value : '').replace(/\s+/g, ' ').trim().slice(0, max || 40); }
    function withText(base, max) { var t = typed(max); return t ? base + (base.indexOf('?') < 0 ? '?' : '&') + 'texto=' + encodeURIComponent(t) : base; }
    function syncLinks() {
      if (go && slides[cur]) go.setAttribute('href', withText(slides[cur].getAttribute('data-url') || go.getAttribute('href'), parseInt(slides[cur].getAttribute('data-max'), 10) || 40));
      links.forEach(function (a) { var b = a.getAttribute('data-base') || a.getAttribute('href'); a.setAttribute('data-base', b); a.setAttribute('href', withText(b, 40)); });
    }
    if (input) input.addEventListener('input', function () {
      syncLinks();
      typing = !!typed(1);             // si está escribiendo, la cabecera se queda quieta en la pieza que ve
      run();
    });

    function show(i) {
      if (!n || i === cur) return;
      var prev = slides[cur];
      slides.forEach(function (s) { s.classList.remove('is-prev'); });
      prev.classList.remove('is-active'); prev.classList.add('is-prev');
      cur = (i + n) % n;
      var s = slides[cur];
      s.classList.add('is-active');
      if (go) go.textContent = s.getAttribute('data-cta') || go.textContent;
      if (input) {
        var max = parseInt(s.getAttribute('data-max'), 10); if (max > 0) input.maxLength = max;
        if (s.getAttribute('data-hint')) input.placeholder = s.getAttribute('data-hint');
        if (max > 0 && input.value.length > max) input.value = input.value.slice(0, max);
      }
      syncLinks();
    }
    function clear() { if (timer) { clearTimeout(timer); timer = 0; } }
    function run() {
      clear();
      if (n < 2 || typing || held || !inView || document.hidden || steps >= n * LAPS) return;
      timer = setTimeout(function () { steps++; show(cur + 1); run(); }, EVERY);
    }

    if (n > 1) {
      // las piezas van saliendo solas, sin puntos ni botón de pausa. Solo corre mientras la cabecera se ve y la pestaña está abierta,
      // y se queda quieta mientras el cursor o el teclado están en el campo de texto o en el botón (no cambia debajo de la mano)
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (es) { inView = es[0].isIntersecting; run(); }, { threshold: 0.35 }).observe(box);
      }
      document.addEventListener('visibilitychange', run);
      var hold = $('.gsc__make', scene);
      if (hold) {
        hold.addEventListener('pointerenter', function () { held = true; run(); }); hold.addEventListener('pointerleave', function () { held = false; run(); });
        hold.addEventListener('focusin', function () { held = true; run(); }); hold.addEventListener('focusout', function () { held = false; run(); });
      }
      run();
    }
    syncLinks();
  });

  /* ---------- captura de la pieza ---------- */
  function stateKey(root) {
    var api = root._g3d; return api ? JSON.stringify(api.state()) : '';
  }
  /** Devuelve una promesa con {blob, token}; token solo si se ha subido. Nunca falla: sin captura se compra igual. */
  function snapshot(root, upload) {
    if (!root || !root._g3dReady) return Promise.resolve(null);
    var key;
    return Promise.race([root._g3dReady, wait(3500)]).then(function (api) {
      if (!api) return null;
      key = stateKey(root);
      if (root._g3dLast && root._g3dLast.key === key && (root._g3dLast.token || !upload)) return root._g3dLast;
      return api.snapshot(720).then(function (blob) { return blob ? { key: key, blob: blob, token: null } : null; });
    }).then(function (res) {
      if (!res) return null;
      root._g3dLast = res;
      if (!upload || res.token) return res;
      var url = (cfgOf(root).api || {}).snapshot;
      if (!url) return res;
      return fetch(url, { method: 'POST', headers: { 'Content-Type': 'image/jpeg', 'X-Requested-With': 'XMLHttpRequest' }, credentials: 'same-origin', body: res.blob })
        .then(function (r) { return r.json(); })
        .then(function (j) { if (j && j.ok) res.token = j.token; return res; })
        .catch(function () { return res; });
    }).catch(function () { return null; });
  }

  /* ---------- tienda: datos del grabado con el carrito ---------- */
  window.SHOP_BEFORE_ADD = function (body, form, btn) {
    var root = form && rootOf(form);
    var input = root && $('[data-g3d-text]', root);
    var is2d = !!(root && $('[data-g3d2-ui]', root));
    if (!input && !is2d) return body;
    var ctl = $('[data-g3d-controls]', root);
    var required = !!(ctl && ctl.getAttribute('data-required') === '1');
    if (!is2d && required && !input.value.trim()) {
      input.focus();
      return Promise.reject(new Error('Escribe el texto que quieres grabar.'));
    }
    var up = root._g3dUpload && typeof root._g3dUpload.then === 'function' ? root._g3dUpload : Promise.resolve(null);
    return up.then(function () {
      // objeto 2D: el diseño (capas) viaja como JSON; las imágenes ya están subidas
      if (!is2d) return null;
      return Promise.race([root._g3dReady, wait(4000)]).then(function (api) {
        if (!api || !api.design) throw new Error('El diseñador aún no ha cargado. Espera un momento e inténtalo de nuevo.');
        var bad = api.problem(); if (bad) throw new Error(bad);
        if (required && !api.count()) throw new Error('Añade algún texto, imagen o motivo a tu diseño.');
        return api;
      });
    }).then(function () { return snapshot(root, true); }).then(function (s) {
      var api = root._g3d;
      body.extra = body.extra || {}; body.extra.grabarte = body.extra.grabarte || {};
      if (is2d && api && api.design) body.extra.grabarte.design = JSON.stringify(api.design());
      if (!is2d && api && api.state().img) {
        var tk = api.imageToken();
        if (!tk) throw new Error('La imagen no se ha podido subir. Quítala o súbela de nuevo.');
        body.extra.grabarte.img = tk;
      }
      if (s && s.token) body.extra.grabarte.snap = s.token;
      if (!btn || !btn.hasAttribute('data-g3d-buynow')) return body;
      // «Comprar ahora»: añade a la cesta y va directo a finalizar la compra
      return fetch(BASE + '/api/cart/add', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json' }, credentials: 'same-origin', body: JSON.stringify(body) })
        .then(function (r) { return r.json().then(function (j) { if (!r.ok || j.ok === false) throw new Error(j.error || 'No se ha podido añadir.'); return j; }); })
        .then(function (j) { window.location.href = j.checkout_url || (BASE + '/finalizar-compra'); return new Promise(function () {}); });
    });
  };


  /* ---------- contador de caracteres junto a cada campo de texto ---------- */
  function updateCount(input) {
    var f = input.closest && input.closest('.g3d-field'), c = f && $('[data-g3d-count]', f);
    if (!c) return;
    var max = input.maxLength > 0 ? input.maxLength : 0, n = input.value.length;
    c.textContent = n + (max ? '/' + max : '');
    c.classList.toggle('is-max', !!max && n >= max);
  }
  document.addEventListener('input', function (e) {
    var t = e.target;
    if (t && t.matches && t.matches('[data-g3d-text],[data-g3d-text2],[data-g3d-text3]')) setTimeout(function () { updateCount(t); }, 0);
  });
  $$('[data-g3d-text],[data-g3d-text2],[data-g3d-text3]').forEach(updateCount);

  /* ---------- configurador con pestañas: cambia de pieza sin recargar ---------- */
  function applyItem(root, pid) {
    var items; try { items = JSON.parse(root.getAttribute('data-g3d-items') || '[]'); } catch (e) { return; }
    var it = items.filter(function (x) { return String(x.id) === String(pid); })[0];
    if (!it) return;
    root.setAttribute('data-g3d-pid', it.id);
    root.setAttribute('data-mode', it.mode);
    function set(sel, txt) { var el = $(sel, root); if (el) el.textContent = txt; }
    set('[data-g3d-title]', it.name); set('[data-g3d-desc]', it.desc); set('[data-g3d-price]', it.price);
    var input = $('[data-g3d-text]', root);
    if (input) { input.maxLength = it.max; if (input.value.length > it.max) input.value = input.value.slice(0, it.max); }
    if (input) updateCount(input);
    set('[data-g3d-help-max]', 'Hasta ' + it.max + ' caracteres. Letras, números y signos básicos.');
    var f2 = $('[data-g3d-field2]', root); if (f2) f2.hidden = it.lines < 2;
    var ctl = $('[data-g3d-controls]', root); if (ctl) ctl.setAttribute('data-required', it.required ? '1' : '0');
    var buy = $('[data-add-to-cart]', root);
    if (buy) { buy.setAttribute('data-add-to-cart', it.id); buy.hidden = it.mode === 'quote'; buy.disabled = !it.inStock; }
    var q = $('[data-g3d-quote-open]', root); if (q) q.hidden = it.mode === 'direct';
    // mientras el visor 3D no ha cargado, la imagen provisional es la de la pieza elegida
    var stage = $('[data-g3d-stage]', root), poster = stage && $('.g3d__poster', stage);
    if (poster && it.poster && !stage.hasAttribute('data-ready')) poster.src = it.poster;
    if (root._g3d && root._g3d.sync) root._g3d.sync();
  }
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (!t || !t.matches || !t.matches('[data-g3d-tab]')) return;
    var root = rootOf(t); if (root) applyItem(root, t.getAttribute('data-pid'));
  });

  /* ---------- encargo por correo ---------- */
  function selectedText(root) {
    var api = root._g3d, st = api ? api.state() : null;
    if (root && $('[data-g3d2-ui]', root)) {   // objeto 2D: un diseño en capas
      var d = api && api.design ? api.design() : { layers: [] };
      var tx = d.layers.filter(function (l) { return l.t === 'text'; }).map(function (l) { return l.s; });
      var nm = d.layers.filter(function (l) { return l.t === 'motif'; }).length, ni = d.layers.filter(function (l) { return l.t === 'img'; }).length;
      return { is2d: true, design: d, text: tx[0] || '', text2: '', text3: '', font: '', wood: '', motif: '', motifLabel: '', img: '', hasImg: false, fontLabel: '', woodLabel: '',
        has: d.layers.length > 0, lines: tx, extras: [nm ? nm + (nm === 1 ? ' motivo' : ' motivos') : '', ni ? ni + (ni === 1 ? ' imagen' : ' imágenes') : ''].filter(Boolean) };
    }
    function val(key, sel) { return st ? (st.ghost ? '' : (st[key] || '')) : (($(sel, root) || {}).value || ''); }
    var f = $('input[name$="[font]"]:checked', root), w = $('input[name$="[wood]"]:checked', root), m = $('input[name$="[motif]"]:checked', root);
    var motifOn = !!(m && m.value);
    var hasImg = !!(st && st.img);
    return {
      text: val('text', '[data-g3d-text]'), text2: val('text2', '[data-g3d-text2]'), text3: val('text3', '[data-g3d-text3]'),
      font: (f && f.value) || (st ? st.font : ''), wood: (w && w.value) || (st ? st.wood : ''),
      motif: motifOn ? m.value : '', motifLabel: motifOn ? m.parentNode.textContent.trim() : '',
      img: hasImg && api.imageToken ? api.imageToken() : '', hasImg: hasImg,
      fontLabel: f ? f.parentNode.textContent.trim() : '', woodLabel: w ? w.parentNode.textContent.trim() : ''
    };
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-g3d-quote-open]');
    if (!b) return;
    e.preventDefault();
    var root = rootOf(b);
    var pid = pidOf(root);
    var dlg = $('[data-g3d-dialog][data-product="' + pid + '"]');
    if (!dlg) return;
    var sel = selectedText(root);
    var box = $('[data-g3d-summary]', dlg);
    if (sel.is2d ? sel.has : (sel.text || sel.text2 || sel.text3 || sel.hasImg)) {
      var lines = (sel.is2d ? sel.lines : [sel.text, sel.text2, sel.text3]).filter(Boolean).map(function (t) { return '«' + (t.length > 60 ? t.slice(0, 57) + '…' : t) + '»'; }).join(' + ');
      var bits = sel.is2d ? sel.extras : [sel.motifLabel, sel.hasImg ? 'con tu imagen' : '', sel.fontLabel, sel.woodLabel].filter(Boolean);
      $('[data-g3d-summary-text]', dlg).textContent = [lines].concat(bits).filter(Boolean).join(' · ');
      box.hidden = false;
      var img = $('[data-g3d-summary-img]', dlg);
      img.removeAttribute('src');
      snapshot(root, false).then(function (s) { if (s && s.blob) { if (img._u) URL.revokeObjectURL(img._u); img._u = URL.createObjectURL(s.blob); img.src = img._u; } });
    } else { box.hidden = true; }
    dlg._root = root;
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
    var first = $('input[name=name]', dlg); if (first) setTimeout(function () { first.focus(); }, 30);
  });
  // cerrar al pulsar fuera de la ventana
  document.addEventListener('click', function (e) {
    var d = e.target; if (d && d.matches && d.matches('[data-g3d-dialog]')) { var r = d.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) d.close(); }
  });
  document.addEventListener('submit', function (e) {
    var form = e.target.closest ? e.target.closest('[data-g3d-quote-form]') : null;
    if (!form) return;
    e.preventDefault();
    var dlg = form.closest('[data-g3d-dialog]'), root = dlg._root || document;
    var err = $('[data-g3d-error]', form), btn = $('button[type=submit]', form);
    function showErr(msg, field) { err.textContent = msg; err.hidden = false; if (field && form.elements[field]) form.elements[field].focus(); }
    err.hidden = true;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var label = btn.textContent; btn.disabled = true; btn.textContent = 'Enviando…';
    var sel = root.nodeType === 1 ? selectedText(root) : { text: '', text2: '', text3: '', font: '', wood: '', motif: '', img: '' };
    var upl = root.nodeType === 1 && root._g3dUpload && typeof root._g3dUpload.then === 'function' ? root._g3dUpload : Promise.resolve(null);
    upl.then(function () {
      if (sel.is2d && root._g3d && root._g3d.problem) { var bad = root._g3d.problem(); if (bad) throw new Error(bad); sel.design = root._g3d.design(); }
      sel.img = root.nodeType === 1 && root._g3d && !sel.is2d && root._g3d.state().img ? root._g3d.imageToken() : '';
      return snapshot(root.nodeType === 1 ? root : null, true);
    }).then(function (s) {
      var fd = new FormData(form), data = {};
      fd.forEach(function (v, k) { data[k] = v; });
      data.product_id = dlg.getAttribute('data-product'); data.text = sel.text; data.text2 = sel.text2; data.text3 = sel.text3; data.font = sel.font; data.wood = sel.wood; data.motif = sel.motif; if (sel.img) data.img = sel.img; if (sel.is2d && sel.design && sel.design.layers.length) data.design = JSON.stringify(sel.design);
      data.privacy = form.elements.privacy.checked ? 1 : 0;
      if (s && s.token) data.snap = s.token;
      var api = (root.nodeType === 1 ? cfgOf(root).api : null) || { request: BASE + '/api/grabarte/encargo' };
      return fetch(api.request, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json' }, credentials: 'same-origin', body: JSON.stringify(data) })
        .then(function (r) { return r.json().then(function (j) { return { ok: r.ok && j.ok !== false, j: j }; }); });
    }).then(function (res) {
      if (!res.ok) { showErr(res.j.error || 'No se ha podido enviar. Inténtalo de nuevo.', res.j.fields && Object.keys(res.j.fields)[0]); btn.disabled = false; btn.textContent = label; return; }
      $('[data-g3d-dlg-form]', dlg).hidden = true;
      var done = $('[data-g3d-dlg-done]', dlg); $('[data-g3d-done-text]', done).textContent = res.j.message + ' Referencia: ' + res.j.ref + '.';
      done.hidden = false; done.focus();
      form.reset(); btn.disabled = false; btn.textContent = label;
    }).catch(function (err) { showErr((err && err.message && !/fetch|network|json/i.test(err.message)) ? err.message : 'No se ha podido enviar. Comprueba tu conexión e inténtalo de nuevo.'); btn.disabled = false; btn.textContent = label; });
  });
  document.addEventListener('close', function (e) {
    if (e.target && e.target.matches && e.target.matches('[data-g3d-dialog]')) { var d = e.target; $('[data-g3d-dlg-form]', d).hidden = false; $('[data-g3d-dlg-done]', d).hidden = true; var er = $('[data-g3d-error]', d); if (er) er.hidden = true; }
  }, true);
})();

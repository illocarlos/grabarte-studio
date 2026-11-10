/* === src/design/consent.js === */
(function(){
/* Banner de cookies + Consent Mode v2 (ver src/components/layout/Consent.php) */
(function () {
  var box = document.getElementById('cms-cookies');
  if (!box) return;
  var NAME = 'cms_consent', DAYS = 180;
  var prefs = box.querySelector('.cc__prefs');
  var btn = function (a) { return box.querySelector('[data-cc-action="' + a + '"]'); };
  var current = window.CMS_CONSENT || null;

  function save(a, m) {
    var value = { a: a ? 1 : 0, m: m ? 1 : 0, v: 1, t: Math.floor(Date.now() / 1000) };
    document.cookie = NAME + '=' + encodeURIComponent(JSON.stringify(value)) + ';max-age=' + (DAYS * 86400) +
      ';path=/;SameSite=Lax' + (location.protocol === 'https:' ? ';Secure' : '');
    current = value;
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: a ? 'granted' : 'denied', personalization_storage: a ? 'granted' : 'denied',
        ad_storage: m ? 'granted' : 'denied', ad_user_data: m ? 'granted' : 'denied', ad_personalization: m ? 'granted' : 'denied'
      });
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cookie_consent_update', consent_analytics: !!a, consent_marketing: !!m });
    apply();
    close();
  }

  function apply() {
    var id = box.getAttribute('data-clarity');
    if (!id || !current || !current.a || window.clarity) return;
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', id);
    window.clarity('consent');
  }

  function open(config) {
    box.hidden = false;
    box.querySelectorAll('[data-cc]').forEach(function (i) { i.checked = !!(current && current[i.getAttribute('data-cc')]); });
    toggle(!!config);
  }
  function close() { box.hidden = true; }
  function toggle(show) {
    prefs.hidden = !show;
    btn('config').hidden = show;
    btn('save').hidden = !show;
  }

  box.addEventListener('click', function (e) {
    var action = e.target.getAttribute('data-cc-action');
    if (action === 'accept') save(1, 1);
    if (action === 'reject') save(0, 0);
    if (action === 'config') toggle(true);
    if (action === 'save') save(box.querySelector('[data-cc="a"]').checked, box.querySelector('[data-cc="m"]').checked);
  });
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-cookie-settings], a[href$="#cookies"]');
    if (t) { e.preventDefault(); open(true); }
  });
  window.CMSCookies = { open: open };

  if (current) apply(); else open(false);
})();

})();
/* === src/design/forms.js === */
(function(){
/* Envío AJAX de los formularios del panel (sin JS funcionan igual con POST normal). */
document.querySelectorAll('form[data-lead-form]').forEach(function (form) {
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var btn = form.querySelector('[type=submit]');
    var box = form.querySelector('[role=status]');
    form.querySelectorAll('.is-invalid').forEach(function (el) { el.classList.remove('is-invalid'); });
    form.querySelectorAll('.cms-form__error').forEach(function (el) { el.remove(); });

    var show = function (msg, ok) {
      box.hidden = false;
      box.textContent = msg;
      box.classList.toggle('is-ok', !!ok);
      box.classList.toggle('is-error', !ok);
      box.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    };

    // Validación nativa del navegador antes de enviar
    if (!form.checkValidity()) {
      var first = form.querySelector(':invalid');
      form.querySelectorAll(':invalid').forEach(function (el) {
        var wrap = el.closest('.cms-form__field, .cms-form__check');
        if (wrap) wrap.classList.add('is-invalid');
      });
      show(form.getAttribute('data-error') || 'Revisa los campos marcados.', false);
      if (first) first.focus();
      return;
    }

    btn.disabled = true;
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }
    })
      .then(function (r) { return r.json().catch(function () { return { ok: false }; }); })
      .then(function (res) {
        if (res.ok) {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: 'generate_lead', form_id: form.getAttribute('data-form-id') });
          if (res.redirect) { window.location.href = res.redirect; return; }
          show(form.getAttribute('data-success') || '¡Gracias!', true);
          form.reset();
        } else {
          Object.keys(res.fields || {}).forEach(function (name) {
            var input = form.querySelector('[name="f[' + name + ']"], [name="f[' + name + '][]"], [name="files[' + name + ']"], [name="' + name + '"]');
            var wrap = input && input.closest('.cms-form__field, .cms-form__check');
            if (wrap) {
              wrap.classList.add('is-invalid');
              var err = document.createElement('small');
              err.className = 'cms-form__error';
              err.textContent = res.fields[name];
              wrap.appendChild(err);
            }
          });
          show(res.error || form.getAttribute('data-error') || 'No hemos podido enviar el formulario.', false);
        }
      })
      .catch(function () { show(form.getAttribute('data-conn') || 'Error de conexión. Inténtalo de nuevo.', false); })
      .finally(function () {
        btn.disabled = false;
        // Turnstile: cada token vale para un solo envío
        var ts = form.querySelector('.cf-turnstile');
        if (ts && window.turnstile) { try { window.turnstile.reset(ts); } catch (e) {} }
      });
  });
});

})();
/* === src/design/i18n.js === */
(function(){
/* Modo automático de idiomas: traducción al vuelo con Google (solo si el visitante la pide) */
(function () {
  var sw = document.querySelector('.lang-switch[data-auto]');
  if (!sw) return;
  var def = sw.getAttribute('data-default') || 'es';
  var m = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]*\/([^;]+)/);
  var active = m ? decodeURIComponent(m[1]) : def;

  function setCookie(value) {
    var host = location.hostname.replace(/^www\./, '');
    var exp = value ? '' : ';expires=Thu, 01 Jan 1970 00:00:00 GMT';
    var v = value ? '/' + def + '/' + value : '';
    document.cookie = 'googtrans=' + v + ';path=/' + exp;
    document.cookie = 'googtrans=' + v + ';path=/;domain=.' + host + exp;
  }

  // Marcar el idioma activo en todos los selectores
  document.querySelectorAll('.lang-switch[data-auto]').forEach(function (s) {
    s.querySelectorAll('[data-gt]').forEach(function (b) {
      var on = b.getAttribute('data-gt') === active;
      b.classList.toggle('is-active', on);
      if (on) {
        var cur = s.querySelector('[data-gt-current]');
        if (cur) {
          cur.textContent = b.textContent.trim();
          var flag = b.querySelector('svg'), sflag = s.querySelector('summary svg');
          if (flag && sflag) sflag.replaceWith(flag.cloneNode(true));
        }
      }
    });
  });

  document.addEventListener('click', function (e) {
    var b = e.target.closest('.lang-switch[data-auto] [data-gt]');
    if (!b) return;
    var lang = b.getAttribute('data-gt');
    if (lang === active) return;
    setCookie(lang === def ? '' : lang);
    location.reload();
  });

  // Solo se carga el script de Google si el visitante eligió otro idioma
  if (active !== def) {
    var el = document.createElement('div');
    el.id = 'gt-el';
    document.body.appendChild(el);
    window.cmsGoogleTranslate = function () {
      new google.translate.TranslateElement({ pageLanguage: def, autoDisplay: false }, 'gt-el');
    };
    var s = document.createElement('script');
    s.src = 'https://translate.google.com/translate_a/element.js?cb=cmsGoogleTranslate';
    s.async = true;
    document.head.appendChild(s);
  }
})();

})();
/* === tictac-content/theme/reveal.js === */
(function(){
/* Grabarte · entrada suave de fotos, pasos y cierre al hacer scroll, y «Volver arriba». Sin JS todo se ve.
   Con «reducir movimiento» no se apaga la entrada: la CSS la deja en un fundido (sin desplazar nada) y el deslizamiento se acorta (ver CALM_GLIDE_MS). */
document.documentElement.classList.add('gs-js');
var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var targets = document.querySelectorAll('.b-gs-gallery__fig, .b-gs-steps__step, .b-gs-cta');
if (targets.length) {
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (t) { t.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    targets.forEach(function (t) { io.observe(t); });
  }
}

/* ---------- Deslizamiento: enlaces de ancla y «volver arriba» ----------
   Ritmo propio (ease-in-out, 0,5–1,2 s según la distancia) en vez del salto del navegador. Se cancela en cuanto la persona toca la
   rueda, la pantalla o una tecla de desplazamiento. El destino se vuelve a medir en cada fotograma, así que si una imagen carga y mueve
   la página por el camino, llega igualmente al sitio.
   Con «reducir movimiento» el deslizamiento NO desaparece: se hace más corto y sin aceleraciones (máx. CALM_GLIDE_MS). Un salto instantáneo
   desorienta a mucha gente («me teletransporta») y, al ser un desplazamiento que la persona ha pedido con un clic, no es el movimiento
   que ese ajuste quiere evitar (parallax, zooms, rebotes). Si prefieres respetarlo al pie de la letra, pon CALM_GLIDE_MS = 0 y salta directo. */
var CALM_GLIDE_MS = 650;
var glide = (function () {
  var root = document.documentElement, raf = 0, keep = '';
  var evs = ['wheel', 'touchstart', 'keydown', 'mousedown'];
  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function stop() {
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
    evs.forEach(function (n) { window.removeEventListener(n, stop, true); });
    root.style.scrollBehavior = keep; keep = '';
  }
  function maxY() { return Math.max(0, root.scrollHeight - window.innerHeight); }
  /** to(fn | número): fn devuelve la posición de destino (se recalcula en cada fotograma) */
  function to(target, done) {
    var get = typeof target === 'function' ? target : function () { return target; };
    var from = window.scrollY, dest = Math.min(Math.max(0, get()), maxY()), dist = Math.abs(dest - from);
    stop();
    if ((calm && !CALM_GLIDE_MS) || dist < 3) { root.style.scrollBehavior = 'auto'; window.scrollTo(0, dest); root.style.scrollBehavior = ''; if (done) done(); return; }
    // normal: 300 px ≈ 0,7 s · 1000 px ≈ 1 s · 6000 px ≈ 1,8 s · reducir movimiento: 300 px ≈ 0,4 s · 1000 px ≈ 0,5 s · lo más lejano 0,65 s
    var dur = calm ? Math.min(CALM_GLIDE_MS, 240 + Math.sqrt(dist) * 8) : Math.min(1800, Math.max(520, 380 + Math.sqrt(dist) * 19)), t0 = 0;
    keep = root.style.scrollBehavior; root.style.scrollBehavior = 'auto';
    evs.forEach(function (n) { window.addEventListener(n, stop, { capture: true, passive: true }); });
    function step(now) {
      if (!t0) t0 = now;
      var t = Math.min(1, (now - t0) / dur), end = Math.min(Math.max(0, get()), maxY());
      window.scrollTo(0, from + (end - from) * ease(t));
      if (t < 1) { raf = requestAnimationFrame(step); }
      else { raf = 0; stop(); if (done) done(); }
    }
    raf = requestAnimationFrame(step);
  }
  return { to: to, stop: stop };
})();

/* Posición de un elemento teniendo en cuenta scroll-padding-top del documento y scroll-margin-top del propio elemento (así los capítulos de color
   pueden pedir quedar pegados arriba del todo aunque la cabecera flote) */
function topOf(el) {
  var pad = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  var mar = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  return el.getBoundingClientRect().top + window.scrollY - pad - mar;
}

document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('[data-top]');
  if (!a) return;
  e.preventDefault();
  glide.to(0);
});

document.addEventListener('click', function (e) {
  if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  var a = e.target.closest && e.target.closest('a[href*="#"]');
  if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
  var u; try { u = new URL(a.href, location.href); } catch (x) { return; }
  if (u.origin !== location.origin || u.pathname !== location.pathname || u.search !== location.search) return;
  var id = ''; try { id = decodeURIComponent(u.hash.slice(1)); } catch (x) { id = u.hash.slice(1); }
  var el = id ? document.getElementById(id) : null;
  if (!id) { if (u.hash !== '#') return; }          // href="#" → arriba
  else if (!el) return;
  e.preventDefault();
  if (u.hash !== location.hash && window.history && history.pushState) history.pushState(null, '', u.hash || location.pathname + location.search);
  glide.to(el ? function () { return topOf(el); } : 0, function () {
    if (!el) return;
    if (!/^(A|BUTTON|INPUT|SELECT|TEXTAREA)$/.test(el.tagName) && !el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
    try { el.focus({ preventScroll: true }); } catch (x) { /* sin foco */ }
  });
});

// Menú móvil: se cierra al elegir un enlace (también los de ancla de la misma página) y con Escape
document.addEventListener('click', function (e) {
  if (!(e.target.closest && e.target.closest('.gs-nav a'))) return;
  var t = document.getElementById('nav-toggle'); if (t) t.checked = false;
});
document.addEventListener('keydown', function (e) {
  if (e.key !== 'Escape') return;
  var t = document.getElementById('nav-toggle'); if (t && t.checked) { t.checked = false; var b = document.querySelector('.gs-burger'); if (b) b.focus(); }
});

// Cabecera: se esconde al bajar y reaparece al subir (no tapa titulares mientras se lee). Siempre visible arriba del todo,
// con el menú móvil abierto o mientras algo de la cabecera tiene el foco.
(function () {
  var header = document.querySelector('[data-header]');
  if (!header) return;
  var last = window.scrollY, ticking = false;
  function busy() {
    var t = document.getElementById('nav-toggle');
    return (t && t.checked) || header.contains(document.activeElement);
  }
  function update() {
    ticking = false;
    var y = window.scrollY, dy = y - last;
    if (y < 120 || busy() || dy < -6) { header.classList.remove('is-away'); }
    else if (dy > 6) { header.classList.add('is-away'); }
    if (Math.abs(dy) > 6) last = y;
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  header.addEventListener('focusin', function () { header.classList.remove('is-away'); });
})();

// Aviso de cookies: mide su altura y la web se la descuenta a la primera pantalla (--cc-h), para que el aviso no tape el nombre ni la frase de la portada
(function () {
  var root = document.documentElement;
  function sync() {
    var el = document.getElementById('cms-cookies');
    var h = el && !el.hidden ? Math.round(el.getBoundingClientRect().height) : 0;
    root.style.setProperty('--cc-h', h + 'px');
  }
  var el = document.getElementById('cms-cookies');
  if (el && 'MutationObserver' in window) new MutationObserver(sync).observe(el, { attributes: true, attributeFilter: ['hidden'] });
  window.addEventListener('resize', sync);
  if ('ResizeObserver' in window && el) new ResizeObserver(sync).observe(el);
  sync();
})();

/* ---------- Tienda: entrada de las tarjetas al llegar a la pantalla ----------
   Cada tarjeta se marca (.is-in) cuando asoma; las que entran a la vez lo hacen en cascada (70 ms entre una y otra, máximo 5 escalones).
   Espera a que la foto esté decodificada (máx. 700 ms) para que el telón no suba sobre un hueco. La cuadrícula se «arma» en el HTML
   con un script en línea (class is-armed), antes del primer pintado, para que no parpadee. */
(function () {
  var grids = document.querySelectorAll('[data-reveal-grid]');
  if (!grids.length) return;
  window.gsReveal = true;                    // avisa al script en línea de la cuadrícula: si no llega, a los 4 s se desarma y todo se ve
  function ready(card) {
    var img = card.querySelector('.p-card__img:not(.p-card__img--alt)');
    if (!img || img.complete && img.naturalWidth) return Promise.resolve();
    var wait = img.decode ? img.decode().catch(function () {}) : new Promise(function (r) { img.addEventListener('load', r, { once: true }); });
    return Promise.race([wait, new Promise(function (r) { setTimeout(r, 700); })]);
  }
  function show(cards) {
    cards.sort(function (a, b) { var A = a.getBoundingClientRect(), B = b.getBoundingClientRect(); return (A.top - B.top) || (A.left - B.left); });
    cards.forEach(function (c, i) {
      ready(c).then(function () {
        c.style.setProperty('--d', Math.min(i, 5) * 70 + 'ms');
        c.classList.add('is-in');
        setTimeout(function () { c.style.removeProperty('--d'); }, 2000);     // el retraso es solo de la entrada, no del hover
      });
    });
  }
  grids.forEach(function (g) {
    var cards = Array.prototype.slice.call(g.querySelectorAll('.p-card'));
    if (!('IntersectionObserver' in window)) { cards.forEach(function (c) { c.classList.add('is-in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      var batch = [];
      entries.forEach(function (e) { if (e.isIntersecting) { batch.push(e.target); io.unobserve(e.target); } });
      if (batch.length) show(batch);
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    cards.forEach(function (c) { io.observe(c); });
  });
})();

/* ---------- Tienda: «Ordenar» se cierra al pulsar fuera, con Escape o al elegir ---------- */
(function () {
  var d = document.querySelector('[data-sort]');
  if (!d) return;
  document.addEventListener('click', function (e) { if (d.open && !d.contains(e.target)) d.open = false; });
  d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && d.open) { d.open = false; var s = d.querySelector('summary'); if (s) s.focus(); } });
})();

/* ---------- Cambio de página: la foto de la tarjeta viaja hasta la foto de la ficha (y al revés) ----------
   Solo donde existe la API de transiciones entre documentos (Chrome/Edge/Safari recientes) y sin «reducir movimiento».
   La foto principal de la ficha lleva siempre el nombre «pimg» (gs-motion.css); aquí se le pone el mismo nombre a la tarjeta
   que se acaba de pulsar (al salir del listado) o a la tarjeta de la ficha de la que se viene (al volver). */
(function () {
  if (calm || !('onpageswap' in window) || !('onpagereveal' in window)) return;
  function samePath(a, b) { try { return new URL(a, location.href).pathname.replace(/\/$/, '') === new URL(b, location.href).pathname.replace(/\/$/, ''); } catch (x) { return false; } }
  function cardFor(url) {
    var links = document.querySelectorAll('.p-card .p-card__media[href]');
    for (var i = 0; i < links.length; i++) if (samePath(links[i].getAttribute('href'), url)) return links[i];
    return null;
  }
  function name(el) { if (el) { el.style.viewTransitionName = 'pimg'; el.setAttribute('data-vt', ''); } }
  function clear() { document.querySelectorAll('[data-vt]').forEach(function (n) { n.style.viewTransitionName = ''; n.removeAttribute('data-vt'); }); }
  window.addEventListener('pageswap', function (e) {
    if (!e.viewTransition || !e.activation || !e.activation.entry) return;
    name(cardFor(e.activation.entry.url));                         // listado → ficha
  });
  window.addEventListener('pagereveal', function (e) {
    if (!e.viewTransition) return;
    var from = window.navigation && navigation.activation && navigation.activation.from && navigation.activation.from.url;
    if (from) name(cardFor(from));                                 // ficha → listado
    e.viewTransition.finished.then(clear, clear);
  });
})();

})();
/* === tictac-content/blocks/hero-slider.js === */
(function(){
/* Bloque «Hero con slider»: rotación sin librerías; las imágenes de los slides no visibles se cargan al rotar */
(function () {
  document.querySelectorAll('[data-hero-slider]').forEach(function (root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll('.b-hero-slider__slide'));
    if (slides.length < 2) return;
    var dots = Array.prototype.slice.call(root.querySelectorAll('[data-go]'));
    var i = 0, timer, interval = parseInt(root.getAttribute('data-interval'), 10) * 1000;

    function load(slide) {
      slide.querySelectorAll('[data-src],[data-srcset]').forEach(function (el) {
        if (el.dataset.src) { el.src = el.dataset.src; el.removeAttribute('data-src'); }
        if (el.dataset.srcset) { el.srcset = el.dataset.srcset; el.removeAttribute('data-srcset'); }
      });
    }
    function go(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle('is-active', k === i); s.setAttribute('aria-hidden', k === i ? 'false' : 'true'); });
      dots.forEach(function (d, k) { d.setAttribute('aria-selected', k === i ? 'true' : 'false'); });
      load(slides[i]);
      load(slides[(i + 1) % slides.length]);
    }
    function start() { if (interval > 0) { stop(); timer = setInterval(function () { go(i + 1); }, interval); } }
    function stop() { clearInterval(timer); }

    var prev = root.querySelector('[data-prev]'), next = root.querySelector('[data-next]');
    if (prev) prev.addEventListener('click', function () { go(i - 1); start(); });
    if (next) next.addEventListener('click', function () { go(i + 1); start(); });
    dots.forEach(function (d) { d.addEventListener('click', function () { go(parseInt(d.getAttribute('data-go'), 10)); start(); }); });
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    var sx = 0;
    root.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    root.addEventListener('touchend', function (e) { var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) { go(dx < 0 ? i + 1 : i - 1); start(); } }, { passive: true });

    // Precarga el segundo slide cuando la página ya ha cargado (no compite con el LCP)
    window.addEventListener('load', function () { setTimeout(function () { load(slides[1]); }, 1500); });
    start();
  });
})();

})();
/* === tictac-content/blocks/location.js === */
(function(){
/* Ubicación: el mapa de Google se carga solo cuando el visitante lo pide */
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.b-location__map-load');
  if (!btn) return;
  var box = btn.closest('.b-location__map');
  var src = box && box.getAttribute('data-map');
  if (!src || !/^https:\/\/www\.google\.com\/maps\/embed/.test(src)) return;
  var f = document.createElement('iframe');
  f.src = src; f.loading = 'lazy'; f.referrerPolicy = 'no-referrer-when-downgrade'; f.title = 'Mapa';
  f.setAttribute('allowfullscreen', '');
  box.replaceChildren(f);
});

})();

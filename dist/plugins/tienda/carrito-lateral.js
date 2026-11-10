/* Plugin Tienda · carrito lateral: contador de la cabecera, panel deslizante con el carrito (cantidades, eliminar,
   envío gratis) que se abre al añadir un producto o al pulsar el carrito de la cabecera. Usa /api/cart. Sin dependencias.
   Se abre desde: botones [data-add-to-cart] (shop.js), enlaces [data-cart-link] / [data-open-cart] o window.SHOP_CART.open(). */
(function () {
  'use strict';
  if (window.SHOP_CART) return;
  var API = ((window.SHOP && window.SHOP.base) || '') + '/api/cart';
  var IS_SHOP_PAGE = !!window.SHOP_FLOW;   // carrito / checkout: no se abre el panel
  var state = null, panel = null, busy = false, lastFocus = null, timers = {};

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function num(m) { if (!m) return 0; var n = parseFloat(String(m).replace(/[^\d,.-]/g, '').replace(/\./g, '').replace(',', '.')); return isNaN(n) ? 0 : n; }
  function hasCart() { var n = 0; try { n = parseInt(localStorage.getItem('shop_cart_n'), 10) || 0; } catch (e) {} return n > 0 || /(^|; )shop_cart=/.test(document.cookie); }
  function remember(n) { try { localStorage.setItem('shop_cart_n', String(n || 0)); } catch (e) {} }

  function api(path, body) {
    return fetch(API + path, {
      method: body ? 'POST' : 'GET', credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
      body: body ? JSON.stringify(body) : undefined
    }).then(function (r) { return r.json().then(function (j) { if (!r.ok || j.ok === false) throw new Error(j.error || 'No se ha podido actualizar el carrito.'); return j; }); });
  }

  /* ---------- Contadores de la cabecera ---------- */
  function paint(n) {
    n = n || 0;
    var els = document.querySelectorAll('[data-cart-count], .cart-count');
    for (var i = 0; i < els.length; i++) {
      els[i].textContent = n;
      els[i].hidden = !(n > 0) && !window.SHOP_SHOW_ZERO;
    }
  }
  function load(force) {
    if (!force && !hasCart()) { state = { count: 0, lines: [] }; paint(0); return Promise.resolve(state); }
    return api('').then(function (s) { state = s; paint(s.count); remember(s.count); return s; }).catch(function () { return state; });
  }

  /* ---------- Estilos (solo cuando se abre el panel) ---------- */
  var CSS = '.nxc-ov{position:fixed;inset:0;background:rgba(17,32,21,.45);opacity:0;transition:opacity .25s;z-index:2147483000;backdrop-filter:blur(2px)}'
    + '.nxc{position:fixed;top:0;right:0;height:100%;height:100dvh;width:420px;max-width:100%;background:#fff;z-index:2147483001;display:flex;flex-direction:column;transform:translateX(100%);transition:transform .32s cubic-bezier(.2,.8,.2,1);box-shadow:-12px 0 40px rgba(17,32,21,.18);font-family:var(--font-body,Poppins,sans-serif);color:var(--c-text,#1d2a20);text-align:left;line-height:1.45}'
    + '.nxc-open .nxc{transform:none}.nxc-open .nxc-ov{opacity:1}'
    + '.nxc *{box-sizing:border-box}.nxc p,.nxc div{text-align:left}.nxc .nxc__right{text-align:right}.nxc .nxc__empty,.nxc .nxc__empty p,.nxc .nxc__tax{text-align:center}.nxc .nxc__name{font-size:14px!important;line-height:1.35!important;font-weight:600!important}'
    + '.nxc__head{display:flex;align-items:center;justify-content:space-between;padding:18px 20px;border-bottom:1px solid var(--c-border,#e6ece4)}'
    + '.nxc__title{margin:0;text-transform:none;letter-spacing:0;font-family:var(--font-body,Poppins,sans-serif);line-height:1.3;font-size:18px;font-weight:700;color:var(--c-brand,#2a4e31);display:flex;align-items:center;gap:8px}'
    + '.nxc__title small{font-size:13px;font-weight:500;color:var(--c-muted,#5f6b62)}'
    + '.nxc__x{width:40px;height:40px;min-width:0;padding:0;margin:0;border:0;border-radius:50%;background:var(--c-brand-soft,#f1f5ef);color:var(--c-brand,#2a4e31);font-size:22px;line-height:1;cursor:pointer;display:grid;place-items:center;transition:background .2s}'
    + '.nxc__x:hover{background:var(--c-border,#e2ecdf)}'
    + '.nxc__ok{margin:14px 20px 0;padding:10px 14px;border-radius:10px;background:var(--c-brand-soft,#eef7ea);color:var(--c-brand,#2a4e31);font-size:14px;font-weight:600;display:flex;gap:8px;align-items:center}'
    + '.nxc__ok svg{flex:none}'
    + '.nxc__err{margin:14px 20px 0;padding:10px 14px;border-radius:10px;background:#fdecec;color:#a12a2a;font-size:14px}'
    + '.nxc__ship{margin:14px 20px 0;padding:12px 14px;border-radius:12px;background:var(--c-soft,#f7faf5);border:1px solid var(--c-border,#e3ecdf);font-size:13.5px;color:var(--c-brand,#2a4e31)}'
    + '.nxc__ship b{font-weight:700}'
    + '.nxc__bar{height:6px;border-radius:6px;background:var(--c-border,#e1e9de);margin-top:8px;overflow:hidden}'
    + '.nxc__bar i{display:block;height:100%;background:linear-gradient(90deg,var(--c-brand-2,#5fa955),var(--c-brand,#2a4e31));border-radius:6px;transition:width .4s}'
    + '.nxc__body{flex:1;overflow-y:auto;padding:6px 20px 12px;overscroll-behavior:contain}'
    + '.nxc__line{display:grid;grid-template-columns:72px 1fr auto;gap:12px;padding:16px 0;border-bottom:1px solid var(--c-border,#eef2ec);align-items:start}'
    + '.nxc__line:last-child{border-bottom:0}'
    + '.nxc__img{width:72px;height:72px;border-radius:10px;background:var(--c-soft,#f4f6f3);object-fit:contain;display:block;border:1px solid var(--c-border,#eef2ec)}'
    + '.nxc__name{text-transform:none;text-align:left;font-family:var(--font-body,Poppins,sans-serif);margin:0 0 2px;font-size:14px;font-weight:600;line-height:1.35}'
    + '.nxc__name a{color:var(--c-text,#1d2a20);text-decoration:none}.nxc__name a:hover{color:var(--c-brand,#2a4e31);text-decoration:underline}'
    + '.nxc__meta{margin:0 0 8px!important;font-size:12.5px!important;line-height:1.4!important;color:var(--c-muted,#5f6b62)}'
    + '.nxc__note{margin:0 0 6px;font-size:12px;color:#a35b00}'
    + '.nxc__qty{display:inline-flex;align-items:center;border:1px solid var(--c-border,#d7e0d4);border-radius:999px;overflow:hidden;height:34px}'
    + '.nxc__qty button{width:34px;height:34px;border:0;background:#fff;color:var(--c-brand,#2a4e31);font-size:18px;cursor:pointer;padding:0;line-height:1}'
    + '.nxc__qty button:hover{background:var(--c-brand-soft,#f1f5ef)}.nxc__qty button:disabled{opacity:.35;cursor:default}'
    + '.nxc__qty span{min-width:30px;text-align:center;font-size:14px;font-weight:600}'
    + '.nxc__right{text-align:right;display:flex;flex-direction:column;align-items:flex-end;gap:10px}'
    + '.nxc__total{font-size:15px;font-weight:700;color:var(--c-text,#1d2a20);white-space:nowrap}'
    + '.nxc__rm{border:0;background:none;color:var(--c-muted,#7a857c);font-size:12.5px;cursor:pointer;padding:4px 0;display:inline-flex;gap:4px;align-items:center;font-family:inherit}'
    + '.nxc__rm:hover{color:#a12a2a}'
    + '.nxc__foot{border-top:1px solid var(--c-border,#e6ece4);padding:16px 20px calc(16px + env(safe-area-inset-bottom));background:var(--c-soft,#fbfcfa)}'
    + '.nxc__row{display:flex;justify-content:space-between;font-size:14px;color:var(--c-muted,#5f6b62);margin-bottom:6px}'
    + '.nxc__row--t{font-size:18px;color:var(--c-text,#1d2a20);font-weight:700;margin:4px 0 2px}'
    + '.nxc__tax{font-size:12px!important;line-height:1.4!important;color:var(--c-muted,#7a857c);margin:0 0 14px}'
    + '.nxc__btn{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;min-height:52px;border-radius:12px;font-size:15px;font-weight:700;text-decoration:none;letter-spacing:.02em;transition:background .2s,transform .1s;cursor:pointer;border:0;font-family:inherit}'
    + '.nxc__btn:active{transform:scale(.99)}'
    + '.nxc__btn--p{background:var(--c-brand,#2a4e31);color:#fff!important}.nxc__btn--p:hover{background:var(--c-brand-dark,#1f3b25)}'
    + '.nxc__btn--s{background:transparent;color:var(--c-brand,#2a4e31)!important;min-height:44px;margin-top:6px;font-weight:600}.nxc__btn--s:hover{text-decoration:underline}'
    + '.nxc__empty{text-align:center;padding:48px 10px}'
    + '.nxc__empty svg{color:var(--c-border,#c9d6c5)}.nxc__empty p{margin:14px 0 20px;color:var(--c-muted,#5f6b62)}'
    + '.nxc.is-busy .nxc__body{opacity:.6;pointer-events:none;transition:opacity .2s}'
    + '.productos-masvendidos-notificacion,.bloque-tienda-notificacion{display:none!important}'
    + '@media (max-width:480px){.nxc{width:100%}.nxc__line{grid-template-columns:64px 1fr auto}.nxc__img{width:64px;height:64px}}'
    + '@media (prefers-reduced-motion:reduce){.nxc,.nxc-ov{transition:none}}';
  function css() {
    if (document.getElementById('nxc-css')) return;
    var s = document.createElement('style'); s.id = 'nxc-css'; s.textContent = CSS; document.head.appendChild(s);
  }

  var ICON_CHECK = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
  var ICON_BIN = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/></svg>';
  var ICON_CART = '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.6 12.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.5L22 8H6"/></svg>';
  var ICON_LOCK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';

  function build() {
    css();
    var wrap = document.createElement('div');
    wrap.className = 'nxc-root';
    wrap.innerHTML = '<div class="nxc-ov" data-nxc-close></div>'
      + '<aside class="nxc" role="dialog" aria-modal="true" aria-labelledby="nxc-title" tabindex="-1">'
      + '<div class="nxc__head"><h2 class="nxc__title" id="nxc-title">Tu carrito <small></small></h2><button type="button" class="nxc__x" data-nxc-close aria-label="Cerrar carrito">&times;</button></div>'
      + '<div class="nxc__msg" aria-live="polite"></div><div class="nxc__shipbox"></div>'
      + '<div class="nxc__body"></div><div class="nxc__foot"></div></aside>';
    wrap.hidden = true;
    document.body.appendChild(wrap);
    wrap.addEventListener('click', onClick);
    document.addEventListener('keydown', function (e) {
      if (!wrap.classList.contains('nxc-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'Tab') {   // el foco no sale del panel
        var f = wrap.querySelectorAll('a[href],button:not([disabled])'); if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    return wrap;
  }

  function render(s, msg, isErr) {
    if (!panel) return;
    var lines = (s && s.lines) || [];
    var count = (s && s.count) || 0;
    panel.querySelector('.nxc__title small').textContent = count ? '(' + count + (count === 1 ? ' artículo)' : ' artículos)') : '';
    panel.querySelector('.nxc__msg').innerHTML = msg ? (isErr ? '<div class="nxc__err">' + esc(msg) + '</div>' : '<div class="nxc__ok">' + ICON_CHECK + esc(msg) + '</div>') : '';
    var ship = '';
    if (lines.length && s.free_shipping_left) {
      var left = num(s.free_shipping_left), done = num(s.subtotal) - num(s.discount), pct = Math.max(4, Math.min(100, done / (done + left) * 100));
      ship = '<div class="nxc__ship">Te faltan <b>' + esc(s.free_shipping_left) + '</b> para el <b>envío gratis</b><div class="nxc__bar"><i style="width:' + pct.toFixed(1) + '%"></i></div></div>';
    } else if (lines.length && s.shipping === 'Gratis') {
      ship = '<div class="nxc__ship">🎉 <b>¡Tu pedido tiene envío gratis!</b><div class="nxc__bar"><i style="width:100%"></i></div></div>';
    }
    panel.querySelector('.nxc__shipbox').innerHTML = ship;
    var body = panel.querySelector('.nxc__body'), foot = panel.querySelector('.nxc__foot');
    if (!lines.length) {
      body.innerHTML = '<div class="nxc__empty">' + ICON_CART + '<p>Tu carrito está vacío.</p><a class="nxc__btn nxc__btn--p" href="' + esc(s.shop_url || '/tienda') + '" data-nxc-shop>Ver productos</a></div>';
      foot.innerHTML = ''; foot.hidden = true;
      return;
    }
    foot.hidden = false;
    var h = '';
    lines.forEach(function (l) {
      var max = l.max == null ? 999 : l.max;
      h += '<div class="nxc__line" data-key="' + esc(l.key) + '">'
        + '<a href="' + esc(l.url) + '" tabindex="-1">' + (l.image ? '<img class="nxc__img" src="' + esc(l.image) + '" alt="" width="72" height="72" loading="lazy">' : '<span class="nxc__img"></span>') + '</a>'
        + '<div><p class="nxc__name"><a href="' + esc(l.url) + '">' + esc(l.name) + '</a></p>'
        + '<p class="nxc__meta">' + (l.variation ? esc(l.variation) + ' · ' : '') + esc(l.unit) + '/ud.</p>'
        + (l.notice ? '<p class="nxc__note">' + esc(l.notice) + '</p>' : '')
        + '<div class="nxc__qty" role="group" aria-label="Cantidad"><button type="button" data-nxc-q="-1" aria-label="Quitar una unidad"' + (l.qty <= 1 ? ' disabled' : '') + '>−</button><span aria-live="polite">' + l.qty + '</span><button type="button" data-nxc-q="1" aria-label="Añadir una unidad"' + (l.qty >= max ? ' disabled' : '') + '>+</button></div></div>'
        + '<div class="nxc__right"><span class="nxc__total">' + esc(l.total) + '</span><button type="button" class="nxc__rm" data-nxc-rm aria-label="Eliminar ' + esc(l.name) + '">' + ICON_BIN + 'Eliminar</button></div>'
        + '</div>';
    });
    body.innerHTML = h;
    var f = '<div class="nxc__row"><span>Subtotal</span><span>' + esc(s.subtotal) + '</span></div>';
    if (num(s.discount) > 0) f += '<div class="nxc__row"><span>Descuento' + (s.coupon ? ' (' + esc(s.coupon) + ')' : '') + '</span><span>−' + esc(s.discount) + '</span></div>';
    f += '<div class="nxc__row nxc__row--t"><span>Total</span><span>' + esc(s.total) + '</span></div>'
      + '<p class="nxc__tax">IVA incluido.' + (s.shipping ? ' Envío: ' + esc(s.shipping) + '.' : ' Envío calculado en el siguiente paso.') + '</p>'
      + '<a class="nxc__btn nxc__btn--p" href="' + esc(s.checkout_url || '/finalizar-compra/') + '">' + ICON_LOCK + 'Finalizar compra</a>'
      + '<a class="nxc__btn nxc__btn--s" href="' + esc(s.cart_url || '/carrito/') + '">Ver carrito completo</a>';
    foot.innerHTML = f;
  }

  function setBusy(b) { busy = b; if (panel) panel.querySelector('.nxc').classList.toggle('is-busy', b); }

  function change(path, body) {
    setBusy(true);
    return api(path, body).then(function (s) { state = s; paint(s.count); remember(s.count); render(s); notify(); })
      .catch(function (err) { render(state, err.message, true); })
      .then(function () { setBusy(false); });
  }
  function notify() { try { document.dispatchEvent(new CustomEvent('shop:cart', { detail: state })); } catch (e) {} }

  function onClick(e) {
    var t = e.target;
    var shopUrl = (state && state.shop_url) || '';
    if (t.closest('[data-nxc-close]') || t.closest('[data-nxc-shop]') && shopUrl && location.pathname.indexOf(shopUrl) === 0) { e.preventDefault(); close(); return; }
    var line = t.closest('.nxc__line'); if (!line || busy) return;
    var key = line.getAttribute('data-key');
    var l = null; (state.lines || []).forEach(function (x) { if (String(x.key) === key) l = x; });
    if (!l) return;
    var q = t.closest('[data-nxc-q]');
    if (q) {
      var qty = Math.max(1, l.qty + parseInt(q.getAttribute('data-nxc-q'), 10));
      l.qty = qty; line.querySelector('.nxc__qty span').textContent = qty;   // respuesta inmediata
      clearTimeout(timers[key]);
      timers[key] = setTimeout(function () { change('/update', { key: key, qty: qty }); }, 350);
      return;
    }
    if (t.closest('[data-nxc-rm]')) { line.style.opacity = '.4'; change('/remove', { key: key }); }
  }

  function open(msg, isErr) {
    if (IS_SHOP_PAGE) return;
    if (!panel) panel = build();
    lastFocus = document.activeElement;
    panel.hidden = false;
    render(state || { lines: [] }, msg, isErr);
    requestAnimationFrame(function () { requestAnimationFrame(function () { panel.classList.add('nxc-open'); panel.querySelector('.nxc').focus({ preventScroll: true }); }); });
    document.documentElement.style.overflow = 'hidden';
    load(true).then(function (s) { if (s) render(s, msg, isErr); });
  }
  function close() {
    if (!panel) return;
    panel.classList.remove('nxc-open');
    document.documentElement.style.overflow = '';
    setTimeout(function () { panel.hidden = true; }, 330);
    if (lastFocus && lastFocus.focus) try { lastFocus.focus({ preventScroll: true }); } catch (e) {}
  }

  /* ---------- Disparadores ---------- */
  // 1) Producto añadido (shop.js llama a SHOP_CART.added con el estado nuevo del carrito)
  function added(s, msg) {
    if (s) { state = s; paint(s.count); remember(s.count); }
    open(msg || 'Producto añadido al carrito.');
  }
  // 2) ?carrito=1 en la URL (vuelta de un formulario sin JS): abre el panel
  function fromUrl() {
    var u = new URL(location.href), p = u.searchParams;
    if (!p.has('carrito')) return;
    p.delete('carrito');
    history.replaceState(history.state, '', u.pathname + (p.toString() ? '?' + p.toString() : '') + u.hash);
    open('Producto añadido al carrito.');
  }

  // 3) Icono del carrito de la cabecera / lateral → panel (en móvil y escritorio)
  document.addEventListener('click', function (e) {
    if (IS_SHOP_PAGE || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey) return;
    var a = e.target.closest && e.target.closest('a[data-cart-link], a[data-open-cart], [data-open-cart]');
    if (!a) return;
    e.preventDefault();
    open();
  });

  window.SHOP_CART = { open: open, close: close, refresh: load, paint: paint, added: added };

  var inited = false;
  function init() {
    if (inited) return; inited = true;
    fromUrl();
    load();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

/**
 * TIENDA · JS del front (plugin Tienda: se carga en todas las páginas públicas).
 *  - Contador del carrito en la cabecera (GET /api/cart): las páginas se sirven cacheadas.
 *  - Botones [data-add-to-cart] → POST /api/cart/add sin recargar, con aviso.
 *  - Selectores de variación en la ficha ([data-variations]).
 *  - Cantidad +/- ([data-qty]).
 *  - Página del carrito: cambios de cantidad y eliminación por AJAX ([data-cart-page]).
 *  - Checkout: dirección distinta, recálculo de envío al cambiar país/CP/método.
 */
(function () {
  'use strict';
  var BASE = (window.SHOP && window.SHOP.base) || '';
  var API = BASE + '/api/cart';

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function api(path, body) {
    return fetch(API + path, {
      method: body ? 'POST' : 'GET',
      headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json' },
      credentials: 'same-origin',
      body: body ? JSON.stringify(body) : undefined
    }).then(function (r) { return r.json().then(function (j) { if (!r.ok || j.ok === false) { throw new Error(j.error || 'Error'); } return j; }); });
  }

  /* ---------- Contador ---------- */
  function paintCount(n) {
    $$('[data-cart-count]').forEach(function (el) {
      el.textContent = n;
      el.hidden = !(n > 0) && !window.SHOP_SHOW_ZERO;   // el tema puede pedir mostrar el 0
    });
  }
  function refreshCount() {
    if (!$('[data-cart-count]')) return;
    if (!/(^|; )shop_cart=/.test(document.cookie) && !window.SHOP_FORCE_COUNT) { paintCount(0); return; }
    api('').then(function (s) { paintCount(s.count || 0); }).catch(function () {});
  }

  /* ---------- Toast ---------- */
  var toastTimer;
  function toast(msg, isError, linkLabel, linkUrl) {
    var t = $('.shop-toast');
    if (!t) { t = document.createElement('div'); t.className = 'shop-toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.className = 'shop-toast' + (isError ? ' shop-toast--error' : '');
    t.innerHTML = '';
    t.appendChild(document.createTextNode(msg));
    if (linkUrl) { var a = document.createElement('a'); a.href = linkUrl; a.textContent = linkLabel; t.appendChild(a); }
    requestAnimationFrame(function () { t.classList.add('is-visible'); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('is-visible'); }, 3500);
  }

  /* ---------- Añadir al carrito ---------- */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-add-to-cart]');
    if (!btn) return;
    e.preventDefault();
    if (btn.disabled) return;
    var form = btn.closest('form');
    var productId = btn.getAttribute('data-add-to-cart');
    var variationId = null, qty = 1;
    if (form) {
      var v = form.querySelector('[name="variation_id"]'); if (v) variationId = v.value;
      var q = form.querySelector('[name="qty"]'); if (q) qty = parseInt(q.value, 10) || 1;
      if (form.querySelector('[data-variations]') && !variationId) { toast('Elige una opción del producto.', true); return; }
    }
    var body = { product_id: productId, variation_id: variationId, qty: qty };
    // Datos extra de plugins: campos name="extra[plugin][clave]" del formulario → body.extra.plugin.clave
    if (form) {
      $$('[name^="extra["]', form).forEach(function (f) {
        if ((f.type === 'checkbox' || f.type === 'radio') && !f.checked) return;
        var m = f.name.match(/^extra\[([^\]]+)\]\[([^\]]+)\]$/);
        if (!m) return;
        body.extra = body.extra || {}; body.extra[m[1]] = body.extra[m[1]] || {};
        body.extra[m[1]][m[2]] = f.value;
      });
    }
    var label = btn.innerHTML;
    btn.disabled = true;
    btn.textContent = '…';
    // Un plugin puede completar o cambiar el cuerpo (también de forma asíncrona, devolviendo una promesa)
    var pre = typeof window.SHOP_BEFORE_ADD === 'function' ? window.SHOP_BEFORE_ADD(body, form, btn) : body;
    Promise.resolve(pre).then(function (b) { return api('/add', b || body); }).then(function (s) {
      paintCount(s.count);
      // Con el carrito lateral (carrito-lateral.js) se abre el panel; si no, aviso flotante
      if (window.SHOP_CART && !window.SHOP_FLOW) window.SHOP_CART.added(s, s.message);
      else toast(s.message, false, (window.SHOP && window.SHOP.t && window.SHOP.t.viewCart) || 'Ver carrito', s.cart_url);
      btn.textContent = (window.SHOP && window.SHOP.t && window.SHOP.t.added) || 'Añadido ✓';
      setTimeout(function () { btn.innerHTML = label; btn.disabled = false; }, 1500);
      try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'add_to_cart', product_id: productId, quantity: qty }); } catch (err) {}
    }).catch(function (err) {
      toast(err.message, true);
      btn.innerHTML = label; btn.disabled = false;
    });
  });

  /* ---------- Cantidad +/- ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-qty]');
    if (!b) return;
    var wrap = b.closest('.qty');
    var input = wrap && wrap.querySelector('input');
    if (!input) return;
    var max = parseInt(input.max, 10) || 999, min = parseInt(input.min, 10) || 1;
    var val = (parseInt(input.value, 10) || min) + (b.getAttribute('data-qty') === '+' ? 1 : -1);
    input.value = Math.max(min, Math.min(max, val));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  });

  /* ---------- Variaciones (ficha) ---------- */
  $$('[data-variations]').forEach(function (box) {
    var data;
    try { data = JSON.parse(box.getAttribute('data-variations')); } catch (err) { return; }
    var form = box.closest('form');
    var hidden = form.querySelector('[name="variation_id"]');
    var selects = $$('select', box);
    var priceEl = $('[data-product-price]');
    var stockEl = $('[data-product-stock]');
    var btn = form.querySelector('[data-add-to-cart]');
    var qtyInput = form.querySelector('[name="qty"]');
    var mainImg = $('[data-main-image]');
    function match() {
      var chosen = {};
      var complete = true;
      selects.forEach(function (s) { if (!s.value) complete = false; chosen[s.name.replace(/^attr\[(.*)\]$/, '$1')] = s.value; });
      var found = null;
      if (complete) {
        data.forEach(function (v) {
          var ok = true;
          Object.keys(chosen).forEach(function (k) { if (String(v.attributes[k]) !== String(chosen[k])) ok = false; });
          if (ok) found = v;
        });
      }
      hidden.value = found ? found.id : '';
      if (priceEl && found) priceEl.innerHTML = found.price_html;
      if (stockEl) {
        if (!found) { stockEl.textContent = ''; }
        else { stockEl.textContent = found.stock_text; stockEl.className = 'product__stock ' + found.stock_class; }
      }
      if (btn) btn.disabled = !found || !found.in_stock;
      if (qtyInput && found && found.max) qtyInput.max = found.max; else if (qtyInput) qtyInput.removeAttribute('max');
      if (mainImg && found && found.image) mainImg.src = found.image;
    }
    selects.forEach(function (s) { s.addEventListener('change', match); });
    match();
  });

  /* ---------- Miniaturas (ficha) ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('.product__thumbs button');
    if (!b) return;
    var main = $('[data-main-image]');
    if (main) { main.src = b.getAttribute('data-src'); main.srcset = ''; }
    $$('.product__thumbs button').forEach(function (x) { x.classList.toggle('is-active', x === b); });
  });

  /* ---------- Página del carrito ---------- */
  var cartPage = $('[data-cart-page]');
  if (cartPage) {
    var pending;
    function reload() { window.location.reload(); }
    cartPage.addEventListener('change', function (e) {
      var input = e.target.closest('.cart-line input[name="qty"]');
      if (!input) return;
      var key = input.closest('.cart-line').getAttribute('data-key');
      clearTimeout(pending);
      pending = setTimeout(function () {
        api('/update', { key: key, qty: parseInt(input.value, 10) || 0 }).then(reload).catch(function (err) { toast(err.message, true); });
      }, 250);
    });
    cartPage.addEventListener('click', function (e) {
      var rm = e.target.closest('[data-remove]');
      if (!rm) return;
      e.preventDefault();
      api('/remove', { key: rm.getAttribute('data-remove') }).then(reload).catch(function (err) { toast(err.message, true); });
    });
    var couponForm = $('[data-coupon-form]');
    if (couponForm) {
      couponForm.addEventListener('submit', function (e) {
        e.preventDefault();
        api('/coupon', { code: couponForm.querySelector('input[name="code"]').value }).then(reload).catch(function (err) { toast(err.message, true); });
      });
    }
  }

  /* ---------- Checkout ---------- */
  var co = $('[data-checkout]');
  if (co) {
    var shipDiff = $('#ship_to_different');
    var shipBox = $('[data-shipping-address]');
    function toggleShip() { if (shipBox) shipBox.hidden = !(shipDiff && shipDiff.checked); }
    if (shipDiff) { shipDiff.addEventListener('change', toggleShip); toggleShip(); }

    var recalcTimer;
    function recalc() {
      var useShip = shipDiff && shipDiff.checked;
      var country = (useShip ? $('[name="shipping_country"]') : $('[name="billing_country"]'));
      var pc = (useShip ? $('[name="shipping_postcode"]') : $('[name="billing_postcode"]'));
      var method = $('[name="shipping_method"]:checked');
      var payment = $('[name="payment_method"]:checked');
      var body = { country: country ? country.value : '', postcode: pc ? pc.value : '' };
      if (method) body.method_id = method.value;
      api('/shipping', body).then(function () {
        // Repintar el bloque de envío y totales con la respuesta del servidor (fragmento HTML)
        var url = BASE + '/finalizar-compra/resumen' + (payment ? '?pago=' + encodeURIComponent(payment.value) : '');
        return fetch(url, { credentials: 'same-origin', headers: { 'X-Requested-With': 'XMLHttpRequest' } }).then(function (r) { return r.text(); });
      }).then(function (html) {
        var tmp = document.createElement('div'); tmp.innerHTML = html;
        var newShip = tmp.querySelector('[data-shipping-options]');
        var oldShip = $('[data-shipping-options]');
        if (newShip && oldShip) oldShip.innerHTML = newShip.innerHTML;
        var newSum = tmp.querySelector('[data-totals]');
        var oldSum = $('[data-totals]');
        if (newSum && oldSum) oldSum.innerHTML = newSum.innerHTML;
      }).catch(function () {});
    }
    co.addEventListener('change', function (e) {
      if (e.target.matches('[name$="_country"],[name$="_postcode"],[name="shipping_method"],[name="payment_method"],#ship_to_different')) {
        clearTimeout(recalcTimer);
        recalcTimer = setTimeout(recalc, 200);
      }
    });
    co.addEventListener('submit', function () {
      var b = co.querySelector('button[type="submit"]');
      if (b) { b.disabled = true; b.textContent = 'Procesando…'; }
    });
  }

  /* ---------- Redirección automática a la pasarela ---------- */
  var pay = $('form[data-autosubmit]');
  if (pay) { setTimeout(function () { pay.submit(); }, 400); }

  refreshCount();
})();

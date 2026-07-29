(function () {
  if (document.body && document.body.__cursorDotInit) return;

  function init() {
    if (document.body.__cursorDotInit) return;
    document.body.__cursorDotInit = true;
    var dot = document.createElement('div');
    dot.setAttribute('aria-hidden', 'true');
    dot.style.cssText = [
      'position:fixed', 'top:0', 'left:0', 'width:16px', 'height:16px',
      'border-radius:50%', 'background:#000', 'pointer-events:none',
      'z-index:2147483647', 'transform:translate(-999px,-999px)',
      'will-change:transform', 'mix-blend-mode:normal'
    ].join(';');
    document.body.appendChild(dot);

    var tx = -999, ty = -999, cx = -999, cy = -999, started = false;

    window.addEventListener('mousemove', function (e) {
      tx = e.clientX;
      ty = e.clientY;
      if (!started) { cx = tx; cy = ty; started = true; }
      var el = e.target.closest && e.target.closest('[draggable="true"]');
      dot.style.background = el ? '#fff' : '#000';
      var pillEl = e.target.closest && e.target.closest('[data-pill-cursor]');
      dot.style.display = pillEl ? 'none' : '';
    }, { passive: true });

    window.addEventListener('mouseleave', function () {
      dot.style.opacity = '0';
    });
    window.addEventListener('mouseenter', function () {
      dot.style.opacity = '1';
    });
    document.addEventListener('dragstart', function () {
      dot.style.opacity = '0';
    });
    document.addEventListener('dragend', function () {
      dot.style.opacity = '1';
    });

    function frame() {
      cx += (tx - cx) * 0.7;
      cy += (ty - cy) * 0.7;
      dot.style.transform = 'translate(' + (cx - 8) + 'px,' + (cy - 8) + 'px)';
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/**
 * Fluid Platinum UI — Modal Accessibility Addon
 * Optional JS for focus trap, Escape key, and scroll lock.
 *
 * Usage:
 *   <script src="fp-ui-modal.js"></script>
 *
 * Automatically enhances all .fp-ui-modal elements. No initialization needed.
 * Works alongside the CSS-only :target mechanism.
 */
(function () {
  'use strict';

  var FOCUSABLE = 'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function getOpenModal() {
    var hash = location.hash.slice(1);
    if (!hash || hash === '!') return null;
    var el = document.getElementById(hash);
    return el && el.classList.contains('fp-ui-modal') ? el : null;
  }

  function getFocusable(modal) {
    return Array.prototype.filter.call(
      modal.querySelectorAll(FOCUSABLE),
      function (el) { return !el.disabled && el.offsetParent !== null; }
    );
  }

  function onKeyDown(e) {
    var modal = getOpenModal();
    if (!modal) return;

    // Escape key closes the modal
    if (e.key === 'Escape') {
      e.preventDefault();
      location.hash = '#!';
      return;
    }

    // Tab key traps focus within the modal
    if (e.key === 'Tab') {
      var focusable = getFocusable(modal);
      if (focusable.length === 0) return;

      var first = focusable[0];
      var last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  var previouslyFocused = null;

  function onHashChange() {
    var modal = getOpenModal();

    if (modal) {
      // Modal opened — lock scroll, move focus
      previouslyFocused = document.activeElement;
      document.body.style.overflow = 'hidden';

      var focusable = getFocusable(modal);
      if (focusable.length > 0) {
        focusable[0].focus();
      }
    } else {
      // Modal closed — restore scroll, return focus
      document.body.style.overflow = '';

      if (previouslyFocused && previouslyFocused.focus) {
        previouslyFocused.focus();
        previouslyFocused = null;
      }
    }
  }

  document.addEventListener('keydown', onKeyDown);
  window.addEventListener('hashchange', onHashChange);

  // Handle page load with modal already open
  if (getOpenModal()) {
    onHashChange();
  }
})();

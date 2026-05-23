(function () {
  'use strict';

  const header = document.getElementById('header');
  const scrollBar = document.querySelector('.scroll-bar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const backTop = document.getElementById('back-top');

  function onScroll() {
    if (header) {
      header.classList.toggle('header--scrolled', window.scrollY > 50);
    }
    if (scrollBar) {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        scrollBar.style.transform = 'scaleX(' + (winScroll / height) + ')';
      }
    }
    if (backTop) {
      backTop.classList.toggle('is-visible', window.scrollY > 500);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('is-active');
      mobileMenu.classList.toggle('is-open');
      document.body.style.overflow = mobileMenu.classList.contains('is-open') ? 'hidden' : '';
    });
    document.querySelectorAll('.mobile-menu__link').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('is-active');
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  if (backTop) {
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.querySelectorAll('.service-card').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty('--x', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--y', (e.clientY - rect.top) + 'px');
    });
    card.addEventListener('click', function () {
      card.classList.toggle('active');
    });
  });

  function handleReveal(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }

  var observer = new IntersectionObserver(handleReveal, { threshold: 0.15 });
  document.querySelectorAll('.reveal, .reveal-stagger, .blueprint-canvas').forEach(function (el) {
    observer.observe(el);
  });

  var statsSection = document.getElementById('stats');
  if (statsSection) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          counterObserver.disconnect();
          entry.target.querySelectorAll('.stat-value').forEach(function (el) {
            var target = parseInt(el.getAttribute('data-target')) || 0;
            var suffix = el.getAttribute('data-suffix') || '';
            var current = 0;
            var step = Math.ceil(target / 60);
            var timer = setInterval(function () {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.innerHTML = current + '<sup>' + suffix + '</sup>';
            }, 25);
          });
        }
      });
    }, { threshold: 0.3 });
    counterObserver.observe(statsSection);
  }

  document.querySelectorAll('.service-card[data-reveal]').forEach(function (card) {
    card.addEventListener('click', function () {
      card.classList.toggle('active');
    });
  });
})();

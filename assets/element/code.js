  // Service card toggle functionality
  function toggleService(card) {
    const wasExpanded = card.classList.contains('expanded');
    
    // Close all cards
    document.querySelectorAll('.service-card').forEach(c => {
      c.classList.remove('expanded');
      const btn = c.querySelector('.expand-btn');
      if (btn) {
        btn.innerHTML = 'Learn More <i class="bi bi-arrow-right"></i>';
      }
    });
    
    // If this card wasn't expanded, expand it
    if (!wasExpanded) {
      card.classList.add('expanded');
      const btn = card.querySelector('.expand-btn');
      if (btn) {
        btn.innerHTML = 'Show Less <i class="bi bi-arrow-up"></i>';
      }
    }
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', function() {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });



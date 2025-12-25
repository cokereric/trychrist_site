(function(){
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const yearEl = document.getElementById('year');

  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  function setExpanded(val){
    toggle.setAttribute('aria-expanded', val ? 'true' : 'false');
  }

  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      setExpanded(open);
    });

    // close on link click (mobile)
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if(nav.classList.contains('is-open')){
          nav.classList.remove('is-open');
          setExpanded(false);
        }
      });
    });
  }

  // Contact form -> mailto fallback
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '';
      const email = data.get('email') || '';
      const subject = data.get('subject') || '';
      const message = data.get('message') || '';
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        message
      ].join('\n');

      const mailto = `mailto:Info@TryChrist.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    });
  }
})();

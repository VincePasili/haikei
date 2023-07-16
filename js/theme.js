document.getElementById('theme-toggle').addEventListener('click', function() {
    var body = document.body;
    
    // Toggle the theme
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      localStorage.theme = 'dark';
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      localStorage.theme = 'light';
    }
  
  });
  
  // On page load, check the localStorage for the theme preference
  if (localStorage.theme === 'dark') {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }
  
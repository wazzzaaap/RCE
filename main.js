// Add class to detect browser for potential fixes
const addBrowserClass = () => {
    const html = document.documentElement;
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    const isFirefox = typeof InstallTrigger !== 'undefined';
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  
    if (isChrome) html.classList.add('browser-chrome');
    if (isFirefox) html.classList.add('browser-firefox');
    if (isSafari) html.classList.add('browser-safari');
  };
  
  // Navigation dropdown functionality
  const initNavigation = () => {
    const navigationItems = document.querySelectorAll('.navigation__item');
    const dropdowns = document.querySelectorAll('.dropdown');
    const techNavItem = document.querySelector('.navigation__item--gifts');
    const eventsNavItem = document.querySelector('.navigation__item--events');
    const techDropdown = document.getElementById('techDropdown');
    const giftDropdown = document.getElementById('giftDropdown');
    const eventsDropdown = document.getElementById('eventsDropdown');
  
    // Toggle dropdowns on navigation items click
    navigationItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const category = item.getAttribute('data-category');
        
        // Close all dropdowns first
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('dropdown--active');
        });
        
        // Open specific dropdown based on category
        if (category === 'gifts') {
          giftDropdown.classList.add('dropdown--active');
        } else if (category === 'events') {
          eventsDropdown.classList.add('dropdown--active');
        }
      });
    });
  
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navigation__item') && !e.target.closest('.dropdown')) {
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('dropdown--active');
        });
      }
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.header__menu-toggle');
    const navigation = document.querySelector('.navigation');
    
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        navigation.classList.toggle('navigation--open');
      });
    }
  };
  
  // Initialize
  const init = () => {
    addBrowserClass();
    initNavigation();
  };
  
  // Run initialization when DOM is fully loaded
  document.addEventListener('DOMContentLoaded', init);
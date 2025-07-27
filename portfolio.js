lucide.createIcons();
const menuToggle = document.querySelector('.menu-toggle');
const menuIcon = document.getElementById('menu-icon');
const mainNav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    const isMenuOpen = mainNav.classList.contains('active');
    menuIcon.setAttribute('data-lucide', isMenuOpen ? 'x' : 'menu');
    lucide.createIcons();
});
const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach(item => {
    const header = item.querySelector('.project-header');
    const chevron = header.querySelector('.chevron');
    header.addEventListener('click', () => {
        projectItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.chevron').setAttribute('data-lucide', 'chevron-down');
            }
        });
        item.classList.toggle('active');
        const isActive = item.classList.contains('active');
        chevron.setAttribute('data-lucide', isActive ? 'chevron-up' : 'chevron-down');
        lucide.createIcons();
    });
});
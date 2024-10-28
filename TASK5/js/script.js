
//Funcionabilidad Side bar
const toggleSidebarButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const closeSidebarButton = document.getElementById('closeSidebar');

toggleSidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
});

closeSidebarButton.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
});


const toggleBtn = document.querySelector('.toggle_menu');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener("click", function() {

    sidebar.classList.toggle("show-sidebar");
});

function menuToggle(x) {
    x.classList.toggle("change");
}
const showNavigationBtn = document.querySelector("#open-menu__btn");
const closeNavigationBtn = document.querySelector("#close-menu__btn");
const navigationMenu = document.querySelector("#main-navigation");

showNavigationBtn.addEventListener("click", (e) =>
    handleToggleNavigation(e, true)
);

closeNavigationBtn.addEventListener("click", (e) =>
    handleToggleNavigation(e, false)
);

function handleToggleNavigation(_, show) {
    navigationMenu.classList.toggle("main-navigation--active");
}

const menuBurgerOpenerContainer = document.getElementById("menuBurgerOpenerContainer")
const menuBurgerCloserContainer = document.getElementById("menuBurgerCloserContainer")
const burgerMenu = document.getElementById("burgerMenu")


menuBurgerOpenerContainer.addEventListener("click", () => {
    burgerMenu.style.display = "block"
    menuBurgerOpenerContainer.style.display = "none"
    menuBurgerCloserContainer.style.display = "block"
})

menuBurgerCloserContainer.addEventListener("click", () => {
    burgerMenu.style.display = "none"
    menuBurgerOpenerContainer.style.display = "block"
    menuBurgerCloserContainer.style.display = "none"
})
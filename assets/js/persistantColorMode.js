const darkModeBtn = document.getElementById("darkModeBtn")
const lightModeBtn = document.getElementById("lightModeBtn")
const body = document.body

if (sessionStorage.getItem("colormode") == "lightmode") {
    lightMode()
} else {
    darkMode()
}

lightModeBtn.addEventListener("click", () => {
    lightMode()
})

darkModeBtn.addEventListener("click", () => {
    darkMode()
})

function darkMode() {
    if (darkModeBtn.classList.contains("active")) {
    
        darkModeBtn.classList.add("noActive")
        darkModeBtn.classList.remove("active")

        lightModeBtn.classList.add("active")
        lightModeBtn.classList.remove("noActive")

        body.classList.remove("light")
        body.classList.add("dark")

        sessionStorage.setItem("colormode", "darkmode")
    }
}

function lightMode() {
    if (lightModeBtn.classList.contains("active")) {
    
        lightModeBtn.classList.add("noActive")
        lightModeBtn.classList.remove("active")

        darkModeBtn.classList.add("active")
        darkModeBtn.classList.remove("noActive")

        body.classList.remove("dark")
        body.classList.add("light")

        sessionStorage.setItem("colormode", "lightmode")
    }
}
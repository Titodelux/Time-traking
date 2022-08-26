
const button = document.querySelectorAll(".button")

const dailyData = document.querySelector(".dailyData")
const weeklyData = document.querySelector(".weeklyData")
const monthlyData = document.querySelector(".monthlyData")



function translateDay() {
    button[0].classList.add("activate")   
    button[1].classList.remove("activate")   
    button[2].classList.remove("activate")   

    dailyData.style.transform = "translateX(0%)"
    weeklyData.style.transform = "translateX(100%)"
    monthlyData.style.transform = "translateX(200%)"
    
}
function translateWeek() {
    button[1].classList.add("activate")   
    button[0].classList.remove("activate")   
    button[2].classList.remove("activate")   

    dailyData.style.transform = "translateX(-100%)"
    weeklyData.style.transform = "translateX(0%)"
    monthlyData.style.transform = "translateX(100%)"
    
}
function translateMonth() {
    button[2].classList.add("activate")   
    button[0].classList.remove("activate")   
    button[1].classList.remove("activate")   

    dailyData.style.transform = "translateX(-200%)"
    weeklyData.style.transform = "translateX(-100%)"
    monthlyData.style.transform = "translateX(0%)"

}

function changeColor(){

}

dailyButton.addEventListener("active", translateDay())
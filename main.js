// const dailyButton = document.querySelector("#dailyButton")
// const weeklyButton = document.querySelector("#weeklyButton")
// const monthlyButton = document.querySelector("#monthlyButton")

// const button = document.querySelectorAll(".button")
const dailyData = document.querySelector(".dailyData")
const weeklyData = document.querySelector(".weeklyData")
const monthlyData = document.querySelector(".monthlyData")


function translateDay() {

    // if (!(button.classList.contains("activate"))){
    //     console.log(button.classList)
    // }
    
    dailyData.style.transform = "translateX(0%)"
    weeklyData.style.transform = "translateX(100%)"
    monthlyData.style.transform = "translateX(200%)"
    
}
function translateWeek() {
    // data.style.backgroundColor = "red"
    dailyData.style.transform = "translateX(-100%)"
    weeklyData.style.transform = "translateX(0%)"
    monthlyData.style.transform = "translateX(100%)"

    
}
function translateMonth() {
    // data.style.backgroundColor = "red"
    dailyData.style.transform = "translateX(-200%)"
    weeklyData.style.transform = "translateX(-100%)"
    monthlyData.style.transform = "translateX(0%)"

}


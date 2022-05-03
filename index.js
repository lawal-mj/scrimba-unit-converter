
let main = document.getElementById("main-value")

// mass volume length
let lengthLine = document.getElementById("length")
let volumeLine = document.getElementById("volume")
let massLine = document.getElementById("mass")


// formatiing them
function changeValue() {
    lengthLine.textContent = `${main.value} meters = ${main.value * 3.28} feet | ${main.value} feet = ${main.value * 0.30} meters`
    volumeLine.textContent = `${main.value} liters = ${main.value * 0.26} gallons | ${main.value} gallons = ${main.value * 3.78} liters`
    massLine.textContent = `${main.value} kilos = ${main.value * 2.20} pounds | ${main.value} pounds = ${main.value * 0.45} kilos`

}




let main = document.getElementById("main-number");

// mass volume length
let lengthLine = document.getElementById("length")
let volumeLine = document.getElementById("volume")
let massLine = document.getElementById("mass")


// formatiing them
lengthLine.textContent = `${main.textContent} meters = ${main.textContent * 3.28} feet | ${main.textContent} feet = ${main.textContent * 0.30} meters`
volumeLine.textContent = `${main.textContent} liters = ${main.textContent * 0.26} gallons | 20 gallons = ${main.textContent * 3.78} liters`
massLine.textContent = `${main.textContent} kilos = ${main.textContent * 2.20} pounds | ${main.textContent} pounds = ${main.textContent * 0.45} kilos`

// METERS FEET 
    // 1 meter = 3.28 feet.
    // 1 ft = 0.3048 meter

// LITERS GALON 
    // 1 l = 0.264172 gal
    // 1 gal = 3.785412 l

// KILOGRAMS POUNDS
    // 1 kg = 2.204623 lb
    // 1 lb = 0.453592 kg
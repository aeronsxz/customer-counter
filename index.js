// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let delBtn = document.getElementById("clear-btn")
let displayDateEl = document.getElementById("displayDate-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    showCount = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += showCount
    // NB: Make sure to not delete the existing content of the 
    countEl.textContent = 0
    count = 0
    // show the date and time in every save
    displayDateEl.textContent = Date()
    console.log(showCount)
}

function delClear() {
    // clear the whole data
    countEl.textContent = 0
    count = 0
    saveEl.textContent = "Previous Customer Entered: "
    displayDateEl.textContent = "DATE AND TIME"
    console.log(showCount)
}

// Google:
// innerText alternative mdn
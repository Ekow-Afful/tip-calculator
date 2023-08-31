const billInput = document.getElementById("billTotalInput")
const tip = document.getElementById("tippercent")
const numberOfPeopleSpan = document.getElementById("numberofpeople")
const totalPerPersonDiv = document.getElementById("perpersontotal")

// for app to work we need 3 functions
// 1. calculate bill function
// 2.increase number of people
//3. decrease number of people

let numberOfPeople = Number(numberOfPeopleSpan.innerText)
// calculate bill function
const calculateBill = () => {
    const bill = Number(billInput.value) 
    const tipPercent = Number(tip.value) / 100
    const tipAmount = bill * tipPercent
    const total = bill + tipAmount
    const paymentPerPerson = total / numberOfPeople
    totalPerPersonDiv.innerText = paymentPerPerson
}

// increase number of people function
const increasePeople = () => {
    numberOfPeople += 1
    numberOfPeopleSpan.innerText = numberOfPeople
    calculateBill()
}

// decrease number of people function
const decreasePeople = () => {
    if (numberOfPeople <= 1) {
        alert("you cannot share among people less than 1")
        return
    }
    numberOfPeople -= 1
    numberOfPeopleSpan.innerText = numberOfPeople
    calculateBill()
}
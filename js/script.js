// GLOBAL VARIABLES
let futureValue
let investment
let rate
let years

do {
  // COLLECT VALUES FROM THE USER
  do {
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx', 10000))
  } while (isNaN(investment) || investment <= 0)

  do {
    rate = parseFloat(prompt('Enter interest rate as xx.x', 4.1))
  } while (isNaN(rate) || rate <= 0 || rate >= 7)

  do {
    years = parseInt(prompt('Enter the number of years you want to invest for'))
  } while (isNaN(years) || years > 30)

  again = prompt("Repeat entries? ('y/n')", 'y')
} while (again == 'y')

// CALCULATE FUTURE VALUE
futureValue = investment

for (let i = 0; i < years; i++) {
  const interest = (futureValue * rate) / 100
  futureValue = futureValue + interest
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`)
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`)
document.write(`Years: ${years}<br>`)
document.write(`Future value: $${futureValue.toFixed(2)}`)

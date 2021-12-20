const principalBox = document.querySelector("#principal")
const interestRateBox = document.querySelector("#interestRate")
const numOfTimesCompoundedBox = document.querySelector("#numOfTimesCompounded")
const timeBox = document.querySelector("#time")
const compointerSpan = document.querySelector("#compointer")

function computeCompoundInterest() {
  const principal = principal.value
  const interestRate = interestRate.value
  const numOfTimesCompounded = numOfTimesCompounded.value
  const time = time.value
  const compInt = principal((1 + (interestRate/numOfTimesCompounded)) ^ time)
  compointerSpan.textContent = compointer
}

principalBox.addEventListener('input', computeCompoundInterest)
interestRateBox.addEventListener('input', computeCompoundInterest)
numOfTimesCompoundedBox.addEventListener('input', computeCompoundInterest)
timeBox.addEventListener('input', computeCompoundInterest)
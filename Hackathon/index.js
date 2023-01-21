function passwordCheck(){

let timeout;

// traversing the DOM and getting the input and span using their IDs

let password = document.getElementById('PassEntry')
let strengthBadge = document.getElementById('StrengthDisp')

// The strong and weak password Regex pattern checker
console.log(password.value)
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

function StrengthChecker(PasswordParameter){
    // We then change the badge's color and text based on the password strength
    
    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green"
        strengthBadge.textContent = 'Strong'
    } else if(mediumPassword.test(PasswordParameter)){
        strengthBadge.style.backgroundColor = 'blue'
        strengthBadge.textContent = 'Medium'
    } else{
        strengthBadge.style.backgroundColor = 'red'
        strengthBadge.textContent = 'Weak'
    }
}

    //The badge is hidden by default, so we show it

    strengthBadge.style.display= 'block'
    clearTimeout(timeout);

    //We then call the StrengChecker function as a callback then pass the typed password to it

    timeout = setTimeout(() => StrengthChecker(password.value), 500);

    //Incase a user clears the text, the badge is hidden again

    if(password.value.length !== 0){
        strengthBadge.style.display != 'block'
    } else{
        strengthBadge.style.display = 'none'
    }
// Adding an input event listener when a user types to the  password input 

const input = document.getElementById('PassEntry')
const time = document.getElementById('time')
const unit = document.getElementById('unit')

let result = { timeValue: '', unitValue: '', level: 0 }

input.addEventListener('input', () => {
    console.log("working")
  estimateTime(input.value)
})

function estimateTime(value) {
  let pwLength = value.length
  if (value.match(/^[0-9]+$/)) {
    switch (true) {
      case (pwLength <= 11): result = { timeValue: 'Instantly', unitValue: '',        level: 0 }; break
      case (pwLength == 12): result = { timeValue: '2',         unitValue: 'seconds', level: 1 }; break
      case (pwLength == 13): result = { timeValue: '19',        unitValue: 'seconds', level: 1 }; break
      case (pwLength == 14): result = { timeValue: '3',         unitValue: 'minutes', level: 1 }; break
      case (pwLength == 15): result = { timeValue: '32',        unitValue: 'minutes', level: 1 }; break
      case (pwLength == 16): result = { timeValue: '5',         unitValue: 'hours',   level: 1 }; break
      case (pwLength == 17): result = { timeValue: '2',         unitValue: 'days',    level: 1 }; break
      case (pwLength == 18): result = { timeValue: '3',         unitValue: 'weeks',   level: 1 }; break
    }
  } else if (value.match(/(^[a-z]+$)|(^[A-Z]+$)/)) {
    switch (true) {
      case (pwLength <=  8): result = { timeValue: 'Instantly', unitValue: '',        level: 0 }; break
      case (pwLength ==  9): result = { timeValue: '10',        unitValue: 'seconds', level: 1 }; break
      case (pwLength == 10): result = { timeValue: '4',         unitValue: 'minutes', level: 1 }; break
      case (pwLength == 11): result = { timeValue: '2',         unitValue: 'hours',   level: 1 }; break
      case (pwLength == 12): result = { timeValue: '2',         unitValue: 'days',    level: 1 }; break
      case (pwLength == 13): result = { timeValue: '2',         unitValue: 'months',  level: 1 }; break
      case (pwLength == 14): result = { timeValue: '4',         unitValue: 'years',   level: 2 }; break
      case (pwLength == 15): result = { timeValue: '100',       unitValue: 'years',   level: 2 }; break
      case (pwLength == 16): result = { timeValue: '3000',      unitValue: 'years',   level: 2 }; break
      case (pwLength == 17): result = { timeValue: '69000',     unitValue: 'years',   level: 2 }; break
      case (pwLength == 18): result = { timeValue: '2',         unitValue: 'Million years',   level: 3 }; break
    }
  } else if (value.match(/^[a-zA-Z]+$/)) {
    switch (true) {
      case (pwLength <=  6): result = { timeValue: 'Instantly', unitValue: '',        level: 0 }; break
      case (pwLength ==  7): result = { timeValue: '2',         unitValue: 'seconds', level: 1 }; break
      case (pwLength ==  8): result = { timeValue: '2',         unitValue: 'minutes', level: 1 }; break
      case (pwLength ==  9): result = { timeValue: '1',         unitValue: 'hour',    level: 1 }; break
      case (pwLength == 10): result = { timeValue: '3',         unitValue: 'days',    level: 1 }; break
      case (pwLength == 11): result = { timeValue: '5',         unitValue: 'months',  level: 1 }; break
      case (pwLength == 12): result = { timeValue: '24',        unitValue: 'years',   level: 2 }; break
      case (pwLength == 13): result = { timeValue: '1000',      unitValue: 'years',   level: 2 }; break
      case (pwLength == 14): result = { timeValue: '64000',     unitValue: 'years',   level: 2 }; break
      case (pwLength == 15): result = { timeValue: '3',         unitValue: 'Million years',   level: 3 }; break
      case (pwLength == 16): result = { timeValue: '173',       unitValue: 'Million years',   level: 3 }; break
      case (pwLength == 17): result = { timeValue: '9',         unitValue: 'Billion years',   level: 3 }; break
      case (pwLength == 18): result = { timeValue: '467',       unitValue: 'Billion years',   level: 3 }; break
    }
  } else if (value.match(/^[0-9a-zA-Z]+$/)) {
    switch (true) {
      case (pwLength <=  6): result = { timeValue: 'Instantly', unitValue: '',        level: 0 }; break
      case (pwLength ==  7): result = { timeValue: '7',         unitValue: 'seconds', level: 1 }; break
      case (pwLength ==  8): result = { timeValue: '7',         unitValue: 'minutes', level: 1 }; break
      case (pwLength ==  9): result = { timeValue: '7',         unitValue: 'hours',   level: 1 }; break
      case (pwLength == 10): result = { timeValue: '3',         unitValue: 'weeks',   level: 1 }; break
      case (pwLength == 11): result = { timeValue: '3',         unitValue: 'years',   level: 2 }; break
      case (pwLength == 12): result = { timeValue: '200',       unitValue: 'years',   level: 2 }; break
      case (pwLength == 13): result = { timeValue: '12000',     unitValue: 'years',   level: 2 }; break
      case (pwLength == 14): result = { timeValue: '750000',    unitValue: 'years',   level: 3 }; break
      case (pwLength == 15): result = { timeValue: '46',        unitValue: 'Million years',   level: 3 }; break
      case (pwLength == 16): result = { timeValue: '3',         unitValue: 'Billion years',   level: 3 }; break
      case (pwLength == 17): result = { timeValue: '179',       unitValue: 'Billion years',   level: 3 }; break
      case (pwLength == 18): result = { timeValue: '11',        unitValue: 'Trillion years',  level: 3 }; break
    }
  } else if (value.match(/^[0-9a-zA-Z\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\>\=\?\@\[\]\{\}\\\\\^\_\`\~]+$/)) {
    switch (true) {
      case (pwLength <=  6): result = { timeValue: 'Instantly', unitValue: '',        level: 0 }; break
      case (pwLength ==  7): result = { timeValue: '31',        unitValue: 'seconds', level: 1 }; break
      case (pwLength ==  8): result = { timeValue: '39',        unitValue: 'minutes', level: 1 }; break
      case (pwLength ==  9): result = { timeValue: '2',         unitValue: 'days',    level: 1 }; break
      case (pwLength == 10): result = { timeValue: '5',         unitValue: 'months',  level: 1 }; break
      case (pwLength == 11): result = { timeValue: '34',        unitValue: 'years',   level: 2 }; break
      case (pwLength == 12): result = { timeValue: '3000',      unitValue: 'years',   level: 2 }; break
      case (pwLength == 13): result = { timeValue: '202000',    unitValue: 'years',   level: 3 }; break
      case (pwLength == 14): result = { timeValue: '16',        unitValue: 'Million years',   level: 3 }; break
      case (pwLength == 15): result = { timeValue: '1',         unitValue: 'Billion years',   level: 3 }; break
      case (pwLength == 16): result = { timeValue: '92',        unitValue: 'Billion years',   level: 3 }; break
      case (pwLength == 17): result = { timeValue: '7',         unitValue: 'Trillion years',  level: 3 }; break
      case (pwLength == 18): result = { timeValue: '438',       unitValue: 'Trillion years',  level: 3 }; break
    }
  } else if (value.length==0) {
    result = { timeValue: 'Invalid Input', unitValue: '', level: 0 };
  }
  displayValue(result)
}

function displayValue(result) {
  switch (result.level) {
    case 0: time.style.color = unit.style.color = '#f32424'; break
    case 1: time.style.color = unit.style.color = '#e86d2f'; break
    case 2: time.style.color = unit.style.color = '#d1a346'; break
    case 3: time.style.color = unit.style.color = '#28a34d'; break
    default:
      time.style.color = unit.style.color = '#0d2153aa';
  }
  time.innerHTML = result.timeValue
  unit.innerHTML = result.unitValue
  resetAnimation(time)
  resetAnimation(unit)
}

function resetAnimation(el) {
  el.classList.remove("fade-in")
  el.offsetHeight
  el.classList.add("fade-in")
}
}

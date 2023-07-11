let aproducts = document.getElementById('acontact')
aproducts.style.color = 'gray'
let inputFile = document.getElementById('upload-img')
let labelFile = document.getElementById('lableupload')

let message = document.getElementById('message')
let inpname = document.getElementById('name')
let phone = document.getElementById('phone')
let email = document.getElementById('email')
let clear = document.getElementById('clear')
let swap = document.getElementById('swap')

let submitbtn = document.getElementById('submitbtn')

let swapmode = 'submit'

let formdoc = document.querySelector('form')

inputFile.addEventListener('change', function () {
  if (inputFile.files.length > 0) {
    labelFile.style.backgroundColor = 'limegreen'
    labelFile.textContent = inputFile.files[0].name
  } else {
    labelFile.style.backgroundColor = 'gray'
    labelFile.textContent = 'Upload Image'
  }
})

clear.onclick = function () {
  labelFile.style.backgroundColor = 'gray'
  labelFile.textContent = 'Upload Image'
  inputFile.value = ''
  swaptosubmit()
  swap.style.display = 'none'
}

swap.style.display = 'none'

function swaptoclear() {
  swapmode = 'clear'
  submitbtn.style.opacity = '0'
  setTimeout(function () {
    submitbtn.style.display = 'none'
  }, 500)

  clear.style.opacity = '0'
  setTimeout(function () {
    clear.style.display = 'block'
  }, 500)

  setTimeout(function () {
    clear.style.opacity = '1'
  }, 800)
}

function swaptosubmit() {
  swapmode = 'submit'
  clear.style.opacity = '0'
  setTimeout(function () {
    clear.style.display = 'none'
  }, 500)
  submitbtn.style.opacity = '0'
  setTimeout(function () {
    submitbtn.style.display = 'block'
  }, 500)
  setTimeout(function () {
    submitbtn.style.opacity = '1'
  }, 800)
}

swap.addEventListener('click', function () {
  if (swapmode === 'submit') {
    swaptoclear()
  } else {
    swaptosubmit()
  }
})

function appearswap() {
  if (
    message.value !== '' ||
    inpname.value !== '' ||
    phone.value !== '' ||
    email.value !== '' ||
    inputFile.value !== ''
  ) {
    swap.style.display = 'block'
  } else {
    if (clear.style.display === 'block') {
      swaptosubmit()
    }
    swap.style.display = 'none'
  }
}

message.addEventListener('keyup', appearswap)
inpname.addEventListener('keyup', appearswap)
phone.addEventListener('keyup', appearswap)
email.addEventListener('keyup', appearswap)
inputFile.addEventListener('change', appearswap)

submitbtn.addEventListener('click', function () {
  if (
    (message.value !== '' &&
      inpname.value !== '' &&
      phone.value !== '' &&
      email.value !== '') ||
    inputFile.value !== ''
  ) {
    swap.style.display = 'none'
    let counter = 1
    setInterval(function () {
      submitbtn.innerText = 'sending'
      for (let i = 0; i < counter; i++) {
        submitbtn.innerText += '.'
      }
      counter = (counter % 4) + 1
    }, 300)

    setTimeout(function () {
      formdoc.submit()
    }, 4000)
  } else if (
    message.value == '' ||
    inpname.value == '' ||
    phone.value == '' ||
    email.value == ''
  ) {
    submitbtn.innerText = 'fill'
    setTimeout(function () {
      submitbtn.innerText = 'send'
    }, 4000)
  }
})

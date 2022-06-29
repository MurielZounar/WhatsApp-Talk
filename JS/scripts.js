const list = document.getElementById('count-name')

function setOption(country) {
  let option = document.createElement('option')
  let number = ''
  for (let i = 0; i < country.fone.length; i++) {
    const element = country.fone[i]
    if (element != '0') {
      number += element
    }
  }
  option.innerHTML = '+' + number + ' ' + country.iso3
  list.appendChild(option)
}

function getCountries(url) {
  fetch(url)
    .then(function (resp) {
      return resp.json()
    })
    .then(function (data) {
      data.forEach(element => {
        setOption(element)
      })
    })
}

function openNewTab(txt) {
  const url = 'https://api.whatsapp.com/send?phone=' + txt
  const win = window.open(url, '_blank')
  win.focus
}

function getText() {
  let country = document.getElementById('count-name').value
  let phoneNum = document.getElementById('inp-num').value
  let msg = document.getElementById('inp-msg').value
  let countryNum = ''
  let message = ''

  for (let i = 0; i < country.length; i++) {
    const num = country[i]

    if (num >= 0 && num <= 9) {
      countryNum += num
    }
  }

  for (let i = 0; i < msg.length; i++) {
    const newMsg = msg[i]

    if (newMsg != ' ') {
      message += newMsg
    } else {
      message += '%20'
    }
  }

  let text = countryNum + phoneNum + '&text=' + message

  openNewTab(text)
}

getCountries('assets/JSON/countries.json')

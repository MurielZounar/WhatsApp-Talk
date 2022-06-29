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
  option.innerHTML = '+' + number + ' - ' + country.iso3
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

getCountries('assets/JSON/countries-JSON/countriesJson_ptBR.json')

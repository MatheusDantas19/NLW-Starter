function api(url, seletor){
    fetch(url)
    .then((res) => res.json())
    .then((states) => {
        for(state of states){
            console.log(state)
            seletor.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
    .catch((error) => console.log(error))
}

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

    api(url, ufSelect)
}

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const ufValue = event.target.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    api(url, citySelect)
}

populateUFs()



document.querySelector("select[name=uf]")
    .addEventListener("change", getCities)


// c) Funkcja prezentująca działanie pętli for ... in
function loopForInExample() {
    console.log('Przykład działania pętli for...in: ')

    const janBoys = ['Damjan', 'Sebastjan', 'Adrjan', 'Jan', 'Marjan', 'Florjan']

    for (let i in janBoys) {
        console.log('index: ' + i + ' value: ' + janBoys[i])
    }
    console.log()
}

loopForInExample()



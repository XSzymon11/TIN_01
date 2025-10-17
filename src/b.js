// b) Funkcja prezentująca działanie pętli while
function loopWhileExample() {
    console.log('Przykład działania pętli while: ')

    const asianNames = ['Basia', 'Asia', 'Kasia', 'Jasia']
    let i = 0

    while (i < asianNames.length){
        console.log("Imie: " + asianNames[i])
        i++;
    }
    console.log()
}

loopWhileExample()

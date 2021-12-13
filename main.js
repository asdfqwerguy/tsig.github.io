var dlr = 1
var gens = []

for (let i = 1; i < 5; i++) {
    let gen = {
        cost: Math.pow(i, 7),
        bought: 0,
        amount: 0,
        mult: 1
    }
    gens.push(gen)
}

function updateGUI() {
    for (let i = 1; i < 5; i++) {
        let g = gens[i - 1]
        document.getElementById("gen" + i).innerHTML = "Amount: "
    }
}
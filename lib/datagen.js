let fs = require('fs');

function main() {
    let writer = fs.createWriteStream('../bigfile.json');

    for (let i = 0; i < 1000000; i++) {

        writer.write(JSON.stringify({
            id: i,
            hashthing: (i * i) + "alphabet" + i,
            message: "elevator"
        }) + "\n")

    }
}

module.exports = main;
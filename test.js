let table = {
    width: 10,
    height: 2
}

if (table.width === 10) {
    console.log("hi");
}


let animals = ['fox', 'cat', 'dog'];
if (animals[0] === 'fox') console.log("ok");
if (animals[0].length === 3) console.log("ok");
if (animals.length === 3) console.log("ok");


let string = 'turtle';
if (string.length === 6) console.log("OK");




//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

games = ["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]
//score: 30);



function points(games) {

    let score = 0;

    games.forEach(function (game) {
        //if x > y score += 3
        //if x === y score +=1

        if (game[0] > game[2]) {
            score += 3;
        } else if (game[0] === game[2]) {
            score += 1;
        }
    })
    return score;
}


function points(games) {
    const total = games.reduce(function (accumulator, value) {
        const score = value.split(':'),
            map(Number);
        //.map(function (el) {
        // return Number(el);
    });
    // ['1', '0'] -> map and then number to return two numbers, so they can be compared

    if (score[0] > (score[1]) {
            return accumulator + 3;
        } else if (score[0] === score[1]) {
            return accumulator + 1;
        }
        return accumulator;
    }, 0);
return total;
}


// ALTERNATIVE TO MAP AND NUMBER
function points(games) {
    const total = games.reduce(function (accumulator, value) {
        const score = value.split(':')
        //.map(function (el) {
        // return Number(el);
    });
    // ['1', '0'] -> map and then number to return two numbers, so they can be compared

    if (Number(score[0]) > Number(score[1])) {
        return accumulator + 3;
    } else if (Number(score[0]) === Number(score[1])) {
        return accumulator + 1;
    }
    return accumulator;
}, 0);
return total;
}
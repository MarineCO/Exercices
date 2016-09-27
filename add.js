// EXO 3 : Créer une calculatrice

function add(x,y) {
 console.log(Number(x) + Number(y) );
}

var param1 = process.argv[2];
var param2 = process.argv[3];

add(param1, param2);
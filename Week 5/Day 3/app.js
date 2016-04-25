var deck = [];
var hand= [];
var cardSuite = ["Heart","Spad","Club", "Diamond"]
var cardNumber = ["1","2","3","4","5","6","7","8","9","10","Jack","Queen","King"]

for(var i = 0; i < cardSuite.length ; i++ ){
 for (var j = 0; j < cardNumber.length ; j++){
        var card = {
            suite: cardSuite[i],
            number: cardNumber[j]
        }
    deck.push(card);
    } 
};
for(var x = 0; x < 5; x++){
    hand.push(deck[Math.floor(Math.random()* deck.length)])
}


console.log(deck);
console.log(hand);






// var names = ["matt","ken","scott","joe"];
// var lastNames = ["overall","jones","smith","willis"];

// for (var i = 0; i < names.length; i++){
//     for(var x = 0; x < lastNames.length; x++)
//     console.log(names[i] + " " + lastNames[x]);;
    
// }

// for (var i = 1; i <= 13; i++ ){
//     if (i == 11) {
//         deck.push("J"+"H")
//     } else if (i == 12){
//         deck.push("Q"+"H")
//     } else if (i == 13){
//         deck.push("K"+"H")
//     } else{ 
//      deck.push(i+"H");
//      }
// }
// for (var i = 1; i <= 13; i++ ){
//     if (i == 11) {
//         deck.push("J"+"S")
//     } else if (i == 12){
//         deck.push("Q"+"S")
//     } else if (i == 13){
//         deck.push("K"+"S")
//     } else{ 
//      deck.push(i+"S");
//      }
// }
// for (var i = 1; i <= 13; i++ ){
//     if (i == 11) {
//         deck.push("J"+"D")
//     } else if (i == 12){
//         deck.push("Q"+"D")
//     } else if (i == 13){
//         deck.push("K"+"D")
//     } else{ 
//      deck.push(i+"D");
//      }
// }
// for (var i = 1; i <= 13; i++ ){
//     if (i == 11) {
//         deck.push("J"+"C")
//     } else if (i == 12){
//         deck.push("Q"+"C")
//     } else if (i == 13){
//         deck.push("K"+"C")
//     } else{ 
//      deck.push(i+"C");
//      }
// }




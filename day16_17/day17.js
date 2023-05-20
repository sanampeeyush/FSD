function koifunction(){
    document.getElementsByTagName('h1')[0].style.backgroundColor = 'red'
}

var heading1 = document.getElementsByTagName('h1')[0]
heading1.addEventListener('mouseover', changeToBlue)

function changeToBlue(){
    heading1.style.backgroundColor = 'blue'
    heading1.style.color = 'white'
}

heading1.addEventListener(
    'mouseout', 
    function(){
        heading1.style.backgroundColor = 'white'
        heading1.style.color = 'black'
    }
)

document.getElementById('reset').addEventListener(
    'click', clearAll
)

var turn = 0
var squares = document.getElementsByTagName('td')

for(var i = 0; i<squares.length; i++){
    squares[i].addEventListener('click', createMarker)
}

function createMarker(){
    if(this.textContent === ''){
        if(turn == 0){
            this.textContent = 'X'
        } else {
            this.textContent = 'O'
        }
        turn = 1-turn;
    }
}
function clearAll(){
    for(var i = 0; i<squares.length; i++){
        squares[i].textContent = ''
    }
}


// squares[0].addEventListener(
//     'click',
//     function(){
//         if(squares[0].textContent === ''){
//             if(turn == 0){
//                 squares[0].textContent = 'X'
//             } else {
//                 squares[0].textContent = 'O'
//             }
//             turn = 1-turn;
//         }
//     }    
// )
// squares[1].addEventListener(
//     'click',
//     function(){
//         if(squares[1].textContent === ''){
//             if(turn == 0){
//                 squares[1].textContent = 'X'
//             } else {
//                 squares[1].textContent = 'O'
//             }
//             turn = 1-turn;
//         }
//     }    
// )
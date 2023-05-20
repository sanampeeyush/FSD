function anyfunction(){
    var list1 = document.getElementById('list1')
    list1.style.backgroundColor = 'teal'
}

var list1 = document.getElementById('list1')
list1.addEventListener('mouseover', changeBackground)

function changeBackground(){
    list1.style.backgroundColor = 'red'
    list1.style.color = 'white'
}

list1.addEventListener(
    'mouseout', 
    function(){
        list1.style.backgroundColor = 'white'
        list1.style.color = 'black'
    }
)
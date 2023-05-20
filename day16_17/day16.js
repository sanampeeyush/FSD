function kuchOr(val){
    console.log(val * 2)
    if(5>4){
        console.log('Nice')
    }
    while(val > 20){
        console.log('Bahot Badhiya')
        val -= 5
    }
    for(var i = 1; i<=10; i++){
        console.log(i * val)
    }
    var myString = ['hi','go','good']
    for(t in myString){
        console.log(t)
    }
    var names = {name:'Someone', type:'Pata nahi'}
    for(v in names){
        console.log(v)
    }
    document.write("<p>Oh this came from JS</p>")
}
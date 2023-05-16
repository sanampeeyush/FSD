function doSomething(val){
    var k = val;
    console.log("Hi")
    if (val>3){
        console.log('Nice')
    } else if (val >0){
        console.log('Awesome')
    } else {
        console.log('Bakwaas')
    }
    while(val > 20){
        console.log('Go')
        val -= 5
    }
    for(var i = 1; i<11; i++){
        console.log(i*k)
    }

    var m = ['hi','bye','go']
    for(i in m){
        console.log(i)
    }
    var n = {price:30,qty:3}
    for(i in n){
        console.log(i)
    }
    console.log(5=='5')
    console.log(5!='5')

    console.log(5==='5')
    console.log(5!=='5')

    document.write('Ye to kuch naya hi aa gaya')
}
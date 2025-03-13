let item1count = 0;
let totalprice = 0;

function increase1(){
    item1count++;
    totalprice += 100
    document.querySelector('.quantity1').innerText = item1count
    document.querySelector('.total').innerHTML = totalprice + "$"
}

function decrease1(){
    if(item1count > 0){
        totalprice -= 100
        item1count--;
        document.querySelector('.quantity1').innerText = item1count
        document.querySelector('.total').innerHTML = totalprice + "$"
    }
}

let del1 = document.querySelector('.delete1')

del1.onclick = function () {
    document.querySelector('.quantity1').innerText = item1count
    totalprice -= 100 * item1count
    document.querySelector('.total').innerHTML = totalprice + "$"
    item1count = 0
}

let like1 = document.querySelector('.like1') 

like1.onclick = function (){
    like1.classList.toggle('liked')
}


// item2

let item2count = 0;

function increase2(){
    item2count++;
    totalprice += 20
    document.querySelector('.quantity2').innerText = item2count
    document.querySelector('.total').innerHTML = totalprice + "$"
}

function decrease2(){
    if(item2count > 0){
        totalprice -= 20
        item2count--;
        document.querySelector('.quantity2').innerText = item2count
        document.querySelector('.total').innerHTML = totalprice + "$"
    }
}

let del2 = document.querySelector('.delete2')

del2.onclick = function () {
    document.querySelector('.quantity2').innerText = item2count
    totalprice -= 20 * item2count
    document.querySelector('.total').innerHTML = totalprice + "$"
    item2count = 0
}

let like2 = document.querySelector('.like2') 

like2.onclick = function (){
    like2.classList.toggle('liked')
}

// item 3

let item3count = 0;

function increase3(){
    item3count++;
    totalprice += 50
    document.querySelector('.quantity3').innerText = item3count
    document.querySelector('.total').innerHTML = totalprice + "$"
}

function decrease3(){
    if(item3count > 0){
        totalprice -= 50
        item3count--;
        document.querySelector('.quantity3').innerText = item3count
        document.querySelector('.total').innerHTML = totalprice + "$"
    }
}

let del3 = document.querySelector('.delete3')

del3.onclick = function () {
    document.querySelector('.quantity3').innerText = item3count
    totalprice -= 50 * item3count
    document.querySelector('.total').innerHTML = totalprice + "$"
    item3count = 0
}

let like3 = document.querySelector('.like3') 

like3.onclick = function (){
    like3.classList.toggle('liked')
}
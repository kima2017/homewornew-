const l = console.log;
let t = 1;
let s = 1;
let divs = document.querySelectorAll(".main");
for(let i = 0; i<divs.length; i++) {
    //divs[i].addEventListener("click", changeBackground);
    divs[i].setAttribute("data-tox", t);
    divs[i].setAttribute("data-syun", s);
    s++;
    if(s===7) {
        s = 1;
        t++;
    }
}

//1 
// let armat = Math.sqrt(divs.length);
// for(let i=0; i<divs.length; i++) {
//     let tox = Number(divs[i].getAttribute("data-tox"));
//     let syun = Number(divs[i].getAttribute("data-syun"));
//     if(tox + syun <= (armat + 1) && (tox + syun)%2===1)  {
//         divs[i].style.background = "red";
//     }
// }

//2 

// let armat = Math.sqrt(divs.length);
// for(let i=0; i<divs.length; i++) {
//     let tox = Number(divs[i].getAttribute("data-tox"));
//     let syun = Number(divs[i].getAttribute("data-syun"));
//     if(tox + syun== (armat - 1) || tox + syun===(armat)) {
//         divs[i].style.background = "red";
//     }
// }

//3 

// let armat = Math.sqrt(divs.length);
// for(let i=0; i<divs.length; i++) {
//     let tox = Number(divs[i].getAttribute("data-tox"));
//     let syun = Number(divs[i].getAttribute("data-syun"));
//     l(tox);
//     l(syun);
//     if( tox + syun== (armat +1) || tox + syun== (armat + 2) || tox + syun===armat || (tox + syun)%2==0 ) {
//         divs[i].style.background = "red";
//     }
// }

//4

// let armat = Math.sqrt(divs.length);

// for(let i=0; i<divs.length; i++) {
//     let tox = Number(divs[i].getAttribute("data-tox"));
//     let syun = Number(divs[i].getAttribute("data-syun"));
//     if(tox + syun == armat+1 || tox <= syun) {
//         divs[i].style.background = "red";
//     }
// }

//5 

// let armat = Math.sqrt(divs.length);

// for(let i=0; i<divs.length; i++) {
//     let tox = Number(divs[i].getAttribute("data-tox"));
//     let syun = Number(divs[i].getAttribute("data-syun"));
//     if(tox + syun == armat+1 || tox === syun && tox + syun != armat && tox + syun != armat+2) {
//         divs[i].style.background = "red";
//     }
// }

// 6 chi stacvum

//7 

// let armat = Math.sqrt(divs.length);

// for(let i=0; i<divs.length; i++) {
//     let tox = Number(divs[i].getAttribute("data-tox"));
//     let syun = Number(divs[i].getAttribute("data-syun"));
//     if(tox < syun && (tox!= 1 || syun !=armat) ) {
//         divs[i].style.background = "red";
//     }
// }

//8

// let armat = Math.sqrt(divs.length);

// for(let i=0; i<divs.length; i++) {
//     let tox = Number(divs[i].getAttribute("data-tox"));
//     let syun = Number(divs[i].getAttribute("data-syun"));
//     if(tox!==1 ) {
//         divs[i].style.background = "red";
//     }
let armat = Math.sqrt(divs.length);

for(let i=0; i<divs.length; i++) {
    let tox = Number(divs[i].getAttribute("data-tox"));
    let syun = Number(divs[i].getAttribute("data-syun"));
    if(tox===1 || syun===1 || (tox + syun!== armat+10) ){
        divs[i].style.background = "red";
    }
}



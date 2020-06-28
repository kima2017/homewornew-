const l = console.log;
// let names = ["Martin", "Kima", "Elen", "Gagik"];

// // l(names[0]);
// // l(names[1]);
// // l(names.length);
// // l(names[names.length - 1]);
// l(names);
// names.unshift("Hrach");
// l(names);
// names.shift();
// l(names);
// names.push("Hrach");
// l(names);
// names.pop();
// l(names);

// names.splice(2, 0, "Nazik", "Mher");
// l(names);

// for(let i = 0; i<names.length; i++) {
//     document.write(names[i] + "<br>");
// }

// function insertNames() {
//     let names = [];
//     let value = document.getElementById("name").value;
//     for (let i = 0; i<value; i++) {
//         let numbers = Math.floor(Math.random()*100);
//         names.push(numbers);
//     }
//     l(names);
// }


// let gumar = 0; 
// for(let i = 0; i <arr.length; i++) {
//     gumar = gumar + arr[i];
// }
// l(gumar);

// let arr = [-81, -6, -68, -51, -14];
// let min = arr[0];
// for(let i = 0; i < arr.length; i++) {
//     if(min > arr[i]){
//         min = arr[i];
//     }
// }
// l(min);

/*
function insertNames() {

    let number1 = Number(document.getElementById("name").value);
    let number2 = Number(document.getElementById("name2").value);
    let number3 = Number(document.getElementById("name3").value);
    let datark = [];
    
    for(let i = 0; i<number1; i++) {
        let ispush = true;
        let result = Math.floor(Math.random()*(number3 - number2)+number2);
        l(result);
        for(let j = 0; j<datark.length; j++) {
            if(datark[j] == result) {
                ispush = false;
                break;
            }
        }
        if(ispush){
            datark.push(result)
        } else { 
            i--;
        }
    }
   l(datark);
}
*/
// let x = 5;
// let y = 20;

// let result = Math.floor(Math.random()*(y-x)+x);
// l(result);

// 0 + 5 = 5; 
// 15 + 5 = 20;
function getOddSum() {
let gumar1 = 0;
let numbers1 = [1, 3, 17, 12, 8, 7, 9, 9, 1 , 3, 12 , 15, 5];
for(let i = 0; i < numbers1.length; i++) {
    if(numbers1[i]%2!==0) {
        gumar1 = gumar1 + numbers1[i];
    }
}
console.log(gumar1);
}

function getEvenProduct() {
    let gumarOdd = 1;
    let numbers2 = [1, 3, 17, 12, 8, 7, 9, 9, 1 , 3, 12 , 15, 5];
    for(let i = 0; i < numbers2.length; i++) {
        if(numbers2[i]%2===0) {
            gumarOdd = gumarOdd * numbers2[i];
        }
    }
    console.log(gumarOdd);
}

//Հաշվել Զանգվածի 3-ին բաժանվող թվերի միջին թվաբանական (Գումար / քանակ)

function getAvarage() {
    let gumarThree = 0;
    let avarage;
    let newArray = [];
    let numbers3 = [1, 3, 17, 12, 8, 7, 9, 9, 1 , 3, 12 , 15, 5];
    for(let i = 0; i < numbers3.length; i++) {
        if(numbers3[i]%3===0) {
            newArray.push(numbers3[i]);
            gumarThree = gumarThree + numbers3[i];
            avarage = gumarThree / newArray.length;
        }
    }
    console.log(avarage);
}
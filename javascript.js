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

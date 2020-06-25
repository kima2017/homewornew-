/*1. կոճակի քլիկի ժամանակ կհաշվվի և մեր պատուհանի մեջ կտպվի բոլոր երկնիշ զույգ թվերի գումարը։
*/

let gumar = 0;
function countEvenNumSum() {
for (let i = 10; i <=99; i++) {
    if(i%2===0) {
      gumar = gumar + i;
    }
}
document.write(gumar);
}


/*	2. կոճակի քլիկի ժամանակ կհաշվվի և մեր պատուհանի մեջ կտպվի բոլոր միանիշ թվերի արտադրյալը։
*/

let product = 1;
function countOneDigitNumProduct() {
for (let i = 1; i <=9; i++) {
      product = product * i;
}
document.write(product);
}

/*3. կոճակի քլիկի ժամանակ մեր պատուհանի մեջ կտպվեն բոլոր երկնիշ թվերը, և՝ եթե տվյալ թիվը առանց մնացորդի 
բաժանվում է 3 -ի ապա նրա դիմաց կգրվի "A", եթե տվյալ թիվը առանց մնացորդի բաժանվում է 5 -ի ապա նրա 
դիմաց կգրվի B, իսկ եթե  թիվը բաժանվում է և 5 -ի և 3 -ի ապա նրա դիմաց կգրվի AB: */

function countTwoDigitNumProduct() {
for (let i = 10; i <=99; i++) {
    document.write(i + "<br>");
    if(i%3===0) {
        document.write(i + " " + "A" + "<br>");
    }  
    if(i%5===0) {
        document.write(i + " " + "B" + "<br>");
    }
    if(i%5===0 && i%3===0) {
        document.write(i + " " + "AB" + "<br>");
    }
}
}

const log = console.log

function gumar() {
	let num1 = document.getElementById("tiv1").value;
	let num2 = document.getElementById("tiv2").value;
	let result = Number(num2) + Number(num1);
	document.getElementById("p").innerHTML = `${num1} ev ${num2} tveri gumary havasar e ${result}`;
	
}

function bazmapat() {
	let text = "";
	let num1 = document.getElementById("tiv1").value;
	let num2 = document.getElementById("tiv2").value;
	if(num1>0 && num2>0) {
		let result2 = Number(num2) * Number(num1);
		 text = `Meqenayi ancac heravorutyuny haavsar e ${result2}`;
	} else {
		text = "sxal arjeqi mutqagrum";
	}
	document.getElementById("p").innerHTML = text;
}

function maximum() {
	let max = 0;
	let num1 = Number(document.getElementById("tiv1").value);
	let num2 = Number(document.getElementById("tiv2").value);
	let num3 = Number(document.getElementById("tiv3").value);
	if(num1>num2 && num1>num3) {
		max = num1;
	} else if(num2>num3){
		max = num2;
	} else {
		max = num3;
	}
	document.getElementById("p").innerHTML = max;
}

/*1. Ինփութում մուտքագրել անուն։ , կոճակի քլիկի ժամանակ մեր պատուհանի մեջ կգրվի "Hello /անուն/"։ */

function getName() {
	let myName = document.getElementById("anun").value;
	alert("Hello" + " "  + myName);
}

/*
	2.Ինփութ դաշտում մուտքագրել թիվ (դոլլար)։ , կոճակի քլիկի ժամանակ կհաշվվի, թե մուտքագրված դոլլարը որքան դրամ արժե։

*/

function convertDram() {
	let dramValue = 0;
	let dollarValue = document.getElementById("dolar").value;
	let result1 = dollarValue * 480;
	dramValue = `Poxarjeqy klini ${result1}`;
	document.getElementById("p1").innerHTML = dramValue;
}

/*

	3.Ինփութ դաշտում մուտքագրել թիվ (րոպեների քանակ)։ , կոճակի քլիկի ժամանակ կհաշվվի, թե քանի ժամ է և քանի րոպե է կազմում մուտքագրված րոպեները։ */

	function getHour() {
		let hourValue = 0;
		let minuteValue = document.getElementById("minutes").value;
		let result2 = Math.round(minuteValue / 60);
		let result3 = minuteValue%60;
		hourValue = ` ${minuteValue} ropen klini ${result2} jam ev ${result3} rope`;
		document.getElementById("p2").innerHTML = hourValue;
	}

/*
	4.Ինփութ դաշտում մուտքագրել քառանիշ թիվ։ , կոճակի քլիկի ժամանակ կհաշվվի մուտքագրված թվի թվանշանների գումարը։

*/
function getSum() {
	let sum = 0;
	let n =  document.getElementById("qaranish").value;
	sum = Math.floor(n/1000) + Math.floor((n%1000)/100) + Math.floor(((n%1000)%100)/10) + Math.floor(((n%1000)%100)%10);
	document.getElementById("p6").innerHTML = sum;
}

/*1.Ունենք 3input: A1 կոճակի քլիկի ժամանակ կստուգվի, եթե բոլոր 3 թվերն էլ հավասար են 4 -ի, ապա կարտածվի “այո”, հակառակ դեպքում “ոչ”  */

function equalTo4() {
	let result5;
	let number1 = Number(document.getElementById("number1").value);
	let number2 = Number(document.getElementById("number2").value);
	let number3 = Number(document.getElementById("number3").value);
	if(number1 ===4 && number2 === 4 && number3===4) {
		result5 = "Ayo";
	} else {
		result5 = "Voch";
	}	
	document.getElementById("p3").innerHTML = result5;
}

/*2.Ունենք 3input: A2 կոճակի քլիկի ժամանակ կտպվի “այո” եթե մուտքագրված թվերից գոնե մեկը հավասար է 1 -ի և “ոչ” հակառակ դեպքում */

function equalTo2() {
	let result6;
	let numb11 = Number(document.getElementById("numb1").value);
	let numb22 = Number(document.getElementById("numb2").value);
	let numb33 = Number(document.getElementById("numb3").value);
	if(numb11===2 || numb22 === 2 || numb33===2) {
		result6 = "Ayo";
	} else {
		result6 = "Voch";
	}	
	document.getElementById("p4").innerHTML = result6;
}

/*3.Ունենք 3input: A3 - կոճակի քլիկի ժամանակ կտպվի “այո”, եթե այդ թվերի մեջ կան իրար հավասար թվեր, և “ոչ”՝ հակառակ դեպքում  */

function equal() {
	let result7;
	let numb111 = Number(document.getElementById("numb11").value);
	let numb222 = Number(document.getElementById("numb22").value);
	let numb333 = Number(document.getElementById("numb33").value);
	if(numb111===numb222 || numb222 === numb333 || numb333===numb111) {
		result7 = "Ayo";
	} else {
		result7 = "Voch";
	}	
	document.getElementById("p5").innerHTML = result7;
}


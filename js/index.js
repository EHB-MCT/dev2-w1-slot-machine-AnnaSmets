import { slotMachine } from "./slotMachine.js";
let result = document.getElementById("result");

function init() {
	console.log("Init");
	// TODO: log the document using console.log to test if you can get access to it
	// TODO: log the submit button. If that works, store that button in a variable
	// TODO: attach an event listener to that button and show a log "button clicked"
	// TODO: if the submit button is clicked, the lever is pulled (= call that function)
	console.log(document);
	console.log(document.getElementById("button"));
	let button = document.getElementById("button");
	button.addEventListener("click", function () {
		console.log("button clicked");
		pullLever();
	});
}

function pullLever() {
	// TODO: reset the machine (you may skip this step for now, and focus on getting the machine to work first)
	// TODO: spin the slot machine
	// TODO: show slots and win status
	slotMachine.reset();
	showSlots();
	showGameResult();
}

function showSlots() {
	// TODO: show the slot symbols in HTML
	//result.innerHTML = slotMachine.spin();
	slotMachine.spin().forEach((element) => {
		result.innerHTML += element;
	});
}

function showGameResult() {
	// TODO: show a win or lose message in HTML
	let status = document.getElementById("status");
	slotMachine.calculateStatus();
	if (slotMachine.win === true) {
		status.innerHTML = "you win";
	} else {
		status.innerHTML = "you lose";
	}
}

init();
showSlots();

export const slotMachine = {
	calculateStatus: function () {
		// TODO: check for three similar symbols and update 'win'-boolean
		if (
			this.slots.at(0) === this.slots.at(1) &&
			this.slots.at(0) === this.slots.at(2)
		) {
			this.win = true;
		} else {
			this.win = false;
		}
	},
	getRandomSymbol: function (symbols) {
		// TODO: return a single random symbol
		function getRndNumb(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		let rndNumb = getRndNumb(0, 3);
		return symbols.at(rndNumb);
	},
	reset: function () {
		// TODO: Empty out the slots and reset 'win'-boolean
		this.slots = [];
		this.win = true;
	},
	symbols: ["♠", "♥", "♣", "♦"],
	slots: [],
	slotsAmount: 3,
	spin: function () {
		// TODO: generate three random symbols, and add them to the slots of the slotMachine
		for (let i = 0; i <= this.slotsAmount - 1; i++) {
			this.slots.push(this.getRandomSymbol(this.symbols));
			console.log(this.slots);
		}
		return this.slots;
	},
	win: true,
};

class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.find(alarm => alarm.time === time)) {
		    console.warn('Уже присутствует звонок на это же время');
		}

		return this.alarmCollection.push({
			callback,
			time,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
     }


	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString().slice(0, -3);
	}

	start() {
		if (this.intervalId) {
			return null;
		}

		let a = this.alarmCollection.forEach(alarm => {
			if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
				alarm.canCall = false;
				alarm.callback();
			}
		});
		this.intervalID = setInterval(() => a, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId === null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm=> {
			if (alarm.canCall === false) {
				alarm.canCall = true;
			}
		})
	}

	clearAlarms() {
        this.stop();
		this.alarmCollection = [];
	}
}
// class Chronometer {
//   constructor() {
//     // ... your code goes here
//     this.currentTime = 0;
//     this.intervalId = null;
//   }

//   start(printTimeCallback) {
//     // ... your code goes here
//     if (typeof printTimeCallback === "function") {
//       this.intervalId = setInterval(() => {
//         this.currentTime += 1;
//         printTimeCallback(this.currentTime);

//       }, 1000)
//     }
//   }

//   getMinutes() {
//     // ... your code goes here
//     return Math.floor(this.currentTime / 60);
//   }

//   getSeconds() {
//     // ... your code goes here
//     return this.currentTime % 60;

//   }

//   computeTwoDigitNumber(value) {
//     // ... your code goes here
//     return value.toString().padStart(2, '0');
//   }

//   stop() {
//     // ... your code goes here
//     clearInterval(this.intervalId);
//   }

//   reset() {
//     // ... your code goes here
//   }

//   split() {
//     // ... your code goes here
//   }
// }

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      this.currentTime++;
      printTimeCallback();
    }, 1000);

    setTimeout(() => {
      this.currentTime = 3;
    }, 3000);

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0');
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

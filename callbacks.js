// class Clock {
//   constructor() {
//     // 1. Create a Date object.
//     this.d = new Date();
//     this.h = this.d.getHours();
//     this.m = this.d.getMinutes();
//     this.s = this.d.getSeconds();
//     this.printTime();

//     this._tick = this._tick.bind(this)
   
//      setInterval(this._tick, 1000); 
//     // 2. Store the hours, minutes, and seconds.
//     // 3. Call printTime.
    
//     // 4. Schedule the tick at 1 second intervals.  
  
//   }

//   printTime() {
//     // console.log(this)
    
//     // Format the time in HH:MM:SS
//     // Use console.log to print it.
//     console.log(`${this.h}:${this.m}:${this.s}`);
//   }

//   _tick() {
//     // 1. Increment the time by one second.
//     if (this.s === 59) {
//       this.m += 1; 
//       this.s = 0; 
//     } else {
//       this.s += 1; 
//     }
//     if (this.m === 59) {
//       this.h += 1; 
//       this.m = 0; 
//     } 
//     if (this.h === 23 && this.m === 59 && this.s === 59) {
//       this.h = 0; 
//       this.m = 0; 
//       this.s = 0; 
//     }
//     // 2. Call printTime.
//     // console.log(this); 
//     this.printTime(); 
//    }
// }

// const clock = new Clock();
// // console.log(clock._tick());


// function setInterval(hereIsTheCb, delay) {
//   clock.hereIsTheCb() 
// }




/////////////////
///////////////// 

const readline = require('readline'); 

const reader = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
}); 

// function addNumbers(sum, numsLeft, completionCallback) {
//   if (numsLeft > 0) {
//     reader.question("Input a number: ", function(val){
//       sum += parseInt(val); 
//       console.log(`Current sum is: ${sum}`); 
//       numsLeft = numsLeft-1; 
//       console.log(`Nums left is: ${numsLeft}`); 
//       addNumbers(sum, numsLeft, completionCallback);  
//     }); 
//   } else {
//     completionCallback(sum); 
//     reader.close(); 
//   }
// }
// console.log(askIfGreaterThan(3, 4, mycallback)); 



function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?`, function(res){
    if (res === "yes") {
      callback(true); 
    } else {
      callback(false); 
    }
  }); 
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  madeAnySwaps = false; 

  while (i < arr.length-1) {
    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {
        if (isGreaterThan) {
          [arr[i], arr[i+1]] = [arr[i+1], arr[i]]; 
          // let temp = arr[i]; 
          // arr[i] = arr[i+1]; 
          // arr[i+1] = temp; 
          madeAnySwaps = true; 
        }; 
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop); 
    }); 

  } 
  outerBubbleSortLoop(madeAnySwaps); 
}

// console.log([1, 2, 3], 0, false, x => console.log(x)); 

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps == true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop); 
    } else {
      sortCompletionCallback(arr); 
    }
  }
  outerBubbleSortLoop(false); 
}

console.log(absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr)); 
  reader.close(); 
})); 


function constructor() {
  // 1. Create a Date object.
  const d = new Date();

  printTime(d);

  // 2. Store the hours, minutes, and seconds.
  // 3. Call printTime.

  // 4. Schedule the tick at 1 second intervals.  

}

function printTime(c) {
  // console.log(c)
  let h = c.getHours();
  let m = c.getMinutes();
  let s = c.getSeconds();
  // Format the time in HH:MM:SS
  // Use console.log to print it.
  console.log(`${h}:${m}:${s}`);
}

function _tick() {
  // 1. Increment the time by one second.
  // 2. Call printTime.
}
// }
console.log(constructor());
// const clock = new Clock();
// console.log(clock.printTime());
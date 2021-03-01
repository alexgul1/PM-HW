class Call {
  static #count = 0;

  constructor() {
    Object.freeze(this);
  }

  static callCount() {
    return Call.#count;
  }

  callMe() {
    Call.#count += 1;
    console.log("method callMe called");
  }
}

Object.freeze(Call);

const obj1 = new Call();
const obj2 = new Call();
const obj3 = new Call();

console.log("Task 1 Block");
obj1.callMe();
obj1.callMe();
obj2.callMe();
console.log(`count: ${Call.callCount()}`);
obj2.callMe();
obj3.callMe();
obj3.callMe();
console.log(`count: ${Call.callCount()}`);
class PersonGenderError extends Error {
  constructor(message) {
    super(message);
  }

  toString() {
    return this.message;
  }
}

class Person {
  static GENDER = {
    NOT_DEFINED: 0,
    MAN: 1,
    WOMAN: 2
  }

  #genderVal = Person.GENDER.NOT_DEFINED;

  #updateGender(newValue) {
    const genderValues = Object.values(Person.GENDER);
    if (genderValues.includes(newValue)) {
      this.#genderVal = newValue;
    } else {
      throw new PersonGenderError(`This gender: ${newValue} is unavailable`);
    }
  }

  constructor(name = "noName", gender) {
    name && (this.name = name);
    gender && this.#updateGender(gender);
  }

  get gender() {
    return this.#genderVal;
  }

  set gender(newValue) {
    try {
      this.#updateGender(newValue);
    } catch (e) {
      console.log(e.message);
    }
  }
}

console.log("Person Block");
const person = new Person("s");
person.gender = 1;
console.log(`Gender: ${person.gender}`);
//Try to set non-existent value
person.gender = 5;
console.log(`Gender: ${person.gender}`);


class PersonLog extends Person {
  #logsArr = [];

  constructor(name, gender) {
    super(name, gender);

    const proxied = new Proxy(this, {
      get: function (target, prop) {
        return Reflect.get(target, prop);
      },
      set(target, prop, value) {
        if (Reflect.has(target, prop)) {
          const temp = target[prop];
          Reflect.set(target, prop, value)
          target.#updateLogs(prop, temp, value);
        }
      }
    });

    return Object.seal(proxied);
  }

  get logs() {
    return this.#logsArr;
  }

  #updateLogs(prop, oldValue, newValue) {
    if (this[prop] !== oldValue && prop !== "logs") {
      this.#logsArr.push(`${prop}: from ${oldValue} to ${newValue}`);
    }
  }
}

console.log("\nPersonLog Block");

const personWithLog = new PersonLog("sad");
personWithLog.name = "Test";
personWithLog.name = "Sasha";

personWithLog.gender = 2;
personWithLog.gender = 1;
personWithLog.gender = 0;
personWithLog.gender = 5;

//Try to set non-existing prop
personWithLog.asd = "qwe";
console.log(personWithLog.asd, personWithLog.hasOwnProperty("asd"));

//Try to update logs
personWithLog.logs = 'asdsad';
console.log(personWithLog.logs);
const ARRAY = require('./defaultArr');

const createHashTable = (arr) => Object.fromEntries(arr.map(obj => [obj.id, obj]));

const getUserById = (hashTable, id) => {
  return hashTable[id] ? hashTable[id] : "User with this id does not exist";
};

const getUserAddressById = (hashTable, id) => {
  return !hashTable[id] ? "User with this id does not exist" :
    !hashTable[id].address ? "No information about the address" : hashTable[id].address;
};

const getUsersByCompanyName = (hashTable, companyName) => {
  const users = Object.values(hashTable).filter(user => user.company.name === companyName);
  return users.length ? users : "Users not found";
};

const makeIdPropUnchangeable = (hashTable) => {
  for (let id of Object.keys(hashTable)) {
    const user = hashTable[id];
    Object.defineProperty(user, 'id', {
      value: hashTable[id].id,
      writable: false,
      configurable: false
    });
  }
};

const createSetterForPhone = (hashTable) => {
  for (let id of Object.keys(hashTable)) {
    let user = hashTable[id];
    const oldPhone = user.phone;
    Object.defineProperties(user, {
      '_phone': {
        value: oldPhone,
        writable: true,
      },
      'phone': {
        get() {
          return this._phone;
        },
        set(newValue) {
          const regex = /^\(\d{3}\) \d{3}-\d{2}-\d{2}$/;
          if (!regex.test(newValue)) return;
          this._phone = newValue;
        }
      }
    });
  }
};

const hashTable = createHashTable(ARRAY);

console.log("Get user by ID block:\n");
console.log("Test 1\n", getUserById(hashTable, 2));
console.log("Test 2\n", getUserById(hashTable, 12));

console.log("\nGet user address by ID block:");
console.log("Test 1\n", getUserAddressById(hashTable, 4));
console.log("Test 2\n", getUserAddressById(hashTable, 345));

console.log("\nGet users by company name block:");
console.log("Test 1\n", getUsersByCompanyName(hashTable, "Romaguera-Crona"));
console.log("Test 2\n", getUsersByCompanyName(hashTable, "Considine-Lockman"));
console.log("Test 3\n", getUsersByCompanyName(hashTable, "No-Exist"));

console.log("\nMake id unchangeable");
makeIdPropUnchangeable(hashTable);
console.log("Try to change id");
hashTable[1].id = 530;
console.log(hashTable[1].id);

console.log("\nCreate setter for phone number");
createSetterForPhone(hashTable);
console.log("Change phone number to valid");
hashTable[1].phone = '(111) 111-11-11';
console.log(hashTable[1].phone);
console.log('Change phone number to invalid');
hashTable[2].phone = "qesad";
console.log(hashTable[2].phone);
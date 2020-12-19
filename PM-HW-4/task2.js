const enemy = {
  name: "Bob"
};

const friend = {
  name: "Alex"
};

const me = friend;

me.name = "Bob";

console.log(friend.name); //Bob, так как me и friend ссылаются на 1 ячейку памяти и при смене свойства в me, так же меняется и в friend
console.log(me === friend); //true, так как тут проверяется ссылаются ли они на одну и ту же ячейку памяти
console.log(me === enemy); //false, так как тут проверяется ссылаются ли они на одну и ту же ячейку памяти



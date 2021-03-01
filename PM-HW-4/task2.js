const enemy = {
  name: "Bob"
};

const friend = {
  name: "Alex"
};

const me = friend;

me.name = "Bob";

console.log(friend.name); //Bob,
/*
так как переменные me и friend ссылаются на 1 и тот же объект
тогда при смене свойства в me, так же меняется и в friend
*/
console.log(me === friend); //true,
/*
так как эти 2 переменные ссылаются на 1 и тот же объект
*/
console.log(me === enemy); //false,
/*
в данном случае эти 2 переменнные не ссылаются на 1 и тот же объект
*/



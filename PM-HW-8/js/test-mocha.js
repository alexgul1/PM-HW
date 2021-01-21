const assert = require('assert');
const {multiplyBy, flatWhite, extendWith, extendWithEndless} = require('./index');

it('multiplyBy block ', function () {
  assert.deepStrictEqual(multiplyBy(2, 3, 4, 5), [6, 8, 10]);
  assert.deepStrictEqual(multiplyBy(10, 20, 40, 100, 200, 3), [200, 400, 1000, 2000, 30]);
});


it('flatWhite block', function () {
  assert.deepStrictEqual(flatWhite(['doppio', ['hot'], 'milk']), ['doppio', 'hot', 'milk']);
  assert.deepStrictEqual(flatWhite([['espresso', 'hot'], 'milk']), ['espresso', 'hot', 'milk']);
});

it('extendWith block', function () {
  assert.deepStrictEqual(extendWith(
    { flatWhite: ['doppio', 'hot', 'milk'], isValid: true },
    { isValid: false, additionalProp: { thisIsGoodProp: 123 } }
    ),
    { flatWhite: ['doppio', 'hot', 'milk'], isValid: true, additionalProp: { thisIsGoodProp: 123 } }

  );

  assert.deepStrictEqual(extendWith(
    { isValid: false, myMax: 9990 },
    { isValidos: false, myMin: 8999 }
    ),
    { isValid: false, myMax: 9990, isValidos: false, myMin: 8999 }
  );
});

it('extendWithEndless block', function () {
  assert.deepStrictEqual(extendWithEndless(
    { flatWhite: ['doppio', 'hot', 'milk'], isValid: true },
    { isValid: false, additionalProp: { thisIsGoodProp: 123 } },
    { prop3: true },
    { prop4: true },
    { isValid: [false, false] },
    ),
    {
      flatWhite: ['doppio', 'hot', 'milk'],
      isValid: [false, false],
      additionalProp: { thisIsGoodProp: 123 },
      prop3: true,
      prop4: true
    }
  );
});
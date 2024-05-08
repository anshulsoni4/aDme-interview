Merge below two arrays removing duplicates:

const arr1 = [3, 1, 2,];
const arr2 = [32, 934, 1];

// your solution here
==============================================

const merged = [...new Set([...arr1, ...arr2])];

console.log(merged);

===================================================
const P1 = 0;
const C1 = P1 || 23;

console.log('Output: ', C1);
// your output here
23

=====================================================
const user = {
  name: 'Sandeep',
  age: 20,
  country: 'India',
};
  user.displayName: {
    name: user.name,
  };


console.log('Name: ', user.name); - Sandeep
console.log('Display name: ', user.displayName.name); - Sandeep



const fruits = [ "Banana","Apples", "Oranges", "Blueberries"
];

fruits.splice(0,1);
console.log(fruits); ['Apples', 'Oranges' ,'Blueberries'
]

fruits.push('kiwi');
console.log(fruits); [
    'Apples', 'Oranges', 'Blueberries', 'Kiwi'
]
fruits.shift();
console.log(fruits); [
    'Blueberries', 'Kiwi', 'Oranges'
]
fruits.reverse();
console.log(fruits); ['Oranges' , 'Kiwi', 'Blueberries'
]

const subarray2 = ['Oranges'];
const subarray1 = ['Apples', subarray2, 'Blueberries'];
const moreFruits = ['Banana', subarray1 ];

console.log(moreFruits); ['Banana',['Apples' , ['Oranges'], 'Blueberries' ]]

let sa1 = moreFruits[1];
console.log(sa1); ['Apples', ['Oranges'], 'Blueberries']
let sa2 = sa1[1];
console.log(sa2); ['Oranges']
let result = sa2[0];
console.log(result); Oranges

console.log(moreFruits[1][1].toString()); Oranges
console.log(moreFruits [1][1][0]); Oranges
// expense = {
//     food: [10, 20, 30], 
//     travel: [5, 15], 
//     bills: [40, 60] 
// };

// totalExpense = {};
// for(item in expense) {
//     sum = 0
//     expense[item].forEach(element => {
//         sum += element
//     });
//     totalExpense[item] = sum
// }

// console.log(totalExpense)

// const input = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const output = {}

// input.forEach(item => {
//     if (output[item] == undefined)
//         output[item] = 1
//     else
//         output[item] += 1
// })

// console.log(output)

// keyVal = { a: "x", b: "y", c: "z" };
// valKey = {};

// for (item in keyVal) {
//     valKey[keyVal[item]] = item;
// }

// console.log(valKey)

// let obj = { a: 10, b: 50, c: 20 };
// let largest = Object.keys(obj)[0]
// for (item in obj) {
//     if (obj[item] > obj[largest]) {
//         largest = item
//     }
// }
// console.log(largest)


// let f_v = { 
//     fruits: ["apple", "banana"], 
//     veggies: ["carrot", "pea"] 
// };
// console.log([...f_v.fruits, ...f_v.veggies])

// Question 6
// let people = [
//   { name: "A", city: "Delhi" },
//   { name: "B", city: "Mumbai" },
//   { name: "C", city: "Delhi" }
// ]

// let city_grp = {};

// for (item in people) {
//     tmpCity = people[item].city
//     if (city_grp[tmpCity] == undefined){
//         city_grp[tmpCity] = [];
//     }
//     city_grp[tmpCity].push(people[item].name);
// }

// console.log(city_grp)

//Question 7
// obj = { a: 20, b: 60, c: 40, d: 90 };
// console.log(Object.fromEntries(Object.entries(obj).filter(([key, value]) => value > 50)))

//Question 6
// let INPUT = { A: [80, 90], B: [70, 75, 85] };
// let tmpObj = {}
// Object.keys(INPUT).forEach(key => {
//   const value = INPUT[key];
//   let sum = 0;
//   value.forEach(number => {
//     sum += number;
//   })
//   tmpObj[key] = sum/value.length
// });
// const maxKey = Object.keys(tmpObj).reduce((x, y) => 
//   tmpObj[x] > tmpObj[y] ? x : y
// )
// console.log(maxKey)


//Question 9
// let obj = { x: [1,2,3], y: [2,3,4], z: [4,5] };
// let s1 = new Set([...obj.x, ...obj.y, ...obj.z])
// uniqueArray = [...s1]
// console.log(uniqueArray)

//Question 11
// obj = { name: "Rahul", age: 23, city: "Noida" } 
// keyPicker = ["name","city"]
// tmpObj = {}
// keyPicker.forEach(key => {
//     tmpObj[key] = obj[key]
// });
// console.log(tmpObj)

// Question 12
// obj = { a: 3, b: 1, c: 2 };
// let sorted = []
// for (let key in obj) {
//     sorted.push([key, obj[key]])
// }
// sorted.sort((a, b) => {
//     return a[1] - b[1]
// })
// console.log(sorted)

//Question 13
// obj = { a: 1, b: 2, c: 3 };
// console.log(Object.keys(obj).length)

//Question 14
// obj = { name: "alice", city: "delhi" };
// Object.keys(obj).forEach(key => {
//     if (typeof obj[key] === "string") {
//         obj[key] = obj[key].charAt(0).toUpperCase() + obj[key].slice(1);
//     }
// })
// console.log(obj)

//Question 15
// obj = { name: "Alice", age: 25};
// tmpStr = ""

// Object.keys(obj).forEach(key => {
//     tmpStr = tmpStr + key + "=" + obj[key] + "&"
// })
// queryStr = tmpStr.slice(0, -1)
// console.log(queryStr)

//Question 16
// arr = [1,2,3,4,5,6];
// obj = {even: 0, odd: 0};

// arr.forEach(element => {
//     if (element%2 == 0) {
//         obj["even"]++;
//     } else {
//         obj["odd"]++;
//     }
// });

// console.log(obj)

//Question 17
// obj1 = { a: 1, b: 2, c: 3 };
// obj2 = { b: 4, c: 5, d: 6 };
// tmpArr = []

// Object.keys(obj1).forEach((key) => {
//     if (Object.keys(obj2).includes(key)) {
//         tmpArr.push(key)
//     }
// })
// console.log(tmpArr)

//Question 18
// objArr = [{ id: 1, name: "A" }, { id: 2, name: "B" }];
// tmpObj = {}
// objArr.forEach(element => {
//     tmpObj[element["id"]] = element;
// });

// console.log(tmpObj)

//Question 19
// obj = { a: 1, b: "hello", c: 3 };
// res = false

// valueArr = Object.values(obj);
// for (value of valueArr) {
//     if (typeof value === "number") {
//         res = true
//     } else {
//         res = false;
//         break;
//     }
// }
// console.log(res)

/* 20 intermediate (Objects + Arrays) */
//Question 1
// arr = [
//   { user: "A", amount: 100 },
//   { user: "B", amount: 200 },
//   { user: "A", amount: 50 }
// ];

// tmpObj = {}
// arr.forEach(element => {
//     tmpObj[element["user"]] = (tmpObj[element["user"]] || 0) + element["amount"]
// });
// console.log(tmpObj)

//Question 2
// obj = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" }
// ];

// tmpObj = {};

// obj.forEach(element => {
//    tmpObj[element["id"]] = element["name"] 
// });

// console.log(tmpObj)

//Question 3
// obj = { a: 0, b: null, c: "hello", d: undefined, e: 5 };
// console.log(Object.entries(obj))
// console.log(Object.entries(obj).filter(([key, value]) => value))
// console.log(Object.fromEntries(Object.entries(obj).filter(([key, value]) => value)))

// Question 4
// roles={ admin:["read","write"], user:["read"], staff: ["write"]}
// checkRole="user",
// action="write"
// console.log(roles[checkRole].includes(action))

//Question 5
// obj = [
//   { id: 1, category: "electronics", price: 100 },
//   { id: 2, category: "clothes", price: 50 },
//   { id: 3, category: "electronics", price: 200 }
// ];
// tmpObj = {}
// obj.forEach(element => {
//     tmpObj[element["category"]] =  (tmpObj[element["category"]] || 0) + element["price"]
// });

// console.log(tmpObj)

//Question 6
// arr = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 1, name: "A" }
// ];

// console.log(
//   [...
//   new Map(
//     arr.map(item => [item.id, item])
//   ).values()
//   ]
// );

//Question 7
// const obj = { a: 1, b: 2, c: 3, d: 4 };
// const size = 2;
// const entries = Object.entries(obj)
// const result = []
// for (let i = 0; i < entries.length; i += 2) {
//   result.push(Object.fromEntries(entries.slice(i, i + 2)))
// }
// console.log(result)

//Question 7.1
// obj = { a: "apple", b: "banana", c: "kiwi" };
// result = ""
// Object.values(obj).forEach(value => {
//   if (result.length < value.length) {
//     result = value
//   }
// })
// console.log(result)

//Question 8
// obj = {
//   en: { hello: "Hello", bye: "Goodbye" },
//   fr: { hello: "Bonjour", bye: "Au revoir" },
//   es: { hello: "Hola" }
// };

// tmpObj = {}
// langEntries = Object.entries(obj)
// for (const [lang, diffwords] of langEntries) {
//   for (const [key, value] of Object.entries(diffwords)) {
//     if (!tmpObj[key])
//       tmpObj[key] = {}
    
//     tmpObj[key][lang] = value
//   }
// }

// console.log(tmpObj)

// Question 9
// arr = [
//   { id: 1, category: "fruit" },
//   { id: 2, category: "veggie" },
//   { id: 3, category: "fruit" }
// ];

// newObj = {}
// arr.forEach(element => {
//   values = Object.values(element)
//   if (!newObj[values[1]])
//     newObj[values[1]] = []

//   newObj[values[1]].push(values[0])
// });
// console.log(newObj)

//Question 10
// myObj = { a: { b: { c: 1, d: 2 } } };
// key_path = ['a', 'b', 'c'];

// keyToDelete = key_path.pop()
// const parent = key_path.reduce((myObj, key) => {
//     reducedObj = (myObj && myObj[key] !== undefined) ? myObj[key] : undefined
//     return reducedObj
// }, myObj);
// if (parent && parent !== undefined) {
//     delete parent[keyToDelete]
// }
// console.log(myObj)

//Question 11
// myObj1 = { a: { x: 1, y: 2 } };
// myObj2 = { a: { x: 1, y: 2 } };

// function areDeepEqual(obj1, obj2) {
//     console.log("**** Entered areDeepEqual() ******")
//     console.log(obj1)
//     console.log(obj2)
//     if (obj1 === obj2){
//         console.log("strict equality for primitives, or same object reference - Returning true")
//         return true
//     }
//     console.log("Step 1")
//     if (obj1 == null || typeof obj1 !== "object" || obj2 == null || typeof obj2 !== "object") {
//         console.log("One of both objects are either null or non-object - Returning false")
//         return false
//     }

//     console.log("Step 2")

//     if(Array.isArray(obj1) && Array.isArray(obj2)) {
//         console.log("Both objects are array")
//         if (obj1.length !== obj2.length) {
//             console.log("Length of both araays are not equal - Returning false")
//             return false
//         }
//         for (i = 0; i < obj1.length; i++) {
//             if (!areDeepEqual(obj1[i], obj2[i])) {
//                 console.log("areDeepEqual() returned false - Returning false")
//                 return false
//             }
//         }
//         console.log("In Array check - Returning true")
//         return true
//     } else if (Array.isArray(obj1) || Array.isArray(obj2)) {
//         console.log("One is array and other is not - Returning false")
//         return false
//     }

//     console.log("Step 3")

//     const keys1 = Object.keys(obj1)
//     const keys2 = Object.keys(obj2)

//     if (keys1.length !== keys2.length) {
//         console.log("Both objects keys length are not same - Returning false")
//         return false
//     }

//     console.log("Step 4")

//     for (const key of keys1) {
//         console.log("####### Both are objects #######")
//         console.log("key ", key)
//         console.log("keys1 ", keys1)
//         console.log("keys2 ", keys2)
//         console.log("obj1[key]", obj1[key])
//         console.log("obj2[key]", obj2[key])
//         if(!keys2.includes(key) || !areDeepEqual(obj1[key], obj2[key])){
//             console.log("Step 5")
//             console.log("key ", key)
//             console.log("keys1 ", keys1)
//             console.log("keys2 ", keys2)
//             console.log("obj1[key]", obj1[key])
//             console.log("obj2[key]", obj2[key])
//             console.log("Either key mismatched or function returnd false - Returning false")
//             return false
//         }
//         console.log("Step 6")
//         console.log("key ", key)
//         console.log("keys1 ", keys1)
//         console.log("keys2 ", keys2)
//         console.log("obj1[key]", obj1[key])
//         console.log("obj2[key]", obj2[key])
//     }
//     return true
// }

// console.log(areDeepEqual(myObj1, myObj2))

//Question 12
// input = { a: [1, [2, [3]]], b: [4, [5]] };
// console.log("input", input)
// function deepFlattenArrayInObject(inputObj) {
//     console.log("### Entered deepFlattenArrayInObject() ###")
//     outputObj = Array.isArray(inputObj) ? [] : {};
//     console.log("inputObj", inputObj)
//     console.log("inputObj", outputObj)
//     for (const key in inputObj) {
//         if (typeof inputObj[key] === "object" && inputObj[key] !== null) {
//             if (Array.isArray(inputObj[key])) {
//                 console.log("Deep flaten the array. key =", key)
//                 console.log("inputObj[key]", inputObj[key])
//                 outputObj[key] = inputObj[key].flat(Infinity)
//                 console.log("outputObj[key]", outputObj[key])
//             } else {
//                 console.log("inputObj[key] is not array", inputObj[key])
//                 console.log("outputObj[key] before", outputObj[key])
//                 outputObj[key] = deepFlattenArrayInObject(inputObj[key])
//                 console.log("outputObj[key] after", outputObj[key])
//             }
//         } else {
//             console.log("inputObj[key] is not object or it is null", inputObj[key])
//             console.log("outputObj[key] before", outputObj[key])
//             outputObj[key] = inputObj[key]
//         }
//     }
//     return outputObj
// }

// output = deepFlattenArrayInObject(input)
// console.log("FINAL:", output)

inputObj = { fruits: ["apple","apple","banana"], drinks: ["apple","tea"] };
catArray = []
for (const key in inputObj) {
    console.log(inputObj[key]) 
    catArray = catArray.concat(inputObj[key])
}

console.log("newArray", catArray)

function findMostRepeatedWord(catagories) {
    const allText = catagories.map(cat => {
        console.log(cat)
        return cat.toLowerCase()
    })
    console.log(allText)
    const wordCounts = {}
    for (const word of allText){
        wordCounts[word] = (wordCounts[word] || 0) + 1
    }
    console.log("wordCounts", wordCounts)
    maxCount = 0;
    maxRepeatedWord = "";
    for (const word in wordCounts) {
        if (wordCounts[word] > maxCount){
            maxCount = wordCounts[word]
            maxRepeatedWord = word
        }
        console.log("maxCount", maxCount)
        console.log("maxRepeatedWord", maxRepeatedWord)
    }
    return maxRepeatedWord
}

maxRepWord = findMostRepeatedWord(catArray);
console.log("FINAL", maxRepWord)

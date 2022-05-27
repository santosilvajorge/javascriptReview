/* // 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum.
let a = 9;
let b = 9;

function SumIt () {
    if (a == b) {
        return a*3
    } else {
        return a + b 
    }
}
console.log(SumIt()) */



/* // 2. Create a function to check two given integers. Return true if one of them is 50 or if their sum is 50.
let a = 50;
let b = 10;

if (a + b == 50 || a == 50 || b == 50) {
   console.log(true)
} else {
    console.log(false)
} */



/* // 3. Create a function to remove a character at a specified position from a given string: pass the position 
 and the string as parameters, return the new string. 
 let str = "Harry Pottery"
 let newStr = str.substr(0, str.length - 1)

console.log(newStr) */



/* // 4. Create a function to find and return the largest of three given integers.
let int1 = 'John'
let int2 = 'Jonas'
let int3 = 'Jonathan'

function maxValue() {
    if (int1.length > int2.length && int1.length > int3.length){
        console.log(`int1 is the largest, is called ${int1}, and has ${int1.length} letters!`)
    } else if (int2.length > int1.length && int2.length > int3.length){
        console.log(`int2 is the largest, is called ${int2}, and has ${int2.length} letters!`)
    } else {
        console.log(`int3 is the largest, is called ${int3}, and has ${int3.length} letters!`)
    }
}

maxValue() */



/* // 5. Create a function to check if two numbers are in the range 40-60 or 70-100. Return true if they do, return false if one (or both) don't.
function checkRange (n) {
    if ((n >= 40 && n <= 60) || (n >= 70 && n <= 100)) {
        return true
    } else { return false}
}

console.log(checkRange(80)) */



/* // 6. Create a function to create a new string composed of a specified number 
 of copies of a given string. 
 Pass the string and the number of copies as parameters.
 
const copyStr = (str, n) => {
    let newStr = ""
    for (let i = 0; i < n; i++) {
      newStr += str + " "
    }
    return newStr
  }
  console.log(copyStr("jorge", 5)) */



/*   // 7. Create a function to display the city name if the string begins with "Los" or "New". 
  // Pass the city name as a parameter. Return false if they start with a different string.
   
  function newOrLos (cityName) {
      let first3Letters = cityName.slice(0, 3)

      if (first3Letters == 'Los' || first3Letters == 'New') {
          return cityName
      } else {
          return false
      }
  }

  console.log(newOrLos('Los Angeles')) */



 /*  // 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
  // Pass the array as a parameter.
  function sumOfElements(arr) {
    let res = 0;

    for (let i = 0; i < arr.lenght; i ++) {
        res += arr[i]
    }

    return res
  }

  console.log(sumOfElements([53, 7])) */



  /* // 9. Create a function to test if an array of length 2 contains 1 OR 3. 
  // Return true is it does, false if it doesn't.
  function includes1or3(arr) {
    let isNumFound = false
  
    for (let i = 0; i < arr.length; i++) {
      const number = arr[i]
      if (number === 1 || number === 3) {
        isNumFound = true
      }
    }
  
    return isNumFound
  }

  console.log(includes1or3([5, 4])); */



  // 10. 
// 1.Print odd numbers in an array
// (function() 
// {
//     var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     var oddNumbers = [];
//     for (var i = 0; i < arr.length; i++) 
//     {
//       if (arr[i] % 2 !== 0) 
//       {
//         oddNumbers.push(arr[i]);
//       }
//     }
//     console.log(oddNumbers);
//   }
//   )();



// 2.Convert all the strings to title caps in a string array
// function toTitleCase(str) 
// {
//     return str.replace(/\b\w/g, s => s.toUpperCase());
// }
//   const strings = ["hai", "guvi", "this", "is", "aish"];
//   const titleCaseStrings = strings.map(toTitleCase);
//   console.log(titleCaseStrings);



// 3.Sum of all numbers in an array
// (function() 
// {
//     var arr = [1, 2, 3, 4, 5];
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) 
//     {
//       sum += arr[i];
//     }
//     console.log(sum);
//   }
// )();



// 4.Return all the prime numbers in an array
// (function() 
// {
//     var isPrime = function(n) 
//     {
//       if (n <= 1) return false;
//       for (var i = 2; i <= Math.sqrt(n); i++) 
//       {
//         if (n % i === 0) return false;
//       }
//       return true;
//     };
//   var getPrimes = function(array) 
//     {
//       var primes = [];
//       for (var i = 0; i < array.length; i++) 
//       {
//         if (isPrime(array[i])) primes.push(array[i]);
//       }
//       return primes;
//     };
//     var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     var primes = getPrimes(array);
//     console.log(primes);
// }
// )();



// 5.Return all the palindromes in an array
// function isPalindrome(str) 
// {
//     const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     return normalizedStr === normalizedStr.split('').reverse().join('');
// }
//   function getAllPalindromes(arr) 
//   {
//     return arr.filter(isPalindrome);
//   }
//   const inputArray = ['racecar', 'madam', 'civic', 'level', 'hype'];
//   const palindromes = getAllPalindromes(inputArray);
//   console.log(palindromes);



// 6.Return median of two sorted arrays of the same size
// (function() 
// {
//     function median(arr1, arr2) 
//     {
//       const mergedArr = arr1.concat(arr2).sort((a, b) => a - b);
//       const middleIndex = mergedArr.length/2;

//       if (mergedArr.length % 2 === 0)
//       {
//         return (mergedArr[middleIndex] + mergedArr[middleIndex - 1])/2;
//       }
//       return mergedArr[middleIndex];
//     }
//     const arr1 = [1, 3, 5];
//     const arr2 = [2, 4, 6];
//     const sortmedian = median(arr1, arr2);
//   console.log(sortmedian);
//   }
// )();



// 7.Remove duplicates from an array
// const removeDuplicates = (arr) => 
// {
//     const seen = new Set();
//     return arr.filter((item) => 
//     {
//       return !seen.has(item);
//     });
//   };
//   const arr = [1, 2, 3, 4, 5, 1, 2, 3];
//   const uniqueArr = removeDuplicates(arr);
//   console.log(uniqueArr);



// 8.Rotate an array by k times
// function ra(array, k)
// {
//     return (function()
//     {
//       for (var i = 0; i < k; i++)
//       {
//         array.unshift(array.pop());
//       }
//       return array;
//     })
//     ();
//   }
//   var array = [16, 18, 8, 30, 25];
//   var rotatedArray = ra(array, 5);
//   console.log(rotatedArray);
// 1.Print odd numbers in an array
// let arr = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// let oddnum = arr.filter(function(number)
// {
//     return number % 2 !==0;
// });
// console.log(oddnum);

                    

// 2.Convert all the strings to title caps in a string array
// function toTitleCase(str)
// {
//     return str.replace(/\b\w/g, s => s.toUpperCase());
// }
// const strings = ["hai", "guvi", "this", "is", "aish"];
// const titleCaseStrings = strings.map(toTitleCase);
// console.log(titleCaseStrings);



// 3.Sum of all numbers in an array
// const sumof = [16, 25, 6, 7, 18, 30, 8];
// const sum = sumof.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);



//4.Return all the prime numbers in an array
// function isPrime(n) 
// {
//     for (var i = 2; i < n; i++)
//     {
//       if (n % i === 0)
//       {
//         return false;
//       }
//     }
//     return true;
//   }
// function getPrimes(arr)
//   {
//     return arr.filter(isPrime);
//   }
// var arr = [11, 21, 15, 25, 12, 22, 16, 26, 13, 23];
//   var primes = getPrimes(arr);
//   console.log(primes);



//5.Return all the palindromes in an array
// function isPalindrome(str) 
// {
//     return str === str.split('').reverse().join('');
// }
  
//   const words = ['ishq', 'madam', 'civic', 'hype'];
  
//   const palindromes = words.filter(isPalindrome);
  
//   console.log(palindromes);



//6.Return median of two sorted arrays of the same size
// function sortarr(arr1, arr2)
// {
//     const mergedarr = arr1.concat(arr2).sort((a,b) => a-b);
//     const medianIndex = mergedarr.length/2;
//     const median = mergedarr[medianIndex];
//     return median;
// }
// const arr1 = [15, 16, 17];
// const arr2 = [25, 26, 27];
// const median = sortarr(arr1, arr2);
// console.log(median);



//7.Remove duplicates from an array
// const rd = (num) => //rd = remove duplicates
// {
//     return num.filter((item, index) => num.indexOf(item) === index);
// };
// const mynum = [25, 16, 18, 8, 30, 25, 16];
// const ua = rd(mynum); //ua = unique array
// console.log(ua);



//8.Rotate an array by k times
function ra(arr, k) 
{
    if (k > arr.length) 
    {
      k %= arr.length;
    }
  const rotatedArr = new Array(arr.length);
  
  for (let i = 0; i < arr.length; i++) 
    {
      rotatedArr[(i + k) % arr.length] = arr[i];
    }
    return rotatedArr;
  }
  const arr = [16, 18, 8, 30, 25];
  const k = 5;
  const rotatedArr = ra(arr, k);
  console.log(rotatedArr);
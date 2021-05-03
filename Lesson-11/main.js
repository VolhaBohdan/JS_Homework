    //Задание 1:

      function filterNumbersArr(numbers) {
        return numbers.filter(function(el){
              return el > 0;
        })
      }

    filterNumbersArr([-1, 0, 2, 34, -2]);

    //Задание 2:
      
      function filterNumbersArr(numbers) {
        return numbers.find(function(el){
          return el > 0;
        })
      }

      filterNumbersArr([-1, -78, -4567, 0, 2, 34, -2]);

    //Задание 3: 

    function isPalindrome (str) {
        var strLower = str.toLowerCase();
        var newStr = strLower.split('').reverse().join('');
         
        return newStr === strLower;
    }
    isPalindrome('шалаШ'); // true
    isPalindrome('привет'); // false



    //Задание 4

    function areAnagrams (str1, str2) {
        var str1Sorted = str1.toLowerCase().split('').sort().join('');
        var str2Sorted = str2.toLowerCase().split('').sort().join('');
         
        return str1Sorted === str2Sorted;
    }
      areAnagrams('кот', 'отк'); // true
      areAnagrams('кот', 'атк'); // false
      areAnagrams('кот', 'отко'); // false

    //Задание 5
  

    function divideArr(arr, size) {
    var newArray = [];

    for(var i = 0; i < arr.length; i += size) {
        newArray.push(arr.slice(i, i+size));
    }
    
    return newArray;
  }

  divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
  divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]



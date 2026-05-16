//1-masala

// function sumTo(n) {
//   let count = 0;
//   if (n < 0) {
//     return 0;
//   }
//   for (let i = 0; i <= n; i++) {
//     count += i;
//   }
//   return count;
// }

// console.log(sumTo(5));

//====================================================================

//2-masala

// function isPrime(n) {
//   if (n <= 1) return false;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(17));

//====================================================================

//3-masala

// function reverseStr(str) {
//   let newStr = "";
//   for (let i of str) {
//     newStr = i + newStr;
//   }
//   return newStr;
// }

// console.log(reverseStr("hasan"));

//==================================================================

//4-masala

// function countVowels(str) {
//   let count = 0;
//   for (let i of str) {
//     if ("aeiouAEIOU".includes(i)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels("imtihon"));

//==========================================================================

//5-masala
// let nums = [1, 34, 5, 6, 54, 6, 4, 5];

// function findMax(arr) {
//   if (arr.length === 0) {
//     return null;
//   }
//   let max = arr[0];
//   for (let num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// }

// console.log(findMax(nums));

//====================================================================

// 6-masala

let students = [];

//====================================================================

// 6.1-masala

function createStudent(name, age, score) {
  if (!name || name.trim() === "") {
    return "Invalid name";
  }
  if (age < 5) {
    return "Invalid age";
  }
  if (score < 0 || score > 100) {
    return "Invalid score";
  }

  let id;
  if (students.length === 0) {
    id = 1;
  } else {
    id = students[students.length - 1].id + 1;
  }

  let newStudent = { id, name, age, score };
  students.push(newStudent);
  return newStudent;
}

//====================================================================

// 6.2-masala

function getStudentById(id) {
  for (let student of students) {
    if (student.id === id) {
      return student;
    }
  }
  return null;
}

//====================================================================

// 6.3-masala

function updateStudent(id, data) {
  let foundStudent = null;
  for (let student of students) {
    if (student.id === id) {
      foundStudent = student;
      break;
    }
  }

  if (!foundStudent) {
    return "Student not found";
  }

  if (data.name !== undefined) {
    if (!data.name || data.name.trim() === "") {
      return "Invalid name";
    }
    foundStudent.name = data.name;
  }

  if (data.age !== undefined) {
    if (data.age < 5) {
      return "Invalid age";
    }
    foundStudent.age = data.age;
  }

  if (data.score !== undefined) {
    if (data.score < 0 || data.score > 100) {
      return "Invalid score";
    }
    foundStudent.score = data.score;
  }

  return foundStudent;
}

//====================================================================

// 6.4-masala

function deleteStudent(id) {
  let index = -1;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    return null;
  }

  let deleted = students.splice(index, 1);
  return deleted[0];
}

//====================================================================

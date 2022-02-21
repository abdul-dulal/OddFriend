// // problem 1  anaToVori

// function anaToVori(ana) {
//   // case handle
//   if (ana > 0 && typeof ana == "number") {
//     return ana / 16;
//   } else {
//     return "please give correct input! like getter then 0 and  number type ";
//   }
// }
// console.log(anaToVori("32"));

// // problem 2 pandaCost

// function pandaCost(singara, samusa, jilapi) {
//   if (
//     typeof singara == "number" &&
//     typeof samusa == "number" &&
//     typeof jilapi == "number"
//   ) {
//     var costOfSingara = singara * 7;
//     var costOfSamusa = samusa * 10;
//     var costOfJilapi = jilapi * 15;
//     // total price
//     return costOfSingara + costOfSamusa + costOfJilapi;
//   } else {
//     return "please give correct input! number type";
//   }
// }

// console.log(pandaCost(1, 0, "4"));

// // problem 3 picnicBudget

// function picnicBudget(person) {
//   if (person > 0 && person <= 300 && typeof person == "number") {
//     // veriable initilization
//     let first100People = 5000;
//     let second100People = 4000;
//     let third100People = 3000;
//     if (person <= 100) {
//       return first100People * person;
//     } else if (person <= 200) {
//       let first100PeopleCost = first100People * 100;
//       let totalPeople = person - 100;
//       let second100Peoplecost = totalPeople * second100People;
//       const total = first100PeopleCost + second100Peoplecost;
//       return total;
//     } else if (person <= 300) {
//       let first100PeopleCost = first100People * 100;
//       let second100Peoplecost = second100People * 100;
//       let totalPeople = person - 200;
//       let third100PeopleCost = totalPeople * third100People;
//       const total =
//         first100PeopleCost + second100Peoplecost + third100PeopleCost;
//       return total;
//     }
//   } else {
//     return "please give correct input! like getter then 0 and less 301 or  number type ";
//   }
// }

// console.log(picnicBudget(101));

// // problem 4 oddFriend

function oddFriend(friendName) {
  // input error handle
  if (typeof friendName == "object") {
    var oddFriendName = [];
    for (let friend of friendName) {
      if (friend.length % 2 != 0) {
        oddFriendName.push(friend);
      }
    }

    return oddFriendName[0];
  } else {
    return "please give object type input";
  }
}

console.log(oddFriend(["abc", "abcd", "abcde"]));
console.log(oddFriend(["nafi", "labib", "dulal"]));

// const arr = ["nafi", "saidur", "dulal", "imtiaz", "labib", "nafiur"];
// if (arr.includes("dulal")) {
//   console.log(" i am dulal");
// } else {
//   console.log("i dont know you");
// }

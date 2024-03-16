/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((value,index) => {
    if(value.profession == "developer"){
      console.log(value)
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((value,index) => {
    if(value.profession == "developer"){
      console.log(value)
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let empObj = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern"
  }
  arr.push(empObj)
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  let changedArr = arr.filter((value,index) => value.profession != "admin")
  console.log(changedArr)

}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 11, name: "joy", age: "24", profession: "frontend devloper" },
    { id: 12, name: "prajjwal", age: "23", profession: "associate engineer" },
    { id: 13, name: "masuk", age: "25", profession: "software developer" },
  ];
  let concatArr = arr.concat(newArr)
  console.log(concatArr)


}

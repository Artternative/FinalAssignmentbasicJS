// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
let newobj = { id:5 , task: "Walk the dog" }
userTaskList.push(newobj)
userTaskList[3].task = "go to the gym"
userTaskList.pop()
let lastIndex = userTaskList[userTaskList.length-1]
console.log(lastIndex);

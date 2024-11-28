// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
let user = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
};

const handleResponse = (response) => {
    return response.json();
};
const onSuccess = (data) => {
    // console.log(data);
    
    let newUsers = data.map(user => user.name);
    console.log(newUsers);
};
// const newUsers = (name) => {
//  name.reduce(acc,cur => {
//     return acc + cur.name
//  })
// }




user().then(handleResponse).then(onSuccess).catch(error => { console.error('Error:', error);});
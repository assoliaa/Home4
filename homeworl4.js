
  // Переписать ?:

function CheckAge(age) {
    return (age >18 ? True : confirm('Родители разрешили?'));
} 

CheckAge(15);
function pow(x, n){
    let res;
    for (let i in n){
        x*n;
    }
    console.log(res);
    return res;
}

const askme =(question, yes, no)  =>{
    confirm(question)? yes():no();
}

askme("Вы согласны?", () =>{alert("Вы согласились.")}, ()=>{alert("Вы отменили выполнение.")});

let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arr);

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];
let names =users.map(element=>element.name);
console.log(names);

let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 29 };

let arr1 = [ vasya1, petya1, masha1 ];

const getAverageAge = (x) =>{ return x.reduce((r,i) => r + i.age, 0)/x.length}; 
alert(getAverageAge(arr1));
console.log(getAverageAge(arr1));

let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users2 = [ vasya, petya, masha ];

let usersMapped = (users2.map(user=>({
    fullname:`${user.name} ${user.surname}`,
    id:users2.id
})))

alert( usersMapped[0].id ) 
alert( usersMapped[0].fullname) 



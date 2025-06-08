const usersMain =
{

    userMain: {
        name: 'Max',
        age: 18,
        isAdmin: true,
    },
    sayHello(wordHello) { return "Hello " + wordHello },
}
const userList = [
    {
        name: 'Julia',
        age: 20,
        isAdmin: false,
    },

    {
        name: 'Anton',
        age: 15,
        isAdmin: false,
    },

    {
        name: 'Alex',
        age: 17,
        isAdmin: true,
    },

    {
        name: 'Steve',
        age: 25,
        isAdmin: false,
    },

    {
        name: 'Name',
        age: 43,
        isAdmin: false,
    },

]

let wordHello = "World"
console.log(usersMain.sayHello(wordHello))

let notAdminCont = 0
for (let i = 0; i < userList.length; i++) {
    if (!userList[i].isAdmin)
        {notAdminCont++}
}

console.log('Кол-во пользователей без админки: ' + notAdminCont)


// ==================================================== 101 урок
let name = 'Alex';

function Hello (name){
   return console.log('Hello ' + name)
}

Hello (name)

let numbers = [1, 14, 3, 17, 2]

for ( let i = 0; i < numbers.length; i++){
    if (numbers[i] > 10)
    {console.log(numbers[i])}
}

num1 = 2
num2 = 3
action = '+'

function calculator(num1, num2, action)
{
    let result = 0
    switch(action)
    {
        case '-':
            result = num1 - num2
            break
        case '+':
            result = num1 + num2
            break
        case '*':
            result = num1 * num2
            break
        case '/':
            result = num1 / num2
            break
    }
    console.log('Ответ:' + result)
}

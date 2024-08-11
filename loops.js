const todos = [
    {
        id: 1,
        text: 'Take out your trash',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Meeting with your boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appointment',
        isCompleted: false
    }
];

//For Loop
for (let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

for (let todo of todos) {
    console.log(todo.id)

}

//While Loop
let i = 0;
while (i <= 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

//high order array methods
//forEach,map,filter

todos.forEach(function (todo)
{
    console.log(todo.text)

});
 
const todoText = todos.map(function(todo)
    {return todo.text;
    

});
console.log(todoText);

const todoCompleted = todos.filter(function(todo)
    { return todo.isCompleted === true;

    });

    console.log(todoCompleted)


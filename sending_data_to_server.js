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

    const todosJSON = JSON.stringify(todos);
    console.log(todosJSON);


import axios from 'axios'

const url ='https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The title of this is: ${title}
        The id is: ${id}
        Is it completed?: ${completed}
    `)
}


axios.get(url).then(response => {
    const todo = response.data as Todo;

    const id = todo.id
    const title = todo.title
    const completed = todo.completed

    logTodo(id, title, completed)
})



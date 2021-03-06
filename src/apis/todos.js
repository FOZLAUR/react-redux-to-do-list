import api from './api'

export const getTodos = () => {
    return api.get('api/todos')
}

export const addTodo = (text) => {
    return api.post('api/todos', {text})
}

export const updateTodo = (id,done) => {
    return api.put(`api/todos/${id}`, {done: !done})
}

export const deleteTodo = (id) => {
    return api.delete(`api/todos/${id}`)
}
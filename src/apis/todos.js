import api from './api'

export const getAllTaskList = () => {
    return api.get('/todos')
}

export const addNewTask = (text) => {
    return api.post('/todos', {text})
}

export const deleteTask = (id) => {
    return api.delete(`/todos/${id}`)
}

export const toggleTask = (id, taskStatus) => {
    return api.put(`/todos/${id}`)
}
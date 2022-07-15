new Vue({
    el: '#app',
    //Variables
    data: {
        completedTodos: [],
        isEditing: false,
        newValue: '',
        todos: [],
        selectedIndex: null
    },
    //Functions
    methods: {
        //push inputed string to todo array
        storeTodo() {
            this.todos.push(this.todo)
            this.todo = ''
        },
        //remove an element from the array with the inputted index
        deleteTodo(index) {
            this.todos.splice(index, 1)
        },
        //replace an element from the array with newValue
        updateTodo() {
            this.todos.splice(this.selectedIndex, 1, this.newValue)
            this.isEditing = false
            this.newValue = ''
        },
        //eneables update text input
        editTodo(index, todo) {
            this.isEditing = true
            this.selectedIndex = index
        },
        //add string to completedTodo array
        completeTodo(index){
            this.completedTodos.push(index)
        }
    }
})
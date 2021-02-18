// import Todo from "../Reducers/TodoReducer"

class TodoAction{
    static Get_TODO="GET_TODO"
    static Get_TODO_SUCCESSFUL="GET_TODO_SUCCESSFUL"
    static Get_TODO_FAILED="GET_TODO_FAILED"



static getTodo(data){
    return{
        type:this.Get_TODO,
        data
    }
}

static getTodoSuccessFull(data){
    return{
        type:this.Get_TODO_SUCCESSFUL,
        data
    }
}
static getTodoFailed(data){
    return{
        type:this.Get_TODO_FAILED,
        data
    }
}

}
export default TodoAction;
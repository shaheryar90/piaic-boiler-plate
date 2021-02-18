import TodoAction from '../Actions/todoActions'

function Todo(state = { name: "shaheryar" }, action) {
    switch (action.type) {
      case TodoAction.GET_TODO:
        return {
          ...state,
          text: "TODO_ADDED",
        };
      case "DELETE_TODO":
        return {
          ...state,
          text: "TODO_DELETED",
        };
      default:
        return state;
  
        break;
    }
  }

  export default  Todo
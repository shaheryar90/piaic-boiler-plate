function User(state = { name: "Bilal" }, action) {
    switch (action.type) {
      case "ADD_User":
        return {
          ...state,
          text: "User_ADDED",
        };
      case "User_TODO":
        return {
          ...state,
          text: "User_DELETED",
        };
      default:
        return state;
  
        break;
    }
  }

  export default User
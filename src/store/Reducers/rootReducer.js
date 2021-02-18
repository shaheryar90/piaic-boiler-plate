import { waitForDomChange } from "@testing-library/react";
import { combineReducers } from "redux";
import Todo  from "./TodoReducer";
import User  from "./UserReducer";




const rootReducer = combineReducers({
    Todo,
    User,
  });


export default rootReducer;

// ye jo todo ya user ka reducer  hai woh 
// Todo:Todo
// User:User ke against aee ga
//  Todo reducer Todo ki key ke against hai
//  User reducer User ki key ke against hai
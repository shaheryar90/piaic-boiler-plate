import { createStore} from "redux";
import rootReducer from "./Reducers/rootReducer";



 const Store = createStore(rootReducer, {});

 export default Store;

// store mein phele 
//store ki config krle


//Reducer
//aik se zada reducer ho tou combineReducer IMPORT KRTE HAI
//Dispatch mein jo likha hai woh usko utaaa kr sb reducer mein lekr jata hai jo neeche hai woh reducer hai

//state={} ye default state hai

//mene todos todos ki keys against rakhi hai aur users ke against
//store ka andr default state ye object ahaje ga jo provide kra hai parameter



//store.getState se puraaa redux store laa deta hai but hmne store mein paramteer empty pass kraaa hai that why woh {} ye rturn krrh hai

//store ke parameter mein reducer ,aur default sstore deta hai aur default store ye {} hai default store
//output jo aee ga woh Todos:{....} Users:{...} aee ga
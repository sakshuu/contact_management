import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { userReducer } from "./reducers/userReducer"
const localdata = JSON.parse(localStorage.getItem("auth"))

const rootReducer = combineReducers({
    allUsers: userReducer
})

const reduxStore = createStore(
    rootReducer,
    { 
         allUsers:{
       login: localdata,
       reduxContacts:[]
        }
    },
    composeWithDevTools(applyMiddleware(thunk))
)
export default reduxStore
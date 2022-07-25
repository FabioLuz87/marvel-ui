import { combineReducers } from "redux"
import MarvelReducer from "./marvel/reducer"
import ThemeReducer from "./theme/reducer"

const reducers = combineReducers({
    theme: ThemeReducer,
    marvel: MarvelReducer
})

export default reducers
export type State = ReturnType<typeof reducers>
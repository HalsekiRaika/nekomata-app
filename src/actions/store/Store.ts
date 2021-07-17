import { combineReducers, createStore } from "redux";
import { IStateEntity } from "../../states/IStateEntity";
import homeTileReducer from "../reduce/HomeTileReducer";

const combinedReducer = combineReducers<IStateEntity>({
    upcomingEntities: homeTileReducer
});

export const store = createStore(combinedReducer);

export default store;
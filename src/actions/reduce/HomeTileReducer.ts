import { IUpcomingEntityList } from "../../states/IUpcomingEntity";
import { createReducer } from "deox";

import {
    onListup,
    onToggleNotify
} from "../HomeTileAction";

const initList: IUpcomingEntityList = {
    list: []
};

const homeTileReducer = createReducer(initList, actionHandler => [
    actionHandler(onListup, (state, action) => ({
        ...state,
        list: action.payload
    })),

    actionHandler(onToggleNotify, (state, uuid) => {
        const upcomings = [...state.list];
        const targetObj = upcomings.find(live => live._uuid === uuid.payload);
        if (!targetObj) { return state; }
        targetObj.canNotification = !targetObj.canNotification;

        return { ...state, targetObj };
    }),
]);

export default homeTileReducer;
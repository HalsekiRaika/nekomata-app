import moment from "moment";
import { Dispatch } from "redux";
import { createActionCreator } from "deox";

import { IUpcomingEntity } from "../states/IUpcomingEntity";

export const enum ActionType {
    LIST_UP = "list-up-upcoming-live",
    TOGGLE_NOTIFY = "toggle-notify-upcoming-live"
}

/// Actionの定数の命名は接頭辞を"on"で始めてください。
export const onListup = createActionCreator(ActionType.LIST_UP, resolve => (arg: IUpcomingEntity[]) => resolve(arg));
export const onToggleNotify = createActionCreator(ActionType.TOGGLE_NOTIFY, resolve => (uuid: String) => resolve(uuid));

const debugData: IUpcomingEntity[] = [
    {
        _uuid: "5b23b234-e68a-4ff1-9ff2-67553156405a",
        title: "!!DEBUG-DATA!!",
        videoId: "zPqQcabHMR4",
        startTime: moment().format("MM-DD HH:mm:ss"),
        publishedTime: moment().add(-1, "day").format("MM-DD HH:mm:ss"),
        thumbnail: "https://i.ytimg.com/vi/zPqQcabHMR4/maxresdefault_live.jpg",
        channelId: "UCqm3BQLlJfvkTsX_hvm0UmA",
        channelName: "Watame Ch. 角巻わため",
        canNotification: false,
        isUpdated: false
    },
    {
        _uuid: "5b23b234-e68a-4ff1-9ff2-67553156405b",
        title: "!!DEBUG-DATA!!",
        videoId: "zPqQcabHMR4",
        startTime: moment().format("MM-DD HH:mm:ss"),
        publishedTime: moment().add(-1, "day").format("MM-DD HH:mm:ss"),
        thumbnail: "https://i.ytimg.com/vi/zPqQcabHMR4/maxresdefault_live.jpg",
        channelId: "UCqm3BQLlJfvkTsX_hvm0UmA",
        channelName: "Watame Ch. 角巻わため",
        canNotification: false,
        isUpdated: false
    },
    {
        _uuid: "5b23b234-e68a-4ff1-9ff2-67553156405c",
        title: "!!DEBUG-DATA!!",
        videoId: "zPqQcabHMR4",
        startTime: moment().format("MM-DD HH:mm:ss"),
        publishedTime: moment().add(-1, "day").format("MM-DD HH:mm:ss"),
        thumbnail: "https://i.ytimg.com/vi/zPqQcabHMR4/maxresdefault_live.jpg",
        channelId: "UCqm3BQLlJfvkTsX_hvm0UmA",
        channelName: "Watame Ch. 角巻わため",
        canNotification: false,
        isUpdated: false
    },
    {
        _uuid: "5b23b234-e68a-4ff1-9ff2-67553156405d",
        title: "!!DEBUG-DATA!!",
        videoId: "zPqQcabHMR4",
        startTime: moment().format("MM-DD HH:mm:ss"),
        publishedTime: moment().add(-1, "day").format("MM-DD HH:mm:ss"),
        thumbnail: "https://i.ytimg.com/vi/zPqQcabHMR4/maxresdefault_live.jpg",
        channelId: "UCqm3BQLlJfvkTsX_hvm0UmA",
        channelName: "Watame Ch. 角巻わため",
        canNotification: false,
        isUpdated: false
    }
]

export const dispatchGetUpcomingTileList = (dispatch: Dispatch): void => {
    dispatch(onListup(debugData));
}
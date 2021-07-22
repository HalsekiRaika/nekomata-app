import {IUpcomingEntity} from "../../states/IUpcomingEntity";

export default interface ICore {
    loadCache: () => Promise<IUpcomingEntity[]>,
    saveCache: (entity: IUpcomingEntity) => Promise<IUpcomingEntity[]>,
    deleteCache: (entityId: string) => Promise<IUpcomingEntity[]>,
    clearCache: () => Promise<IUpcomingEntity[]>,
}

declare global {
    interface window {
        core: ICore;
    }
}
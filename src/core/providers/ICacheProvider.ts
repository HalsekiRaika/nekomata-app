import { IUpcomingEntity } from "../../states/IUpcomingEntity";

export default interface ICacheProvider {
    loadCache: () => Promise<IUpcomingEntity[]>,
    saveCache: (entity: IUpcomingEntity) => Promise<IUpcomingEntity[]>,
    deleteCache: (entityId: string) => Promise<IUpcomingEntity[]>,
    clearCache: () => Promise<boolean>,
}

declare global {
    interface Window {
        core: ICacheProvider;
    }
}
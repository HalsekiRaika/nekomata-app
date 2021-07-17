/// この構造体インターフェースはホーム画面に表示するタイルのためのものです。
/// WebAPIから入手したライブのデータは全て、UUIDによって識別されることを留意して下さい。
export interface IUpcomingEntity {
    // Base Information
    _uuid: string,
    title: string,
    videoId: string,
    thumbnail: string,
    channelName: string,
    channelId: string,

    // LiveInfo
    startTime: string,
    publishedTime: string,

    // Notification
    canNotification: boolean,
    isUpdated: boolean,

}

export interface IUpcomingEntityList {
    list: IUpcomingEntity[]
}
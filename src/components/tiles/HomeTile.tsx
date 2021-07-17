import React, { useCallback, useMemo, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { IUpcomingEntity } from "../../states/IUpcomingEntity";
import { 
    TileBaseInfo, 
    TileBody, 
    TileChannel, 
    TileLiveInfo, 
    TileMain, 
    TilePublishedTime, 
    TileStartTime, 
    TileThumbnail, 
    TileTitle
} from '../styles/HomeTileStyle';

const HomeTile: React.FC<{dataEntity: IUpcomingEntity}> = props => {
    const { dataEntity } = props;
    const dispatch = useDispatch();
    //const onThumbnailMouseHover = useMemo

    const onTileClick = useCallback(() => {
        /** Todo: クリック時の動作を追加 */
    }, []);

    return (
      <TileMain onClick={onTileClick}>
        <TileThumbnail>
          <img src={dataEntity.thumbnail} alt={dataEntity._uuid} width="360px" height="202px" />
        </TileThumbnail>
        <TileBody>
          <TileBaseInfo>
            <TileTitle>{dataEntity.title}</TileTitle>
            <TileChannel>{dataEntity.channelName}</TileChannel>
          </TileBaseInfo>
          <TileLiveInfo>
            <TileStartTime>{dataEntity.startTime}</TileStartTime>
            <TilePublishedTime>{dataEntity.publishedTime}</TilePublishedTime>
          </TileLiveInfo>
        </TileBody>
      </TileMain>
    );
}

export default HomeTile;
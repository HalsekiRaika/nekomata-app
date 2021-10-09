import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dispatchGetUpcomingTileList } from '../../actions/HomeTileAction';
import { IStateEntity } from '../../states/IStateEntity';
import { IUpcomingEntity, IUpcomingEntityList } from '../../states/IUpcomingEntity';
import HomeTile from '../tiles/HomeTile';
import { styled } from "../styles/ThemeStyle";

const createTileList = (upcomings: IUpcomingEntity[]): JSX.Element[] => {
    return upcomings.map(entity => { return <HomeTile key={entity._uuid} dataEntity={entity} /> });
}

export const HomeTileGridList: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => { dispatchGetUpcomingTileList(dispatch); }, []);

    const upcomingEntities = useSelector<IStateEntity, IUpcomingEntityList>(o => o.upcomingEntities);
    const upcomingEntitiesElem = useMemo(() => { return createTileList(upcomingEntities.list) }, [upcomingEntities.list]);

    return (
        <TileGridListWrapper>
            <TileGridList>
                {upcomingEntitiesElem}
            </TileGridList>
        </TileGridListWrapper>
    );
}

const TileGridListWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 12px);
  align-content: center;
  padding-top: 16px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    overflow: hidden;
    background: rgba(84, 87, 92, 0.7);
    width: 10px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
  }

  &::-webkit-scrollbar-button {

  }

  &::-webkit-scrollbar-track {
    background: rgba(89, 92, 97, 0.8);
  }

  &::-webkit-scrollbar-track:start {
    background: #333;
  }

  &::-webkit-scrollbar-thumb {
    overflow:hidden;
    border-radius:3px;
    -webkit-border-radius:3px;
    background: rgba(255, 255, 255, 0.7);
  }

  &::-webkit-scrollbar-corner {
    overflow:hidden;
    border-radius:3px;
    -webkit-border-radius:3px;
    background: rgba(255, 255, 255, 0.7);
  }
`;

const TileGridList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 30px;
  padding-left: 16px;
  padding-right: 16px;
`;

export default HomeTileGridList;
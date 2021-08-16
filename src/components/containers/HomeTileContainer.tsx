import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dispatchGetUpcomingTileList } from '../../actions/HomeTileAction';
import { IStateEntity } from '../../states/IStateEntity';
import { IUpcomingEntity, IUpcomingEntityList } from '../../states/IUpcomingEntity';
import { TileContainer, TileGridList } from '../styles/HomeTileStyle';
import HomeTile from '../tiles/HomeTile';
import { Header } from "../styles/BaseStyle";

const createTileList = (upcomings: IUpcomingEntity[]): JSX.Element[] => {
    return upcomings.map(entity => { return <HomeTile key={entity._uuid} dataEntity={entity} /> });
}

export const HomeTileContainer: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => { dispatchGetUpcomingTileList(dispatch); }, []);

    const upcomingEntities = useSelector<IStateEntity, IUpcomingEntityList>(o => o.upcomingEntities);
    const upcomingEntitiesElem = useMemo(() => { return createTileList(upcomingEntities.list) }, [upcomingEntities.list]);

    return (
        <TileContainer>
            <TileGridList>{upcomingEntitiesElem}</TileGridList>
        </TileContainer>
    );
}

export default HomeTileContainer;
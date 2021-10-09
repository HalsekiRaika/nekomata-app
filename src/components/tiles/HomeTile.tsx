import React, { useCallback, useMemo, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { IUpcomingEntity } from "../../states/IUpcomingEntity";
import { styled } from "../styles/ThemeStyle";

const HomeTile: React.FC<{dataEntity: IUpcomingEntity}> = props => {
    const { dataEntity } = props;
    const dispatch = useDispatch();
    //const onThumbnailMouseHover = useMemo

    const onTileClick = useCallback(() => {
        /** Todo: クリック時の動作を追加 */
    }, []);

    return (
      <Container onClick={onTileClick}>
        <Thumbnail>
          <img src={dataEntity.thumbnail} alt={dataEntity._uuid + "_thumbnail_image"} width="360px" height="202px" />
        </Thumbnail>
        <Body>
          <BaseInfo>
            <Title>{dataEntity.title}</Title>
            <Channel>{dataEntity.channelName}</Channel>
          </BaseInfo>
          <LiveInfo>
            <StartTime>{dataEntity.startTime}</StartTime>
            <PublishedTime>{dataEntity.publishedTime}</PublishedTime>
          </LiveInfo>
        </Body>
      </Container>
    );
}

const Container = styled.div`
  display: flex;
  height: 400px;
  max-width: 360px;
  align-items: center;
  
  margin-right: 8px;
  margin-left: 8px;
  margin-bottom: 16px;
  
  padding-top: 6px;
  padding-left: 6px;
  padding-right: 6px;
  
  flex-direction: column;
  transition: all;
  transition-duration: 500ms;
  background-color: ${(props): string => props.theme.EMPHASIS_1};
  
  &:hover {
    background-color: ${(props): string => props.theme.EMPHASIS_2};
  }
`;

const Thumbnail = styled.div`
  margin-bottom: 15px;
`;

const Body = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  
  align-items: flex-start;
  padding-top: 8px;
  padding-left: 6px;
  padding-right: 6px;
`;

const BaseInfo = styled.div`
  display: flex;
  float: left;
  flex-direction: column;
  margin-bottom: 12px;
`;

const Title = styled.div`
  font-size: 1.2em;
  color: ghostwhite;
  margin-bottom: 8px;
`;

const Channel = styled.div`
  font-size: 0.8em;
  color: ghostwhite;
`;

const LiveInfo = styled.div`
  color: ghostwhite;
`;

const PublishedTime = styled.div`
  color: ghostwhite;
`;

const StartTime = styled.div`
  color: ghostwhite;
`;

export default HomeTile;
import { styled } from "./DefaultStyle"

export const TileContainer = styled.div`
  background-color: #2F3136;
  margin: 10px auto 0 auto;
  width: 100%;
  height: calc(100vh - 12px);
  align-content: center;
`;

export const TileGridList = styled.div`
  display: grid;
  padding: 8px 14px;
  margin: 4px;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  grid-gap: 5px;
  align-content: center;
`;

export const TileMain = styled.div`
  display: flex;
  min-width: 370px;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  border-radius: 1%;
  border: 2px solid transparent;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

export const TileThumbnail = styled.div`
`;

export const TileBody = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TileBaseInfo = styled.div`
  display: flex;
  float: left;
  flex-direction: column;
`;

export const TileTitle = styled.div`
  font-size: 14px;
  color: ghostwhite;
`;

export const TileChannel = styled.div`
  font-size: 8px;
  color: ghostwhite;
`;

export const TileLiveInfo = styled.div`
  color: ghostwhite;
`;

export const TilePublishedTime = styled.div`
  color: ghostwhite;
`;

export const TileStartTime = styled.div`
  color: ghostwhite;
`;
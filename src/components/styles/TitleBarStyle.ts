import {styled} from "./ThemeStyle";

export const TitleBarStyle = styled.div`
  top: 0;
  width: 100%;
  height: 20px;
  background-color: #2F3136;
  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
  -webkit-app-region: drag;
`;

export const TitleBarButton = styled.div`
  top: 0;
  width: 30px;
  height: 20px;
  float: right;
  background-color: #2F3136;
  cursor: pointer;
  -webkit-app-region: no-drag;
  
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const TitleBarExitButton = styled.div`
  top: 0;
  width: 30px;
  height: 20px;
  background-color: #2F3136;
  cursor: pointer;
  align-items: center;
  -webkit-app-region: no-drag;

  &:hover {
    background-color: rgba(244, 67, 54, 0.5);
  }
`;
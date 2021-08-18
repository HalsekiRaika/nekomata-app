import {styled} from "./ThemeStyle";

export const TitleBarStyle = styled.div`
  top: 0;
  height: 20px;
  background-color: #2F3136;
  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
  -webkit-app-region: drag;
`;

export const TitleBarButton = styled.div`
  top: -4px;
  width: 30px;
  height: 20px;
  float: right;
  background-color: #2F3136;
  cursor: pointer;
  display: flex;
  justify-content: center;
  -webkit-app-region: no-drag;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const TitleBarExitButton = styled.div`
  top: -4px;
  width: 30px;
  height: 20px;
  background-color: #2F3136;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-app-region: no-drag;

  &:hover {
    background-color: rgba(244, 67, 54, 0.5);
  }
`;
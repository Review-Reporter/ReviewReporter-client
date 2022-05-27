import styled, { css } from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5'

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 20;
`;

const PopUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30rem;
  height: 10rem;
  padding: 1rem;
  background: white;
  border-radius: 0.2rem;

  ${props => {
    if (!props.isGraph) return;
    
    return css`
      background: ${props.theme.dark_bg_color};
      width: 100%;
      max-width: 1200px;
      height: auto;
      margin: 1rem;
    `
  }}
`;

const CloseIcon = styled(IoCloseOutline)`
  position: absolute;
  right: 0.1rem;
  top: 0.2rem;
  color: #666666;

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }

  ${props => {
    if (!props.isGraph) return;
    
    return css`
      color: white;
      top: 0.5rem;
      right: 0.7rem;
    `
  }}
`;

const Text = styled.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.4;
  letter-spacing: 1.5;
  width: 100%;
`;

const PopUp = ({ isVisible, setIsVisible, graph, children }) => {
  if (!isVisible) return null;
  return (
    <Background>
      <PopUpContainer
        isGraph={graph}
      >
        <CloseIcon size="30"
          title="클릭 시 이미지가 축소됩니다."
          isGraph={graph}
          onClick={()=>setIsVisible("")}
        />
        <Text>{children}</Text>
      </PopUpContainer>
    </Background>
  )
};

export default PopUp;
import styled, { keyframes } from "styled-components";
import Switch from "react-switch";

const fade = keyframes`
  /* from { opacity: 0} to { opacity: 1} */
  0% { opacity:   0}
  50% { opacity:  1}
  100% { opacity:  1;}
`;

const fadeadndisplay = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const pulse = keyframes`
  0% { box-shadow: #ff69b4 0 0 12px 12px;}
  75% { box-shadow: #ff69b4 0 0 12 16px}
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 20px;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeadndisplay} 1s ease-in-out both;
  animation-delay: 2s;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  animation: ${fadeadndisplay} 3s ease-in-out;
  animation-fill-mode: both;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 22px;
  margin-bottom: 10px;
  margin-left: 30px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  opacity: 0;
  animation: ${fadeadndisplay} .5s ease-in-out;
  animation-fill-mode: both;
`;

export const SwitchToggle = styled(Switch)`
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const TextWaiting = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 22px;
  margin-bottom: 10px;
  margin-left: 30px;
`;
export const TextSecondary = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.text};
  animation: ${fadeadndisplay} 3s ease-in-out;
  margin-top: 10px;
  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const TextMessage = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 20px;
  /* animation: ${fade} 8s ease-in-out; */
`;

export const RowCode = styled.div`
  padding: 40px;
  width: 500px;
  min-height: 100px;
  height: auto;
  background: ${(props) => props.theme.colors.codebox};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  position: absolute;
  bottom: 0px;
  box-shadow: var(--shadow);

`;

export const CodeText = styled.span`

`;

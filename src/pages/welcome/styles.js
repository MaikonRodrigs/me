import styled, { keyframes } from "styled-components";
import Switch from "react-switch";

const fade = keyframes`
  from { opacity: 0} to { opacity: 1}
`;

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  h1 {
    color: ${(props) => props.theme.colors.text};
    animation: ${fade} 4s ease-in-out;
  }
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 22px;
  margin-bottom: 10px;
  margin-left: 30px;
  animation: ${fade} 5s ease-in-out;
`;

export const TextSecondary = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.text};
  animation: ${fade} 8s ease-in-out;

`;

export const SwitchToggle = styled(Switch)`
  margin-bottom: 20px;
  margin-top: 10px;
  animation: ${fade} 2s ease-in-out;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.colors.text};
  margin-top: 20px;
  cursor: pointer;
  animation: ${fade} 6s ease-in-out;
`;

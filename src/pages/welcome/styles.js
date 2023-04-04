import styled, { keyframes } from "styled-components";
import Switch from "react-switch";
import { VisualStudio } from "@styled-icons/boxicons-logos/VisualStudio";

const fade = keyframes`
  /* from { opacity: 0} to { opacity: 1} */
  0% { opacity:   0}
  50% { opacity:  1}
  100% { opacity:  0;}
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

  @media (max-width: 720px) {
    width: 85%;
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 20px;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeadndisplay} 1s ease-in-out both;
  animation-delay: 3s;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  animation: ${fadeadndisplay} 2s ease-in-out;
  animation-fill-mode: both;

  @media (max-width: 720px) {
    font-size: 22px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const TitleFinish = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  animation: ${fade} 5s ease-in-out;
  animation-fill-mode: both;

  @media (max-width: 720px) {
    font-size: 22px;
    text-align: center;
    margin-bottom: 20px;
  }
`;


export const Text = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 22px;
  margin-bottom: 10px;
  /* margin-left: 30px; */
  @media (max-width: 720px) {
    font-size: 22px;
    text-align: center;
    margin-bottom: 20px;
    position: absolute;
    top: 30px;
    padding: 20px 0;
  }
`;

export const TextThemeActive = styled.span`
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
  animation: ${fadeadndisplay} 0.5s ease-in-out;
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
  /* margin-left: 30px; */

  @media (max-width: 720px) {
    font-size: 22px;
    text-align: center;
    margin-bottom: 20px;
  }
`;
export const TextSecondary = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  animation: ${fadeadndisplay} 3s ease-in-out;
  margin-top: 10px;
  span {
    text-decoration: underline;
    cursor: pointer;
    font-weight: 800;
  }
`;

export const TextMessage = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 20px;

  @media (max-width: 720px) {
    text-align: center;
    margin-top: -180px;
  }
`;

export const TextFun = styled.span`
  font-size: 17px;
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 20px;

  @media (max-width: 720px) {
    text-align: center;
    margin-top: -180px;
  }
`;

export const RowCode = styled.div`
  padding: 20px 20px 40px;
  width: 500px;
  min-height: 100px;
  height: auto;
  background: ${(props) => props.theme.colors.codebox};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  position: absolute;
  bottom: 0px;
  box-shadow: var(--shadow);

  @media (max-width: 720px) {
    width: 90%;
  }
`;

export const CodeText = styled.span`
  color: red;
`;

export const Vscode = styled(VisualStudio)`
  width: 20px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const CodeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 15px;
`;

export const Dots = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const IconClosed = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => `${color}`};
  border-radius: 9999px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
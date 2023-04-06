import styled from "styled-components";
import { CloseCircle } from "@styled-icons/remix-line/CloseCircle";

export const Container = styled.div`
  /* display: none; */
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  
  /* display: flex; */
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 20;
  
  flex-direction: column;
  display: ${({ display }) => (display ? "flex" : "none")};
`;
export const Row = styled.div`

`;
export const Card = styled.div`
  height: 1000px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    width: 100%;
    border-radius: 40px;
    width: 1200px;
    height: 100%;
  }
`;

export const Infos = styled.div`
  padding-top: 100px; ;
`;
export const Text = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;
export const Description = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

export const CloseIcon = styled(CloseCircle)`
  width: 40px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 100px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

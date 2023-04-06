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
export const Row = styled.div``;
export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: var(--shadow);
  width: auto;
  height: auto;
  border-radius: 15px;
  padding: 40px;
`;

export const ImgProject = styled.img`
  margin-left: -10px;
`;

export const Infos = styled.div`
  /* padding-top: 100px; */
  display: flex;
  justify-content: space-between;
  width: 86%;
  /* margin-left: 40px; */
`;
export const Text = styled.h1`
  color: ${({ theme }) => theme.colors.text};
`;

export const Url = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: underline;
  cursor: pointer;
`;

export const ProjectLink = styled.div``;
export const DescriptionRow = styled.div``;
export const Description = styled.div`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;

  strong {
    font-size: 26px;
  }

  span {
    font-size: 14px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.text_secondary};
  }
`;

export const CloseIcon = styled(CloseCircle)`
  width: 40px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

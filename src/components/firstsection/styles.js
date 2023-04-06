import styled from "styled-components";
import { device } from "@/styles/breakpoints";
import { VisualStudio } from "@styled-icons/boxicons-logos/VisualStudio";
import SyntaxHighlighter from "react-syntax-highlighter";

export const Container = styled.div`
  width: 100%;
  position: relative;
  `;

export const Row = styled.div`
  background: ${({ theme }) => theme.colors.section_two};
  position: absolute;
  height: 550px;
  width: 100%;
  bottom: -200px;
  @media ${device.laptop} {
    background: none;
  }

`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
  margin-top: 60px;
  &::after {
    content: "/>";
    margin-left: 20px;
  }
`;

export const Code = styled.div`
  height: 900px;
  width: 100%;

  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;

  @media ${device.laptop} {
    height: 700px;
  }
  @media ${device.laptop} {
    height: 700px;
  }
`;

export const RowSyntax = styled.div`
  margin-top: 50px;
  position: relative;
  width: 100%;
  margin-left: -5px;

  @media (max-width: 960px) {
    margin-top: 20px;
  }
`;

export const SYNTAX = styled(SyntaxHighlighter)`
  box-shadow: var(--shadow);
  width: 100%;
  text-overflow: ellipsis;

  @media ${device.tabletM} {

    font-size: 20px !important;
  }
  @media ${device.mobileM} {
    font-size: 15px !important;
  }

`;

export const Vscode = styled(VisualStudio)`
  width: 24px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const CodeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  padding: 30px;
`;

export const Dots = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const IconClosed = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${({ color }) => `${color}`};
  border-radius: 9999px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

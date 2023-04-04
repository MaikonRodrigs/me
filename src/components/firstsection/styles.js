import styled from "styled-components";
import { VisualStudio } from "@styled-icons/boxicons-logos/VisualStudio";
import SyntaxHighlighter from "react-syntax-highlighter";

export const Container = styled.div`
  height: 680px;
  width: 100%;
  position: relative;
  background: ${({ theme }) => theme.colors.section_two};
  @media (max-width: 960px) {
    background: none;
    height: auto;
  }
`;

export const Row = styled.div`
  position: absolute;
  margin-top: -490px;
  width: 100%;

  @media (max-width: 425px) {
    margin-top: -20px;
  }

  @media (max-width: 720px) {
    margin-top: -370px;
  }

  @media (max-height: 720px) {
    margin-top: -270px;
  }

`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
  margin-left: -7px;
  &::after {
    content: "/>";
    margin-left: 20px;
  }
`;

export const Code = styled.div`
  height: 900px;
  width: 100%;
`;

export const Wrangler = styled.div`
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 960px;
  }

  @media (min-width: 1025px) {
    max-width: 1200px;
  }
`;

export const RowSyntax = styled.div`
  margin-top: 50px;
  position: relative;
  width: 100%;
  margin-left: -10px;

  @media (max-width: 960px) {
    margin-top: 20px;
  }
`;

export const SYNTAX = styled(SyntaxHighlighter)`
  box-shadow: var(--shadow);
  width: 100%;
  text-overflow: ellipsis;
  @media (max-width: 960px) {
    width: 100%;
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

import styled, { css } from "styled-components";
import { Yarn } from "@styled-icons/fa-brands/Yarn";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Firebase } from "@styled-icons/boxicons-logos/Firebase";
import { Hyper } from "@styled-icons/simple-icons/Hyper";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.section_two};

  margin-top: -60px;
  position: relative;
  padding-bottom: 140px;
`;

export const Row = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const RowText = styled.div`

`;
export const Title = styled.h1`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  span {
    margin-left: 20px;
  }
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  /* background: black;
  padding: 1px 10px;
  border-radius: 5px; */
`;

const ICONS = css`
  width: 30px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-right: 10px;
`;

export const Icons = styled.div`
  height: 0px;
  margin-top: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

export const YarnIcon = styled(Yarn)`
  ${ICONS}
`;
export const StyledcomponentsIcon = styled(Styledcomponents)`
  ${ICONS}
`;
export const FirebaseIcon = styled(Firebase)`
  ${ICONS}
`;
export const HyperIcon = styled(Hyper)`
  ${ICONS}
`;

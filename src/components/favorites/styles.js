import styled, { css } from "styled-components";
import { device } from "@/styles/breakpoints";
import { Yarn } from "@styled-icons/fa-brands/Yarn";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Firebase } from "@styled-icons/boxicons-logos/Firebase";
import { Hyper } from "@styled-icons/simple-icons/Hyper";
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.section_two};
  @media ${device.tablet} {
    /* background: none; */
  }
`;

export const Row = styled.div`
  padding: 200px 0 40px;
  position: relative;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  @media ${device.laptop} {
    padding: 40px 0 40px;
    margin-top: 380px;
  }

  @media ${device.tabletM} {
    padding: 40px 0 90px;
    margin-top: 320px;
  }
  @media ${device.mobileM} {
    padding: 40px 0 90px;
    margin-top: 120px;
  }
  @media ${device.tablet} {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const FavoritesRow = styled.div`
  @media ${device.tabletM} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const RowText = styled.div``;
export const Title = styled.h1`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  span {
    margin-left: 20px;
  }
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
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
  &:hover {
    opacity: 0.8;
  }
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
export const ReactLogoIcon = styled(ReactLogo)`
  ${ICONS}
`;

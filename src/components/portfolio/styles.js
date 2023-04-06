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
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const RowText = styled.div`
`;
export const Title = styled.h1`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  span {
    margin-left: 20px;
  }
`;

export const Items = styled.div`
  display: flex;
  padding: 30px 0;
  gap: 10px;
`;

export const ImageRow = styled.div`
  width: 60px;
  height: 60px;
  padding: 0 10px;
  border-radius: 4px;
  /* filter: blur(1px) grayscale(100%); */
  cursor: pointer;
  margin-left: -20px;

  clip-path: polygon(20% 0, 100% 0%, 80% 100%, 0% 100%);
  background-color: ${({ theme }) => theme.colors.section_one};
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 22px;
  }

  &:hover {
    filter: unset;
    width: 90px;
    height: 150px;
    margin-top: -100px;
    border-radius: 20px;
    /* margin-right: 20px;
    margin-left: 20px; */
    border: 1px solid white;
  }
`;

const ICONS = css`
  width: 50px;
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

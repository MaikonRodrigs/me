import styled from "styled-components";
import { device } from "@/styles/breakpoints";
import Switch from "react-switch";

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  background-color: transparent;
`;

export const Row = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RowSwitch = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
`;

export const SwitchToggle = styled(Switch)``;

export const TextTheme = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: 10px;

`;

export const RowNavigation = styled.div`
  display: flex;
  a {
    color: ${({ theme }) => theme.colors.secondary};
    margin-left: 20px;
    text-decoration: none;
    &:hover {
      font-weight: 600;
    }
    @media ${device.mobileL} {
    display: none;
  }
  }
`;

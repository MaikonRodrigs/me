import styled from "styled-components";
import Switch from "react-switch";

export const Container = styled.div`
  position: relative;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 960px;
  }

  @media (min-width: 1025px) {
    max-width: 1200px;
  }
`;
export const Row = styled.div`
  position: absolute;
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
  }
`;

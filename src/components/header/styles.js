import styled from "styled-components";
import Switch from "react-switch";

export const Container = styled.div``;
export const Row = styled.div`
  height: 120px;
  width: 100%;
 
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

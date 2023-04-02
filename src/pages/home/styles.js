import styled, { keyframes } from "styled-components";
import Switch from "react-switch";

const fade = keyframes`
  from { opacity: 0} to { opacity: 1}
`;


export const SwitchToggle = styled(Switch)`
  margin-bottom: 20px;
  margin-top: 10px;
  animation: ${fade} 2s ease-in-out;
`;
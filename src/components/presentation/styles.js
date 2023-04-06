import styled, { keyframes, css } from "styled-components";
import { Github, Behance, Linkedin } from "@styled-icons/boxicons-logos/";

const fade = keyframes`
  from { opacity: 0} to { opacity: 1}
`;

const pulse = keyframes`
  0% { box-shadow: #5c555c 0 0 12px 12px;}
  75% { box-shadow: #5c555c 0 0 12 16px}
`;

export const Container = styled.div``;

export const Row = styled.div`
  margin: 0 auto;
  height: 100%;
  padding-top: 50px;
  position: relative;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const RowInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const RowTexts = styled.div``;
export const Text = styled.div`
  color: ${({ theme }) => theme.colors.text_secondary};
  display: flex;
  align-items: center;
  @media (max-width: 960px) {
    
  }
`;
export const Title = styled.div`
  font-size: 82px;
  color: ${({ theme }) => theme.colors.secondary};
  @media (max-width: 960px) {
    
    font-size: 52px;
  }
`;
export const Avatar = styled.img`
  border-radius: 999px;
  width: 140px;
  margin-right: 50px;
  animation: ${pulse} 6s infinite;
  cursor: progress;
 

  @media (max-width: 960px) {
    width: 100px;
    margin: 40px 0 20px 0;
  }
`;

const ICONS = css`
  width: 30px;
  margin-top: 30px;
  margin-right: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 960px) {
    width: 50px;
  }
`;

export const RowIcons = styled.div`
  display: flex;

  @media (max-width: 960px) {
    justify-content: center;
    justify-content: flex-start;
  }
`;

export const GithubIcon = styled(Github)`
  ${ICONS}
`;
export const LinkedinIcon = styled(Linkedin)`
  ${ICONS}
  margin-bottom: 2px;
`;
export const BehancIcon = styled(Behance)`
  ${ICONS}/* margin-bottom: -3px; */
`;

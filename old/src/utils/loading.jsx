import React from 'react';
import styled, { keyframes } from "styled-components";

const BounceAnimation = keyframes`
  0% { margin-bottom: 0 }
  50% { margin-bottom: 1rem }
  100% {margin-bottom: 0 }
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vmax;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: ${(props) => props.theme.colors.background};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 30%;
  padding: 20px;
`;

export const Dot = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0.25rem;
  z-index: 10;

  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${({ delay }) => `${delay}`};
`;

export const LoadingIcons = () => {
  return (
    <Wrapper >
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
      <Dot delay="0.3s" />
    </Wrapper >
  )
}

export const LoadingPage = () => {
  return (
    <Container >
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
      <Dot delay="0.3s" />
    </Container >
  )
}
import React from 'react';
import styled, { keyframes } from "styled-components";
import { Spinner3 } from '@styled-icons/icomoon/Spinner3'

const BounceAnimation = keyframes`
  0% { margin-bottom: 0 }
  50% { margin-bottom: 1rem }
  100% {margin-bottom: 0 }
`;

const rotate = keyframes`
	0% {
    transform: rotate(0deg);
	}

	100% {
    transform: rotate(360deg);
	}
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
  padding: 40px 0;

  position: fixed;
  top: 30%;
  padding: 20px;
`;

const Dot = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0.25rem;
  z-index: 10;

  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${({ delay }) => `${delay}`};
`;

const SpinnerIcon = styled(Spinner3)`
  color: ${(props) => props.theme.colors.secondary};
  width: 30px;
  margin-bottom: 40px;
  animation: ${rotate} 1s linear infinite;
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

export const LoadingSpinner = () => {
  return (
    <Wrapper>
      <SpinnerIcon />
    </Wrapper>
  )
}
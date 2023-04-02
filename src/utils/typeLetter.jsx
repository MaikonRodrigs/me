import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

export function TypeLetter(props) {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(false)

  const TypeDisplay = (text, i = 0) => {
    if (i < text.length) {
      setShowCursor(true);

      setText(text.slice(0, i + 1))
      setTimeout(() => TypeDisplay(text, i + 1), 60)

    } else if (i >= text.length && props?.noCursor) {
      setShowCursor(false);
    }
  }

  useEffect(() => {
    setTimeout(() => TypeDisplay(props.text), props?.delay ?? 200)
  }, [])

  return (
    <>
      <Container align={props.align}>
        {text}
        {showCursor && (
          <Cursor>|</Cursor>
        )}
      </Container>
    </>
  )
}

const cursorAnimation = keyframes`
  0% { color: rgba(124, 58, 237)}
  100% { color: rgba(0, 0, 0, 0)}
`;

const Container = styled.div`
  color: ${({ theme }) => theme.colors.text};
  text-align: ${(props) => props.align ? 'left' : 'center'} ;
`;

const Cursor = styled.span`
  animation: ${cursorAnimation} .8s infinite;
`;


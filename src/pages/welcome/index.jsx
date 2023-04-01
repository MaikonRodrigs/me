import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ThemeContext } from 'styled-components'

import * as S from './styles';

function Welcome({ toggleTheme }) {
  const { title } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false)

  function currentTheme() {
    if (title === 'light') {
      return 'light';
    } else return 'dark'
  }

  useEffect(() => {
    setLoading(true)
    // setTimeout(() => {
    //   setLoading(false)
    // }, 5000)

  }, [])

  if (loading) {
    return (
      <S.Container>
        <h1>Please, choise your prefence theme, better experience</h1>
        <S.Button onClick={() => setLoading(false)}>It's ok? <strong>Click here</strong></S.Button>
      </S.Container>
    )
  }


  return (
    <S.Container>
      <S.Row>
        <S.SwitchToggle
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={40}
          width={80}
          handleDiameter={30}
          offHandleColor="#333333"
          offColor="#C4C4C4"
          onColor="#666"
        />
        <S.Text>{currentTheme()}</S.Text>
      </S.Row>
      <S.Button>Continue</S.Button>
    </S.Container>
  );
}

export default Welcome;
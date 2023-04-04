import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components'


import * as S from './styles';

function Header({ toggleTheme }) {
  const { title } = useContext(ThemeContext);

  return (
    <S.Container>
      <S.Row>
        <S.RowSwitch>
          <S.SwitchToggle
            onChange={toggleTheme}
            checked={title === 'light'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={40}
            handleDiameter={16}
            offHandleColor="#333333"
            offColor="#C4C4C4"
            onColor="#666"
          />
          <S.TextTheme>{title}</S.TextTheme>
        </S.RowSwitch>
        <S.RowNavigation>
          <a href="#">Home</a>
          <a href="#favorites">About</a>
          <a href="#">Contact</a>
        </S.RowNavigation>
      </S.Row>
    </S.Container>
  )
}

export default Header;
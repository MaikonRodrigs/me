import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components'
import { useNavigate } from 'react-router-dom';

import * as S from './styles';


function Home({ toggleTheme }) {
  const { title } = useContext(ThemeContext);

  const getLocalStorage = localStorage.getItem('theme');
  const navigate = useNavigate()
  useEffect(() => {
    // if (!getLocalStorage) {
    //   navigate('/')
    // }
  }, [])


  return (
    <>
    <h1>HOME</h1>
      {/* <S.SwitchToggle
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={40}
        width={80}
        handleDiameter={30}
        offHandleColor="#333333"
        offColor="#C4C4C4"
        onColor="#666"
      /> */}
    </>
  )
}

export default Home;
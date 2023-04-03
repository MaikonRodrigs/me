import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components'
import { useNavigate } from 'react-router-dom';

import Header from '@/components/header'
import FirstSection from '@/components/firstsection'

import * as S from './styles';


function Home({ toggleTheme }) {
  const { title } = useContext(ThemeContext);

  const getLocalStorage = localStorage.getItem('theme');
  const navigate = useNavigate()
  useEffect(() => {
    // if (!getLocalStorage) {
    //   navigate('/')
    // }
    console.log('loading home')
  }, [])


  return (
    <S.Container>
      <Header toggleTheme={toggleTheme} />
      <FirstSection />
    </S.Container>
  )
}

export default Home;
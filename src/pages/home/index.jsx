import React, { useContext, useEffect, useState, useRef } from 'react';
import { ThemeContext } from 'styled-components'
import { LoadingPage } from '@/utils/loading'
import { useNavigate } from 'react-router-dom';

import Header from '@/components/header'
import FirstSection from '@/components/firstsection'
import Favorites from '@/components/favorites'
import Footer from '@/components/footer'

import * as S from './styles';


function Home({ toggleTheme }) {
  const { title } = useContext(ThemeContext);
  const Avatar = 'https://avatars.githubusercontent.com/u/70022577?v=4'
  const User = '{ Maikon }'
  const getLocalStorage = localStorage.getItem('theme');

  const [loading, setLoading] = useState(false)


  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 4000)
  // }, [])

  const navigate = useNavigate()
  useEffect(() => {
    // if (!getLocalStorage) {
    //   navigate('/')
    // }

  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <S.Container>
      <Header toggleTheme={toggleTheme} />
      <S.Row>
        <S.RowInfo>
          <S.RowTexts>
            <S.Text>Hi, {User}my name is Maikon</S.Text>
            <S.Title>I'm Front End .</S.Title>
            <S.Text>JavaScript, TypeScript and ReactJS and Native📱</S.Text>
          </S.RowTexts>
          <S.Avatar src={Avatar} />
        </S.RowInfo>
        <S.RowIcons>
          <S.GithubIcon />
          <S.LinkedinIcon />
          <S.BehancIcon />
        </S.RowIcons>
      </S.Row >
      <FirstSection />
      <Favorites />
      <Footer />
    </S.Container>
  )
}

export default Home;
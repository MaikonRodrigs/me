import React, { useContext, useLayoutEffect, useState, useRef, useEffect } from 'react';
import { ThemeContext } from 'styled-components'
import { LoadingPage } from '@/utils/loading'
import { useNavigate } from 'react-router-dom';

import Header from '@/components/header'
import FirstSection from '@/components/firstsection'
import Favorites from '@/components/favorites'
import Footer from '@/components/footer'

import * as S from './styles';


function Home({ toggleTheme }) {
  const [loading, setLoading] = useState(false)
  const { title } = useContext(ThemeContext);
  const infos = {
    git: 'https://github.com/maikonrodrigs',
    linkedin: 'https://www.linkedin.com/in/maikonrodrigs/',
    behance: 'https://www.behance.net/maikonrodrigues',
    avatar: 'https://avatars.githubusercontent.com/u/70022577?v=4',
    name: 'Your Name Completed'
  }
  const Avatar = ''
  const User = '{ YourName }'
  const getLocalStorage = localStorage.getItem('theme');



  useLayoutEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const navigate = useNavigate()
  useEffect(() => {
    if (!getLocalStorage) {
      navigate('/')
    }

  }, [])

  function openURL(url) {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      window.open(url, "_blank")
    }, 1500)
  }

  function clearCache() {
    localStorage.clear()
    console.log('Clear local storage');
  }

  if (loading) {
    return <LoadingPage />
  }

  return (
    <S.Container>
      <Header toggleTheme={toggleTheme} />
      <S.Row>
        <S.RowInfo>
          <S.RowTexts>
            <S.Text>Hi, {infos.name} my name is Maikon</S.Text>
            <S.Title>I'm Front End .</S.Title>
            <S.Text>JavaScript, TypeScript and ReactJS and Native📱</S.Text>
          </S.RowTexts>
          <S.Avatar src={infos.avatar} onClick={clearCache} />
        </S.RowInfo>
        <S.RowIcons>
          <S.GithubIcon onClick={() => openURL(infos.git)} />
          <S.LinkedinIcon onClick={() => openURL(infos.linkedin)} />
          <S.BehancIcon onClick={() => openURL(infos.behance)} />
        </S.RowIcons>
      </S.Row >
      <FirstSection />
      <Favorites />
      <Footer />
    </S.Container>
  )
}

export default Home;
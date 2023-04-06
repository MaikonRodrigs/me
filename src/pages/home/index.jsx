import React, { useContext, useLayoutEffect, useState, useRef, useEffect } from 'react';
import { ThemeContext } from 'styled-components'
import { LoadingPage } from '@/utils/loading'
import { useNavigate } from 'react-router-dom';

import Header from '@/components/header'
import FirstSection from '@/components/firstsection'
import Portfolio from '@/components/portfolio'
import Modal from '@/components/modal'
import Favorites from '@/components/favorites'
import Presentation from '@/components/presentation'
import Footer from '@/components/footer'

import * as S from './styles';


function Home({ toggleTheme }) {
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false);
  const { title } = useContext(ThemeContext);
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

  function handleModal() {
    setModal(!modal)
  }


  if (loading) {
    return <LoadingPage />
  }

  return (
    <S.Container>
      <Modal
        display={modal}
        onClick={handleModal} />
      <Header toggleTheme={toggleTheme} />
      <Presentation />
      <FirstSection />
      <Favorites />
      <Portfolio
        source="1"
        onClick={handleModal}
      />
      <Footer />
    </S.Container>
  )
}

export default Home;
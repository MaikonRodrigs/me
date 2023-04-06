import React, { useContext, useLayoutEffect } from 'react';
import { ThemeContext } from 'styled-components'
import { GlobalContext } from '@/hooks/useContext'

import { useNavigate } from 'react-router-dom';

import { LoadingPage } from '@/utils/loading'
import Header from '@/components/header'
import FirstSection from '@/components/firstsection'
import Portfolio from '@/components/portfolio'
import Modal from '@/components/modal'
import Favorites from '@/components/favorites'
import Presentation from '@/components/presentation'
import Footer from '@/components/footer'

import * as S from './styles';


function Home({ toggleTheme }) {
  const { title } = useContext(ThemeContext)
  const { loading, setLoading, modal, setModal, setProject } = useContext(GlobalContext)
  const getLocalStorage = localStorage.getItem('theme')

  useLayoutEffect(() => {
    setLoading(true)
    if (!getLocalStorage) {
      navigate('/')
    }
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const navigate = useNavigate()

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
        onClick={handleModal}
      />
      <Header toggleTheme={toggleTheme} />
      <Presentation />
      <FirstSection />
      <Favorites />
      <Footer />
    </S.Container>
  )
}

export default Home;
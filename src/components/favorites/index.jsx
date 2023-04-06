import React, { useContext } from 'react';
import { LoadingPage } from '@/utils/loading'
import Portfolio from '@/components/portfolio'
import { GlobalContext } from '@/hooks/useContext'


import * as S from './styles';

function Favorites() {
  const { loading, setLoading, modal, setModal, setProject } = useContext(GlobalContext)

  const titleText = 'Favorite'
  const restText = 'Stack'
  const c = '/>'
  const URL = {
    react: 'https://react.dev/',
    yarn: 'https://yarnpkg.com/',
    firebase: 'https://firebase.google.com/?hl=pt',
    styledComponents: 'https://styled-components.com/',
    hyper: 'https://hyper.is/'
  }

  function openURL(url) {
    setLoading(true)
    setTimeout(() => {
      window.open(url, "_blank")
      setLoading(false)
    }, 1500)
  }

  function setCurrentProject(i) {
    setProject(i)
    setModal(!modal)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  if (loading) { return <LoadingPage /> }

  return (
    <S.Container>
      <S.Row>
        <Portfolio
          first={() => setCurrentProject(1)}
          second={() => setCurrentProject(2)}
          third={() => setCurrentProject(3)}
        />
        <S.FavoritesRow>
          <S.RowText>
            <S.Title>{titleText}<strong>{restText}</strong><span>{c}</span></S.Title>
            <S.Description>this site uses this stack</S.Description>
          </S.RowText>
          <S.Icons>
            <S.ReactLogoIcon onClick={() => openURL(URL.react)} />
            <S.YarnIcon onClick={() => openURL(URL.yarn)} />
            <S.FirebaseIcon onClick={() => openURL(URL.firebase)} />
            <S.StyledcomponentsIcon onClick={() => openURL(URL.styledComponents)} />
            <S.HyperIcon onClick={() => openURL(URL.hyper)} />
          </S.Icons>
        </S.FavoritesRow>
      </S.Row>
    </S.Container >
  )
}

export default Favorites;
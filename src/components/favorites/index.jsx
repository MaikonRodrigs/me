import React, { useState } from 'react';
import { LoadingPage } from '@/utils/loading'

import * as S from './styles';

function Favorites() {
  const [loading, setLoading] = useState(false)

  const titleText = 'Favorite'
  const restText = 'Stack'
  const c = '/>'
  const URL = {
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

  if (loading) { return <LoadingPage /> }

  return (
    <S.Container>
      <S.Row>
        <S.RowText>
          <S.Title>{titleText}<strong>{restText}</strong><span>{c}</span></S.Title>
          <S.Description>this site uses this stack</S.Description>
        </S.RowText>
        <S.Icons>
          <S.YarnIcon onClick={() => openURL(URL.yarn)} />
          <S.FirebaseIcon onClick={() => openURL(URL.firebase)} />
          <S.StyledcomponentsIcon onClick={() => openURL(URL.styledComponents)} />
          <S.HyperIcon onClick={() => openURL(URL.hyper)} />
        </S.Icons>
      </S.Row>
    </S.Container>
  )
}

export default Favorites;
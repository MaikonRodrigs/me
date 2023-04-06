import React, { useState } from 'react';
import { LoadingPage } from '@/utils/loading'


import * as S from './styles';

function Presentation() {
  const [loading, setLoading] = useState(false)

  const infos = {
    git: 'https://github.com/maikonrodrigs',
    linkedin: 'https://www.linkedin.com/in/maikonrodrigs/',
    behance: 'https://www.behance.net/maikonrodrigues',
    avatar: 'https://avatars.githubusercontent.com/u/70022577?v=4',
  }

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
      <S.Row>
        <S.RowInfo>
          <S.RowTexts>
            <S.Text>Hi, my name is Maikon,</S.Text>
            <S.Title>I'm Front End .</S.Title>
            <S.Text>JavaScript, TypeScript, <span>React</span> and Native📱</S.Text>
          </S.RowTexts>
          <S.Avatar src={infos.avatar} onClick={clearCache} />
        </S.RowInfo>
        <S.RowIcons>
          <S.GithubIcon onClick={() => openURL(infos.git)} />
          <S.LinkedinIcon onClick={() => openURL(infos.linkedin)} />
          <S.BehancIcon onClick={() => openURL(infos.behance)} />
        </S.RowIcons>
      </S.Row >
    </S.Container>
  )
}

export default Presentation;
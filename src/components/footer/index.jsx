import React, { useState } from 'react';
import { LoadingPage } from '@/utils/loading'

import * as S from './styles';

function Footer() {
  const [loading, setLoading] = useState(false)
  const urlContact = {
    mail: 'mailto:makonrodrigs@gmail.com',
    tel: 'http://wa.me/5511981433269?text=%20Hy,%20I%20saw%20your%20site%20and%20I%20want%20to%20make%20contact',
    git: 'https://github.com/maikonrodrigs'
  }
  
  function openURL(url) {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      window.open(url, "_blank")
    }, 1500)
  }

  if (loading) {
    return <LoadingPage />
  }

  return (
    <S.Container id="contact">
      <S.Line />
      <S.Row>
        <S.ContactRow>
          {/* <S.Text onClick={() => openURL(urlContact.git)}>@MaikonRodrigs</S.Text> */}
          <S.Email onClick={() => openURL(urlContact.mail)}>maikonrodrigss@gmail.com</S.Email>
          <S.Tel onClick={() => openURL(urlContact.tel)}>+55 (11) 981433269</S.Tel>
        </S.ContactRow>
      </S.Row>
    </S.Container>
  )
}

export default Footer;
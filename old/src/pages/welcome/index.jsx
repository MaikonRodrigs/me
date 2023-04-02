import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components'
import { LoadingIcons } from '@/utils/loading'

import * as S from './styles';

function Welcome({ toggleTheme }) {
  const { title } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)
  const localItemRepo = sessionStorage.getItem('__inf')
  const getItem = (JSON.parse(localItemRepo))

  const navigate = useNavigate()

  function currentTheme() {
    if (title === 'light') {
      return 'light';
    } else return 'dark'
  }

  function savedStorage() {
    setSaved(true)
    setTimeout(() => {
      setSaved(false)
      sessionStorage.setItem('__inf', true)
      navigate(`/home`)
    }, 9000)
  }


  useEffect(() => {
    // localStorage.setItem("__inf", JSON.parse('maikon'))
    // const localSet = localStorage.getItem('__inf', JSON.stringify('isSaved'))
    console.log(getItem)
    if (getItem === true) {
      navigate(`/home`)
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  function nav() {
    return
  }



  if (getItem === null) {
    if (loading) {
      return (
        <S.Container>
          <h1>Please, choise your prefence theme, better experience</h1>
          <S.Button onClick={() => setLoading(false)}>It's ok? <strong>Click here</strong></S.Button>
        </S.Container>
      )
    }

  } else { console.log(getItem) }

  if (saved && (getItem === null)) {
    return (
      <S.Container>
        <LoadingIcons />
        <S.Text>Wait i'am saving to local storage as per your settings.</S.Text>
        <S.TextSecondary>if it takes time, it's the back-end's fault, lol</S.TextSecondary>
      </S.Container>
    )
  }
  return (
    <S.Container>
      <S.Row>
        <S.SwitchToggle
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={40}
          width={80}
          handleDiameter={30}
          offHandleColor="#333333"
          offColor="#C4C4C4"
          onColor="#666"
        />
        <S.Text>{currentTheme()}</S.Text>
      </S.Row>
      <S.Button onClick={savedStorage}>Continue</S.Button>
    </S.Container>
  );
}

export default Welcome;
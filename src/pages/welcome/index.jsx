import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components'
import { LoadingIcons, LoadingSpinner } from '@/utils/loading'

import * as S from './styles';
import { useEffect } from 'react';
import { TypeLetter } from '@/utils/typeLetter';

function Welcome({ toggleTheme }) {
  const { title } = useContext(ThemeContext);
  const [step, setStep] = useState(1)

  const getLocalStorage = localStorage.getItem('theme');
  const navigate = useNavigate()

  useEffect(() => {
    if (getLocalStorage) {
      navigate('/home')
    }
  }, [])

  function waitingForStep(i) {
    setTimeout(() => {
      setStep(i)
    }, 6000)
    return (
      <>
        <S.Container>
          <LoadingSpinner />
          <S.Title>Please, choise your prefence theme, better experience...</S.Title>
          <S.TextSecondary>Please wait for <span onClick={() => setStep(2)}>continue</span></S.TextSecondary>
        </S.Container>
      </>
    )
  }

  function stepLocalStorage(i) {
    setTimeout(() => {
      setStep(i)
    }, 5000)
    return (
      <S.Container>
        <LoadingIcons />
        <S.TextWaiting>Wait i'm saving to local storage as per your settings.</S.TextWaiting>
        <S.TextSecondary>if it takes time, it's the <span>back-end </span>fault, lol</S.TextSecondary>
      </S.Container>
    )
  }


  function stepMessage(i) {

    const infos = {
      message: 'Hy, my name is Maikon, I am FrontEnd JavaScript and React ❤️',
      message2: 'Technology enthusiast, passionate about programming and passionate about cats.',
      message3: 'I promise not to steal your bank details, Im just a programmer and not a hacker :(',
      react: `import React from 'react'`,
      code: `
              <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ color: 'themeColor.heading' }}>
                  Hy, my name is Maikon, I am FrontEnd JavaScript and React ❤️ </br>
                  Technology enthusiast, passionate about programming and passionate about cats.
                </h1>
                <p style={{ color: 'themeColor.heading' }}>
                  I promise not to steal your bank details, Im just a programmer and not a hacker :(
                </p>
              </div>
            )
          }
      `
    }
    setTimeout(() => {
      setStep(i)
    }, 17500)
    return (
      <S.Container>
        <S.Text>
          <TypeLetter
            text={infos.message}
            noCursor
          />
          <TypeLetter
            text={infos.message2}
            delay={4250}
            noCursor
          />
        </S.Text>
        <S.TextFun>
          <TypeLetter
            text={infos.message3}
            delay={9500}
          />
        </S.TextFun>
        <S.RowCode>
          <S.CodeHeader>
            <S.Dots>
              <S.IconClosed color="#ED6A5E" />
              <S.IconClosed color="#F4BF4F" />
              <S.IconClosed color="#61C554" />
            </S.Dots>
            <S.Vscode />
          </S.CodeHeader>
          <S.TextMessage>#CodeInline</S.TextMessage>
          <S.CodeText>
            <TypeLetter
              text={infos.react}
              align
              time="30"
              noCursor
            />
            <br />
          </S.CodeText>
          <S.CodeText>
            <TypeLetter
              delay={1500}
              text={infos.code}
              align
              time="20"
            />
          </S.CodeText>
        </S.RowCode>
      </S.Container >
    )
  }

  function stepFinaly(i) {
    setTimeout(() => {
      finishWelcome()
    }, 1500)
    return (
      <S.Container>
        <S.TitleFinish>
          Ok, Let's go...
        </S.TitleFinish>
      </S.Container>
    )
  }

  function currentTheme() {
    if (title === 'light') {
      return 'light';
    } else return 'dark'
  }

  function finishWelcome() {
    setTimeout(() => {
      navigate('/home')
    }, 3000)
  }

  switch (step) {
    case 1:
      return (
        waitingForStep(2)
      )

    case 2:
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
              offHandleColor="#fff"
              onHandleColor="#333333"
              offColor="#C4C4C4"
              onColor="#666"
            />
            <S.TextThemeActive>{title}</S.TextThemeActive>
          </S.Row>
          <S.Button onClick={() => setStep(3)}>Continue</S.Button>
        </S.Container>
      )
    case 3:
      return (
        stepLocalStorage(4)
      )
    case 4:
      return (
        stepMessage(5)
      )

    case 5:
      return (
        stepFinaly(1)
      )
  }

}

export default Welcome;
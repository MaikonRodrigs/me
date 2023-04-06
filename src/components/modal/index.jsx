import React, { useState, useEffect, useContext } from 'react';
import { LoadingPage } from '@/utils/loading'
import { GlobalContext } from '@/hooks/useContext'
import * as S from './styles';

function Modal(props) {

  const { project, loading, setLoading } = useContext(GlobalContext)

  function openUrl(url) {
    setLoading(true)
    setTimeout(() => {
      window.open(url, "_blank")
      setLoading(false)
    }, 1000)
  }

  if (loading) {
    return <LoadingPage />
  }

  switch (project) {
    case 1: {
      return (
        <S.Container display={props.display}>
          <S.CloseIcon onClick={props.onClick} />
          <S.Card>
            <S.Description> <span>I'm create layout UX 🤓</span></S.Description>
            <S.ImgProject />
            <S.Infos>
              <S.DescriptionRow>
                <S.Text>PokeApi</S.Text>
                <S.Url
                  onClick={() => openUrl('https://pokeapi.co/')}>
                  Fhttps://pokeapi.co/</S.Url>
                <S.Description>Project ReactJS, database - Public Pokemon API</S.Description>
                <br />
                <br />
                <S.Description><strong>Libs</strong>
                  ✅ React-router-dom <br />
                  ✅ Styled Components <br />
                  ✅ Styled Icons <br />
                  ✅ Firebase <br />
                </S.Description>
                <br />
                <S.Description><strong>Hooks</strong>
                  ✅ useState <br />
                  ✅ useEffect <br />
                  ✅ useRef <br />
                  ✅ useContext <br />
                  ✅ Fetch <br />
                </S.Description>
                <br />
                <S.Text>Link project:</S.Text>
                <S.Url onClick={() => openUrl('https://pokedexmaikonrodrigs.web.app/')} >
                  https://pokedexmaikonrodrigs.web.app/</S.Url>
                <br />
                <br />
                <S.Description>Repositorio:</S.Description>
                <S.Url onClick={() => openUrl('https://github.com/MaikonRodrigs/Pokedex_API')}>
                  Fhttps://github.com/MaikonRodrigs/Pokedex_API</S.Url>
              </S.DescriptionRow>
            </S.Infos>
          </S.Card>
        </S.Container >
      )
    }
    case 2: {
      return (
        <S.Container display={props.display}>
          <S.CloseIcon onClick={props.onClick} />
          <S.Card>
            <S.ImgProject />
            <S.Description> <span>I'm create layout UX 🤓</span></S.Description>
            <S.Infos>
              <S.DescriptionRow>
                <S.Text>THEMOVIE</S.Text>
                <S.Url onClick={() => openUrl('https://developers.themoviedb.org/3/getting-started/introduction')}>
                  https://developers.themoviedb.org</S.Url>
                <br />
                <br />
                <S.Description>Project ReactJS, database - Public TMDB API</S.Description>
                <br />
                <S.Description><strong>Libs</strong>
                  ✅ React-router-dom <br />
                  ✅ Styled Components <br />
                  ✅ Styled Icons <br />
                  ✅ Firebase <br />
                </S.Description>
                <br />
                <S.Description><strong>Hooks</strong>
                  ✅ useState <br />
                  ✅ useEffect <br />
                  ✅ useRef <br />
                  ✅ localStorage <br />
                  ✅ useContext <br />
                  ✅ Fetch <br />
                </S.Description>
                <br />
                <S.Text>Link project:</S.Text>
                <S.Url onClick={() => openUrl('https://moviesmaikonrodrigs.web.app/')} >
                  https://moviesmaikonrodrigs.web.app/</S.Url>
                <br />
                <br />
                <S.Description>Repositorio:</S.Description>
                <S.Url onClick={() => openUrl('https://github.com/MaikonRodrigs/THMDB_API')} F >
                  https://github.com/MaikonRodrigs/THMDB_API</S.Url>
              </S.DescriptionRow>
            </S.Infos>
          </S.Card>
        </S.Container >
      )
    }
    case 3: {
      return (
        <S.Container display={props.display}>
          <S.CloseIcon onClick={props.onClick} />
          <S.Card>
            <S.ImgProject />
            <S.Description> <span>I'm create layout UX 🤓</span></S.Description>
            <S.Infos>
              <S.DescriptionRow>
                <S.Text>GITHUB</S.Text>
                <S.Url onClick={() => openUrl('https://docs.github.com/pt/get-started')}>
                  https://docs.github.com/pt/get-started</S.Url>
                <br />
                <br />
                <S.Description>Project ReactJS, database - Public Github API</S.Description>
                <br />
                <S.Description><strong>Libs</strong>
                  ✅ React-router-dom <br />
                  ✅ Styled Components <br />
                  ✅ Styled Icons <br />
                  ✅ React-syntax-highlighter <br />
                  ✅ Date-fns <br />
                  ✅ Qrcode.react <br />
                  ✅ Firebase <br />
                </S.Description>
                <br />
                <S.Description><strong>Hooks</strong>
                  ✅ useState <br />
                  ✅ useEffect <br />
                  ✅ useRef <br />
                  ✅ localStorage <br />
                  ✅ useContext <br />
                  ✅ Fetch <br />
                </S.Description>
                <br />
                <S.Text>Link project:</S.Text>
                <S.Url onClick={() => openUrl('https://githubsearchname.web.app/')} >
                  https://githubsearchname.web.app/</S.Url>
                <br />
                <br />
                <S.Description>Repositorio:</S.Description>
                <S.Url onClick={() => openUrl('https://github.com/MaikonRodrigs/Github_API')}>
                  https://github.com/MaikonRodrigs/Github_API</S.Url>
              </S.DescriptionRow>
            </S.Infos>
          </S.Card>
        </S.Container >
      )
    }
  }
}

export default Modal;
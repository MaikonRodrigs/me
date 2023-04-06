import React, { useState, useEffect, useContext } from 'react';
import PokemonProject from '@/assets/PokemonAPI_MaikoRodrigs.png'
import { GlobalContext } from '@/hooks/useContext'
import * as S from './styles';

function Modal(props) {

  const { project } = useContext(GlobalContext)

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
                <S.Url href='https://pokeapi.co/'
                  target="_blank">https://pokeapi.co/</S.Url>
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
                <S.Url href='https://pokedexmaikonrodrigs.web.app/' target="_blank" >https://pokedexmaikonrodrigs.web.app/</S.Url>
                <br />
                <br />
                <S.Description>Repositorio:</S.Description>
                <S.Url href='https://github.com/MaikonRodrigs/Pokedex_API' target="_blank" >https://github.com/MaikonRodrigs/Pokedex_API</S.Url>
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
                <S.Url href='https://developers.themoviedb.org/3/getting-started/introduction'
                  target="_blank">https://developers.themoviedb.org</S.Url>
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
                <S.Url href='https://moviesmaikonrodrigs.web.app/' target="_blank" >https://moviesmaikonrodrigs.web.app/</S.Url>
                <br />
                <br />
                <S.Description>Repositorio:</S.Description>
                <S.Url href='https://github.com/MaikonRodrigs/THMDB_API' target="_blank" >https://github.com/MaikonRodrigs/THMDB_API</S.Url>
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
                <S.Url href='https://docs.github.com/pt/get-started'
                  target="_blank">https://docs.github.com/pt/get-started</S.Url>
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
                <S.Url href='https://githubsearchname.web.app/' target="_blank" >https://githubsearchname.web.app/</S.Url>
                <br />
                <br />
                <S.Description>Repositorio:</S.Description>
                <S.Url href='https://github.com/MaikonRodrigs/Github_API' target="_blank" >https://github.com/MaikonRodrigs/Github_API</S.Url>
              </S.DescriptionRow>
            </S.Infos>
          </S.Card>
        </S.Container >
      )
    }
  }
}

export default Modal;
{/* <iframe src="https://moviesmaikonrodrigs.web.app/" allow="autoplay"></iframe> */ }
{/* <iframe src="https://moviesmaikonrodrigs.web.app/" allow="autoplay"></iframe> */ }
{/* <iframe src="https://pokedexmaikonrodrigs.web.app" allow="autoplay"></iframe> */ }
import React, { useState } from 'react';

import * as S from './styles';

function Modal(props) {
  const [source, setSource] = useState(props.source);

  // function handleIframe(source) {
  //   setSource(source);
  // }

  switch (source) {
    case 1: {
      return (
        <S.Container display={props.display}>
          <S.Card>
            <iframe src="https://moviesmaikonrodrigs.web.app/" allow="autoplay"></iframe>
          </S.Card>
        </S.Container>
      )
    }
  }
  return (
    <S.Container display={props.display}>
      <S.CloseIcon onClick={props.onClick} />
      <S.Card>
        <iframe src="https://moviesmaikonrodrigs.web.app/" allow="autoplay"></iframe>
      </S.Card>
      <S.Infos>
        <S.Text>Pokemon</S.Text>
        <S.Description>Consumer API Pokemon</S.Description>
      </S.Infos>
    </S.Container>
  )
}

{/* <iframe src="https://pokedexmaikonrodrigs.web.app/" width="1200px" height="100%" allow="autoplay"></iframe> */ }
{/* <iframe src="https://githubsearchname.web.app/" width="1200px" height="100%" allow="autoplay"></iframe> */ }
export default Modal;
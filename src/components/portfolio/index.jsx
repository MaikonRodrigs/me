import React from 'react';

import * as S from './styles';

function Portfolio(props) {
  const infos = {
    title: 'Portfolio',
    code: '/>',
  }
  return (
    <S.Container>
      <S.Row>
        <S.Title>{infos.title} <span>{infos.code}</span></S.Title>
        <S.Items>
          <S.ImageRow onClick={props.first} >
            <span>1</span>
          </S.ImageRow>
          <S.ImageRow onClick={props.second}>
            <span>2</span>
          </S.ImageRow>
          <S.ImageRow onClick={props.third}>
            <span>3</span>
          </S.ImageRow>
        </S.Items>
      </S.Row>
    </S.Container>
  )
}

export default Portfolio;
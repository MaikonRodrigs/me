import React, { useState } from 'react';
import { LoadingPage } from '@/utils/loading'

import * as S from './styles';

function Portfolio(props) {
  const infos = {
    title: 'Portfolio',
    code: '/>',
    img: 'https://media.licdn.com/dms/image/C4D22AQF0RueCxf3ATw/feedshare-shrink_1280/0/1679434036138?e=1683763200&v=beta&t=V9NJ1grpPPyA_j33W_vZ4oqkdxeebt6y7A8vh9t03zo'
  }
  return (
    <S.Container>
      <S.Row>
        <S.Title>{infos.title} <span>{infos.code}</span></S.Title>
        <S.Items>
          <S.ImageRow onClick={props.onClick}>
            <span>1</span>
          </S.ImageRow>
          <S.ImageRow >
            <span>2</span>
          </S.ImageRow>
          <S.ImageRow >
            <span>3</span>
          </S.ImageRow>
        </S.Items>
      </S.Row>
    </S.Container>
  )
}

export default Portfolio;
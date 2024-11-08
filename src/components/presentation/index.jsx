import React, { useState } from "react";
import { LoadingPage } from "@/utils/loading";

import * as S from "./styles";

function Presentation() {
  const [loading, setLoading] = useState(false);

  const Curriculum = 'https://drive.google.com/file/d/1au2v_f8ko-LV7_dO-pTSfcnMM69fqbSD/view?usp=sharing'

  const infos = {
    git: "https://github.com/maikonrodrigs",
    linkedin: "https://www.linkedin.com/in/maikonrodrigs/",
    behance: "https://www.behance.net/maikonrodrigues",
    avatar: "https://avatars.githubusercontent.com/u/70022577?v=4",
  };

  function openURL(url) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.open(url, "_blank");
    }, 1500);
  }

  function OpenCV(url) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.open(url, "_blank");
    }, 1500);
  }

  function clearCache() {
    localStorage.clear();
  }

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <S.Container>
      <S.Row>
        <S.RowInfo>
          <S.RowTexts>
            <S.Text>Hi, my name is Maikon,</S.Text>
            <S.Title>I'm Front End .</S.Title>
            <S.Text>
              JavaScript, TypeScript, <span>React</span> and Native📱
            </S.Text>
            <S.RowDownload>
              <S.IconDownload />
              <S.TextDownload onClick={() => OpenCV(Curriculum)}>View technical informations</S.TextDownload>
            </S.RowDownload>
          </S.RowTexts>
          <S.Avatar src={infos.avatar} onClick={clearCache} />
        </S.RowInfo>
        <S.RowIcons>
          <S.GithubIcon onClick={() => openURL(infos.git)} />
          <S.LinkedinIcon onClick={() => openURL(infos.linkedin)} />
          <S.BehancIcon onClick={() => openURL(infos.behance)} />
        </S.RowIcons>
      </S.Row>
    </S.Container>
  );
}

export default Presentation;

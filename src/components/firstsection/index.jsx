import React, { useContext } from 'react';
import * as theme from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ThemeContext } from 'styled-components'



import * as S from './styles';

function FirstSection() {
  const { title } = useContext(ThemeContext);


  const text = `About`
  const jsonFetch = `{
    "informations": {
      "name": "Maikon Rodrigues",
      "year": 33,
      "nacionality": "Brazilian",
      "home": {
        "country": "Brazilian",
        "city": "Sao Paulo"
      },
      "other": {
        "married": false,
        "OS": "MacOS"
      }
    },
    "abilities": {
      "react": true,
      "react-native": true,
      "base_experience": 5,
      "languages": ["Javascript", "TypeScript"],
      "others": {
        "base-languages": {
          "html": true,
          "css": true,
          "sass": true
        }
      }
    }
  }`;

  function handleThemeSyntax() {
    if (title === 'light') {
      return theme.a11yLight
    } else return theme.atomOneDark
  }

  return (
    <S.Container>
      <S.Row>
        <S.Code id="favorites" >
          <S.Wrangler>
            <S.Title>{text}</S.Title>
            <S.RowSyntax>
              <S.CodeHeader>
                <S.Dots>
                  <S.IconClosed color="#ED6A5E" />
                  <S.IconClosed color="#F4BF4F" />
                  <S.IconClosed color="#61C554" />
                </S.Dots>
                <S.Vscode />
              </S.CodeHeader>
              <S.SYNTAX
                children={jsonFetch}
                language="jsx"
                style={handleThemeSyntax()}
                showLineNumbers
                customStyle={{
                  fontFamily: "oswald",
                  letterSpacing: .5,
                  useInlineStyles: false,
                  fontSize: 20,
                  borderRadius: 10,
                  padding: "70px 13px 20px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  wrapLines: false,

                }}
                wrapLines={true}
              />
            </S.RowSyntax>
          </S.Wrangler>
        </S.Code>
      </S.Row>
    </S.Container>
  )
}

export default FirstSection;
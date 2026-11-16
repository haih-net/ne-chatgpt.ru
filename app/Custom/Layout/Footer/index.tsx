import type * as React from 'react'
import { FooterStyled } from './styles'

export const Footer: React.FC = () => (
  <FooterStyled>
    <nav aria-label="Мои сайты об ИИ">
      <a href="https://что-такое-ии.рф">Что такое ИИ</a>
      <a href="https://ии-самому.рф">ИИ самому</a>
      <a href="https://ne-chatgpt.ru">Не ChatGPT</a>
      <a href="https://codex-chatgpt.ru">Codex: устройство и применение</a>
      <a href="https://курсы-про-ии.рф">Курсы про ИИ</a>
    </nav>

    <div>
      Разработка и сопровождение{' '}
      <a
        target="_blank"
        href="https://fi1osof.ru"
        aria-label="Разработка и сопровождение — 𝕱i1osof"
        title="Разработка и сопровождение — 𝕱i1osof"
      >
        By 𝕱
      </a>
    </div>
  </FooterStyled>
)

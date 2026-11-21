import type * as React from 'react'
import { AIChat } from '../AIChat'
import { MainPageViewStyled } from './styles'

export const MainPageView: React.FC = () => (
  <MainPageViewStyled aria-labelledby="chat-title">
    <AIChat />
  </MainPageViewStyled>
)

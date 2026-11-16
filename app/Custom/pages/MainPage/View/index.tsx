import type * as React from 'react'
import { ChatContent } from '../../../components/Chat/ChatWidget/ChatContent'
import { MainPageViewStyled } from './styles'

export const MainPageView: React.FC = () => (
  <MainPageViewStyled aria-labelledby="chat-title">
    <ChatContent
      welcomeHeading="h1"
      welcomeTitle="ИИ онлайн бесплатно и без регистрации"
      welcomeText="Задавайте вопросы нейросети на русском языке. Создавайте тексты, находите идеи и разбирайтесь в сложных темах — прямо в браузере."
    />
  </MainPageViewStyled>
)

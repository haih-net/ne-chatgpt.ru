import type { MetaFunction } from 'react-router'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'
import { MainPage } from 'app/Custom/pages/MainPage'

export const handle = {
  seo: {
    title: 'ИИ онлайн бесплатно и без регистрации — Не ChatGPT',
    description:
      'Чат с ИИ на русском языке бесплатно и без регистрации. Задавайте вопросы, создавайте тексты и находите идеи для учёбы, работы и повседневных задач.',
    path: '/',
    image: undefined,
  },
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export default MainPage

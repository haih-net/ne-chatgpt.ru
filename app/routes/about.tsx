import type { MetaFunction } from 'react-router'
import { AboutPage } from 'app/Custom/pages/About'
import { createSeoMeta } from '../components/seo/SeoHeaders'

export const meta: MetaFunction = () =>
  createSeoMeta({
    title: 'О проекте «Не ChatGPT» — бесплатный чат с ИИ',
    description:
      '«Не ChatGPT» — проект для знакомства с ИИ онлайн бесплатно и без регистрации. Научитесь задавать вопросы нейросети на русском и применять её в своих задачах.',
    path: '/about',
  })

export default AboutPage

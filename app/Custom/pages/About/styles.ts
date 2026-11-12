import { styled } from '@linaria/react'
import { theme } from '../../theme'

export const AboutPageStyled = styled.article`
  max-width: 840px;
  margin: 0 auto;
  padding: 40px 24px;
  font-size: 17px;
  line-height: 1.7;

  h1 {
    margin: 0 0 24px;
    font-size: 2rem;
    line-height: 1.2;
  }

  .intro {
    font-size: 1.2rem;
  }

  section {
    margin-top: 32px;
  }

  h2 {
    margin: 0 0 12px;
    font-size: 1.4rem;
    line-height: 1.3;
  }

  p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding-left: 24px;
  }

  li + li {
    margin-top: 8px;
  }

  .ai-button {
    margin-top: 32px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: 64px 40px;

    h1 {
      font-size: 2.75rem;
    }
  }
`

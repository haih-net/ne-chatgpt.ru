import { styled } from '@linaria/react'
import { theme } from '../../theme'

export const FooterStyled = styled.footer`
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px 16px;
  padding: 8px 16px;
  overflow-wrap: anywhere;

  > * {
    min-width: 0;
    max-width: 100%;
  }

  @media (min-width: ${theme.breakpoints.xs}px) {
    padding: 8px 24px;
  }
  border-top: 1px solid ${theme.colors.border};
  font-size: 12px;
  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 24px;
  }
  a {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
  a:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 4px;
  }
`

import { styled } from '@linaria/react'
import { theme } from '../theme'
import {
  HeaderStyled,
  HeaderInnerStyled,
  HeaderNavStyled,
} from './Header/styles'

export const CustomLayoutSectionStyled = styled.section`
  display: contents;
`

export const CustomLayoutGridStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;

  @media (min-width: ${theme.breakpoints.xs}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }
`

export const CustomLayoutMainStyled = styled.main`
  flex: 1;
  width: 100%;
  min-width: 0;
  max-width: none;
  min-height: 0;
  padding: 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: 24px;
  }
`

export const CustomLayoutStyled = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  color: ${theme.colors.foreground};
  background: ${theme.backgrounds.page};
  &[data-full-height='true'] {
    height: 100dvh;
    min-height: 0;

    ${CustomLayoutMainStyled} {
      display: flex;
      flex-direction: column;
      min-height: 0;
    }
  }

  ${HeaderNavStyled} {
    position: fixed;
    top: 60px;
    bottom: 0;
    right: auto;
    width: min(86vw, 280px);
    max-height: none;
    border-right: 1px solid ${theme.colors.border};
    z-index: 302;
  }
  .menu-scrim {
    position: fixed;
    inset: 60px 0 0;
    border: 0;
    background: #0005;
    z-index: 301;
  }
  @media (min-width: 768px) {
    .menu-scrim {
      display: none;
    }
    flex-direction: row;
    ${HeaderStyled} {
      position: sticky;
      top: 0;
      height: 100dvh;
      width: 252px;
      flex: 0 0 252px;
      border-right: 1px solid ${theme.colors.border};
      border-bottom: 0;
      background: #f5f6f5;
      overflow-y: auto;
    }
    ${HeaderInnerStyled} {
      padding: 20px 16px;
      min-height: 100%;
      align-items: stretch;
      justify-content: flex-start;
      flex-direction: column;
      .menu-toggle {
        display: none;
      }
      .brand {
        margin-bottom: 24px;
      }
      .account-dropdown {
        left: 0;
        right: 0;
        top: auto;
        bottom: 100%;
        max-width: 220px;
      }
    }
    ${HeaderNavStyled}, ${HeaderNavStyled}[data-open='true'] {
      display: flex;
      width: auto;
      position: static;
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-start;
      gap: 8px;
      padding: 0;
      border: 0;
      box-shadow: none;
      overflow: visible;
      max-height: none;
      background: transparent;
      white-space: normal;
      a,
      button {
        text-align: left;
        border-radius: 10px;
        padding: 12px;
      }
      a:hover {
        background: #e9ece9;
      }
      .account-menu {
        margin-top: auto;
      }
    }
  }

  .ai-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 14px 20px;
    background: ${theme.colors.primary};
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.4;
    transition: background 0.2s;
    text-decoration: none;
  }
  .ai-button:hover {
    background: #28583f;
    text-decoration: none;
  }
  .skip-link {
    position: absolute;
    top: -100px;
    left: 20px;
    padding: 12px 20px;
    background: white;
    z-index: 1100;
  }
  .skip-link:focus {
    top: 12px;
  }
`

export const LayoutBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  min-height: 0;
`

export const LayoutTopbarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  min-height: 48px;
  border-bottom: 1px solid ${theme.colors.border};
  font-weight: 700;
  span {
    font-size: 12px;
    font-weight: 400;
    opacity: 0.6;
  }
`

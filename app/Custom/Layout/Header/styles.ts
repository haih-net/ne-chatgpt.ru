import { styled } from '@linaria/react'
import { theme } from '../../theme'

export const HeaderNavStyled = styled.nav`
  display: none;
  min-width: 0;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 12px 16px;
  max-height: calc(100dvh - 53px);
  overflow-y: auto;
  background: ${theme.backgrounds.page};
  box-shadow: 0 16px 24px #182e2012;
  border-bottom: 1px solid ${theme.colors.border};
  align-items: stretch;
  gap: 6px;
  font-size: 14px;

  @media (min-width: ${theme.breakpoints.sm}px) {
    display: flex;
    position: static;
    padding: 0;
    background: transparent;
    box-shadow: none;
    border-bottom: 0;
    align-items: center;
    gap: 12px;
    flex: 1;
    max-height: none;
    overflow: visible;
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    gap: 16px;
  }

  &[data-open='true'] {
    display: flex;
    flex-direction: column;

    @media (min-width: ${theme.breakpoints.sm}px) {
      flex-direction: row;
    }
  }
  & a {
    padding: 12px 0;

    @media (min-width: ${theme.breakpoints.sm}px) {
      padding: 10px 0;
    }
  }
  & a[aria-current='page'] {
    text-decoration: underline;
    text-underline-offset: 6px;
  }
`

export const HeaderStyled = styled.header`
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 300;
  background: ${theme.backgrounds.page};
  border-bottom: 1px solid ${theme.colors.border};
  .header-inner {
    max-width: 1328px;
    margin: auto;
    min-height: 52px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    @media (min-width: ${theme.breakpoints.xs}px) {
      padding: 8px 24px;
      gap: 16px;
    }

    @media (min-width: ${theme.breakpoints.sm}px) {
      padding: 8px 32px;
    }
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
  }
  .brand img {
    display: block;
  }

  nav .ai-button {
    min-height: 34px;
    padding: 6px 12px;
    font-size: 13px;
    line-height: inherit;
    justify-content: center;

    @media (min-width: ${theme.breakpoints.sm}px) {
      justify-content: flex-start;
    }
  }
  .menu-toggle {
    display: flex;
    background: transparent;
    border: 1px solid ${theme.colors.border};
    border-radius: 10px;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    color: inherit;

    @media (min-width: ${theme.breakpoints.sm}px) {
      display: none;
    }
  }

  .feedback-button,
  .signin-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 34px;
    padding: 6px 12px;
    border: 1px solid ${theme.colors.border};
    border-radius: 10px;
    color: ${theme.colors.text.primary};
    background: white;
    font: inherit;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
  }
  .feedback-button:hover,
  .signin-link:hover {
    background: #eef1e9;
  }
  .account-menu {
    position: relative;
    min-width: 0;
  }
  .account-menu summary {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    list-style: none;
  }
  .account-menu summary::-webkit-details-marker {
    display: none;
  }
  .account-menu summary:hover,
  .account-menu[open] summary {
    background: #eef1e9;
  }
  .account-name {
    min-width: 0;
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .account-chevron {
    display: block;
    flex-shrink: 0;
  }
  .account-dropdown {
    padding: 10px;
    margin-top: 8px;
    border: 1px solid ${theme.colors.border};
    border-radius: 12px;
    background: white;
    box-shadow: 0 12px 32px #1d30251a;
    min-width: min(220px, 100%);
    @media (min-width: ${theme.breakpoints.sm}px) {
      position: absolute;
      right: 0;
      top: 100%;
    }
  }
  .account-dropdown p {
    margin: 4px 12px 8px;
    color: ${theme.colors.text.secondary};
    font-size: 12px;
  }
  .account-dropdown a,
  .account-dropdown button {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 10px 12px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: ${theme.colors.text.primary};
  }
  .account-dropdown a:hover {
    background: #eef1e9;
  }
  .account-dropdown button {
    margin-top: 4px;
    border-top: 1px solid ${theme.colors.border};
  }
`

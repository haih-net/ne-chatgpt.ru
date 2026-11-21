import { styled } from '@linaria/react'
import { ChatContentContainer } from 'app/Custom/components/Chat/ChatWidget/styles'

export const AIChatStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  min-width: 0;
  width: 100%;
  ${ChatContentContainer} {
    max-width: 900px;
  }
  .voice-controls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 12px 0;
    font-size: 13px;
  }
  .voice-select {
    width: 180px;
    max-width: 100%;
  }
  .voice-controls .voice-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 44px;
    padding: 10px 16px;
    border: 1px solid #d7ded9;
    border-radius: 24px;
    background: #fff;
    color: #263e30;
    cursor: pointer;
  }
  .voice-controls .voice-toggle[data-listening='true'] {
    background: #e4f2e8;
  }
  .voice-controls .voice-toggle:disabled {
    opacity: 0.5;
    cursor: default;
  }
  .voice-error {
    color: #a12c2c;
    margin: 0;
    width: 100%;
    text-align: center;
    overflow-wrap: anywhere;
  }
`

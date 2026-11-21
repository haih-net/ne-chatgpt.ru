import type * as React from 'react'
import { useCallback, useState } from 'react'
import { Select } from 'app/Custom/components/controls/Select'
import {
  codexVoices,
  isCodexVoice,
  type CodexVoice,
} from 'app/Custom/components/Chat/lib/codexVoices'
import { Mic, Square } from 'lucide-react'
import { ChatContent } from 'app/Custom/components/Chat/ChatWidget/ChatContent'
import { useChatContext } from 'app/Custom/components/Chat/ChatWidget/context'
import { isCodexChat } from 'app/Custom/components/Chat/lib/streamClient'
import { useVoiceChat } from './useVoiceChat'
import { AIChatStyled } from './styles'

export const AIChat: React.FC = () => {
  const { upsertVoiceMessage, isLoading } = useChatContext()
  const { status, error, start, stop } = useVoiceChat(upsertVoiceMessage)
  const [voice, setVoice] = useState<CodexVoice>('maple')
  const changeVoice = useCallback((value: string | null): void => {
    if (isCodexVoice(value)) {
      setVoice(value)
    }
  }, [])

  const active = status !== 'idle'
  const toggleVoice = useCallback((): void => {
    if (active) {
      stop()
    } else {
      void start(voice)
    }
  }, [active, stop, start, voice])

  return (
    <AIChatStyled>
      <ChatContent
        welcomeHeading="h1"
        welcomeTitle="О чём поговорим?"
        welcomeText="Задавайте вопросы, разбирайтесь в сложном и находите новые идеи."
        voiceActive={active}
        controls={
          isCodexChat && (
            <div className="voice-controls">
              <div className="voice-select">
                <Select
                  aria-label="Голос собеседника"
                  value={voice}
                  disabled={active}
                  onChange={changeVoice}
                  options={codexVoices.map((id) => ({ id, text: id }))}
                />
              </div>
              <button
                className="voice-toggle"
                type="button"
                aria-pressed={active}
                data-listening={status === 'listening'}
                disabled={isLoading || status === 'stopping'}
                onClick={toggleVoice}
              >
                {active ? (
                  <Square size={18} aria-hidden="true" />
                ) : (
                  <Mic size={18} aria-hidden="true" />
                )}
                {status === 'connecting'
                  ? 'Отменить подключение'
                  : active
                    ? 'Завершить разговор'
                    : 'Голосовой режим'}
              </button>
              <span role="status">
                {status === 'connecting'
                  ? 'Подключаемся… Дождитесь готовности, микрофон пока не передаёт речь.'
                  : status === 'listening'
                    ? 'Слушаю. Говорите свободно — отвечу голосом и текстом.'
                    : status === 'reconnecting'
                      ? 'Восстанавливаем соединение… Дождитесь готовности, микрофон временно отключён.'
                      : status === 'stopping'
                        ? 'Завершаем разговор…'
                        : ''}
              </span>
              {error && (
                <p className="voice-error" role="alert">
                  {error}
                </p>
              )}
            </div>
          )
        }
      />
    </AIChatStyled>
  )
}

import React from 'react'

interface RhythmicTextProps {
  text: string
  className?: string
  pcMaxWidth?: string | number
  /** true이면 <span>으로 렌더링 — h1/h2 등 텍스트 요소 내부에 사용할 때 */
  inline?: boolean
}

/**
 * 모바일/PC 맞춤형 '듀얼 리듬' 줄바꿈을 구현하는 컴포넌트입니다.
 *
 * 마커 규칙:
 * - '|' : 모바일에서 줄바꿈, PC에서 공백으로 연결
 * - '\n': 모바일/PC 공통 줄바꿈 (새 블록)
 *
 * @param text 렌더링할 텍스트 (마커 포함 가능)
 * @param className 추가 스타일
 * @param pcMaxWidth PC에서의 최대 가로 폭
 * @param inline true이면 span으로 렌더링 (h1 등 내부에 사용)
 */
export function RhythmicText({ text, className = '', pcMaxWidth, inline = false }: RhythmicTextProps) {
  if (!text) return null

  // '\n'으로 문단(블록) 구분
  const paragraphs = text.split('\n')

  const renderParagraph = (para: string, pIdx: number, isLast: boolean) => {
    // '|'로 분리 후 각 파트를 렌더링
    const parts = para.split('|')

    const content = parts.map((part, i) => {
      const isLastPart = i === parts.length - 1
      if (isLastPart) return <React.Fragment key={i}>{part}</React.Fragment>
      return (
        <React.Fragment key={i}>
          {part}
          {/* 모바일: 줄바꿈 / PC: 공백 한 칸으로 연결 */}
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
        </React.Fragment>
      )
    })

    if (inline) {
      return (
        <React.Fragment key={pIdx}>
          {content}
          {!isLast && <br />}
        </React.Fragment>
      )
    }
    return (
      <span key={pIdx} className={`block ${!isLast ? 'mb-[0.4em]' : ''}`}>
        {content}
      </span>
    )
  }

  if (inline) {
    return (
      <span className={`break-keep ${className}`}>
        {paragraphs.map((para, pIdx) =>
          renderParagraph(para, pIdx, pIdx === paragraphs.length - 1)
        )}
      </span>
    )
  }

  return (
    <div
      className={`break-keep ${className}`}
      style={pcMaxWidth ? { maxWidth: pcMaxWidth, marginLeft: 'auto', marginRight: 'auto' } : {}}
    >
      {paragraphs.map((para, pIdx) =>
        renderParagraph(para, pIdx, pIdx === paragraphs.length - 1)
      )}
    </div>
  )
}

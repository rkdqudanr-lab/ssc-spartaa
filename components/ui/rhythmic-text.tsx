import React from 'react'

interface RhythmicTextProps {
  text: string
  className?: string
  pcMaxWidth?: string | number
}

/**
 * 모바일/PC 맞춤형 '듀얼 리듬' 줄바꿈을 구현하는 컴포넌트입니다.
 * 
 * 마커 규칙:
 * - '|' : 모바일에서만 줄바꿈 발생 (<br className="md:hidden" />)
 * - '\n': 공통(모바일/PC) 줄바꿈
 * 
 * @param text 렌더링할 텍스트 (마커 포함 가능)
 * @param className 추가 스타일
 * @param pcMaxWidth PC에서의 최대 가로 폭 (기본값 없음)
 */
export function RhythmicText({ text, className = '', pcMaxWidth }: RhythmicTextProps) {
  if (!text) return null

  // 1단계: '\n'으로 문단 구분
  const paragraphs = text.split('\n')

  return (
    <div 
      className={`whitespace-pre-line break-keep ${className}`}
      style={pcMaxWidth ? { maxWidth: pcMaxWidth, marginLeft: 'auto', marginRight: 'auto' } : {}}
    >
      {paragraphs.map((para, pIdx) => (
        <span key={pIdx} className="block mb-2 last:mb-0">
          {para.split(/(\|)/).map((part, i) => {
            if (part === '|') {
              return <br key={i} className="md:hidden" />
            }
            return part
          })}
        </span>
      ))}
    </div>
  )
}

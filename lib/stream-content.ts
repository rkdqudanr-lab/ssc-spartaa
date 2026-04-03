import {
  Clock,
  CheckSquare,
  BarChart2,
  MessageSquare,
  Heart,
  Home,
  BookOpen,
  ClipboardList,
  Target,
  Award
} from 'lucide-react'

export type StreamId = 'gongmuwon' | 'suneung' | 'imyong' | 'professional' | 'job'

export interface FAQItem {
  q: string
  a: string
}

export interface StreamSystem {
  icon: string
  title: string
  description: string
}

export interface TestimonialItem {
  name: string
  result: string
  quote: string
}

export interface StreamContent {
  id: StreamId
  name: string
  hero: {
    title: string
    subtitle: string
    description?: string
  }
  differentiation: {
    title: string
    items: {
      title: string
      desc: string
    }[]
  }
  systems: StreamSystem[]
  faqs: FAQItem[]
  testimonials: TestimonialItem[]
}

export const COMMON_SYSTEMS: StreamSystem[] = [
  { icon: 'Clock', title: '교시제 집중 자습', description: '7교시 · 12시간 순공 시스템으로\n흔들리지 않는 집중력을 유지합니다.' },
  { icon: 'CheckSquare', title: '코멘터 출결 2중 관리', description: '카드와 태블릿 2중 출결 시스템으로\n단 한 번의 이탈도 완벽하게 차단합니다.' },
  { icon: 'BarChart2', title: '다양한 학습 공간', description: '컨디션에 맞춰 선택할 수 있는\n3가지 타입의 프리미엄 공간을 제공합니다.' },
  { icon: 'Heart', title: '정기 조회 및 멘탈 관리', description: '매달 성취감을 공유하고 슬럼프를 예방하는\n정기 멘탈 케어 세션을 진행합니다.' },
  { icon: 'Home', title: '스터디 및 라운지 무상 지원', description: '개별 학습 외에도 개방형 카페와\n휴게 공간을 자유롭게 이용 가능합니다.' }
]

export const streamContents: Record<StreamId, StreamContent> = {
  gongmuwon: {
    id: 'gongmuwon',
    name: '공무원',
    hero: {
      title: '공무원 단기합격의\n가장 확실한 길',
      subtitle: '국가직·지방직 맞춤형 관리와\n인강에만 최적화된 압도적 열공공간',
      description: '노량진 커넥츠프랩 공단기의\n독한 관리 시스템을 그대로 이식했습니다.\n합격으로 증명하는 합격자의\n교시제 출결 통제를 직접 경험하세요.',
    },
    differentiation: {
      title: '왜 공무원 시험은 SSC스파르타인가',
      items: [
        {
          title: '노량진 테스트 완벽 이식',
          desc: '매일 오전 모의고사 진행 및\n전국 단위 성적 분석을 통해\n객관적인 현재 위치 파악이 가능합니다.',
        },
        {
          title: '압도적인 순공 시간 확보',
          desc: '스마트폰 압수, 인터넷 통제,\n합격자 교시제로 하루 최소 10시간 이상의\n흐트러짐 없는 집중을 보장합니다.',
        },
        {
          title: '직렬별 맞춤 멘토링',
          desc: '국가직, 지방직, 경찰/소방 등\n각 직렬별 특성에 맞는 수험 전략과\n멘탈 관리를 매니저가 직접 코칭합니다.',
        }
      ]
    },
    systems: [
      COMMON_SYSTEMS[0],
      COMMON_SYSTEMS[1],
      COMMON_SYSTEMS[2],
      { icon: 'MessageSquare', title: '1:1 명접 코칭 프로그램', description: '필기 합격부터 최종 실전 면접까지,\n전 과정을 코치진과 긴밀하게 준비합니다.' },
      COMMON_SYSTEMS[3],
      COMMON_SYSTEMS[4]
    ],
    faqs: [
      { q: '노량진 1타 강사진의 콘텐츠를 그대로 이용하나요?', a: '네, SSC스파르타는 공단기·경단기·소단기의 공식 파트너입니다.\n노량진 본원과 동일한 주간/월간 테스트 및\n하프 모의고사 등 핵심 콘텐츠를 실시간으로 응시합니다.' },
      { q: '경찰·소방 직렬을 위한 특별한 지원이 있나요?', a: '필기 합격은 물론, 이후 체력 학원 연계 및\n최종 면접 파이프라인을 구축하고 있습니다.\n합격 데이터를 기반으로 최종 합격 로드맵을 그려드립니다.' },
      { q: '이미 수강 중인 프리패스를 그대로 이용해도 되나요?', a: '물론입니다. 기존 인강을 활용하시되,\n저희는 여러분의 진도율과 학습 시간표를 최적화합니다.\n혼자서는 놓치기 쉬운 복습 주기까지 철저히 관리합니다.' },
      { q: '공무원 전용 면접반은 어떻게 운영되나요?', a: '필기 합격자 발표 직후, 즉시 집중 면접 준비에\n돌입할 수 있도록 커리큘럼이 구성됩니다.\n직렬별 특성에 맞춰 실전 감각을 극대화합니다.' },
    ],
    testimonials: [
      {
        name: '임O님',
        result: '농업직 경력채용 단기합격',
        quote: '한 달밖에 안 남아서 초조했는데,\n코멘터 분과 상담 후 멘탈을 잡았습니다.\n덕분에 매일 11시간씩 무조건 채우고 합격했습니다.',
      },
      {
        name: '신O지님',
        result: '보건직 9급합격 (영어 95점)',
        quote: '직장 다니느라 시간이 진짜 없었는데,\n매일 아침 단어시험과 빡센 출결 관리 덕에\n오히려 전략적으로 점수 따고 합격했어요.',
      }
    ]
  },
  suneung: {
    id: 'suneung',
    name: '수능(재수)',
    hero: {
      title: '대치동의 몰입을\n그대로 옮겨왔습니다',
      subtitle: 'N수생 및 고3을 위한\n압도적 면학 분위기와 대치동 콘텐츠',
      description: '재수 생활의 성패는\n멘탈과 생활 관리에서 결정됩니다.\n85% 이상의 재원생이 성적 향상을 경험한\n스파르타 시스템을 직접 경험하세요.',
    },
    differentiation: {
      title: '수능 성공을 위한 SSC스파르타만의 전략',
      items: [
        {
          title: '대치동 실전 모의고사',
          desc: '대치동 현강생들만 받는 고퀄리티 모의고사를\n매주 학원에서 동일한 시간에 응시하고\n정밀한 피드백을 통해 분석받습니다.',
        },
        {
          title: '수능 당일 점수 극대화',
          desc: '수능 시간표와 100% 일치하는 교시제 훈련,\n기복 없는 실력을 발휘할 수 있도록\n실전 환경과 동일하게 훈련합니다.',
        },
        {
          title: '성적 향상 밀착 관리',
          desc: '매일 아침 영어 단어 테스트와\n주기적인 성적 상담으로 취약 과목을\n끝까지 보완할 수 있도록 돕습니다.',
        }
      ]
    },
    faqs: [
      { q: '독학재수생을 위한 성적 관리 테스트가 있나요?', a: '가장 중요한 핵심 3과목인 국영수 테스트를\n정기적으로 제공합니다. 집중 학습을 통해\n취약 과목을 보완하고 실전 감각을 유지합니다.' },
      { q: '사설 모의고사 및 외부 평가 시험 응시가 가능한가요?', a: '이감 모의고사 등 메이저 자료 이용이 가능하며,\n매월 \'더프(대성 더 프리미엄)\'를 실시하여\n객관적으로 본인의 현재 위치를 파악합니다.' },
      { q: '학습 상담이나 멘토링은 어떻게 이루어지나요?', a: '정기적인 상담을 통해 취약점을 분석하고\n주간 계획을 점검합니다. 수험 생활 중 겪는\n슬럼프 극복을 위한 심리 케어도 병행합니다.' },
    ],
    systems: [
      COMMON_SYSTEMS[0],
      COMMON_SYSTEMS[1],
      COMMON_SYSTEMS[2],
      { icon: 'BookOpen', title: '교과별 질의응답 시스템', description: '모르는 문제는 바로바로 해결할 수 있도록\n명쾌한 질의응답 피드백을 지원합니다.' },
      COMMON_SYSTEMS[3],
      COMMON_SYSTEMS[4]
    ],
    testimonials: [
      {
        name: '전O제 님',
        result: '부산교대 정시 합격',
        quote: '혼자 재수할 때 시간 관리가 막막했는데,\n시스템으로 다 잡아주신 덕분에\n공부에만 전념할 수 있었습니다.',
      },
      {
        name: '김O민 님',
        result: '연세대 정시 합격',
        quote: '독학재수는 나태함 잡는 게 전부인데,\n매일 시간 인증을 하면서 억지로라도\n책상에 앉게 됐고 결국 성공했습니다.',
      }
    ]
  },
  imyong: {
    id: 'imyong',
    name: '임용시험',
    hero: {
      title: '임용 합격의 마지막 관문\n절대 몰입 공간',
      subtitle: '초/중/고 임용 수험생을 위한\n친목 차단과 순공 시간 극대화',
      description: '방대한 암기량 앞에 흔들리는 마음을 다잡아 드립니다.\n조용한 고요함 속에 울려 퍼지는\n암기의 숨소리만 허용되는 공간입니다.',
    },
    differentiation: {
      title: '임용 준비생이 스파르타를 선택하는 이유',
      items: [
        {
          title: '철저한 친목/대화 금지',
          desc: '임용 전문 스터디 매칭은 지원하되,\n원내 개인 간 사적 대화는 엄격히 금지하여\n오직 공부에만 에너지를 쓰게 합니다.',
        },
        {
          title: '방대한 서적 수납 시스템',
          desc: '각론서 등 두꺼운 책들을 마음껏 펼칠 수 있는\n넓은 책상과 보관함을 지원합니다.',
        },
        {
          title: '2차 면접/실연 지원',
          desc: '1차 필기 합격 후, 원내 스터디룸에서\n심층 면접 및 수업 실연을 연습할 수 있도록\n공간을 개방합니다.',
        }
      ]
    },
    faqs: [
      { q: '교육학 스터디를 학원에서 지원해 주시나요?', a: '네, 인원 충족 시 교육학 스터디 매칭 및 장소를 지원합니다.\n혼자 하기 힘든 인풋/아웃풋 과정을\n동료들과 함께 효율적으로 소화할 수 있습니다.' },
      { q: '임용 시험에 특화된 상담을 받을 수 있을까요?', a: '축적된 임용 합격 데이터를 기반으로 상담을 진행합니다.\n전공별 특성에 맞는 공부법과\n시기별 전략을 제시해 드립니다.' },
    ],
    systems: [
      COMMON_SYSTEMS[0],
      COMMON_SYSTEMS[1],
      COMMON_SYSTEMS[2],
      { icon: 'Target', title: '전공별 스터디 매칭', description: '원할 경우 같은 전공 수험생들과\n조용한 방향 공유 스터디를 연결해 드립니다.' },
      COMMON_SYSTEMS[3],
      COMMON_SYSTEMS[4]
    ],
    testimonials: [
      {
        name: '정OO님',
        result: '유아임용 3수종결 합격',
        quote: '친목질 생기는 게 싫었는데,\n아예 대화를 금지시켜버리니까 속이 편했어요.\n끝까지 집중할 수 있었습니다.',
      }
    ]
  },
  professional: {
    id: 'professional',
    name: '전문자격사',
    hero: {
      title: '평범함을 거부하는\n자격사 시험의 요새',
      subtitle: '세무사·노무사·CPA 준비생을 위한\n성인 전용 프리미엄 관리반',
      description: '나태해지기 쉬운 성인 수험생을 위한\n강력한 강제 교시제 시스템.\n합격이라는 결과만을 위해 설계된\n철저한 전문가용 관리 시스템입니다.',
    },
    differentiation: {
      title: '전문자격 시험을 위한 빈틈없는 지원',
      items: [
        {
          title: '정숙함 이상의 성숙한 분위기',
          desc: '자격증 취득이라는 목표를 가진\n성인 학습자들이 주축이 되어\n상호 시너지를 내는 최상위 환경입니다.',
        },
        {
          title: '효율 극대화 교시제',
          desc: '짧은 시간의 몰입도를 최상으로 올리는\n스파르타식 시간표로 과목별\n암기 시간 단축을 돕습니다.',
        },
        {
          title: '피로를 잊는 베이스캠프',
          desc: '장시간 착석에 최적화된 메쉬 의자와\n간접 조명으로 수험생의\n만성 피로와 거북목을 방지합니다.',
        }
      ]
    },
    faqs: [
      { q: '계산기 사용이나 노트북 타이핑 작업은 어디서 하나요?', a: '세무사, 회계사 수험생을 위해 소음이 허용되는\n\'라운지\' 공간을 별도로 운영합니다.\n열람실(무소음존) 밖에서 자유롭게 학습 가능합니다.' },
      { q: '학습 플래너 관리를 도와주시나요?', a: '네, 방대한 공부 분량을 체계적으로 소화하도록\n코멘터가 주기적으로 플래너를 점검합니다.\n실행력을 높이는 것이 관리의 핵심입니다.' },
    ],
    systems: [
      COMMON_SYSTEMS[0],
      COMMON_SYSTEMS[1],
      COMMON_SYSTEMS[2],
      { icon: 'Heart', title: '장기 수험 대비 멘탈 케어', description: '긴 레이스에 지치지 않도록\n개인별 맞춤형 슬럼프 방지 상담을 제공합니다.' },
      COMMON_SYSTEMS[4],
      { icon: 'ClipboardList', title: 'CPA/CTA 모의고사 연계', description: '실전 모의고사 일정이 있을 경우,\n원내에서 동일한 긴장감으로 응시할 수 있도록 조율합니다.' }
    ],
    testimonials: [
      {
        name: '이O영님',
        result: '공인노무사 1차 단기 합격',
        quote: '피곤해 미칠 것 같을 때도 학원 오면\n폰부터 내고 교시제에 던져지니까\n어떻게든 저를 책상에 묶어두게 되더라고요.',
      }
    ]
  },
  job: {
    id: 'job',
    name: '취업준비',
    hero: {
      title: '공기업/사기업 자격\n및 인적성 초단기 완성',
      subtitle: '가장 치열하게 준비하는 취준생들의\n맞춤형 베이스캠프',
      description: '단기 자격증 취득부터 꾸준한 NCS 대비까지.\n독서실에서 버티는 외로운 싸움 대신\n스파르타의 체계적인 관리를 선택하세요.',
    },
    differentiation: {
      title: '취업 준비생 전용 최후의 몰입존',
      items: [
        {
          title: '비실무 자격시험 특화',
          desc: '번거로운 준비보다는 단기 자격 취득과\nNCS / 인적성 등 필기 위주의\n빠른 스펙업에 몰입할 수 있습니다.',
        },
        {
          title: '자기소개서 집중 존',
          desc: '소음 방지 타이핑 존(라운지)이 마련되어 있어\n눈치 보지 않고 자소서 수정 및\n서류 접수에 완전한 집중이 가능합니다.',
        },
        {
          title: '취업 스터디 연계',
          desc: '인원 충족 시 오프라인 스터디룸을 통하여\nNCS 리뷰나 면접 준비 스터디 결성을\n적극적으로 돕고 있습니다.',
        }
      ]
    },
    faqs: [
      { q: '화상 면접이나 AI 면접을 볼 수 있는 프라이빗한 공간이 있나요?', a: '네, 독립된 프라이빗 스터디룸을 예약하여\n타인의 방해 없이 화상 면접을 치를 수 있습니다.\n최상급 면업 환경을 보장합니다.' },
    ],
    systems: [
      COMMON_SYSTEMS[0],
      COMMON_SYSTEMS[1],
      COMMON_SYSTEMS[2],
      { icon: 'Target', title: '취업 지원 맞춤 스터디', description: '관련 인원 충족 시, 면접이나 NCS 정보 통과를 위한\n상부상조 스터디를 원내에서 매칭해 드립니다.' },
      COMMON_SYSTEMS[3],
      COMMON_SYSTEMS[4]
    ],
    testimonials: [
      {
        name: '신OO님',
        result: '국민건강보험공단 필기 합격',
        quote: 'NCS 책상 좁으면 종이 떨어지는데,\n여긴 책상이 진짜 넓은 개인석이라\n방해 하나도 안 받고 점수 쫙 올렸습니다.',
      }
    ]
  }
}

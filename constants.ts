import { Program } from './types';

export const INITIAL_PROGRAMS: Program[] = [
  {
    id: '1',
    title: '다문화 이해 교육 - 함께 살아가는 세상',
    description: '서로의 다름을 인정하고 존중하며, 글로벌 시민으로서의 소양을 기르는 다문화 감수성 향상 프로그램입니다.',
    category: '다문화이해교육',
    // target: '초등학생', // Removed as requested
    duration: '1일 (총 4시간)',
    objective: '다양한 문화에 대한 이해와 존중을 바탕으로 공동체 의식 함양',
    content: '1교시: 세계 여러 나라의 문화 체험, 2교시: 편견과 차별 이해하기, 3교시: 문화 다양성 퀴즈, 4교시: 화합의 상징 만들기',
    effects: '다문화 수용성 증진 및 글로벌 시민 의식 강화',
    thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800&h=500',
    externalUrl: 'https://drive.google.com/file/d/1bi8ltT3R6xnM43FPUfvhWmJBQCXXQpkz/view?usp=sharing',
    resources: [
      { id: 'r1', name: '다문화_이해_교육_워크북.pdf', url: '#', type: 'PDF', size: '3.2MB' }
    ],
    createdAt: '2024-03-20'
  },
  {
    id: '2',
    title: '찾아가는 진로탐색 및 체험교육',
    description: '청소년들이 자신의 적성을 발견하고 다양한 직업 세계를 직접 체험해보는 맞춤형 진로 설계 프로그램입니다.',
    category: '진로·직업',
    // target: '고등학생', // Removed as requested
    duration: '1일 (총 6시간)',
    objective: '자기 이해를 바탕으로 한 진로 탐색 및 구체적인 직업 체험 기회 제공',
    content: '오전: 직업 흥미 검사 및 결과 분석, 오후: 분야별 전문가 멘토링 및 실무 체험 활동',
    effects: '자존감 향상 및 구체적인 미래 설계 능력 강화',
    thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800&h=500',
    externalUrl: 'https://drive.google.com/file/d/1cP7PsxWjhhwQ_Tb2xOwIbZABv-6DnAG2/view?usp=sharing',
    resources: [
      { id: 'r3', name: '진로탐색_가이드북.pdf', url: '#', type: 'PDF', size: '2.5MB' }
    ],
    createdAt: '2024-03-10'
  },
  {
    id: '3',
    title: '장애인식 개선 교육',
    description: '장애에 대한 올바른 이해와 편견 없는 시선을 통해 더불어 살아가는 포용적인 사회를 만들기 위한 인식 개선 프로그램입니다.',
    category: '인성·리더십',
    // target: '초등학생', // Removed as requested
    duration: '1일 (총 2시간)',
    objective: '장애의 정의 및 유형 이해, 장애인 인권 존중 및 배리어 프리 환경의 중요성 습득',
    content: '1교시: 장애에 대한 이해와 에티켓, 2교시: 인식 개선 영상 시청 및 토론',
    effects: '장애 수용성 향상 및 사회적 편견 해소',
    thumbnail: 'https://images.unsplash.com/photo-1534643960519-11ad79bc19df?auto=format&fit=crop&q=80&w=800&h=500',
    externalUrl: 'https://drive.google.com/file/d/11oOmuRRONTMmUX1AUC-ypxQ_gz02XUMZ/view?usp=sharing',
    resources: [
      { id: 'r5', name: '장애인식_개선_교육_안내문.pdf', url: '#', type: 'PDF', size: '1.5MB' }
    ],
    createdAt: '2024-03-05'
  },
  {
    id: '4',
    title: '학생주도적 진로 및 학습설계',
    description: '학생 스스로 자신의 진로를 탐색하고 주도적인 학습 계획을 수립할 수 있도록 돕는 자기 주도적 진로 및 학습 코칭 프로그램입니다.',
    category: '자기주도학습',
    // target: '교사', // Removed as requested
    duration: '3일 (온라인)',
    objective: '학생 스스로의 강점 발견 및 주체적인 학습 목표 설정 역량 강화',
    content: '1일차: 자기 이해 및 강점 탐색, 2일차: 진로 로드맵 설계, 3일차: 주도적 학습 전략 수립',
    effects: '자기 주도적 학습 태도 형성 및 구체적인 진로 목표 설정',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&h=500',
    externalUrl: 'https://drive.google.com/file/d/1aq9Sd5ALdeRGzZx_2UPfDBxME-ou5rue/view?usp=sharing',
    resources: [
      { id: 'r6', name: '학습설계_가이드.pdf', url: '#', type: 'PDF', size: '2.1MB' }
    ],
    createdAt: '2024-02-28'
  }
];
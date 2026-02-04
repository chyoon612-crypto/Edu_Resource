
export type ProgramCategory = '창의·융합' | '인성·리더십' | '디지털·AI' | '진로·직업' | '다문화이해교육' | '자기주도학습' | '기타';
export type TargetAudience = '초등학생' | '중학생' | '고등학생' | '교사' | '학부모';

export interface ResourceFile {
  id: string;
  name: string;
  url: string;
  type: 'PDF' | 'PPT' | 'DOC' | 'IMG';
  size: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  category: ProgramCategory;
  target?: TargetAudience; // Target is now optional
  duration: string;
  content: string;
  objective: string;
  effects: string;
  thumbnail: string;
  resources: ResourceFile[];
  createdAt: string;
  externalUrl?: string; // Support for direct external links
}

export interface SearchFilters {
  keyword: string;
  category: ProgramCategory | '전체';
  target: TargetAudience | '전체';
}
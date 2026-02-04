
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { BookOpen, Search, Download, Settings, ChevronRight, LayoutGrid, FileText, Plus, LogIn, Github, Info, ArrowLeft, Filter } from 'lucide-react';
import { Program, SearchFilters } from './types';
import { INITIAL_PROGRAMS } from './constants';

// --- Components ---

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-indigo-600 p-2 rounded-lg group-hover:bg-indigo-700 transition-colors">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800">EduResource Hub</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">프로그램 목록</Link>
          <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">소개</Link>
          <Link to="/admin" className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors">
            <Settings className="w-4 h-4" />
            관리자
          </Link>
        </nav>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800 pb-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-indigo-400" />
              <span className="font-bold text-lg text-white">EduResource Hub</span>
            </div>
            <p className="text-sm leading-relaxed">
              모두를 위한 교육 혁신, 체계적인 자료 관리와 접근성 높은 공유 플랫폼으로 교육의 질을 높입니다.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">바로가기</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">프로그램 탐색</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">플랫폼 소개</Link></li>
              <li><Link to="/admin" className="hover:text-indigo-400 transition-colors">관리자 대시보드</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">문의하기</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: contact@eduhub.example.com</li>
              <li>Tel: 02-123-4567</li>
              <li>Address: 서울특별시 교육구 혁신로 123</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs opacity-50">
          &copy; 2024 EduResource Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const ProgramListPage: React.FC<{ programs: Program[] }> = ({ programs }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          교육 프로그램 <span className="text-indigo-600">자료실</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          혁신적인 교육 프로그램을 한눈에 살펴보고, 수업과 프로젝트에 필요한 다양한 가이드와 자료를 지금 바로 다운로드하세요.
        </p>
      </section>

      {/* Filter Section Removed as per request */}

      {/* Results Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map(program => (
          <div key={program.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src={program.thumbnail}
                alt={program.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-white/90 backdrop-blur text-indigo-600 text-xs font-bold rounded-full shadow-sm">
                  {program.category}
                </span>
                {program.target && (
                  <span className="px-3 py-1 bg-indigo-600/90 backdrop-blur text-white text-xs font-bold rounded-full shadow-sm">
                    {program.target}
                  </span>
                )}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                {program.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6 line-clamp-2 h-10">
                {program.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-400">자료 {program.resources.length}건</span>
                {program.externalUrl ? (
                  <a 
                    href={program.externalUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    자세히 보기 <ChevronRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link to={`/program/${program.id}`} className="flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                    자세히 보기 <ChevronRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {programs.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
          <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="text-slate-600 font-medium">검색 결과가 없습니다.</h3>
          <p className="text-slate-400 text-sm">등록된 프로그램을 기다려 주세요.</p>
        </div>
      )}
    </div>
  );
};

const ProgramDetailPage: React.FC<{ programs: Program[] }> = ({ programs }) => {
  const location = useLocation();
  const id = location.pathname.split('/').pop();
  const program = programs.find(p => p.id === id);

  if (!program) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">프로그램을 찾을 수 없습니다.</h2>
        <Link to="/" className="text-indigo-600 mt-4 inline-block">목록으로 돌아가기</Link>
      </div>
    );
  }

  const handleDownload = (fileName: string) => {
    // Simulate download
    alert(`${fileName} 자료가 성공적으로 다운로드 대기열에 추가되었습니다.`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        <span>목록으로 돌아가기</span>
      </Link>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="md:flex">
          <div className="md:w-1/2 h-64 md:h-auto">
            <img src={program.thumbnail} alt={program.title} className="w-full h-full object-cover" />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-slate-50/50">
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full">
                {program.category}
              </span>
              {program.target && (
                <span className="px-3 py-1 bg-slate-200 text-slate-700 text-xs font-bold rounded-full">
                  {program.target}
                </span>
              )}
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-4">{program.title}</h1>
            <p className="text-slate-600 leading-relaxed mb-6">{program.description}</p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                <span>운영 기간: {program.duration}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12 space-y-12">
          {/* Detail Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
                프로그램 목적
              </h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">{program.objective}</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
                기대 효과
              </h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">{program.effects}</p>
            </section>
            <section className="md:col-span-2">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
                주요 내용 및 활용 대상
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl text-slate-600 leading-relaxed">
                {program.content}
              </div>
            </section>
          </div>

          {/* Resources Section */}
          <section className="border-t border-slate-100 pt-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Download className="w-6 h-6 text-indigo-500" />
              학습 및 홍보 자료 다운로드
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {program.resources.map(file => (
                <button
                  key={file.id}
                  onClick={() => handleDownload(file.name)}
                  className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl hover:border-indigo-500 hover:bg-indigo-50/30 transition-all group text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${file.type === 'PDF' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">{file.name}</p>
                      <p className="text-xs text-slate-400">{file.type} &bull; {file.size}</p>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const AdminPage: React.FC<{ programs: Program[]; setPrograms: React.Dispatch<React.SetStateAction<Program[]>> }> = ({ programs, setPrograms }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newProgram, setNewProgram] = useState<Partial<Program>>({
    title: '',
    category: '디지털·AI',
    target: '초등학생',
    description: '',
    objective: '',
    effects: '',
    content: ''
  });

  const handleAdd = () => {
    if (!newProgram.title) return alert('제목을 입력해주세요.');
    const program: Program = {
      ...newProgram as Program,
      id: Date.now().toString(),
      thumbnail: `https://picsum.photos/seed/${Date.now()}/600/400`,
      resources: [{ id: 'nr1', name: '기본_자료.pdf', url: '#', type: 'PDF', size: '1.0MB' }],
      createdAt: new Date().toISOString().split('T')[0]
    };
    setPrograms([program, ...programs]);
    setIsAdding(false);
    setNewProgram({ title: '', category: '디지털·AI', target: '초등학생' });
  };

  const handleDelete = (id: string) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      setPrograms(programs.filter(p => p.id !== id));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">운영 관리 시스템</h1>
          <p className="text-slate-500">프로그램 게시물 및 자료 배포를 관리합니다.</p>
        </div>
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
        >
          <Plus className="w-5 h-5" />
          신규 프로그램 등록
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-sm font-bold text-slate-600">프로그램명</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-600 hidden md:table-cell">카테고리</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-600 hidden md:table-cell">대상</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-600 hidden md:table-cell">등록일</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-600 text-right">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {programs.map(p => (
              <tr key={p.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-5 font-semibold text-slate-800">{p.title}</td>
                <td className="px-6 py-5 hidden md:table-cell"><span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs">{p.category}</span></td>
                <td className="px-6 py-5 hidden md:table-cell text-slate-600 text-sm">{p.target || '-'}</td>
                <td className="px-6 py-5 hidden md:table-cell text-slate-400 text-xs">{p.createdAt}</td>
                <td className="px-6 py-5 text-right">
                  <div className="flex justify-end gap-2">
                    <Link to={`/program/${p.id}`} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                      <LayoutGrid className="w-4 h-4" />
                    </Link>
                    <button onClick={() => handleDelete(p.id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Modal */}
      {isAdding && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsAdding(false)}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-xl font-bold">프로그램 정보 입력</h2>
              <button onClick={() => setIsAdding(false)} className="text-slate-400 hover:text-slate-600">&times;</button>
            </div>
            <div className="p-8 overflow-y-auto space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">프로그램 제목</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="예: 다문화 이해 교육"
                  value={newProgram.title}
                  onChange={e => setNewProgram({...newProgram, title: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">카테고리</label>
                  <select
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl"
                    value={newProgram.category}
                    onChange={e => setNewProgram({...newProgram, category: e.target.value as any})}
                  >
                    <option value="디지털·AI">디지털·AI</option>
                    <option value="창의·융합">창의·융합</option>
                    <option value="인성·리더십">인성·리더십</option>
                    <option value="진로·직업">진로·직업</option>
                    <option value="다문화이해교육">다문화이해교육</option>
                    <option value="자기주도학습">자기주도학습</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">대상</label>
                  <select
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl"
                    value={newProgram.target}
                    onChange={e => setNewProgram({...newProgram, target: e.target.value as any})}
                  >
                    <option value="초등학생">초등학생</option>
                    <option value="중학생">중학생</option>
                    <option value="고등학생">고등학생</option>
                    <option value="교사">교사</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">설명</label>
                <textarea
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl h-24 outline-none focus:ring-2 focus:ring-indigo-500"
                  value={newProgram.description}
                  onChange={e => setNewProgram({...newProgram, description: e.target.value})}
                />
              </div>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-4">
              <button onClick={() => setIsAdding(false)} className="flex-1 py-3 text-slate-600 font-bold hover:bg-slate-100 rounded-xl transition-colors">취소</button>
              <button onClick={handleAdd} className="flex-1 py-3 bg-indigo-600 text-white font-bold hover:bg-indigo-700 rounded-xl transition-colors">등록하기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="inline-block p-4 bg-indigo-50 rounded-3xl mb-6">
          <Info className="w-12 h-12 text-indigo-600" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">교육의 미래를 잇는 플랫폼</h1>
        <p className="text-xl text-slate-600">EduResource Hub는 교육 콘텐츠 공유의 새로운 기준을 제시합니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">우리의 비전</h2>
          <p className="text-slate-600 leading-relaxed">
            분산되어 있는 우수한 교육 자료들을 한곳으로 모아, 누구나 쉽게 접근하고 활용할 수 있는 생태계를 구축합니다. 교육 운영자는 효율적으로 자료를 배포하고, 참여자는 최신의 정보를 직관적으로 받아볼 수 있습니다.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">핵심 기능</h2>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>통합 게시판 및 검색</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>직관적인 상세 정보 제공</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>원클릭 자료 다운로드</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>강력한 운영 관리 도구</li>
          </ul>
        </div>
      </div>

      <div className="mt-20 p-10 bg-indigo-600 rounded-[3rem] text-center text-white">
        <h2 className="text-3xl font-bold mb-4">지금 바로 시작해보세요</h2>
        <p className="mb-8 opacity-90">당신의 교육 프로그램을 더욱 돋보이게 하는 가장 쉬운 방법입니다.</p>
        <Link to="/" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-colors shadow-xl">프로그램 둘러보기</Link>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [programs, setPrograms] = useState<Program[]>(INITIAL_PROGRAMS);

  // Auto scroll to top on route change
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-indigo-100 selection:text-indigo-700">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ProgramListPage programs={programs} />} />
            <Route path="/program/:id" element={<ProgramDetailPage programs={programs} />} />
            <Route path="/admin" element={<AdminPage programs={programs} setPrograms={setPrograms} />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
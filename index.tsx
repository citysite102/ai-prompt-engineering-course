import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Sidebar from './components/Sidebar';
import PromptCard from './components/PromptCard';
import { COURSE_CONTENT } from './constants';
import { Unit, Chapter } from './types';
import { 
  Menu, 
  ChevronRight, 
  ChevronLeft, 
  BookOpen, 
  Target, 
  ListOrdered, 
  Lightbulb, 
  ArrowRight,
  Play,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
  FileText
} from 'lucide-react';

const parseInlineStyles = (text: string) => {
  if (!text) return '';
  const parts = text.split(/(\*\*.*?\*\*|`[^`]+`|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="bg-slate-100 text-brand-600 font-mono text-sm px-1.5 py-0.5 rounded border border-slate-200 mx-1 break-words">
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2 && !part.startsWith('**')) {
      return <em key={i} className="italic text-slate-800">{part.slice(1, -1)}</em>;
    }
    return part;
  });
};

const formatContent = (text: string) => {
  if (!text) return null;
  const lines = text.split('\n');
  const result: React.ReactNode[] = [];
  
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (line.trim().startsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      
      if (tableLines.length > 0) {
         const headers = tableLines[0].split('|').filter(s => s.trim() !== '').map(s => s.trim());
         const bodyRows = tableLines.slice(2).filter(r => r.trim().startsWith('|')).map(rowLine => 
           rowLine.split('|').filter(s => s.trim() !== '').map(s => s.trim())
         );

         result.push(
           <div key={`table-${i}`} className="overflow-x-auto my-6 border border-slate-200 rounded-lg shadow-sm print:shadow-none print:border-slate-300">
             <table className="w-full text-sm text-left text-slate-600">
               <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200 print:bg-slate-100">
                 <tr>
                   {headers.map((h, idx) => (
                     <th key={idx} className="px-4 py-3 border-r last:border-r-0 border-slate-200">
                       {parseInlineStyles(h)}
                     </th>
                   ))}
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100 bg-white">
                 {bodyRows.map((row, rIdx) => (
                   <tr key={rIdx} className="hover:bg-slate-50/50">
                     {row.map((cell, cIdx) => (
                       <td key={cIdx} className="px-4 py-3 align-top border-r last:border-r-0 border-slate-100 leading-relaxed min-w-[100px]">
                         {parseInlineStyles(cell)}
                       </td>
                     ))}
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         );
      }
      continue;
    }

    if (line.startsWith('GRID::')) {
      const content = line.replace('GRID::', '');
      const items = content.split('|').map(item => {
        const [name, desc, url] = item.split(';;');
        return { name, desc, url };
      });
      
      result.push(
        <div key={`grid-${i}`} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 print:grid-cols-1">
          {items.map((res, idx) => (
             <a key={idx} href={res.url} target="_blank" rel="noopener noreferrer" className="block p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md hover:border-brand-300 transition-all group">
               <div className="flex items-center justify-between mb-2">
                 <span className="font-bold text-slate-800 group-hover:text-brand-600">{res.name}</span>
                 <ExternalLink size={14} className="text-slate-400 group-hover:text-brand-500 print:hidden" />
               </div>
               <p className="text-xs text-slate-500">{res.desc}</p>
               <p className="hidden print:block text-[10px] text-brand-600 mt-1">{res.url}</p>
             </a>
          ))}
        </div>
      );
      i++;
      continue;
    }

    if (line.trim().startsWith('>')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      result.push(
        <blockquote key={`quote-${i}`} className="border-l-4 border-brand-400 bg-brand-50/50 pl-4 py-3 pr-4 my-6 rounded-r-lg text-slate-700 italic">
          {quoteLines.map((l, idx) => <div key={idx}>{parseInlineStyles(l)}</div>)}
        </blockquote>
      );
      continue;
    }

    if (line.startsWith('# ')) {
      result.push(<h3 key={`h3-${i}`} className="text-xl font-bold text-slate-800 mt-8 mb-4 border-l-4 border-brand-500 pl-3">{parseInlineStyles(line.replace('# ', ''))}</h3>);
      i++; continue;
    }
    
    if (line.startsWith('## ')) {
      result.push(
        <h4 key={`h4-${i}`} className="text-lg font-bold text-slate-700 mt-6 mb-3 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
          {parseInlineStyles(line.replace('## ', ''))}
        </h4>
      );
      i++; continue;
    }

    if (line.startsWith('### ')) {
      result.push(<h5 key={`h5-${i}`} className="text-md font-bold text-slate-800 mt-5 mb-2 border-b border-slate-100 pb-1">{parseInlineStyles(line.replace('### ', ''))}</h5>);
      i++; continue;
    }

    if (line.startsWith('#### ')) {
      const content = line.replace('#### ', '');
      result.push(
        <h6 key={`h6-${i}`} className="text-sm font-bold text-brand-700 mt-4 mb-2 flex items-center gap-2 uppercase tracking-wider">
          <div className="w-2 h-0.5 bg-brand-500" />
          {parseInlineStyles(content)}
        </h6>
      );
      i++;
      continue;
    }
    
    if (line.trim().startsWith('•') || line.trim().startsWith('- ')) {
       const cleanLine = line.trim().replace(/^[•-]\s*/, '');
       result.push(
        <div key={`li-${i}`} className="flex items-start gap-2 mb-2 text-slate-700 leading-7">
          <span className="mt-2.5 min-w-[5px] h-[5px] rounded-full bg-slate-400 block" />
          <span className="flex-1">{parseInlineStyles(cleanLine)}</span>
        </div>
       );
       i++; continue;
    }
    
    if (line.trim() === '') {
      result.push(<div key={`empty-${i}`} className="h-2" />);
      i++; continue;
    }
    
    result.push(<p key={`p-${i}`} className="mb-2 text-slate-600 leading-7">{parseInlineStyles(line)}</p>);
    i++;
  }
  return result;
};

const FullCoursePrintView = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-8 bg-white print:p-0 print:max-w-none">
      <div className="text-center mb-24 print:h-[100vh] print:flex print:flex-col print:justify-center">
        <span className="text-brand-600 font-bold uppercase tracking-widest mb-4 block">Teaching Materials</span>
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6">{COURSE_CONTENT.title}</h1>
        <p className="text-2xl text-slate-600 mb-12">{COURSE_CONTENT.subtitle}</p>
        <div className="text-slate-400 text-sm mt-auto">© {new Date().getFullYear()} AI Prompt Engineering Course System</div>
      </div>
      
      {COURSE_CONTENT.chapters.map((ch) => (
        <div key={ch.id} className="print-break-before">
          <div className="mb-12 mt-12 border-b-4 border-slate-900 pb-4">
             <h2 className="text-4xl font-black text-slate-900">{ch.title}</h2>
             <p className="text-slate-600 mt-3 text-xl leading-relaxed">{ch.description}</p>
          </div>
          
          {ch.units.map((u) => (
            <div key={u.id} className="mb-20 print-avoid-break">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-slate-100 flex items-center gap-3">
                <FileText className="text-brand-500" size={24} /> {u.title}
              </h3>
              
              <div className="mb-10 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg"><Target className="text-red-500" size={20} /> 單元學習目標</h4>
                <ul className="space-y-2">
                  {u.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-slate-700">
                      <span className="mt-2 w-1.5 h-1.5 bg-brand-500 rounded-full shrink-0" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-12">
                {u.flow.map((step, i) => (
                  <div key={i} className="print-avoid-break">
                    <h4 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-brand-400 pl-4">{step.title}</h4>
                    <div className="text-base text-slate-800 leading-relaxed pl-5">{formatContent(step.content)}</div>
                  </div>
                ))}
              </div>

              {/* Added Prompt Examples to Print View */}
              {u.prompts && u.prompts.length > 0 && (
                <div className="mt-12 space-y-6 print-avoid-break">
                  <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2"><Lightbulb className="text-yellow-500" size={20} /> 精選 Prompt 範例</h4>
                  {u.prompts.map((p, pIdx) => (
                    <div key={pIdx} className="border-2 border-slate-100 rounded-xl overflow-hidden bg-white">
                      <div className="bg-slate-50 px-4 py-2 border-b border-slate-100 font-bold text-sm text-slate-700">{p.title}</div>
                      <div className="p-4">
                        {p.context && <p className="text-xs text-slate-500 italic mb-2">Context: {p.context}</p>}
                        <pre className="text-sm font-mono bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">{p.content}</pre>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {u.outputTask && (
                <div className="mt-16 p-8 border-2 border-brand-200 rounded-2xl bg-brand-50/20 print-avoid-break">
                  <h4 className="font-bold text-brand-900 mb-4 flex items-center gap-2 text-lg"><CheckCircle2 className="text-brand-600" size={22} /> 單元產出任務</h4>
                  <div className="text-base text-slate-800 mb-6">{formatContent(u.outputTask.description)}</div>
                  <div className="p-5 bg-white rounded-xl border border-brand-100">
                    <h5 className="text-xs font-black text-brand-400 uppercase tracking-widest mb-3">參考範例解答</h5>
                    <pre className="text-sm text-slate-700 font-mono whitespace-pre-wrap">{u.outputTask.example}</pre>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [activeUnitId, setActiveUnitId] = useState<string>('cover');
  const [activeChapterId, setActiveChapterId] = useState<string>('intro');
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const [isTaskExampleOpen, setIsTaskExampleOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCurrentUnitData = (): { unit: Unit | null; chapter: Chapter | null } => {
    if (activeUnitId === 'cover') return { unit: null, chapter: null };
    for (const chapter of COURSE_CONTENT.chapters) {
      const unit = chapter.units.find(u => u.id === activeUnitId);
      if (unit) return { unit, chapter };
    }
    return { unit: null, chapter: null };
  };

  const getNavigation = () => {
    const allUnits: { id: string; title: string; chapterId: string }[] = [];
    allUnits.push({ id: 'cover', title: '課程首頁', chapterId: 'intro' });
    COURSE_CONTENT.chapters.forEach(ch => {
      ch.units.forEach(u => {
        allUnits.push({ id: u.id, title: u.title, chapterId: ch.id });
      });
    });
    const currentIndex = allUnits.findIndex(u => u.id === activeUnitId);
    return {
      prev: currentIndex > 0 ? allUnits[currentIndex - 1] : null,
      next: currentIndex < allUnits.length - 1 ? allUnits[currentIndex + 1] : null,
      currentIndex,
      total: allUnits.length
    };
  };

  const { unit, chapter } = getCurrentUnitData();
  const nav = getNavigation();

  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) mainContent.scrollTop = 0;
    setIsTaskExampleOpen(false); 
  }, [activeUnitId]);

  const handlePrintAll = () => {
    // Scroll to top and wait for rendering engine to stabilize
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.print();
    }, 250);
  };

  const handleUnitSelect = (unitId: string, chapterId: string) => {
    setActiveUnitId(unitId);
    setActiveChapterId(chapterId);
  };

  const renderCover = () => (
    <div className="max-w-4xl mx-auto py-12 px-6 lg:py-20 animate-fade-in">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 font-bold text-sm mb-6 tracking-wide">AI Prompt Engineering Course</span>
        <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">{COURSE_CONTENT.title}</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">{COURSE_CONTENT.subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button onClick={() => handleUnitSelect('1-1', 'ch1')} className="group relative inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            開始課程<Play size={20} className="fill-current" />
          </button>
          <button onClick={handlePrintAll} className="inline-flex items-center gap-2 px-6 py-4 bg-white border border-slate-200 text-slate-600 rounded-full font-bold hover:border-brand-300 hover:text-brand-600 transition-all shadow-sm active:scale-95">
            <Download size={20} /> 匯出完整教材 PDF
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4"><Target size={24} /></div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">適合對象</h3>
          <p className="text-slate-600 leading-relaxed">{COURSE_CONTENT.targetAudience}</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4"><BookOpen size={24} /></div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">課程核心價值</h3>
          <p className="text-slate-600 leading-relaxed">從 LLM 底層原理出發，涵蓋結構化 Prompt、深度推理框架、Vibe Coding 到 Agent 工作流設計，打造你的 AI 數位職能系統。</p>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <ListOrdered className="text-brand-600" /> 課程章節大綱概覽
        </h2>
        <div className="space-y-6">
          {COURSE_CONTENT.chapters.map((chapter, chIdx) => (
            <div key={chapter.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-brand-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center font-bold text-slate-400 shrink-0 text-xl border border-slate-100">
                  {chIdx + 1}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">{chapter.title}</h3>
                    <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">{chapter.units.length} 個單元</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-5 leading-relaxed">{chapter.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {chapter.units.map((unit) => (
                      <button key={unit.id} onClick={() => handleUnitSelect(unit.id, chapter.id)} className="flex items-center gap-3 text-sm text-slate-600 hover:text-brand-600 group/unit transition-colors text-left">
                        <FileText size={14} className="text-slate-300 group-hover/unit:text-brand-400 shrink-0" />
                        <span className="truncate">{unit.title.split('｜')[1] || unit.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} AI Prompt Master 線上課程系統</p>
      </div>
    </div>
  );

  const renderUnit = () => {
    if (!unit || !chapter) return null;
    return (
      <div className="max-w-4xl mx-auto py-8 px-6 lg:py-12 pb-32">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 font-medium">
          <span className="text-brand-600">{chapter.title.split('｜')[0]}</span>
          <ChevronRight size={14} />
          <span className="truncate">{chapter.title.split('｜')[1]}</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-10 leading-tight">{unit.title}</h1>
        {unit.objectives && (
          <section className="mb-12 bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-100 text-yellow-700 rounded-lg"><Target size={20} /></div>
              <h2 className="text-xl font-bold text-slate-800">單元學習目標</h2>
            </div>
            <ul className="grid md:grid-cols-1 gap-3">
              {unit.objectives.map((obj, idx) => <li key={idx} className="flex items-start gap-3 text-slate-700"><div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-brand-500" /><span className="leading-relaxed">{obj}</span></li>)}
            </ul>
          </section>
        )}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><ListOrdered size={20} /></div>
            <h2 className="text-xl font-bold text-slate-800">教學內容</h2>
          </div>
          <div className="relative pl-4 border-l-2 border-slate-100 ml-4 space-y-10">
            {unit.flow.map((step, idx) => (
              <div key={idx} className="relative pl-6">
                <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-white border-2 border-brand-300" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <div className="text-slate-600">{formatContent(step.content)}</div>
              </div>
            ))}
          </div>
        </section>
        {unit.prompts && unit.prompts.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 text-purple-700 rounded-lg"><Lightbulb size={20} /></div>
              <h2 className="text-xl font-bold text-slate-800">精選 Prompt 範例</h2>
            </div>
            <div className="grid gap-2">{unit.prompts.map((p, idx) => <PromptCard key={idx} prompt={p} />)}</div>
          </section>
        )}
        {unit.outputTask && (
          <section className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand-100 text-brand-700 rounded-lg"><CheckCircle2 size={20} /></div>
                <h3 className="text-xl font-bold text-slate-900">本單元產出任務</h3>
              </div>
              <div className="text-slate-700 leading-relaxed mb-6 pl-12">{formatContent(unit.outputTask.description)}</div>
              <div className="pl-12">
                <button onClick={() => setIsTaskExampleOpen(!isTaskExampleOpen)} className="flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-800">
                  {isTaskExampleOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  {isTaskExampleOpen ? '收合參考解答' : '查看作業參考範例'}
                </button>
                {isTaskExampleOpen && (
                  <div className="mt-4 bg-slate-100 rounded-xl p-5 border border-slate-200 animate-fade-in">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Example Answer</h4>
                    <div className="text-sm text-slate-700 font-mono whitespace-pre-wrap leading-relaxed">{unit.outputTask.example}</div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    );
  };

  return (
    <div className="h-screen bg-slate-50 overflow-hidden print:h-auto print:overflow-visible">
      {/* Interactive Main View */}
      <div className="flex h-full no-print">
        <Sidebar activeUnitId={activeUnitId} onSelectUnit={handleUnitSelect} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className={`flex-1 flex flex-col min-w-0 relative transition-all duration-300 ${isSidebarOpen ? 'lg:pl-80' : 'pl-0'}`}>
          <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-30 min-h-[57px]">
            <div className="flex items-center gap-3 truncate">
              {!isSidebarOpen && (
                <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors" title="展開選單">
                  <Menu size={24} />
                </button>
              )}
              <div className="font-bold text-slate-800 truncate">{unit ? unit.title.split('｜')[1] : COURSE_CONTENT.title}</div>
            </div>
          </div>
          <div id="main-content" className="flex-1 overflow-y-auto scroll-smooth">
            {activeUnitId === 'cover' ? renderCover() : renderUnit()}
          </div>
          <div className="bg-white border-t border-slate-200 px-6 py-4 flex items-center justify-between z-20">
            {nav.prev ? (
              <button onClick={() => handleUnitSelect(nav.prev!.id, nav.prev!.chapterId)} className="flex items-center gap-2 text-slate-500 text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-50">
                <ChevronLeft size={16} /> <span className="hidden sm:inline">上一單元</span>
              </button>
            ) : <div />}
            <div className="text-xs font-medium text-slate-400 hidden md:block">{nav.currentIndex + 1} / {nav.total}</div>
            {nav.next ? (
              <button onClick={() => handleUnitSelect(nav.next!.id, nav.next!.chapterId)} className="flex items-center gap-2 bg-slate-900 text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-lg hover:bg-brand-600 transition-colors">
                <span className="hidden sm:inline">下一單元</span> <span className="sm:hidden">Next</span> <ArrowRight size={16} />
              </button>
            ) : <button onClick={() => handleUnitSelect('cover', 'intro')} className="text-brand-600 text-sm font-bold px-4 py-2">回首頁</button>}
          </div>
        </main>
      </div>

      {/* Print View (Dedicated for PDF Export) */}
      <div className="hidden print:block bg-white min-h-screen">
        <FullCoursePrintView />
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
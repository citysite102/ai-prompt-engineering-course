import React from 'react';
import { COURSE_CONTENT } from '../constants';
import { BookOpen, CheckCircle, Circle, Layout, Menu, X } from 'lucide-react';

interface SidebarProps {
  activeUnitId: string;
  onSelectUnit: (unitId: string, chapterId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeUnitId, onSelectUnit, isOpen, onClose }) => {
  return (
    <>
      {/* Overlay - Only show on mobile to allow interaction with main content on desktop when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 w-80 bg-white border-r border-slate-200 shadow-xl lg:shadow-none transform transition-transform duration-300 z-50 flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">AI Prompt Master</h1>
            <p className="text-xs text-slate-500 mt-1">課程教學簡報系統</p>
          </div>
          {/* Close button visible on all sizes now */}
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-slate-800 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            title="收合選單"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-2">
            <button
              onClick={() => {
                onSelectUnit('cover', 'intro');
                if(window.innerWidth < 1024) onClose();
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeUnitId === 'cover' 
                  ? 'bg-brand-50 text-brand-700' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Layout size={18} />
              課程首頁
            </button>
          </div>

          {COURSE_CONTENT.chapters.map((chapter) => (
            <div key={chapter.id} className="mb-6">
              <div className="px-8 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                {chapter.title.split('｜')[0]}
              </div>
              <ul className="space-y-1 px-4">
                {chapter.units.map((unit) => {
                  const isActive = activeUnitId === unit.id;
                  return (
                    <li key={unit.id}>
                      <button
                        onClick={() => {
                          onSelectUnit(unit.id, chapter.id);
                          if(window.innerWidth < 1024) onClose();
                        }}
                        className={`w-full flex items-start gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                          isActive
                            ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <div className={`mt-0.5 ${isActive ? 'text-brand-200' : 'text-slate-400'}`}>
                          {isActive ? <CheckCircle size={16} /> : <Circle size={16} />}
                        </div>
                        <span className="text-left leading-tight">
                          {unit.title.split('｜')[1] || unit.title}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
        
        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            System Ready
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
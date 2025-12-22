import React, { useState } from 'react';
import { Copy, Check, Terminal, Sparkles, AlertCircle, FileText } from 'lucide-react';
import { PromptExample } from '../types';

interface PromptCardProps {
  prompt: PromptExample;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'bad':
        return 'border-red-200 bg-red-50/30';
      case 'good':
        return 'border-green-200 bg-green-50/30';
      case 'structure':
        return 'border-blue-200 bg-blue-50/30';
      case 'demo':
        return 'border-indigo-200 bg-indigo-50/30';
      default:
        return 'border-slate-200 bg-slate-50/30';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'bad': return <AlertCircle size={18} />;
      case 'good': return <Sparkles size={18} />;
      case 'structure': return <Terminal size={18} />;
      default: return <FileText size={18} />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'bad': return 'text-red-600 bg-red-100';
      case 'good': return 'text-green-600 bg-green-100';
      case 'structure': return 'text-blue-600 bg-blue-100';
      case 'demo': return 'text-indigo-600 bg-indigo-100';
      default: return 'text-slate-600 bg-slate-100';
    }
  };

  return (
    <div className={`rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-lg ${getTypeStyles(prompt.type)} mb-8 group`}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-black/5 bg-white/60 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className={`p-1.5 rounded-lg ${getTypeColor(prompt.type)}`}>
            {getTypeIcon(prompt.type)}
          </div>
          <h3 className="font-bold text-slate-800 text-sm md:text-base">{prompt.title}</h3>
        </div>
        <button 
          onClick={handleCopy}
          className="p-2 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors flex items-center gap-2 group/btn"
          title="複製 Prompt"
        >
          {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
          <span className="text-xs font-medium hidden group-hover/btn:inline-block">
            {copied ? '已複製' : '複製'}
          </span>
        </button>
      </div>

      {/* Content Body */}
      <div className="p-5 md:p-6">
        {prompt.context && (
          <div className="mb-4 text-sm text-slate-600 bg-white/60 p-3 rounded-lg border border-black/5 italic flex gap-2">
            <span className="font-semibold not-italic text-slate-400 text-xs uppercase tracking-wider select-none py-0.5">Context</span>
            {prompt.context}
          </div>
        )}
        
        <div className="relative">
          <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap text-slate-800 bg-white/80 p-4 rounded-lg border border-black/5 shadow-sm">
            {prompt.content}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
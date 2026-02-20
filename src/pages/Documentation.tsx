import { useLocation, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { docsContent } from '../data/docsContent';

export default function Documentation() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname.endsWith('/') && location.pathname !== '/'
    ? location.pathname.slice(0, -1)
    : location.pathname;

  // Content based on pathname, with a fallback if path is not found
  const content = docsContent[pathname] || docsContent['/docs'] || `
# Coming Soon

This section is under construction.

Current Path: \`${pathname}\`
`;

  return (
    <div className="max-w-4xl mx-auto py-6">
      <div className="prose prose-invert prose-orange max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-white mb-6 border-b border-[#2a2a2a] pb-4" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-[#2a2a2a]/30 pb-2" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-xl font-semibold text-white mt-6 mb-3" {...props} />,
            p: ({ node, ...props }) => <p className="text-gray-300 leading-7 mb-4" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300" {...props} />,
            ol: ({ node, ...props }) => <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-300" {...props} />,
            li: ({ node, ...props }) => <li className="ml-2" {...props} />,
            a: ({ node, ...props }) => <a className="text-orange-500 hover:text-orange-400 underline decoration-orange-500/30 hover:decoration-orange-500 transition-all" {...props} />,
            code: ({ node, className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '');
              const isInline = !match && !String(children).includes('\n');
              return isInline ? (
                <code className="bg-[#1a1a1a] text-orange-200 px-1.5 py-0.5 rounded text-sm font-mono border border-[#2a2a2a]" {...props}>
                  {children}
                </code>
              ) : (
                <code className={`block bg-[#1a1a1a] p-4 rounded-lg overflow-x-auto text-sm font-mono border border-[#2a2a2a] my-4 ${className}`} {...props}>
                  {children}
                </code>
              );
            },
            blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-orange-500 pl-4 py-1 my-4 bg-orange-500/5 rounded-r-lg italic text-gray-400" {...props} />,
            table: ({ node, ...props }) => <div className="overflow-x-auto my-6 border border-[#2a2a2a] rounded-lg"><table className="w-full text-left border-collapse" {...props} /></div>,
            th: ({ node, ...props }) => <th className="bg-[#1a1a1a] p-3 font-semibold text-white border-b border-[#2a2a2a]" {...props} />,
            td: ({ node, ...props }) => <td className="p-3 border-b border-[#2a2a2a] text-gray-300" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}


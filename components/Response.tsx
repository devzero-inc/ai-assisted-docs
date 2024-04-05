import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ResponseProps {
  res: string;
  isOpen: boolean;
  onClose: () => void;
}

const Response: React.FC<ResponseProps> = ({ res, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-cus-card p-12 overflow-auto max-h-[90%]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-bold text-black">&times;</button>
        <ReactMarkdown className="prose">
          {res}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Response;

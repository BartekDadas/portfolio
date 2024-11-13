import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';

interface MarkdownProps {
  file: string;
}

const Markdown: React.FC<MarkdownProps> = ({ file }) => {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  useEffect(() => {
    fetch(`./../markdown/${file}.md`)
      .then(res => res.text())
      .then(content => setMarkdownContent(content))
      .catch(err => console.error('Error loading markdown:', err));
  }, [file]);

  return (
    <div className="markdown-container">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default Markdown;
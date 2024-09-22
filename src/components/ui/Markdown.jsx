import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';

const MarkdownJsx = ({ file }) => {
    const [markdownContent, setMarkdownContent] = useState('');

    // const path = ``;
    useEffect(() => {
            fetch('./../markdown/tester.md')
                .then(res => res.text())
                .then(res => setMarkdownContent(res))
                .then(res => console.log(res))
                .catch(err => console.log(err));
           
    }, []);

    return (
        <div className="markdown-container">
            <ReactMarkdown>
                {markdownContent}
            </ReactMarkdown>
        </div>
    )
};

export default MarkdownJsx;
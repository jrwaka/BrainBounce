import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';

const Example = ({ GetContent }) => {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [lastProcessedText, setLastProcessedText] = useState('');

  const plainText = useMemo(() => {
    try {
      return new DOMParser().parseFromString(content, 'text/html').body.textContent || '';
    } catch (error) {
      console.error('Error parsing HTML:', error);
      return content;
    }
  }, [content]);

  const handleOnChangeContent = (newContent) => {
    if (typeof newContent === 'string') {
      setContent(newContent);
    }
  };

  useEffect(() => {
    if (plainText !== lastProcessedText) {
      GetContent(plainText);
      setLastProcessedText(plainText);
    }
  }, [plainText, GetContent, lastProcessedText]);

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: 'Start typing...', // Ensure placeholder is always a string
      language: 'en',
    }),
    []
  );

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={handleOnChangeContent} // preferred to use only this option to update the content for performance reasons
      onChange={handleOnChangeContent}
    />
  );
};

export default Example;
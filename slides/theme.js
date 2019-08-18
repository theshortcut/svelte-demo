import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { future } from 'mdx-deck/themes';
import syntaxStyle from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night';

const getLanguage = className => {
  const match = /language-(\w*)/.exec(className || 'language-javascript');
  let lang = 'javascript';
  if (match && match.length > 1) {
    lang = match[1];
  }
  return lang;
};

const pre = props => props.children;

const code = props => {
  const language = getLanguage(props.className);
  return <SyntaxHighlighter language={language} style={syntaxStyle} {...props} />;
};

export default {
  ...future,
  colors: {
    ...future.colors,
    primary: '#00CDBE',
    link: '#005F5C'
  },
  components: {
    pre,
    code
  }
};

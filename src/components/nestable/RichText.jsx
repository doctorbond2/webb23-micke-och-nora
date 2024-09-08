import Link from 'next/link';
import React from 'react';
import {
  render,
  MARK_LINK,
  MARK_CODE,
  NODE_HR,
  NODE_HEADING,
  NODE_CODEBLOCK,
  NODE_LI,
  NODE_UL,
  NODE_OL,
  NODE_PARAGRAPH,
} from 'storyblok-rich-text-react-renderer';

export default function RichTextDefault({ blok }) {
  const { richtext, ...rest } = blok;

  const resolveNodeHeading = (children, props) => {
    const { level } = props;

    const headingClassNames = {
      1: 'text-5xl font-bold mb-4 font-sans',
      2: 'text-2xl font-semibold mb-3 font-sans',
      3: 'text-xl font-medium mb-2 font-sans',
      4: 'text-lg font-medium mb-2 font-sans',
    };

    return (
      <h1
        className={
          headingClassNames[level] || 'text-lg font-medium mb-2 font-sans'
        }
      >
        {children}
      </h1>
    );
  };

  const resolveNodeUL = (children) => {
    return <ul className="list-disc ml-4 mb-4">{children}</ul>;
  };

  const resolveNodeOL = (children) => {
    return <ol className="list-decimal ml-4 mb-4">{children}</ol>;
  };

  const resolveNodeLI = (children) => {
    return <li className="mb-1">{children}</li>;
  };

  const resolveMarkLink = (children, props) => {
    const { linktype, href, target } = props;
    const linkClassNames =
      'font-bold underline text-blue-600 hover:text-blue-800';
    if (linktype === 'email') {
      // Email links: add `mailto:` scheme and map to <a>
      return (
        <a className={linkClassNames} href={`mailto:${href}`}>
          {children}
        </a>
      );
    }
    if (href.match(/^(https?:)?\/\//)) {
      // External links -> a-tag
      return (
        <a className={linkClassNames} href={href} target={'_blank'}>
          {children}
        </a>
      );
    }
    // Internal links: map to <Link>
    return (
      <Link className={linkClassNames} href={href}>
        {children}
      </Link>
    );
  };

  const resolveNodeParagraph = (children) => {
    return <p className="mb-4">{children}</p>;
  };

  const resolveMarkCode = (children, props) => {
    return (
      <code className="bg-gray-200 p-1 rounded text-red-600">{children}</code>
    );
  };

  const resolveNodeCodeBlock = (children, props) => {
    return (
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        {children}
      </pre>
    );
  };

  const resolvers = {
    markResolvers: {
      [MARK_LINK]: (children, props) => resolveMarkLink(children, props),
      [MARK_CODE]: (children, props) => resolveMarkCode(children, props),
    },
    nodeResolvers: {
      [NODE_HEADING]: (children, props) => resolveNodeHeading(children, props),
      [NODE_CODEBLOCK]: (children, props) =>
        resolveNodeCodeBlock(children, props),
      [NODE_UL]: (children) => resolveNodeUL(children),
      [NODE_OL]: (children) => resolveNodeOL(children),
      [NODE_LI]: (children) => resolveNodeLI(children),
      [NODE_PARAGRAPH]: (children) => resolveNodeParagraph(children),
      [NODE_HR]: () => (
        <div className="mt-8 mb-8">
          <hr className="border-t-2 border-t-gray-400" />
        </div>
      ),
    },
    blokResolvers: {
      // Connect other components here
    },
  };

  const renderedRichText = render(richtext, resolvers);

  return (
    <div className="prose prose-lg mx-auto" {...rest}>
      {renderedRichText}
    </div>
  );
}

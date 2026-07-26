"use client";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import vscDarkPlus from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("css", css);

import Image from "next/image";

/**
 * MarkdownRendering Component
 *
 * A component that renders markdown content with enhanced features:
 * - Syntax highlighting for code blocks
 * - Image URL fixing for Contentful CMS
 * - Copy-to-clipboard functionality for code blocks
 * - Responsive styling
 *
 * @param {Object} props - Component props
 * @param {string} props.content - The markdown content to render
 * @returns {JSX.Element} Rendered markdown content
 */
export default function MarkdownRendering({ content }: { content: string }) {
  // Fix Contentful image URLs: convert protocol-relative URLs (//images.ctfassets.net/)
  // to absolute HTTPS URLs for proper loading
  const fixedContent = content.replace(
    /\!\[(.*?)\]\(\/\/(.*?)\)/g,
    "![$1](https://$2)",
  );

  return (
    <div>
      {/* 
        ReactMarkdown component renders markdown content
        rehypeRaw allows parsing of raw HTML within markdown
      */}
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          h1(props) {
            const { ...rest } = props;
            return (
              <h1
                className="text-2xl md:text-3xl text-p-color font-bold my-4"
                {...rest}
              />
            );
          },
          h2(props) {
            const { ...rest } = props;
            return (
              <h2
                className="text-xl md:text-2xl text-p-color font-bold my-4"
                {...rest}
              />
            );
          },
          h3(props) {
            const { ...rest } = props;
            return (
              <h3
                className="text-lg md:text-xl text-p-color font-bold my-4"
                {...rest}
              />
            );
          },
          p(props) {
            const { ...rest } = props;
            return (
              <p
                className="text-base md:text-lg text-gray-800 my-2 leading-loose"
                {...rest}
              />
            );
          },
          ol(props) {
            const { ...rest } = props;
            return (
              <ol className="list-decimal list-inside my-2 ml-4" {...rest} />
            );
          },
          em(props) {
            const { ...rest } = props;
            return (
              <span
                className="bg-sky-900  text-white rounded px-2 m-0 font-normal"
                {...rest}
              />
            );
          },
          hr: () => <hr className="my-6 border-t-2 border-p-color" />,
          // Custom image component to handle protocol-relative URLs
          img: ({ src, alt }) => {
            if (!src || typeof src !== "string") return null;

            // Modern way to handle the URL without triggering legacy parsers
            const getSafeSrc = (urlStr: string) => {
              if (urlStr.startsWith("//")) return `https:${urlStr}`;
              try {
                // This uses the modern WHATWG URL API
                return new URL(urlStr).toString();
              } catch {
                return urlStr;
              }
            };

            const fixedSrc = getSafeSrc(src);
            return (
              <Image
                src={fixedSrc}
                alt={alt ?? ""}
                className="max-w-full rounded-md my-4 border-p-color border-2"
                loading="lazy"
                width={600}
                height={300}
              />
            );
          },
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-sky-800 underline hover:text-sky-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          blockquote(props) {
            const { ...rest } = props;
            return (
              <blockquote
                className="my-4 bg-gray-100 border-l-4 border-gray-400 p-4 rounded-r-md text-gray-700 italic"
                {...rest}
              />
            );
          },
          // Custom code block component with syntax highlighting and copy functionality
          code: CodeBlock,
        }}
      >
        {fixedContent}
      </ReactMarkdown>
    </div>
  );
}

function CodeBlock({ className, children, ...props }: any) {
  const [copied, setCopied] = useState(false);

  // Check if it's a code block (has a language class) or inline code
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";
  const isInline = !match; // If no language match, it's inline code

  const codeText = String(children).replace(/\n$/, "");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isInline) {
    return (
      <code
        className="bg-gray-200 rounded px-1 py-0.5 text-p-color font-mono"
        {...props}
      >
        {children}
      </code>
    );
  }

  return (
    <div className="relative group my-4 font-mono">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 z-10 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      {language && (
        <span className="absolute top-2 left-2 z-10 bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
          {language}
        </span>
      )}

      <SyntaxHighlighter
        {...props}
        style={vscDarkPlus}
        language={language}
        PreTag="div" // Important: prevents nested <pre> tags which break styling
        showLineNumbers
        customStyle={{
          borderRadius: "8px",
          padding: "40px 15px 15px 15px", // Top padding increased for the labels
          fontSize: "16px", // 20px is quite large for code; 16px is usually better for UI
        }}
      >
        {codeText}
      </SyntaxHighlighter>
    </div>
  );
}

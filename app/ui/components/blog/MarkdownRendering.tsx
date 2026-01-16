"use client";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import vscDarkPlus from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";
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
    "![$1](https://$2)"
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
            if (!src) {
              return <div>Image not available</div>;
            }

            // ❗ Block Blob (Next/Image does not support it)
            if (typeof src !== "string") {
              return <div>Image not supported</div>;
            }

            const fixedSrc = src.startsWith("//") ? `https:${src}` : src;

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
          // Custom code block component with syntax highlighting and copy functionality
          code: CodeBlock,
        }}
      >
        {fixedContent}
      </ReactMarkdown>
    </div>
  );
}

/**
 * CodeBlock Component
 *
 * Renders code blocks with syntax highlighting and copy-to-clipboard functionality.
 * Handles both inline code (single backticks) and code blocks (triple backticks).
 *
 * @param {Object} props - Component props
 * @param {boolean} props.inline - Whether the code is inline (single backticks)
 * @param {string} props.className - CSS class name, contains language info for code blocks
 * @param {ReactNode} props.children - The code content to display
 * @returns {JSX.Element} Rendered code block or inline code
 */
function CodeBlock({ inline, className, children }: any) {
  // State to track if code has been copied to clipboard
  const [copied, setCopied] = useState(false);

  // Extract programming language from className (format: language-xxxx)
  // Example: className="language-javascript" -> extracts "javascript"
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";

  // Remove trailing newline from code text for cleaner display
  const codeText = String(children).replace(/\n$/, "");

  /**
   * Copies the code text to the user's clipboard
   * Shows feedback by setting copied state for 2 seconds
   */
  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    // Reset copied status after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  // Render inline code (single backticks in markdown)
  if (inline) {
    return <code className="bg-gray-200 rounded px-1 py-0.5">{children}</code>;
  }

  // Render code block with syntax highlighting (triple backticks in markdown)
  return (
    <div className="relative group my-4">
      {/* Copy button - appears on hover */}
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity [direction:rtl]"
        aria-label="Copy code to clipboard"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      {/* Language label - appears on hover */}
      <span className="block absolute top-2 left-2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        {language}
      </span>

      {/* SyntaxHighlighter component for code formatting */}
      <SyntaxHighlighter
        language={language} // Programming language for syntax highlighting
        style={vscDarkPlus} // VS Code Dark Plus color theme
        showLineNumbers // Show line numbers for better code readability
        customStyle={{
          borderRadius: "8px", // Rounded corners for the code block
          padding: "30px 15px", // Ample padding for code content
          fontSize: "20px", // Larger font size for better readability
        }}
      >
        {codeText}
      </SyntaxHighlighter>
    </div>
  );
}

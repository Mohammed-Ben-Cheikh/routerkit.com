import {
  css as beautifyCss,
  html as beautifyHtml,
  js as beautifyJs,
} from "js-beautify";
import { format } from "prettier";
import parserBabel from "prettier/parser-babel";
import parserHtml from "prettier/parser-html";
import parserCss from "prettier/parser-postcss";
import parserTypeScript from "prettier/parser-typescript";
import { useCallback, useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import dracula from "react-syntax-highlighter/dist/esm/styles/prism/dracula";
import okaidia from "react-syntax-highlighter/dist/esm/styles/prism/okaidia";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  showCopyButton?: boolean;
  showHeader?: boolean;
  maxHeight?: string;
  expandable?: boolean;
  filename?: string;
  theme?: "vscDarkPlus" | "dracula" | "okaidia";
  enableFormatting?: boolean; // New prop to enable/disable formatting
}

const CodeBlock = ({
  code,
  language = "tsx",
  showLineNumbers = true,
  showCopyButton = true,
  showHeader = true,
  maxHeight = "none",
  expandable = false,
  filename,
  theme = "vscDarkPlus",
  enableFormatting = true,
}: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(!expandable);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [formattedCode, setFormattedCode] = useState(code);
  const codeRef = useRef<HTMLDivElement>(null);

  const themes = {
    vscDarkPlus,
    dracula,
    okaidia,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const checkScrollable = () => {
    if (codeRef.current) {
      const { scrollHeight, clientHeight } = codeRef.current;
      setShowScrollIndicator(scrollHeight > clientHeight);
    }
  };

  useEffect(() => {
    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => window.removeEventListener("resize", checkScrollable);
  }, [code, maxHeight]);

  const formatCode = useCallback(
    async (code: string, lang: string): Promise<string> => {
      try {
        // Prettier options
        const prettierOptions = {
          semi: true,
          singleQuote: false,
          tabWidth: 2,
          trailingComma: "es5" as const,
          printWidth: 80,
          bracketSpacing: true,
          jsxBracketSameLine: false,
          arrowParens: "avoid" as const,
        };

        // js-beautify options
        const beautifyOptions = {
          indent_size: 2,
          indent_char: " ",
          max_preserve_newlines: 2,
          preserve_newlines: true,
          keep_array_indentation: false,
          break_chained_methods: false,
          indent_scripts: "normal" as const,
          brace_style: "collapse" as const,
          space_before_conditional: true,
          unescape_strings: false,
          jslint_happy: false,
          end_with_newline: false,
          wrap_line_length: 80,
          indent_inner_html: false,
          comma_first: false,
          e4x: false,
          indent_empty_lines: false,
        };

        switch (lang) {
          case "tsx":
          case "jsx":
            // Use Prettier for React/JSX code
            return await format(code, {
              ...prettierOptions,
              parser: "babel-ts",
              plugins: [parserBabel, parserTypeScript],
            });

          case "typescript":
          case "ts":
            // Use Prettier for TypeScript
            return await format(code, {
              ...prettierOptions,
              parser: "typescript",
              plugins: [parserTypeScript],
            });

          case "javascript":
          case "js":
            // Try Prettier first, fallback to js-beautify
            try {
              return await format(code, {
                ...prettierOptions,
                parser: "babel",
                plugins: [parserBabel],
              });
            } catch {
              return beautifyJs(code, beautifyOptions);
            }

          case "html":
            // Try Prettier first, fallback to js-beautify
            try {
              return await format(code, {
                ...prettierOptions,
                parser: "html",
                plugins: [parserHtml],
              });
            } catch {
              return beautifyHtml(code, beautifyOptions);
            }

          case "css":
          case "scss":
          case "less":
            // Try Prettier first, fallback to js-beautify
            try {
              return await format(code, {
                ...prettierOptions,
                parser: "css",
                plugins: [parserCss],
              });
            } catch {
              return beautifyCss(code, beautifyOptions);
            }

          case "json":
            // Use Prettier for JSON
            return await format(code, {
              ...prettierOptions,
              parser: "json",
              plugins: [parserBabel],
            });

          default:
            // For other languages, use js-beautify if it's JavaScript-like
            if (["jsx", "tsx", "js", "ts"].some((ext) => lang.includes(ext))) {
              return beautifyJs(code, beautifyOptions);
            }
            return code;
        }
      } catch (error) {
        // If all formatting fails, return the original code
        console.warn("Code formatting failed:", error);
        return code;
      }
    },
    []
  );

  // Fallback simple formatter for when Prettier is not needed
  const simpleFormat = (src: string) => {
    const lines = src.split("\n");
    return lines
      .map((line) => line.trim())
      .filter((line, index, arr) => {
        // Remove consecutive empty lines
        if (line === "" && arr[index - 1] === "") return false;
        return true;
      })
      .join("\n")
      .trim();
  };

  // Format code when component mounts or code/language changes
  useEffect(() => {
    const formatCodeAsync = async () => {
      if (!enableFormatting) {
        setFormattedCode(code);
        return;
      }

      try {
        const formatted = await formatCode(code, language);
        setFormattedCode(formatted);
      } catch (error) {
        console.warn("Using fallback formatter:", error);
        setFormattedCode(simpleFormat(code));
      }
    };

    formatCodeAsync();
  }, [code, language, enableFormatting, formatCode]);

  const getLanguageDisplayName = (lang: string) => {
    const languageMap: { [key: string]: string } = {
      tsx: "TypeScript",
      jsx: "JavaScript",
      javascript: "JavaScript",
      typescript: "TypeScript",
      python: "Python",
      java: "Java",
      cpp: "C++",
      css: "CSS",
      html: "HTML",
      json: "JSON",
      bash: "Bash",
      shell: "Shell",
      sql: "SQL",
    };
    return languageMap[lang] || lang.toUpperCase();
  };

  return (
    <div className="bg-[#1e1e1e] rounded-lg border border-white/10 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      {showHeader && (
        <div className="flex items-center justify-between px-4 py-3 bg-gray-900/50 border-b border-white/10">
          <div className="flex items-center gap-3">
            {/* Language Indicator */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm font-medium text-gray-300">
                {getLanguageDisplayName(language)}
              </span>
            </div>

            {/* Filename */}
            {filename && (
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                {filename}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Expand/Collapse Button */}
            {expandable && (
              <button
                onClick={toggleExpand}
                className="p-1.5 rounded-md hover:bg-white/10 transition-colors duration-200"
                title={isExpanded ? "Collapse" : "Expand"}
              >
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            )}

            {/* Copy Button */}
            {showCopyButton && (
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 active:scale-95"
              >
                {isCopied ? (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Code Content */}
      <div
        ref={codeRef}
        className={`relative transition-all duration-300 ${
          isExpanded ? "max-h-none" : `max-h-96 overflow-hidden`
        }`}
        style={
          isExpanded
            ? {}
            : { maxHeight: maxHeight !== "none" ? maxHeight : "24rem" }
        }
      >
        {/* Scroll Indicator */}
        {showScrollIndicator && !isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-900 to-transparent flex items-center justify-center">
            <div className="flex items-center gap-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              Scroll to see more
            </div>
          </div>
        )}

        <SyntaxHighlighter
          language={language}
          style={themes[theme]}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            padding: "1.5rem",
            background: "#1e1e1e",
            fontSize: "0.875rem",
            lineHeight: "1.5",
            border: "none",
            borderRadius: 0,
          }}
          lineNumberStyle={{
            minWidth: "3em",
            paddingRight: "1em",
            color: "#858585",
            userSelect: "none",
            background: "transparent",
          }}
          wrapLines={true}
          wrapLongLines={true}
        >
          {formattedCode}
        </SyntaxHighlighter>

        {/* Expand Overlay */}
        {expandable && !isExpanded && (
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 cursor-pointer flex items-end justify-center pb-4"
            onClick={toggleExpand}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-sm text-gray-300 hover:bg-gray-700 transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                />
              </svg>
              Click to expand
            </div>
          </div>
        )}
      </div>

      {/* Footer with character/lines count */}
      <div className="px-4 py-2 bg-gray-900/30 border-t border-white/5 flex justify-between items-center text-xs text-gray-500">
        <div className="flex items-center gap-4">
          <span>{formattedCode.split("\n").length} lines</span>
          <span>{formattedCode.length} characters</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          routerkit.com
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;

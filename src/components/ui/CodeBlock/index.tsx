import {
  css as beautifyCss,
  html as beautifyHtml,
  js as beautifyJs,
} from "js-beautify";
import type { BuiltInParserName, Options as PrettierOptions } from "prettier";
import type { JSX } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import dracula from "react-syntax-highlighter/dist/esm/styles/prism/dracula";
import okaidia from "react-syntax-highlighter/dist/esm/styles/prism/okaidia";

// ============================================================================
// Types & Interfaces
// ============================================================================

type LoadedPrettier = {
  format: typeof import("prettier/standalone").format;
  plugins: unknown[];
};

type ThemeVariant = "vscDarkPlus" | "dracula" | "okaidia" | "custom";

interface CodeBlockProps {
  /** The code to display */
  code: string;
  /** Programming language for syntax highlighting */
  language?: string;
  /** Show line numbers */
  showLineNumbers?: boolean;
  /** Show copy button */
  showCopyButton?: boolean;
  /** Show header with language and controls */
  showHeader?: boolean;
  /** Maximum height before scrolling */
  maxHeight?: string;
  /** Allow expanding/collapsing */
  expandable?: boolean;
  /** Filename to display */
  filename?: string;
  /** Color theme */
  theme?: ThemeVariant;
  /** Enable code formatting */
  enableFormatting?: boolean;
  /** Show footer with stats */
  showFooter?: boolean;
  /** Custom title override */
  title?: string;
  /** Highlight specific lines (1-indexed) */
  highlightLines?: number[];
  /** Show diff indicators */
  diffMode?: "added" | "removed" | "modified" | null;
  /** Badge text (e.g., "NEW", "RECOMMENDED") */
  badge?: string;
  /** Badge color variant */
  badgeVariant?: "default" | "success" | "warning" | "info";
  /** Compact mode with smaller padding */
  compact?: boolean;
  /** Glass morphism effect */
  glassMorphism?: boolean;
}

// ============================================================================
// Prettier Loader (Lazy Loading)
// ============================================================================

let prettierLoader: Promise<LoadedPrettier> | null = null;

const loadPrettier = async (): Promise<LoadedPrettier> => {
  if (!prettierLoader) {
    prettierLoader = Promise.all([
      import("prettier/standalone"),
      import("prettier/plugins/babel"),
      import("prettier/plugins/estree"),
      import("prettier/plugins/typescript"),
      import("prettier/plugins/html"),
      import("prettier/plugins/postcss"),
      import("prettier/plugins/yaml"),
      import("prettier/plugins/markdown"),
    ]).then(
      ([
        prettier,
        babel,
        estree,
        typescript,
        html,
        postcss,
        yaml,
        markdown,
      ]) => ({
        format: prettier.format,
        plugins: [
          babel.default,
          estree.default,
          typescript.default,
          html.default,
          postcss.default,
          yaml.default,
          markdown.default,
        ] as unknown[],
      })
    );
  }
  return prettierLoader;
};

// ============================================================================
// Utility Functions
// ============================================================================

const getParserFromLanguage = (lang: string): BuiltInParserName | null => {
  const value = lang.toLowerCase();
  const parserMap: Record<string, BuiltInParserName> = {
    tsx: "babel-ts",
    jsx: "babel",
    javascript: "babel",
    js: "babel",
    typescript: "typescript",
    ts: "typescript",
    json: "json",
    html: "html",
    css: "css",
    scss: "css",
    less: "css",
    yaml: "yaml",
    yml: "yaml",
    markdown: "markdown",
    md: "markdown",
  };
  return parserMap[value] || null;
};

const getLanguageIcon = (lang: string): JSX.Element => {
  const iconMap: Record<string, { color: string; icon: string }> = {
    tsx: { color: "#3178C6", icon: "TS" },
    typescript: { color: "#3178C6", icon: "TS" },
    ts: { color: "#3178C6", icon: "TS" },
    jsx: { color: "#F7DF1E", icon: "JS" },
    javascript: { color: "#F7DF1E", icon: "JS" },
    js: { color: "#F7DF1E", icon: "JS" },
    python: { color: "#3776AB", icon: "PY" },
    py: { color: "#3776AB", icon: "PY" },
    html: { color: "#E34F26", icon: "HT" },
    css: { color: "#1572B6", icon: "CS" },
    scss: { color: "#CC6699", icon: "SC" },
    json: { color: "#000000", icon: "{}" },
    bash: { color: "#4EAA25", icon: "$_" },
    shell: { color: "#4EAA25", icon: "$_" },
    sql: { color: "#336791", icon: "SQ" },
    rust: { color: "#DEA584", icon: "RS" },
    go: { color: "#00ADD8", icon: "GO" },
    java: { color: "#ED8B00", icon: "JV" },
    cpp: { color: "#00599C", icon: "++" },
    c: { color: "#A8B9CC", icon: "C" },
    php: { color: "#777BB4", icon: "PH" },
    ruby: { color: "#CC342D", icon: "RB" },
    swift: { color: "#FA7343", icon: "SW" },
    kotlin: { color: "#7F52FF", icon: "KT" },
    yaml: { color: "#CB171E", icon: "YM" },
    yml: { color: "#CB171E", icon: "YM" },
    markdown: { color: "#083FA1", icon: "MD" },
    md: { color: "#083FA1", icon: "MD" },
  };

  const config = iconMap[lang.toLowerCase()] || {
    color: "#6366F1",
    icon: lang.slice(0, 2).toUpperCase(),
  };

  return (
    <div
      className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold text-white"
      style={{ backgroundColor: config.color }}
    >
      {config.icon}
    </div>
  );
};

const getLanguageDisplayName = (lang: string): string => {
  const languageMap: Record<string, string> = {
    tsx: "TypeScript React",
    jsx: "JavaScript React",
    javascript: "JavaScript",
    typescript: "TypeScript",
    python: "Python",
    java: "Java",
    cpp: "C++",
    css: "CSS",
    scss: "SCSS",
    html: "HTML",
    json: "JSON",
    bash: "Bash",
    shell: "Shell",
    sql: "SQL",
    rust: "Rust",
    go: "Go",
    php: "PHP",
    ruby: "Ruby",
    swift: "Swift",
    kotlin: "Kotlin",
    yaml: "YAML",
    yml: "YAML",
    markdown: "Markdown",
    md: "Markdown",
    ts: "TypeScript",
    js: "JavaScript",
    py: "Python",
  };
  return languageMap[lang.toLowerCase()] || lang.toUpperCase();
};

const getBadgeStyles = (variant: string): string => {
  const variants: Record<string, string> = {
    default: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    success: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    warning: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    info: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  };
  return variants[variant] || variants.default;
};

// ============================================================================
// Icons Components
// ============================================================================

const CopyIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

const CheckIcon = () => (
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
);

const ExpandIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
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
);

const TerminalIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const FileIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const MaximizeIcon = () => (
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
);

// ============================================================================
// Main Component
// ============================================================================

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
  showFooter = true,
  title,
  highlightLines = [],
  diffMode = null,
  badge,
  badgeVariant = "default",
  compact = false,
  glassMorphism = false,
}: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(!expandable);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [formattedCode, setFormattedCode] = useState(code);
  const [isFormatting, setIsFormatting] = useState(false);
  const codeRef = useRef<HTMLDivElement>(null);

  const themes = useMemo(
    () => ({
      vscDarkPlus,
      dracula,
      okaidia,
      custom: vscDarkPlus,
    }),
    []
  );

  // Copy to clipboard handler
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  // Toggle expand handler
  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Check if content is scrollable
  const checkScrollable = useCallback(() => {
    if (codeRef.current) {
      const { scrollHeight, clientHeight } = codeRef.current;
      setShowScrollIndicator(scrollHeight > clientHeight);
    }
  }, []);

  useEffect(() => {
    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => window.removeEventListener("resize", checkScrollable);
  }, [code, maxHeight, checkScrollable]);

  // Format code function
  const formatCode = useCallback(
    async (source: string, lang: string): Promise<string> => {
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

      const parser = getParserFromLanguage(lang);

      // Check if code contains JSX that might cause parsing issues
      // Code snippets with JSX components in object literals (like route configs)
      // often can't be parsed as standalone code
      const hasPartialJsx =
        /<[A-Z][a-zA-Z]*\s*\/?>/.test(source) &&
        !source.trim().startsWith("import") &&
        !source.trim().startsWith("export") &&
        !source.trim().startsWith("function") &&
        !source.trim().startsWith("const") &&
        !source.trim().startsWith("let") &&
        !source.trim().startsWith("var") &&
        !source.trim().startsWith("class");

      if (parser && !hasPartialJsx) {
        try {
          const { format: prettierFormat, plugins } = await loadPrettier();
          const prettierOptions: PrettierOptions = {
            semi: true,
            singleQuote: false,
            tabWidth: 2,
            trailingComma: "es5",
            printWidth: 80,
            bracketSpacing: true,
            arrowParens: "avoid",
            parser,
            plugins: plugins as PrettierOptions["plugins"],
          };
          return await prettierFormat(source, prettierOptions);
        } catch {
          // Silent fallback for partial code snippets
        }
      }

      // Fallback to beautify for non-parseable code
      try {
        switch (lang.toLowerCase()) {
          case "html":
            return beautifyHtml(source, beautifyOptions);
          case "css":
          case "scss":
          case "less":
            return beautifyCss(source, beautifyOptions);
          case "tsx":
          case "jsx":
          case "typescript":
          case "ts":
          case "javascript":
          case "js":
          case "json":
            return beautifyJs(source, beautifyOptions);
          default:
            return source;
        }
      } catch {
        // If beautify also fails, return original source
        return source;
      }
    },
    []
  );

  // Format code on mount or when code/language changes
  useEffect(() => {
    const formatCodeAsync = async () => {
      if (!enableFormatting) {
        setFormattedCode(code);
        return;
      }

      setIsFormatting(true);
      try {
        const formatted = await formatCode(code, language);
        setFormattedCode(formatted);
      } catch (error) {
        console.warn("Formatting failed:", error);
        setFormattedCode(code);
      } finally {
        setIsFormatting(false);
      }
    };

    formatCodeAsync();
  }, [code, language, enableFormatting, formatCode]);

  // Calculate stats
  const stats = useMemo(() => {
    const lines = formattedCode.split("\n");
    return {
      lines: lines.length,
      characters: formattedCode.length,
      words: formattedCode.split(/\s+/).filter(Boolean).length,
    };
  }, [formattedCode]);

  // Get diff mode styles
  const getDiffStyles = () => {
    if (!diffMode) return "";
    const styles: Record<string, string> = {
      added: "border-l-4 border-l-emerald-500",
      removed: "border-l-4 border-l-red-500",
      modified: "border-l-4 border-l-amber-500",
    };
    return styles[diffMode] || "";
  };

  // Container classes
  const containerClasses = useMemo(() => {
    const base =
      "rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group";
    const glass = glassMorphism
      ? "bg-gray-900/80 backdrop-blur-xl border border-white/10"
      : "bg-[#0d1117] border border-gray-800/50";
    const diff = getDiffStyles();
    const hover = "hover:shadow-indigo-500/10 hover:border-gray-700/50";
    return `${base} ${glass} ${diff} ${hover}`;
  }, [glassMorphism, diffMode]);

  return (
    <div className={containerClasses}>
      {/* Header */}
      {showHeader && (
        <div className="relative">
          {/* Gradient line at top */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

          <div
            className={`flex items-center justify-between bg-gradient-to-b from-gray-800/50 to-transparent border-b border-gray-800/50 ${
              compact ? "px-3 py-2" : "px-4 py-3"
            }`}
          >
            <div className="flex items-center gap-3">
              {/* Window Controls */}
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-lg shadow-red-500/20 hover:brightness-110 transition-all cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-lg shadow-yellow-500/20 hover:brightness-110 transition-all cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-lg shadow-green-500/20 hover:brightness-110 transition-all cursor-pointer" />
              </div>

              {/* Separator */}
              <div className="w-px h-4 bg-gray-700" />

              {/* Language Icon & Name */}
              <div className="flex items-center gap-2">
                {getLanguageIcon(language)}
                <span className="text-sm font-medium text-gray-300">
                  {title || getLanguageDisplayName(language)}
                </span>
              </div>

              {/* Filename */}
              {filename && (
                <>
                  <div className="w-px h-4 bg-gray-700" />
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <FileIcon />
                    <span className="font-mono">{filename}</span>
                  </div>
                </>
              )}

              {/* Badge */}
              {badge && (
                <span
                  className={`ml-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border ${getBadgeStyles(
                    badgeVariant
                  )}`}
                >
                  {badge}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              {/* Formatting indicator */}
              {isFormatting && (
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mr-2">
                  <div className="w-3 h-3 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
                  <span>Formatting...</span>
                </div>
              )}

              {/* Expand Button */}
              {expandable && (
                <button
                  onClick={toggleExpand}
                  className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-gray-200 transition-all duration-200"
                  title={isExpanded ? "Collapse" : "Expand"}
                >
                  <ExpandIcon isExpanded={isExpanded} />
                </button>
              )}

              {/* Copy Button */}
              {showCopyButton && (
                <button
                  onClick={copyToClipboard}
                  className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 ${
                    isCopied
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/20 hover:border-indigo-500/40"
                  }`}
                >
                  {isCopied ? (
                    <>
                      <CheckIcon />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Code Content */}
      <div
        ref={codeRef}
        className={`relative transition-all duration-500 ease-out ${
          isExpanded ? "max-h-none" : "max-h-96 overflow-hidden"
        }`}
        style={
          isExpanded
            ? {}
            : { maxHeight: maxHeight !== "none" ? maxHeight : "24rem" }
        }
      >
        {/* Line highlight overlay */}
        {highlightLines.length > 0 && (
          <div className="absolute inset-0 pointer-events-none z-10">
            {/* This would need custom implementation based on line heights */}
          </div>
        )}

        <SyntaxHighlighter
          language={language}
          style={themes[theme]}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            padding: compact ? "1rem" : "1.5rem",
            background: "transparent",
            fontSize: compact ? "0.8125rem" : "0.875rem",
            lineHeight: "1.7",
            border: "none",
            borderRadius: 0,
          }}
          lineNumberStyle={{
            minWidth: "3.5em",
            paddingRight: "1.5em",
            color: "#4b5563",
            userSelect: "none",
            background: "transparent",
            borderRight: "1px solid rgba(75, 85, 99, 0.2)",
            marginRight: "1em",
          }}
          wrapLines={true}
          wrapLongLines={true}
          lineProps={(lineNumber) => {
            const style: React.CSSProperties = { display: "block" };
            if (highlightLines.includes(lineNumber)) {
              style.backgroundColor = "rgba(99, 102, 241, 0.1)";
              style.borderLeft = "2px solid #6366F1";
              style.marginLeft = "-2px";
            }
            return { style };
          }}
        >
          {formattedCode}
        </SyntaxHighlighter>

        {/* Scroll Indicator */}
        {showScrollIndicator && !isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/80 to-transparent flex items-end justify-center pb-3 pointer-events-none">
            <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-700/50">
              <svg
                className="w-3 h-3 animate-bounce"
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
              <span>Scroll for more</span>
            </div>
          </div>
        )}

        {/* Expand Overlay */}
        {expandable && !isExpanded && (
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1117] cursor-pointer flex items-end justify-center pb-6"
            onClick={toggleExpand}
          >
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 rounded-lg text-sm text-indigo-300 transition-all duration-300 backdrop-blur-sm group-hover:border-indigo-500/50">
              <MaximizeIcon />
              <span>Expand code</span>
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      {showFooter && (
        <div
          className={`flex items-center justify-between bg-gradient-to-b from-transparent to-gray-900/30 border-t border-gray-800/50 text-xs text-gray-500 ${
            compact ? "px-3 py-1.5" : "px-4 py-2"
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="text-gray-600">{stats.lines}</span>
              <span>lines</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span className="flex items-center gap-1">
              <span className="text-gray-600">{stats.characters}</span>
              <span>chars</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <TerminalIcon />
            <span className="font-medium bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Router-Kit
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;

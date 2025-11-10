import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

const CodeBlock = ({
  code,
  language = "tsx",
  showLineNumbers = true,
}: CodeBlockProps) => {
  return (
    <div className="bg-[#1e1e1e] rounded-lg border border-white/10 overflow-hidden">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: "1.5rem",
          background: "#1e1e1e",
          fontSize: "0.875rem",
          lineHeight: "1.5",
        }}
        lineNumberStyle={{
          minWidth: "3em",
          paddingRight: "1em",
          color: "#858585",
          userSelect: "none",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;

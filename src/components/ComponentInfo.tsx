import React, { ReactNode, useState } from "react";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Button from "./ui/Button";
import { BsClipboard } from "react-icons/bs";
import { CgCheck } from "react-icons/cg";
SyntaxHighlighter.registerLanguage("jsx", jsx);

type PropType = {
  children?: ReactNode;
};

export const ComponentInfo = ({ children }: PropType) => {
  return <div className="space-y-4">{children}</div>;
};

export const ComponentInfoHeader = ({ children }: PropType) => {
  return <h2 className="text-2xl font-semibold">{children}</h2>;
};

export const ComponentInfoDescription = ({ children }: PropType) => {
  return <p className="opacity-70">{children}</p>;
};

export const ComponentInfoShowcase = ({ children }: PropType) => {
  return (
    <div className="p-4 border-black/20 border rounded bg-black/80 flex flex-col flex-wrap gap-8">
      {children}
    </div>
  );
};

export const ComponentInfoCode = ({ children }: { children: string }) => {
  const [copied, setCopied] = useState(false);

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="max-h-[500px] overflow-scroll relative  ">
      <div className="absolute top-4 right-4">
        <Button
          size={"square"}
          className="bg-black "
          onClick={() => {
            setCopied(true);
            copyToClipboard(children);
            setTimeout(() => {
              setCopied(false);
            }, 2000);
          }}
        >
          <BsClipboard />
        </Button>
      </div>
      {copied && (
        <Button className="text-xs ml-4 inline-flex items-center absolute top-4 right-16   z-10">
          <CgCheck size={15} /> Copied to clipboard.
        </Button>
      )}
      <div className="[&>pre]:rounded ">
        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

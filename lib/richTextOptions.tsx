import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

/* const CopyLinkIcon = ({ titles }: { titles: string }) => {
  const copyLinkToClipboard = () => {
    const link = `${window.location.origin}/${window.location.pathname}#${titles
      .toLowerCase()
      .replace(" ", "-")}`;

    window.history.pushState(null, ''.)
    navigator.clipboard.writeText(link).then(() => {
      alert("Copied!");
    });
  };

  return (
    <button onClick={copyLinkToClipboard} className="text-cfblue-1 hover:underline invisible group-hover:visible ml-4">
      #
    </button>
  );
}; */

export const richTextOptions = {
  renderText: (text: any) => {
    return text
      .split("\n")
      .reduce((children: any, textSegment: any, index: any) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node: any, children: any) => {
      const titles = children[0][1];
      return (
        <h1 className="font-bold text-5xl my-4  flex items-center group">
          {children}
          {/* <CopyLinkIcon titles={titles} /> */}
        </h1>
      );
    },
    [BLOCKS.HEADING_2]: (node: any, children: any) => {
      return (
        <h2 className="font-bold text-2xl my-4 ">{children}</h2>
      );
    },
    [BLOCKS.HEADING_3]: (node: any, children: any) => {
      return (
        <h3 className="font-bold text-xl my-4">{children}</h3>
      );
    },
    [BLOCKS.HEADING_4]: (node: any, children: any) => {
      return (
        <h4 className="font-bold text-lg my-4 ">{children}</h4>
      );
    },
    [BLOCKS.HEADING_5]: (node: any, children: any) => {
      return (
        <h5 className="font-bold text-lg my-4 ">{children}</h5>
      );
    },
    [BLOCKS.HEADING_6]: (node: any, children: any) => {
      return (
        <h6 className="font-bold text-lg my-4">{children}</h6>
      );
    },
    [BLOCKS.UL_LIST]: (node: any, children: any) => {
      return (
        <ul className="list-disc  list-inside">
          {children}
        </ul>
      );
    },
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => {
      return <li className="my-4">{children}</li>;
    },
    [BLOCKS.OL_LIST]: (node: any, children: any) => {
      return (
        <ol className="my-4 list-inside list-decimal">
          {children}
        </ol>
      );
    },
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
      return <p className="my-4 inline">{children}</p>;
    },
    [BLOCKS.TABLE]: (node: any, children: any) => {
      return (
        <table>
          <tbody>{children}</tbody>
        </table>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
      return (
        <Image
          src={`https:${node.data.target.fields.file.url}`}
          alt={node.data.target.fields.title}
          width={500}
          height={500}
          className="sm:w-1/4 md:w-2/4 lg:w-3/4 my-12 rounded-lg shadow-lg"
        />
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
      if (node.data.target.fields.codeSnippet) {
        const { codeSnippet, language } = node.data.target.fields;
        return (
          <SyntaxHighlighter
            style={vscDarkPlus}
            language={language}
            customStyle={{ marginTop: "20px", marginBottom: "20px" }}
          >
            {codeSnippet}
          </SyntaxHighlighter>
        );
      }
      if (node.data.target.fields.image) {
        return (
          <Image
            src={`https:${node.data.target.fields.image.fields.file.url}`}
            alt={node.data.target.fields.altText}
            width={500}
            height={500}
            className="sm:w-1/4 md:w-2/4 lg:w-3/4 my-12 rounded-lg shadow-lg"
          />
        );
      } else {
        return (
          <video
            src={`https:${node.data.target.fields.video.fields.file.url}`}
            controls
            className="rounded-xl mb-8 hover:cursor-pointer w-full h-auto mt-8"
          />
        );
      }
    },
    [INLINES.HYPERLINK]: (node: any, children: any) => {
      return (
        <Link
          target="_blank"
          href={node.data.uri}
          className="text-blue-600 hover:underline"
          style={{ wordWrap: "break-word" }}
        >
          {children}
        </Link>
      );
    },
  },
};

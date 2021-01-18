import React, { useState } from "react";
import styles from "../styles/MarkdownPreviewer.module.scss";
import marked from "marked";

import ResizablePanels from "resizable-panels-react";
import Markdown from "./Markdown";



/*
TODO: - fix border on the bottom
      - give padding on the coded by line
*/
const defaultMarkdown = `
  # Test h1
  
  ## Test h2
  
  [testLink](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)
  
  \`while(1)\`
  
  * List Item
  
  > blockquote
  
  ![Image](https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg)
  
  __bold text__
`;

let parsedMarkdown = marked(defaultMarkdown);

const MarkdownPreviewer = () => {
  const [input, setInput] = useState(defaultMarkdown)
  const [markdown, setMarkdown] = useState(parsedMarkdown)



  const handleChange = (event) => {
    let md = marked(event.target.value);
    setMarkdown(md)
  }
  //NOT Working ATM
  const handleTab = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      event.target.value.concat('\t')
      setMarkdown(markdown.concat('\t'))
    }
  }

  return (
    <div id={styles.container}>
      <div id={styles.displayBox}>
        <div id={styles.topBar}>
          <h1>Markdown Previewer</h1>
        </div>
        <ResizablePanels
          displayDirection="row"
          width="auto"
          height="100%"
          panelsSize={[50, 50]}
          sizeUnitMeasure="%"
          resizerColor="#000"
          resizerSize="3px"
        >
          <div id={styles.markdown}>
            <textarea
              defaultValue={input}
              onChange={handleChange}
              onKeyDown={handleTab}
            ></textarea>
          </div>
          <Markdown markdown={markdown} />
        </ResizablePanels>
        <div id={styles.gutter}>
          <p>coded by bernardo sequeira</p>
        </div>
      </div>
    </div>
  );
}


export default MarkdownPreviewer;

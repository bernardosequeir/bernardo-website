import React from "react";
import styles from "../styles/MarkdownPreviewer.module.scss";
import marked from "marked";

import ResizablePanels from "resizable-panels-react";
import Markdown from "./Markdown";
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

let markdown = marked(defaultMarkdown);
class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultMarkdown,
      markdown: markdown,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    let md = marked(event.target.value);
    this.setState({
      markdown: md,
    });
  }
  render() {
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
                defaultValue={this.state.input}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <Markdown markdown={this.state.markdown} />
          </ResizablePanels>
          <div className="gutter">
            <p>coded by bernardo sequeira</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MarkdownPreviewer;

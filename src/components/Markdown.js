import React from "react";

let Markdown = ({ markdown }) => {


  let renderHtml = () => {
    return { __html: markdown };
  }

  return <div dangerouslySetInnerHTML={renderHtml()} id="preview"></div>;

}
export default Markdown;

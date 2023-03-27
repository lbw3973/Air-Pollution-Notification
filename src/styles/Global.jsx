import React from "react";
import { Global, css } from "@emotion/react";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
</style>;

const reset = css`
  * {
    box-sizing: border-box;
  }
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  button,
  img,
  strong,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  footer,
  header,
  menu,
  nav,
  section,
  summary {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  body {
    line-height: 1.43;
    color: #222;
  }
  ol,
  ul {
    list-style: none;
  }
  li {
    list-style-type: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  a:visited {
    color: #000;
  }
`;

const style = css`
  :root {
    --Poll-Good: #2d96fe;
    --Poll-Normal: #02bd34;
    --Poll-BadFAS: #dac136;
    --Poll-Bad: #ff9035;
    --Poll-VVBad: #ff3a3a;
    --Poll-NoData: #a5a5a5;
  }
  * {
    font-family: "Nanum Gothic", sans-serif;
  }
`;

const GlobalStyle = () => {
  return (
    <>
      <Global styles={style} />
      <Global styles={reset} />
    </>
  );
};

export default GlobalStyle;

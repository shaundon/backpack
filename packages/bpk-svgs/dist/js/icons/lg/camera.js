import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M19 6h-.763a3 3 0 0 1-2.426-1.235l-.385-.53A3 3 0 0 0 13 3h-2.181a3 3 0 0 0-2.427 1.235l-.684.941A2 2 0 0 1 6.091 6H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm-7 12a5 5 0 1 1 5-5 5 5 0 0 1-5 5zm3-5a3 3 0 1 1-3-3 3 3 0 0 1 3 3z" /></svg>);
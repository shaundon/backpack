import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M6.018 21a1.5 1.5 0 0 0 1.5-1.5V7.243l1.94 1.939a1.5 1.5 0 0 0 2.12-2.121L6.018 1.5.458 7.06a1.5 1.5 0 1 0 2.084 2.159l.036-.037 1.94-1.94V19.5a1.5 1.5 0 0 0 1.5 1.5zm12-18a1.5 1.5 0 0 0-1.5 1.5v12.257l-1.94-1.939a1.5 1.5 0 0 0-2.12 2.121l5.56 5.561 5.56-5.56a1.5 1.5 0 0 0-2.12-2.122l-1.94 1.94V4.5a1.5 1.5 0 0 0-1.5-1.5z" /></svg>);
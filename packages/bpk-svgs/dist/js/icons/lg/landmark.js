import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M2 7v-.903a.873.873 0 0 1 .228-.608A14.235 14.235 0 0 1 12 2a14.5 14.5 0 0 1 9.705 3.467.932.932 0 0 1 .295.694V7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm20 14a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h18a1 1 0 0 0 1-1zM6 9a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0zm9-1a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 1-1z" /></svg>);
import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12.004 1A4.726 4.726 0 0 0 7 6a1.05 1.05 0 0 0 1 1 1.053 1.053 0 0 0 1.002-1c.005-2 1.001-3 3.002-3a2.653 2.653 0 0 1 3.002 3c0 2-1.006 3-2.008 3H9a2.152 2.152 0 0 0-2 2l.03 9a3.183 3.183 0 0 0 2.972 2.984l4.003.016A3.22 3.22 0 0 0 17 20V6a4.72 4.72 0 0 0-4.996-5z" /></svg>);
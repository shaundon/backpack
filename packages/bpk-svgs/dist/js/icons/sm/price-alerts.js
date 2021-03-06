import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M12 1.5a7.202 7.202 0 0 0-7.186 7.219v.659A10.361 10.361 0 0 1 3.73 13.99l-.51 1.025A2.062 2.062 0 0 0 5.056 18h13.888a2.062 2.062 0 0 0 1.837-2.985l-.51-1.025a10.35 10.35 0 0 1-1.085-4.612v-.66A7.202 7.202 0 0 0 12 1.5zM9.076 20.939A1.021 1.021 0 0 1 9.83 19.5h4.338a1.02 1.02 0 0 1 .755 1.439 2.26 2.26 0 0 1-1.931 1.561h-2a2.244 2.244 0 0 1-1.917-1.561z" /></svg>);
import React, { useRef, useEffect } from "react";

const AlwaysScrollToBottom = () => {
  const elementRef: any = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};

export default AlwaysScrollToBottom
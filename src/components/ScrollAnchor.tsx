/**
 * @parentComponent StreamDisplay, PlannedResponseCreator
 * @description Respositions scrollbar to bottom whenever elements are added
**/

import React, { useRef, useEffect } from "react";

const AlwaysScrollToBottom = () => {
  const elementRef: any = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};

export default AlwaysScrollToBottom
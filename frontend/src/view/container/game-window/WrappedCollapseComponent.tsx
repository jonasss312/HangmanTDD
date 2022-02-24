import React, { useState } from "react";
import { Collapse } from "@mui/material";

interface Props {
  children: JSX.Element;
}

export const WrappedCollapseComponent = (props: Props) => {
  const [state, setState] = useState(false);

  setTimeout(() => setState(true), 500);

  return (
    <Collapse in={state} timeout={2000}>
      {props.children}
    </Collapse>
  );
};

import React from "react";
import { SidePanel } from "@aragon/ui";

//import "./styles.css";

const SidePanels = props => {
  return (
    <SidePanel title="Menu" opened={props.opened} {...props}>
      Test
    </SidePanel>
  );
};

export default SidePanels;

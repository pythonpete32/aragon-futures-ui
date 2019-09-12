import React, { useState } from "react";
import { Main, AppView, AppBar, EmptyStateCard, IconHome } from "@aragon/ui";
import { Flex } from "rimble-ui";
import TopCards from "./components/TopCards";

import "./styles.css";

export default () => {
  const [state, setState] = useState("");

  return (
    <Main>
      <AppView
        appBar={
          <AppBar
            title="My App"
            onTitleClick={() => console.log("Title was clicked!")}
          />
        }
      >
        {" "}
        <TopCards />
      </AppView>
    </Main>
  );
};

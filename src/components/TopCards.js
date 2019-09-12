import React from "react";
import { EmptyStateCard, IconHome } from "@aragon/ui";
import { Flex } from "rimble-ui";

function TopCards() {
  return (
    <Flex alignItems={"flex-end"} justifyContent={"space-between"}>
      <EmptyStateCard
        actionText="Create a new post!"
        text="You seem to not have any content on your wall."
        icon={<IconHome color="blue" />}
      />
      <EmptyStateCard
        actionText="Create a new post!"
        text="You seem to not have any content on your wall."
        icon={<IconHome color="blue" />}
      />
      <EmptyStateCard
        actionText="Create a new post!"
        text="You seem to not have any content on your wall."
        icon={<IconHome color="blue" />}
      />
    </Flex>
  );
}

export default TopCards;

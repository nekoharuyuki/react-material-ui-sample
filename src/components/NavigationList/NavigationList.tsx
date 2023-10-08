import { List } from "@mui/material";
import { FC } from "react";

import { useAccordionManager } from "./hooks/useAccordionManager";
import { NavigationItem } from "./NavigationItemType";
import { NavGroup } from "../NavigationList/subCommponents/NavGroup";
import { NavItem } from "../NavigationList/subCommponents/NavItem";

export type NavigationMenuProps = {
  /** ナビゲーション項目リスト */
  items: NavigationItem[];
  /** 強制的に閉じるか */
  forceCollapse?: boolean;
};

export const NavigationList: FC<NavigationMenuProps> = ({
  items,
  forceCollapse
}) => {
  const accordionManager = useAccordionManager({
    isTemporaryAllClose: forceCollapse
  });

  return (
    <List>
      {items.map((item, index) =>
        "subs" in item ? (
          <NavGroup
            key={index}
            item={item}
            accordionManager={accordionManager}
            navIndexes={[index]}
          />
        ) : (
          <NavItem key={index} item={item} navIndexes={[index]} />
        )
      )}
    </List>
  );
};

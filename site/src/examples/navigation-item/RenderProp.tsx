import { ReactElement, useState } from "react";
import {
  NavigationItem,
  NavigationItemRenderProps,
  StackLayout,
} from "@salt-ds/core";

const render: React.FC<
  NavigationItemRenderProps<HTMLAnchorElement | HTMLButtonElement>
> = (props) => {
  console.log("render NavigationItem with props", props);
  const { href, isParent, elementProps } = props;
  if (isParent) {
    return <button {...elementProps} />;
  }
  return <a {...elementProps} href={href} />;
};

export const RenderProp = (): ReactElement => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <nav>
      <StackLayout
        as="ul"
        gap="var(--salt-size-border)"
        style={{
          width: 250,
          listStyle: "none",
          paddingLeft: 0,
        }}
      >
        <li>
          <NavigationItem
            expanded={expanded}
            level={0}
            onExpand={() => setExpanded(!expanded)}
            orientation="vertical"
            parent={true}
            render={render}
          >
            Render Prop Parent
          </NavigationItem>
        </li>
        {expanded ? (
          <li>
            <NavigationItem
              href="#"
              level={1}
              orientation="vertical"
              render={render}
            >
              Render Prop Child
            </NavigationItem>
          </li>
        ) : null}
      </StackLayout>
    </nav>
  );
};

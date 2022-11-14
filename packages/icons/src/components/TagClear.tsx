import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type TagClearIconProps = IconProps;

export const TagClearIcon = forwardRef<SVGSVGElement, TagClearIconProps>(
  function TagClearIcon(props: TagClearIconProps, ref) {
    return (
      <Icon
        data-testid="TagClearIcon"
        aria-label="tag clear"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path d="m1.414 7 6-6H11v3.586l-.357.357.707.707L12 5V0H7L0 7l5 5 .685-.685L1.415 7Z" />
        <path
          fillRule="evenodd"
          d="M8 3.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM8.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
          clipRule="evenodd"
        />
        <path d="M10.286 11 8.5 9.214 6.714 11 6 10.286 7.786 8.5 6 6.714 6.714 6 8.5 7.786 10.286 6l.714.714L9.214 8.5 11 10.286l-.714.714Z" />
      </Icon>
    );
  }
);
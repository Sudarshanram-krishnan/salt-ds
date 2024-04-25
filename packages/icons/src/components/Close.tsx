// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type CloseIconProps = IconProps;

export const CloseIcon = forwardRef<SVGSVGElement, CloseIconProps>(
  function CloseIcon(props: CloseIconProps, ref) {
    return (
      <Icon
        data-testid="CloseIcon"
        aria-label="close"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path d="m1.407.343-1.06 1.06L4.941 6 .346 10.596l1.06 1.06 4.597-4.595 4.596 4.596 1.06-1.06L7.065 6l4.596-4.596L10.6.344 6.002 4.938 1.407.343Z" />
      </Icon>
    );
  }
);

// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type TearOutIconProps = IconProps;

export const TearOutIcon = forwardRef<SVGSVGElement, TearOutIconProps>(
  function TearOutIcon(props: TearOutIconProps, ref) {
    return (
      <Icon
        data-testid="TearOutIcon"
        aria-label="tear out"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path d="M0 12h12V6h-1v5H1V1h5V0H0v12Z" />
        <path d="M7.05 6 5.99 4.94l3.474-3.476L8 0h4v4l-1.475-1.475L7.05 6Z" />
      </Icon>
    );
  }
);

// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type FilterIconProps = IconProps;

export const FilterIcon = forwardRef<SVGSVGElement, FilterIconProps>(
  function FilterIcon(props: FilterIconProps, ref) {
    return (
      <Icon
        data-testid="FilterIcon"
        aria-label="filter"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M7.5 7 12 0H0l4.5 7v5h3V7Zm-1 4V6.706L10.168 1H1.832L5.5 6.706V11h1Z"
          clipRule="evenodd"
        />
      </Icon>
    );
  }
);

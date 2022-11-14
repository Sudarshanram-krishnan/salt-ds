import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type CalculatorSolidIconProps = IconProps;

export const CalculatorSolidIcon = forwardRef<
  SVGSVGElement,
  CalculatorSolidIconProps
>(function CalculatorSolidIcon(props: CalculatorSolidIconProps, ref) {
  return (
    <Icon
      data-testid="CalculatorSolidIcon"
      aria-label="calculator solid"
      viewBox="0 0 12 12"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M0 0h12v12H0V0Zm6.5 3.5H8V2h1v1.5h1.5v1H9V6H8V4.5H6.5v-1Zm-4.293 3-.707.707 1.06 1.06L1.5 9.329l.707.708 1.06-1.061 1.061 1.06.708-.707-1.061-1.06 1.06-1.06-.707-.708-1.06 1.06-1.06-1.06Zm3.293-3h-4v1h4v-1Zm1 5.5h4v1h-4V9Zm4-2h-4v1h4V7Z"
        clipRule="evenodd"
      />
    </Icon>
  );
});
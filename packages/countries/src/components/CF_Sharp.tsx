// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type CF_SharpProps = CountrySymbolProps;

const CF_Sharp = forwardRef<SVGSVGElement, CF_SharpProps>(function CF_Sharp(
  props: CF_SharpProps,
  ref
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="CF_Sharp"
      aria-label="Central African Republic (the)"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-CF-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-CF-a)`}>
        <path fill="#FBD381" d="M0 50V38h72v12z" />
        <path fill="#F5F7F8" d="M0 26V14h72v12z" />
        <path fill="#004692" d="M0 14V0h72v14z" />
        <path fill="#008259" d="M0 38V26h72v12z" />
        <path fill="#DD2033" d="M54 50H40V0h14z" />
        <path
          fill="#FBD381"
          d="m14 2-1.49 3.371L9 5.82l2.589 2.532-.68 3.648L14 9.917 17.09 12l-.679-3.648L19 5.82l-3.51-.449L14 2Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default CF_Sharp;

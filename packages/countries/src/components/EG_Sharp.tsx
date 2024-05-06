// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type EG_SharpProps = CountrySymbolProps;

const EG_Sharp = forwardRef<SVGSVGElement, EG_SharpProps>(function EG_Sharp(
  props: EG_SharpProps,
  ref
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="EG_Sharp"
      aria-label="Egypt"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-EG-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-EG-a)`}>
        <path fill="#31373D" d="M0 50V34h72v16z" />
        <path fill="#F5F7F8" d="M0 34V16h72v18z" />
        <path fill="#DD2033" d="M0 16V0h72v16z" />
        <path
          fill="#F1B434"
          d="M31 5h4a6 6 0 0 1 6 6v5.083c2.838.476 5 2.944 5 5.917v19l-8.514-3.406a4 4 0 0 0-2.972 0L26 41V22a6.002 6.002 0 0 1 5-5.917V5Z"
        />
        <path
          fill="#F1B434"
          d="M33.801 40.512 28 44.5h16.5l-6.26-4.05a4 4 0 0 0-4.439.062Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default EG_Sharp;
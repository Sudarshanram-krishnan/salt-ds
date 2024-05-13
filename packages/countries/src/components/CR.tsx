// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type CRProps = CountrySymbolProps;

const CR = forwardRef<SVGSVGElement, CRProps>(function CR(props: CRProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="CR"
      aria-label="Costa Rica"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-CR-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-CR-a)`}>
        <path fill="#004692" d="M0 0h72v72H0z" />
        <path fill="#F5F7F8" d="M0 58V14h72v44z" />
        <path fill="#DD2033" d="M0 44V28h72v16z" />
      </g>
    </CountrySymbol>
  );
});

export default CR;

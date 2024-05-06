// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type GF_SharpProps = CountrySymbolProps;

const GF_Sharp = forwardRef<SVGSVGElement, GF_SharpProps>(function GF_Sharp(
  props: GF_SharpProps,
  ref
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="GF_Sharp"
      aria-label="French Guiana"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-GF-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-GF-a)`}>
        <path fill="#FBD381" d="M0 50h72V0H0z" />
        <path fill="#009B77" d="M72-11v72L0-11h72Z" />
        <path
          fill="#DD2033"
          d="m36 13-3.577 8.09L24 22.168l6.213 6.077L28.583 37 36 32l7.416 5-1.629-8.756L48 22.167l-8.423-1.076L36 13Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default GF_Sharp;
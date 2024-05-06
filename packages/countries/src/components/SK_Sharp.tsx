// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type SK_SharpProps = CountrySymbolProps;

const SK_Sharp = forwardRef<SVGSVGElement, SK_SharpProps>(function SK_Sharp(
  props: SK_SharpProps,
  ref
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="SK_Sharp"
      aria-label="Slovakia"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-SK-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-SK-a)`}>
        <path fill="#DD2033" d="M0 50V34h72v16z" />
        <path fill="#005EB8" d="M0 34V16h72v18z" />
        <path fill="#F5F7F8" d="M0 16V0h72v16z" />
        <path fill="#DD2033" d="M11.8 8h33v29.455L28.3 44l-16.5-6.545V8Z" />
        <mask
          id={`${uid}-SK-b`}
          x="11"
          y="8"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path fill="#DD2033" d="M11.8 8h33v29.455L28.3 44l-16.5-6.545V8Z" />
        </mask>
        <g mask={`url(#${uid}-SK-b)`}>
          <path
            fill="#F5F7F8"
            d="M27 11h3v3h4v3h-4v3h7v3h-7v6h-3v-6h-7v-3h7v-3h-4v-3h4v-3Z"
          />
          <path
            fill="#005EB8"
            d="M33.933 52.484C32.433 54.672 30.461 56 28.3 56c-2.16 0-4.133-1.328-5.633-3.516C21.407 54.661 19.69 56 17.8 56c-3.866 0-7-5.596-7-12.5s3.134-12.5 7-12.5c1.452 0 2.8.79 3.918 2.14C23.278 30.003 25.647 28 28.3 28s5.023 2.003 6.582 5.14C36 31.79 37.348 31 38.8 31c3.866 0 7 5.596 7 12.5S42.666 56 38.8 56c-1.891 0-3.607-1.34-4.867-3.516Z"
          />
        </g>
        <path
          fill="#F5F7F8"
          fillRule="evenodd"
          d="M8.8 5h39v22.365c0 7.32-4.468 13.9-11.272 16.599L28.3 47.227l-8.227-3.263A17.857 17.857 0 0 1 8.8 27.364V5Zm3 3v19.365c0 6.09 3.717 11.564 9.379 13.81L28.3 44l7.121-2.825a14.857 14.857 0 0 0 9.379-13.81V8h-33Z"
          clipRule="evenodd"
        />
      </g>
    </CountrySymbol>
  );
});

export default SK_Sharp;
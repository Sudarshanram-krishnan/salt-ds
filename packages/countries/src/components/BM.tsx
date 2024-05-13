// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type BMProps = CountrySymbolProps;

const BM = forwardRef<SVGSVGElement, BMProps>(function BM(props: BMProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="BM"
      aria-label="Bermuda"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-BM-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-BM-a)`}>
        <path fill="#DD2033" d="M0 0h72v72H0z" />
        <path
          fill="#F5F7F8"
          d="M40.8 35h21v8.743a14.857 14.857 0 0 1-9.36 13.803L51.3 58l-1.14-.454a14.857 14.857 0 0 1-9.36-13.803V35Z"
        />
        <mask
          id={`${uid}-BM-b`}
          x="40"
          y="50"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path fill="#D9D9D9" d="M40.8 50h22v8h-22z" />
        </mask>
        <g mask={`url(#${uid}-BM-b)`}>
          <path
            fill="#009B77"
            d="M40.8 35h21v8.743a14.857 14.857 0 0 1-9.36 13.803L51.3 58l-1.14-.454a14.857 14.857 0 0 1-9.36-13.803V35Z"
          />
        </g>
        <rect x="48.8" y="38" fill="#DD2033" rx="2.5" />
        <path fill="#86C5FA" d="M46.8 50v-7h9v7h-9Z" />
        <path fill="#F5F7F8" d="M51.3 52.857 46.8 50h9l-4.5 2.857Z" />
        <mask
          id={`${uid}-BM-c`}
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path fill="#002F6C" d="M0 36C0 16.118 16.118 0 36 0v36H0Z" />
        </mask>
        <g mask={`url(#${uid}-BM-c)`}>
          <path fill="#004692" d="M0 0h36v36H0z" />
          <path
            fill="#F5F7F8"
            d="m12.522 3.134-2.121 2.121 29.526 29.526 2.121-2.121L12.522 3.134ZM6.865 8.79 3.33 12.327l29.526 29.526 3.535-3.535L6.866 8.79Z"
          />
          <path
            fill="#DD2033"
            d="m6.865 8.79 3.536-3.535 29.526 29.526-3.535 3.536L6.864 8.79Z"
          />
          <path fill="#F5F7F8" d="M36 12v5H17v19h-5V12h24Z" />
          <path fill="#F5F7F8" d="M36-2v5H5v33H0V-2h36Z" />
          <path
            fill="#DD2033"
            fillRule="evenodd"
            d="M3 36h9V12h24V3H3v33Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </CountrySymbol>
  );
});

export default BM;

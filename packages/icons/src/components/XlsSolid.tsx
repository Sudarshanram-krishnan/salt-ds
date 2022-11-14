import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type XlsSolidIconProps = IconProps;

export const XlsSolidIcon = forwardRef<SVGSVGElement, XlsSolidIconProps>(
  function XlsSolidIcon(props: XlsSolidIconProps, ref) {
    return (
      <Icon
        data-testid="XlsSolidIcon"
        aria-label="xls solid"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M8.707 0H1v6h10V2.293L8.707 0ZM7 1h1v2h2v1H7V1Z"
          clipRule="evenodd"
        />
        <path d="M11.7 10.559c0 .296-.074.551-.22.765-.143.214-.35.378-.622.492a2.46 2.46 0 0 1-.963.171 4.37 4.37 0 0 1-.523-.03 3.597 3.597 0 0 1-.472-.09 2.559 2.559 0 0 1-.4-.146v-.773c.203.089.43.17.68.243.25.07.506.106.766.106.212 0 .387-.027.526-.082a.66.66 0 0 0 .315-.24.654.654 0 0 0 .102-.365.594.594 0 0 0-.12-.376c-.08-.103-.2-.196-.362-.28a6.058 6.058 0 0 0-.601-.277 4.083 4.083 0 0 1-.472-.226 1.92 1.92 0 0 1-.396-.297 1.285 1.285 0 0 1-.277-.404 1.422 1.422 0 0 1-.1-.553c0-.283.068-.524.202-.725.137-.2.328-.354.574-.461.249-.107.538-.161.869-.161.262 0 .508.027.738.082.232.055.46.132.683.232l-.26.66a4.623 4.623 0 0 0-.598-.202 2.31 2.31 0 0 0-.587-.075c-.174 0-.32.027-.441.079a.617.617 0 0 0-.277.222.595.595 0 0 0-.092.335c0 .146.035.269.106.37.072.097.184.187.335.27.152.081.348.172.587.273.276.114.51.233.701.359.194.125.342.275.444.45.103.174.154.392.154.654ZM5 6.92v4.997h2.943v-.697H5.82v-4.3H5Zm-.406 5h-.933L2.403 9.873 1.14 11.92H.26l1.661-2.59L.373 6.922h.906L2.44 8.817l1.155-1.894h.879l-1.556 2.43 1.675 2.567Z" />
      </Icon>
    );
  }
);
import React from "react";

interface Props {
  [key: string]: any;
}

export default function CloudIcon(props: Props): JSX.Element {
  const { pathClassName, ...rest } = props;
  return (
    <svg
      fill="none"
      viewBox="0 0 42 29"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        d="M27.8106 5.35606C23.3358 0.881313 16.0808 0.881313 11.6061 5.35606C8.50463 8.45752 7.55278 12.8946 8.75055 16.8158C6.96423 16.2637 4.93948 16.6948 3.52548 18.1087C1.49151 20.1427 1.49151 23.4406 3.52548 25.4746C4.54248 26.4915 5.8754 27 7.20834 27H32.2083C34.0744 27 35.9406 26.2881 37.3644 24.8644C40.2119 22.0167 40.2119 17.4 37.3644 14.5523C35.6646 12.8527 33.3344 12.1675 31.1265 12.4969"
        strokeWidth="3.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

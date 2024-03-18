import React from "react";

interface Props {
  [key: string]: any;
}

export default function ChevronRightIcon(props: Props): JSX.Element {
  const { pathClassName, ...rest } = props;
  return (
    <svg
      fill="none"
      viewBox="0 0 7 12"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        d="M1 1L5.66667 5.66667L1 10.3333"
        stroke="#F7F9FB"
        strokeWidth="1.55439"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

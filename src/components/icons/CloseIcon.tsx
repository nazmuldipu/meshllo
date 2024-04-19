import React from "react";

interface Props {
  [key: string]: any;
}

export default function CloseIcon(props: Props): JSX.Element {
  const { pathClassName, ...rest } = props;
  return (
    <svg
      fill="none"
      viewBox="0 0 512 512"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
        className={pathClassName ? `fill-current ${pathClassName}` : ""}
      />
    </svg>
  );
}

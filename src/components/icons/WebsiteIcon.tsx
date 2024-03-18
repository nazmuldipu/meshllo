import React from "react";

interface Props {
  [key: string]: any;
}

export default function WebsiteIcon(props: Props): JSX.Element {
  const { pathClassName, ...rest } = props;
  return (
    <svg
      fill="none"
      viewBox="0 0 40 40"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        d="M38.75 1.25H1.25V6.25H38.75V1.25Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        d="M3.75 6.25V28.75H36.25V6.25"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        d="M20 28.75V36.25"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        d="M16.25 36.25H23.75"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        d="M8.75 12.5H21.25"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        d="M8.75 17.5H31.25"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        d="M8.75 22.5H21.25"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

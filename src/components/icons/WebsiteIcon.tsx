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
      <g clip-path="url(#clip0_1161_247)">
        <path
          className={pathClassName ? `stroke-current ${pathClassName}` : ""}
          d="M39.25 1.25H1.75V6.25H39.25V1.25Z"
          strokeWidth="2.25"
          strokeLinejoin="round"
        />
        <path
          className={pathClassName ? `stroke-current ${pathClassName}` : ""}
          d="M4.25 6.25V28.75H36.75V6.25"
          strokeWidth="2.25"
          strokeLinejoin="round"
        />
        <path
          className={pathClassName ? `stroke-current ${pathClassName}` : ""}
          d="M20.5 28.75V36.25"
          strokeWidth="2.25"
          strokeLinejoin="round"
        />
        <path
          className={pathClassName ? `stroke-current ${pathClassName}` : ""}
          d="M16.75 36.25H24.25"
          strokeWidth="2.25"
          strokeLinejoin="round"
        />
        <path
          className={pathClassName ? `stroke-current ${pathClassName}` : ""}
          d="M9.25 12.5H21.75"
          strokeWidth="2.25"
          strokeLinejoin="round"
        />
        <path
          className={pathClassName ? `stroke-current ${pathClassName}` : ""}
          d="M9.25 17.5H31.75"
          strokeWidth="2.25"
          strokeLinejoin="round"
        />
        <path
          className={pathClassName ? `stroke-current ${pathClassName}` : ""}
          d="M9.25 22.5H21.75"
          strokeWidth="2.25"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1161_247">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

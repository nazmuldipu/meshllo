import React from "react";

interface Props {
  [key: string]: any;
}

export default function UserIcon(props: Props): JSX.Element {
  const { pathClassName, ...rest } = props;
  return (
    <svg
      fill="none"
      viewBox="0 0 28 31"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        d="M2.25261 21.8818C3.9233 18.1228 7.65106 15.7002 11.7647 15.7002H16.2353C20.3489 15.7002 24.0767 18.1228 25.7474 21.8818V21.8818C27.277 25.3235 24.7577 29.2002 20.9914 29.2002H7.00863C3.24228 29.2002 0.722955 25.3235 2.25261 21.8818V21.8818Z"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        d="M9.5 6.7002C9.5 4.21491 11.5147 2.2002 14 2.2002C16.4853 2.2002 18.5 4.21491 18.5 6.7002C18.5 9.18548 16.4853 11.2002 14 11.2002C11.5147 11.2002 9.5 9.18548 9.5 6.7002Z"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

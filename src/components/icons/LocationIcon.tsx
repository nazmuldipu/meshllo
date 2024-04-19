import React from "react";

interface Props {
  [key: string]: any;
}

export default function LocationIcon(props: Props): JSX.Element {
  const { pathClassName, ...rest } = props;
  return (
    <svg
      fill="none"
      viewBox="0 0 26 25"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        d="M13.1535 2.27295C7.52356 2.27295 2.95942 6.80357 4.09226 12.4668C4.84579 16.2339 8.60612 19.7504 11.0397 21.6829C11.8351 22.3146 12.2328 22.6304 12.8504 22.7138C13.0216 22.7369 13.2854 22.7369 13.4566 22.7138C14.0742 22.6304 14.4719 22.3146 15.2673 21.683C17.701 19.7505 21.4614 16.234 22.2147 12.4668C23.3473 6.80357 18.7834 2.27295 13.1535 2.27295Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        d="M16.5513 11.5041C16.5513 13.3807 15.03 14.9021 13.1534 14.9021C11.2767 14.9021 9.75539 13.3807 9.75539 11.5041C9.75539 9.62744 11.2767 8.10612 13.1534 8.10612C15.03 8.10612 16.5513 9.62744 16.5513 11.5041Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

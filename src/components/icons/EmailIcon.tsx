import React from "react";

interface Props {
  [key: string]: any;
}

export default function EmailIcon(props: Props): JSX.Element {
  const { pathClassName, ...rest } = props;
  return (
    <svg
      fill="none"
      viewBox="0 0 27 23"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        d="M1 11.9167C1 8.68096 1 7.06311 1.52861 5.78692C2.23343 4.08534 3.58534 2.73343 5.28692 2.02861C6.56311 1.5 8.18096 1.5 11.4167 1.5H15.5833C18.819 1.5 20.4369 1.5 21.7131 2.02861C23.4147 2.73343 24.7666 4.08534 25.4714 5.78692C26 7.06311 26 8.68096 26 11.9167V11.9167C26 15.1524 26 16.7702 25.4714 18.0464C24.7666 19.748 23.4147 21.0999 21.7131 21.8047C20.4369 22.3333 18.819 22.3333 15.5833 22.3333H11.4167C8.18096 22.3333 6.56311 22.3333 5.28692 21.8047C3.58534 21.0999 2.23343 19.748 1.52861 18.0464C1 16.7702 1 15.1524 1 11.9167V11.9167Z"
        strokeWidth="1.10262"
        strokeLinejoin="round"
      />
      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        d="M1 6.36084L5.82619 10.1144C9.08956 12.6524 10.7212 13.9215 12.5851 14.1693C13.1927 14.2501 13.8084 14.2501 14.416 14.1692C16.2798 13.9213 17.9115 12.6522 21.1747 10.114L26 6.36084"
        strokeWidth="1.10262"
        strokeLinejoin="round"
      />
    </svg>
  );
}

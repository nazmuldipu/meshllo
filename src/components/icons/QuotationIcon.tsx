import React from "react";

interface Props {
  [key: string]: any;
}

export default function QuotationIcon(props: Props): JSX.Element {
  const { pathClassName, ...rest } = props;
  return (
    <svg
      fill="none"
      viewBox="0 0 42 29"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.1667 10.3333H32.2084C36.2355 10.3333 39.5001 13.5978 39.5001 17.6249"
        stroke="#B1B3BD"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27 10.3333C27 14.9356 23.269 18.6667 18.6667 18.6667H14.5M27 10.3333C27 5.73096 23.269 2 18.6667 2H10.3333C5.73096 2 2 5.73096 2 10.3333C2 14.9356 5.73096 18.6667 10.3333 18.6667H14.5M27 10.3333H31.1667M14.5 18.6667C14.5 23.269 18.231 27 22.8333 27H30.125C31.0923 27 31.576 27 31.9835 26.9598C35.94 26.5702 39.0702 23.44 39.4598 19.4835C39.5 19.076 39.5 18.5923 39.5 17.625"
        stroke="url(#paint0_linear_485_5572)"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_485_5572"
          x1="2"
          y1="14.4422"
          x2="39.5508"
          y2="14.4422"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#711EE2" />
          <stop offset="1" stop-color="#FF585D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

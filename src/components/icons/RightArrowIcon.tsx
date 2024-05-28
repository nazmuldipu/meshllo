import React from "react";

interface Props {
  [key: string]: any;
}

export default function RightArrowIcon(props: Props): JSX.Element {
  const { pathClassName, ...rest } = props;
  return (
    <svg
      fill="none"
      viewBox="0 0 28 10"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.6665 9.66671L27.3332 5.00004L22.6665 0.333374L21.7238 1.27604L24.7812 4.33337H0.666504V5.66671H24.7812L21.7238 8.72404L22.6665 9.66671Z"
        fill="url(#paint0_linear_999_513)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_999_513"
          x1="0.666504"
          y1="4.97845"
          x2="27.3693"
          y2="4.97845"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#711EE2" />
          <stop offset="1" stopColor="#FF585D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

import React from "react";

interface Props {
  [key: string]: any;
}

export default function InstagramIcon(props: Props): JSX.Element {
  const { pathClassName, ...rest } = props;
  return (
    <svg
      fill="none"
      viewBox="0 0 50 50"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="24.5"
        fill="white"
        stroke="url(#paint0_linear_557_2128)"
      />
      <path
        d="M32.9266 18.4428C32.9266 18.7297 32.694 18.9622 32.4071 18.9622C32.1203 18.9622 31.8877 18.7297 31.8877 18.4428C31.8877 18.1559 32.1203 17.9233 32.4071 17.9233C32.694 17.9233 32.9266 18.1559 32.9266 18.4428Z"
        fill="url(#paint1_linear_557_2128)"
        stroke="url(#paint2_linear_557_2128)"
        strokeWidth="1.5"
      />
      <path
        d="M14 23.14C14 19.3319 14 17.4279 14.9698 16.0931C15.283 15.6621 15.6621 15.283 16.0931 14.9698C17.4279 14 19.3319 14 23.14 14H27.71C31.5181 14 33.4221 14 34.7569 14.9698C35.1879 15.283 35.567 15.6621 35.8802 16.0931C36.85 17.4279 36.85 19.3319 36.85 23.14V27.71C36.85 31.5181 36.85 33.4221 35.8802 34.7569C35.567 35.1879 35.1879 35.567 34.7569 35.8802C33.4221 36.85 31.5181 36.85 27.71 36.85H23.14C19.3319 36.85 17.4279 36.85 16.0931 35.8802C15.6621 35.567 15.283 35.1879 14.9698 34.7569C14 33.4221 14 31.5181 14 27.71V23.14Z"
        stroke="url(#paint3_linear_557_2128)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M30.5028 25.425C30.5028 28.2294 28.2294 30.5028 25.425 30.5028C22.6206 30.5028 20.3472 28.2294 20.3472 25.425C20.3472 22.6206 22.6206 20.3472 25.425 20.3472C28.2294 20.3472 30.5028 22.6206 30.5028 25.425Z"
        stroke="url(#paint4_linear_557_2128)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_557_2128"
          x1="4.72818e-07"
          y1="24.8844"
          x2="50.0677"
          y2="24.8844"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#711EE2" />
          <stop offset="1" stop-color="#FF585D" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_557_2128"
          x1="31.1377"
          y1="18.4369"
          x2="33.68"
          y2="18.4369"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#711EE2" />
          <stop offset="1" stop-color="#FF585D" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_557_2128"
          x1="31.1377"
          y1="18.4369"
          x2="33.68"
          y2="18.4369"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#711EE2" />
          <stop offset="1" stop-color="#FF585D" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_557_2128"
          x1="14"
          y1="25.3721"
          x2="36.8809"
          y2="25.3721"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#711EE2" />
          <stop offset="1" stop-color="#FF585D" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_557_2128"
          x1="14"
          y1="25.3721"
          x2="36.8809"
          y2="25.3721"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#711EE2" />
          <stop offset="1" stop-color="#FF585D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

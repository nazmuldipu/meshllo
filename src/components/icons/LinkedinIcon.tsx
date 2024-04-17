import React from "react";

interface Props {
  [key: string]: any;
}

export default function LinkedinIcon(props: Props): JSX.Element {
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
        stroke="url(#paint0_linear_557_2133)"
      />
      <path
        d="M24.1555 23.521V31.1377V27.8847C24.1555 25.4747 26.1092 23.521 28.5192 23.521V23.521C29.9652 23.521 31.1374 24.6932 31.1374 26.1392V31.1377M19.7124 23.521V31.1377"
        stroke="url(#paint1_linear_557_2133)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9822 19.7128C20.9822 20.4139 20.4139 20.9822 19.7128 20.9822C19.0117 20.9822 18.4434 20.4139 18.4434 19.7128C18.4434 19.0117 19.0117 18.4434 19.7128 18.4434C20.4139 18.4434 20.9822 19.0117 20.9822 19.7128Z"
        fill="url(#paint2_linear_557_2133)"
      />
      <path
        d="M14 20.6C14 17.8502 14 16.4753 14.7003 15.5115C14.9264 15.2002 15.2002 14.9264 15.5115 14.7003C16.4753 14 17.8502 14 20.6 14H30.25C32.9998 14 34.3747 14 35.3385 14.7003C35.6498 14.9264 35.9236 15.2002 36.1497 15.5115C36.85 16.4753 36.85 17.8502 36.85 20.6V30.25C36.85 32.9998 36.85 34.3747 36.1497 35.3385C35.9236 35.6498 35.6498 35.9236 35.3385 36.1497C34.3747 36.85 32.9998 36.85 30.25 36.85H20.6C17.8502 36.85 16.4753 36.85 15.5115 36.1497C15.2002 35.9236 14.9264 35.6498 14.7003 35.3385C14 34.3747 14 32.9998 14 30.25V20.6Z"
        stroke="url(#paint3_linear_557_2133)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_557_2133"
          x1="4.72818e-07"
          y1="24.8844"
          x2="50.0677"
          y2="24.8844"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#711EE2" />
          <stop offset="1" stopColor="#FF585D" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_557_2133"
          x1="19.7124"
          y1="27.3117"
          x2="31.1529"
          y2="27.3117"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#711EE2" />
          <stop offset="1" stopColor="#FF585D" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_557_2133"
          x1="18.4434"
          y1="19.7069"
          x2="20.9857"
          y2="19.7069"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#711EE2" />
          <stop offset="1" stopColor="#FF585D" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_557_2133"
          x1="14"
          y1="25.3721"
          x2="36.8809"
          y2="25.3721"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#711EE2" />
          <stop offset="1" stopColor="#FF585D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

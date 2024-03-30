import React from "react";

interface Props {
  [key: string]: any;
}

export default function FacebookIcon(props: Props): JSX.Element {
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
        stroke="url(#paint0_linear_557_2125)"
      />
      <path
        d="M24.76 35.6H25.24C26.1399 35.6 26.5899 35.6 26.9053 35.3708C27.0072 35.2968 27.0968 35.2072 27.1708 35.1053C27.4 34.7899 27.4 34.3399 27.4 33.44V26.6H28.9C29.7427 26.6 30.164 26.6 30.4667 26.3978C30.5977 26.3102 30.7102 26.1977 30.7978 26.0667C31 25.764 31 25.3427 31 24.5C31 23.6573 31 23.236 30.7978 22.9333C30.7102 22.8023 30.5977 22.6898 30.4667 22.6022C30.164 22.4 29.7427 22.4 28.9 22.4H27.4V20C27.4 19.4409 27.4 19.1613 27.4913 18.9408C27.6131 18.6467 27.8467 18.4131 28.1408 18.2913C28.3613 18.2 28.6409 18.2 29.2 18.2C29.7591 18.2 30.0387 18.2 30.2592 18.1087C30.5533 17.9869 30.7869 17.7533 30.9087 17.4592C31 17.2387 31 16.9591 31 16.4V15.8667C31 15.2449 31 14.934 30.8876 14.6929C30.7683 14.4372 30.5628 14.2317 30.3071 14.1124C30.066 14 29.7551 14 29.1333 14C26.957 14 25.8689 14 25.025 14.3935C24.1301 14.8108 23.4108 15.5301 22.9935 16.425C22.6 17.2689 22.6 18.357 22.6 20.5333V22.4H21.1C20.2573 22.4 19.836 22.4 19.5333 22.6022C19.4023 22.6898 19.2898 22.8023 19.2022 22.9333C19 23.236 19 23.6573 19 24.5C19 25.3427 19 25.764 19.2022 26.0667C19.2898 26.1977 19.4023 26.3102 19.5333 26.3978C19.836 26.6 20.2573 26.6 21.1 26.6H22.6V33.44C22.6 34.3399 22.6 34.7899 22.8292 35.1053C22.9032 35.2072 22.9928 35.2968 23.0947 35.3708C23.4101 35.6 23.8601 35.6 24.76 35.6Z"
        stroke="url(#paint1_linear_557_2125)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_557_2125"
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
          id="paint1_linear_557_2125"
          x1="19"
          y1="24.75"
          x2="31.0162"
          y2="24.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#711EE2" />
          <stop offset="1" stop-color="#FF585D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

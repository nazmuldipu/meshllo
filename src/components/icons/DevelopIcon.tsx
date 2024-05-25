import React from "react";

interface Props {
  [key: string]: any;
}

export default function DevelopIcon(props: Props): JSX.Element {
  const { pathClassName, ...rest } = props;
  return (
    <svg
      fill="none"
      viewBox="0 0 80 80"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.31738 11.3263V53.8258C2.31738 57.3121 5.15205 60.145 8.63472 60.145H33.3334V67.0356H26.728C24.6703 67.0356 22.9956 68.7094 22.9956 70.7716C22.9956 72.8285 24.6703 74.5041 26.728 74.5041H52.5769C54.632 74.5041 56.3076 72.8285 56.3076 70.7716C56.3076 68.7094 54.632 67.0356 52.5769 67.0356H45.9689V60.145H70.6649C74.1494 60.145 76.9823 57.3112 76.9823 53.8258V11.3263C76.9823 7.84183 74.1485 5.00806 70.6649 5.00806H8.63472C5.15205 5.00806 2.31738 7.84183 2.31738 11.3263ZM35.5743 60.1476H38.5565V67.0383H35.5743V60.1476ZM52.7849 69.3076C53.5938 69.3076 54.248 69.9618 54.248 70.7725C54.248 71.5796 53.5903 72.2347 52.7849 72.2347H26.5556C25.7485 72.2347 25.0916 71.5787 25.0916 70.7725C25.0916 69.9601 25.7494 69.3076 26.5556 69.3076H52.7849ZM43.7832 67.0365H40.688V60.1458H43.7832V67.0365ZM74.792 11.2623V53.889C74.792 56.1129 72.9849 57.9236 70.7609 57.9236H8.54227C6.31916 57.9236 4.50938 56.1129 4.50938 53.889V11.2623C4.50938 9.03739 6.31827 7.2285 8.54227 7.2285H70.7591C72.984 7.22939 74.792 9.03739 74.792 11.2623ZM7.48627 11.3263V47.5103C7.48627 48.1458 8.00005 48.6578 8.63472 48.6578H70.6649C71.3023 48.6578 71.8143 48.1458 71.8143 47.5103V11.3263C71.8143 10.6916 71.3023 10.1769 70.6649 10.1769H8.63472C8.00005 10.1769 7.48627 10.6907 7.48627 11.3263ZM9.63383 12.3894H69.6685V46.4463H9.63383V12.3894Z"
        fill="url(#paint0_linear_1002_678)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1002_678"
          x1="2.31738"
          y1="39.5953"
          x2="77.0833"
          y2="39.5953"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#711EE2" />
          <stop offset="1" stopColor="#FF585D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

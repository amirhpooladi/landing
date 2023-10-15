import React from "react";

export const VideoPlayButton = () => {
  return (
    <svg
      className=" absolute left-0 right-0 bottom-4 top-0 m-auto"
      xmlns="http://www.w3.org/2000/svg"
      width="71"
      height="71"
      viewBox="0 0 71 71"
      fill="none"
    >
      <g filter="url(#filter0_d_3693_21427)">
        <circle cx="35.5554" cy="31.3109" r="26.7634" fill="white" />
      </g>
      <path
        d="M44.8667 29.579C46.2 30.3488 46.2 32.2733 44.8667 33.0431L32.3999 40.2408C31.0666 41.0106 29.3999 40.0484 29.3999 38.5088L29.3999 24.1134C29.3999 22.5738 31.0666 21.6115 32.3999 22.3813L44.8667 29.579Z"
        fill="#0891B2"
      />
      <defs>
        <filter
          id="filter0_d_3693_21427"
          x="0.791992"
          y="0.547485"
          width="69.5269"
          height="69.5269"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3693_21427"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3693_21427"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

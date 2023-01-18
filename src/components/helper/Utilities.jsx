import React, { memo } from "react";

const Utilities = () => {
  return (
    <div className="Utilities">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
        <symbol id="humburger" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </symbol>
        <symbol id="logo-text" viewBox="0 0 101 19">
          <path
            d="M10.9858 5.56534C10.9176 4.87784 10.625 4.34375 10.108 3.96307C9.59091 3.58239 8.8892 3.39204 8.00284 3.39204C7.40057 3.39204 6.89205 3.47727 6.47727 3.64773C6.0625 3.8125 5.74432 4.04261 5.52273 4.33807C5.30682 4.63352 5.19886 4.96875 5.19886 5.34375C5.1875 5.65625 5.25284 5.92898 5.39489 6.16193C5.54261 6.39489 5.74432 6.59659 6 6.76705C6.25568 6.93182 6.55114 7.0767 6.88636 7.2017C7.22159 7.32102 7.57955 7.4233 7.96023 7.50852L9.52841 7.88352C10.2898 8.05398 10.9886 8.28125 11.625 8.56534C12.2614 8.84943 12.8125 9.19886 13.2784 9.61364C13.7443 10.0284 14.1051 10.517 14.3608 11.0795C14.6222 11.642 14.7557 12.2869 14.7614 13.0142C14.7557 14.0824 14.483 15.0085 13.9432 15.7926C13.4091 16.571 12.6364 17.1761 11.625 17.608C10.6193 18.0341 9.40625 18.2472 7.9858 18.2472C6.5767 18.2472 5.34943 18.0312 4.30398 17.5994C3.2642 17.1676 2.4517 16.5284 1.86648 15.6818C1.28693 14.8295 0.982955 13.7756 0.954545 12.5199H4.52557C4.56534 13.1051 4.73295 13.5937 5.02841 13.9858C5.32955 14.3722 5.73011 14.6648 6.23011 14.8636C6.7358 15.0568 7.30682 15.1534 7.94318 15.1534C8.56818 15.1534 9.1108 15.0625 9.57102 14.8807C10.0369 14.6989 10.3977 14.446 10.6534 14.1222C10.9091 13.7983 11.0369 13.4261 11.0369 13.0057C11.0369 12.6136 10.9205 12.2841 10.6875 12.017C10.4602 11.75 10.125 11.5227 9.68182 11.3352C9.24432 11.1477 8.70739 10.9773 8.07102 10.8239L6.17045 10.3466C4.69886 9.98864 3.53693 9.42898 2.68466 8.66761C1.83239 7.90625 1.40909 6.88068 1.41477 5.59091C1.40909 4.53409 1.69034 3.6108 2.25852 2.82102C2.83239 2.03125 3.61932 1.41477 4.61932 0.971591C5.61932 0.528409 6.75568 0.306818 8.02841 0.306818C9.32386 0.306818 10.4545 0.528409 11.4205 0.971591C12.392 1.41477 13.1477 2.03125 13.6875 2.82102C14.2273 3.6108 14.5057 4.52557 14.5227 5.56534H10.9858ZM16.5788 3.58807V0.545454H30.9141V3.58807H25.5703V18H21.9226V3.58807H16.5788ZM33.2749 18V0.545454H40.1612C41.4794 0.545454 42.6044 0.78125 43.5362 1.25284C44.4737 1.71875 45.1868 2.38068 45.6754 3.23864C46.1697 4.09091 46.4169 5.09375 46.4169 6.24716C46.4169 7.40625 46.1669 8.40341 45.6669 9.23864C45.1669 10.0682 44.4425 10.7045 43.4936 11.1477C42.5504 11.5909 41.4084 11.8125 40.0675 11.8125H35.4567V8.84659H39.4709C40.1754 8.84659 40.7607 8.75 41.2266 8.55682C41.6925 8.36364 42.0391 8.07386 42.2663 7.6875C42.4993 7.30114 42.6158 6.82102 42.6158 6.24716C42.6158 5.66761 42.4993 5.17898 42.2663 4.78125C42.0391 4.38352 41.6896 4.08239 41.218 3.87784C40.7521 3.66761 40.1641 3.5625 39.4538 3.5625H36.9652V18H33.2749ZM42.701 10.0568L47.0391 18H42.9652L38.7209 10.0568H42.701ZM49.0249 18V0.545454H60.7862V3.58807H52.7152V7.74716H60.1811V10.7898H52.7152V14.9574H60.8203V18H49.0249ZM66.7287 18H62.7741L68.7997 0.545454H73.5554L79.5724 18H75.6179L71.2457 4.53409H71.1094L66.7287 18ZM66.4815 11.1392H75.8224V14.0199H66.4815V11.1392ZM81.6733 0.545454H86.2244L91.0312 12.2727H91.2358L96.0426 0.545454H100.594V18H97.0142V6.6392H96.8693L92.3523 17.9148H89.9148L85.3977 6.59659H85.2528V18H81.6733V0.545454Z"
            fill="url(#paint0_radial_293_676)"
          />

          <defs>
            <radialGradient
              id="paint0_radial_293_676"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(95.6429 13) rotate(180) scale(95.6429 307.517)"
            >
              <stop stopColor="#D600C9" />
              <stop offset="1" stopColor="#72FFEA" />
            </radialGradient>
          </defs>
        </symbol>
        <symbol id="google-icon" viewBox="0 0 48 48">
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          />
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          />
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          />
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          />
        </symbol>
      </svg>
    </div>
  );
};

export default memo(Utilities);

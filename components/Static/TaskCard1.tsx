import { cn } from "@/lib/utils";
import { useState } from "react";
import Flex from "../Flex";
import LoadingButton from "../LoadingButton";
import { Card, CardFooter, CardTitle } from "../ui/card";

const sleep = (ms: number) =>
  new Promise((r) => {
    setTimeout(() => {
      r(true);
    }, ms);
  });

function TaskCard1() {
  const [isLoading, toggleIsLoading] = useState(false);

  return (
    <Card
      className={cn(
        "p-[14px] px-[20px] pb-2 min-h-[340px] rounded-3xl bg-[#F8F8F8] border-none flex flex-col justify-between relative"
      )}
    >
      <Flex className=" flex-col gap-2 items-start">
        <Flex className=" bg-white rounded-[8px] w-fit mb-[4]">
          <span className="text-[14px] font-semibold  p-2 text-[#C0C0C0]">
            Reward
          </span>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 9.99998C20 4.4771 15.5229 0 10 0C4.47715 0 0 4.4771 0 9.99998C0 15.5229 4.47715 20 10 20C15.5229 20 20 15.5229 20 9.99998Z"
              fill="#A6F4D7"
            />
            <g filter="url(#filter0_di_66_75)">
              <path
                d="M9.63898 15.5909V4.68182H10.3378V15.5909H9.63898ZM11.4927 8.28267C11.4586 7.93892 11.3123 7.67187 11.0538 7.48153C10.7952 7.29119 10.4444 7.19602 10.0012 7.19602C9.70006 7.19602 9.4458 7.23863 9.23841 7.32386C9.03103 7.40625 8.87194 7.52131 8.76114 7.66903C8.65319 7.81676 8.59921 7.98437 8.59921 8.17187C8.59353 8.32812 8.6262 8.46449 8.69722 8.58096C8.77108 8.69744 8.87194 8.79829 8.99978 8.88352C9.12762 8.96591 9.27535 9.03835 9.44296 9.10085C9.61057 9.16051 9.78955 9.21165 9.97989 9.25426L10.764 9.44176C11.1447 9.52699 11.4941 9.64062 11.8123 9.78267C12.1305 9.92471 12.406 10.0994 12.639 10.3068C12.8719 10.5142 13.0523 10.7585 13.1802 11.0398C13.3109 11.321 13.3776 11.6435 13.3805 12.0071C13.3776 12.5412 13.2413 13.0043 12.9714 13.3963C12.7043 13.7855 12.318 14.0881 11.8123 14.304C11.3094 14.517 10.7029 14.6236 9.99268 14.6236C9.28813 14.6236 8.67449 14.5156 8.15177 14.2997C7.63188 14.0838 7.22563 13.7642 6.93302 13.3409C6.64324 12.9148 6.49126 12.3878 6.47705 11.7599H8.26256C8.28245 12.0526 8.36626 12.2969 8.51398 12.4929C8.66455 12.6861 8.86483 12.8324 9.11483 12.9318C9.36768 13.0284 9.65319 13.0767 9.97137 13.0767C10.2839 13.0767 10.5552 13.0312 10.7853 12.9403C11.0182 12.8494 11.1986 12.723 11.3265 12.5611C11.4543 12.3991 11.5182 12.2131 11.5182 12.0028C11.5182 11.8068 11.46 11.642 11.3435 11.5085C11.2299 11.375 11.0623 11.2614 10.8407 11.1676C10.6219 11.0739 10.3535 10.9886 10.0353 10.9119L9.08501 10.6733C8.34921 10.4943 7.76824 10.2145 7.34211 9.83381C6.91597 9.45312 6.70432 8.94034 6.70716 8.29545C6.70432 7.76704 6.84495 7.3054 7.12904 6.91051C7.41597 6.51562 7.80944 6.20738 8.30944 5.98579C8.80944 5.7642 9.37762 5.65341 10.014 5.65341C10.6617 5.65341 11.2271 5.7642 11.71 5.98579C12.1958 6.20738 12.5736 6.51562 12.8435 6.91051C13.1134 7.3054 13.2526 7.76278 13.2611 8.28267H11.4927Z"
                fill="#0DB48C"
              />
            </g>
            <g filter="url(#filter1_di_66_75)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10ZM18.75 10C18.75 14.8325 14.8325 18.75 10 18.75C5.16751 18.75 1.25 14.8325 1.25 10C1.25 5.16751 5.16751 1.25 10 1.25C14.8325 1.25 18.75 5.16751 18.75 10Z"
                fill="#0DB48C"
              />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.4831 4.12348L17.3679 3.23867C15.54 1.24786 12.9157 0 10 0C4.47715 0 0 4.47715 0 10C0 12.9157 1.24786 15.54 3.23867 17.3679L4.12347 16.4831C2.35846 14.8822 1.25 12.5706 1.25 10C1.25 5.16751 5.16751 1.25 10 1.25C12.5706 1.25 14.8822 2.35846 16.4831 4.12348ZM15.775 4.83154C14.356 3.24706 12.2944 2.25 10 2.25C5.71979 2.25 2.25 5.71979 2.25 10C2.25 12.2944 3.24706 14.356 4.83154 15.775L15.775 4.83154Z"
              fill="url(#paint0_linear_66_75)"
            />
            <defs>
              <filter
                id="filter0_di_66_75"
                x="6.27705"
                y="4.68182"
                width="7.30332"
                height="11.3091"
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
                <feOffset dy="0.2" />
                <feGaussianBlur stdDeviation="0.1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.545833 0 0 0 0 1 0 0 0 0 0.782 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_66_75"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_66_75"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.1" />
                <feGaussianBlur stdDeviation="0.25" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_66_75"
                />
              </filter>
              <filter
                id="filter1_di_66_75"
                x="1.05"
                y="1.25"
                width="17.9"
                height="17.9"
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
                <feOffset dy="0.2" />
                <feGaussianBlur stdDeviation="0.1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.545833 0 0 0 0 1 0 0 0 0 0.782 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_66_75"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_66_75"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.1" />
                <feGaussianBlur stdDeviation="0.25" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_66_75"
                />
              </filter>
              <linearGradient
                id="paint0_linear_66_75"
                x1="15"
                y1="1.25"
                x2="6.875"
                y2="10"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.45" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <span className="text-[14px] font-semibold  p-2 text-[#C0C0C0]">
            1000 Link3
          </span>
        </Flex>
        <CardTitle className={cn(" text-[18px] mb-2")}>
          Questionnaire Survey <br />
          Link3 Club feedback
        </CardTitle>

        <Flex className=" mt-16  flex-col bg-white rounded-sm w-full p-4  items-start">
          <span className="text-[14px] font-semibold">Condition</span>
          <span className=" text-[12px] text-[#C0C0C0]">
            Reputation &gt; 500
          </span>
          <span className=" mt-[-2] text-[12px] text-[#C0C0C0]">
            Property &gt; 2000 USDT
          </span>
        </Flex>
      </Flex>

      <CardFooter className=" flex flex-col gap-1 justify-between p-0 pt-2">
        <LoadingButton className="w-full" disabled loading={isLoading}>
          Join
        </LoadingButton>

        <span className=" text-sm text-[#c0c0c0]">11hours 23mins</span>
      </CardFooter>
    </Card>
  );
}

export default TaskCard1;

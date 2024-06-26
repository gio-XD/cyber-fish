import { cn } from "@/lib/utils";
import { useState } from "react";
import Flex from "../Flex";
import LoadingButton from "../LoadingButton";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/card";

const sleep = (ms: number) =>
  new Promise((r) => {
    setTimeout(() => {
      r(true);
    }, ms);
  });

function TaskCard2() {
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
        <CardTitle className={cn(" text-[28px] mb-2")}>Add content</CardTitle>
        <CardDescription className="flex items-center gap-2  mt-8 text-[14px] font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.55 11.5C8.30736 11.5 7.3 10.4926 7.3 9.25C7.3 8.00736 8.30736 7 9.55 7C10.7926 7 11.8 8.00736 11.8 9.25C11.8 10.4926 10.7926 11.5 9.55 11.5ZM10 19.748V16.4C10 15.9116 10.1442 15.4627 10.4041 15.0624C10.1087 15.0213 9.80681 15 9.5 15C7.93201 15 6.49369 15.5552 5.37091 16.4797C6.44909 18.0721 8.08593 19.2553 10 19.748ZM4.45286 14.66C5.86432 13.6168 7.61013 13 9.5 13C10.5435 13 11.5431 13.188 12.4667 13.5321C13.3447 13.1888 14.3924 13 15.5 13C17.1597 13 18.6849 13.4239 19.706 14.1563C19.8976 13.4703 20 12.7471 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 12.9325 4.15956 13.8278 4.45286 14.66ZM18.8794 16.0859C18.4862 15.5526 17.1708 15 15.5 15C13.4939 15 12 15.7967 12 16.4V20C14.9255 20 17.4843 18.4296 18.8794 16.0859ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM15.5 12.5C14.3954 12.5 13.5 11.6046 13.5 10.5C13.5 9.39543 14.3954 8.5 15.5 8.5C16.6046 8.5 17.5 9.39543 17.5 10.5C17.5 11.6046 16.6046 12.5 15.5 12.5Z"
              fill="#C0C0C0"
            />
          </svg>{" "}
          LEO
        </CardDescription>
        <CardDescription className=" flex items-center gap-2 text-[14px] font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.55 11.5C8.30736 11.5 7.3 10.4926 7.3 9.25C7.3 8.00736 8.30736 7 9.55 7C10.7926 7 11.8 8.00736 11.8 9.25C11.8 10.4926 10.7926 11.5 9.55 11.5ZM10 19.748V16.4C10 15.9116 10.1442 15.4627 10.4041 15.0624C10.1087 15.0213 9.80681 15 9.5 15C7.93201 15 6.49369 15.5552 5.37091 16.4797C6.44909 18.0721 8.08593 19.2553 10 19.748ZM4.45286 14.66C5.86432 13.6168 7.61013 13 9.5 13C10.5435 13 11.5431 13.188 12.4667 13.5321C13.3447 13.1888 14.3924 13 15.5 13C17.1597 13 18.6849 13.4239 19.706 14.1563C19.8976 13.4703 20 12.7471 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 12.9325 4.15956 13.8278 4.45286 14.66ZM18.8794 16.0859C18.4862 15.5526 17.1708 15 15.5 15C13.4939 15 12 15.7967 12 16.4V20C14.9255 20 17.4843 18.4296 18.8794 16.0859ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM15.5 12.5C14.3954 12.5 13.5 11.6046 13.5 10.5C13.5 9.39543 14.3954 8.5 15.5 8.5C16.6046 8.5 17.5 9.39543 17.5 10.5C17.5 11.6046 16.6046 12.5 15.5 12.5Z"
              fill="#C0C0C0"
            />
          </svg>{" "}
          Link3
        </CardDescription>

        <Flex className=" flex-col bg-white rounded-sm w-full p-4 mt-2 items-start">
          <span className=" text-[14px] font-semibold">添加团队成员信息</span>
          <span className=" mt-[-2] text-[12px] text-[#C0C0C0]">
            新增前端开发工程师Lidong
          </span>
        </Flex>
      </Flex>

      <CardFooter className=" flex flex-col gap-1 justify-between p-0 pt-2">
        <LoadingButton className="w-full" disabled loading={isLoading}>
          Agree
        </LoadingButton>

        <LoadingButton className="w-full" disabled loading={isLoading}>
          Disagree
        </LoadingButton>

        <span className=" text-sm text-[#c0c0c0]">11hours 23mins</span>
      </CardFooter>
    </Card>
  );
}

export default TaskCard2;

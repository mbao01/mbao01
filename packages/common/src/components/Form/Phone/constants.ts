import { cva } from "../../../libs";

export const getPhoneButtonClasses = cva("join-item justify-between px-2");

export const getPhoneInputClasses = cva(
  "input join-item input-bordered h-10 w-full rounded-md !rounded-r-md !pl-2 text-sm transition-all duration-100"
);

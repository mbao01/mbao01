import { cva } from "../../../libs";

export const getPhoneButtonClasses = cva("join-item justify-between px-2");

export const getPhoneInputClasses = cva(
  "input join-item input-bordered w-full !rounded-l-none !pl-2 transition-all duration-100"
);

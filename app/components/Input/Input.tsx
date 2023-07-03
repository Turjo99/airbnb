"use client";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  error: FieldError;
}
const Input = () => {
  return <div className="">hello</div>;
};
export default Input;

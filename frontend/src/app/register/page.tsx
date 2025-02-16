"use client";
// Components
import RegisterStepForm from "../ui/register/step/registerStepForm";
// Images

// Imports
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import * as yup from "yup";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import { useState } from "react";
// Styles
import s from "./page.module.scss";

export default function Page() {
  const [stepForm, setStepForm] = useState(0);
  return (
    <section className={s.wrapperRegister}>
      <Image
        src="/mercatto-logo.png"
        alt="Mercatto Logo"
        width={200}
        height={200}
        priority
      />
      <RegisterStepForm stepForm={stepForm} />
      <div className={s.wrapperRegisterForm}></div>
    </section>
  );
}

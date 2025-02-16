"use client";
// Components
import RegisterStepForm from "../ui/register/step/registerStepForm";
import StepOne from "../ui/register/stepOne/stepOne";
// Images

// Imports
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
        width={150}
        height={150}
        priority
      />
      <h1>CRIAR CONTA</h1>
      <RegisterStepForm stepForm={stepForm} />
      <div className={s.wrapperRegisterForm}>
        {stepForm === 0 && <StepOne />}
      </div>
    </section>
  );
}

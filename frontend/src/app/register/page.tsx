"use client";
// Components
import RegisterStepForm from "../ui/register/stepForm/registerStepForm";
import StepOne from "../ui/register/stepOne/stepOne";
// Images

// Imports
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { DataType } from "@/helpers/types";
// Styles
import s from "./page.module.scss";

export default function Page() {
  const [stepForm, setStepForm] = useState(0);
  const [firstData, setFirstData] = useState<DataType>({} as DataType);

  useEffect(() => {
    console.log(firstData);
  }, [firstData]);
  return (
    <section className={s.wrapperRegister}>
      <Image
        src="/mercatto-logo.png"
        alt="Mercatto Logo"
        width={120}
        height={120}
        priority
      />
      <h1>CRIAR CONTA</h1>
      <RegisterStepForm stepForm={stepForm} />
      <div className={s.wrapperRegisterForm}>
        {stepForm === 0 && <StepOne step={setStepForm} setData={setFirstData}/>}
      </div>
    </section>
  );
}

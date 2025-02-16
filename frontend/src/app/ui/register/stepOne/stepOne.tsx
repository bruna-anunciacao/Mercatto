// Components

// Images

// Imports
import * as yup from "yup";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
// Styles
import s from "./stepOne.module.scss";

export default function StepOne() {
  const validationSchema = yup.object({
    fullName: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    phone: yup.string().required("Telefone é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "As senhas não coincidem")
      .required("Campo obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  })

  console.log(formik.errors);
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        <TextField id="fullName" name="fullName" label="Nome Completo" variant="outlined" />
      </label>
      <label>
        <TextField id="fullName" name="fullName" label="Nome Completo" variant="outlined" />
      </label>
      <button type="submit">dwada</button>
    </form>
  );
}

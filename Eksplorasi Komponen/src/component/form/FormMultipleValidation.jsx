import { useState } from "react";
import InputText from "./InputText";

const FormMultipleValidation = () => {
  const [form, setForm] = useState({
    nama: "",
    phone: "",
    email: "",
  });

  const [error, setError] = useState({
    errorNama: "nama minimal 3 character",
    errorPhone: "nomor phone minimal 3 character",
    errorEmail: "email minimal 3 character",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    error?.nama > 0
      ? console.log(error?.errorNama)
      : error?.phone > 0
      ? console.log(error?.errorPhone)
      : error?.email
      ? console.log(error?.errorEmail)
      : console.log("Validasi Sukses");
  };

  const handleChange = (field, e) => {
    setError("");
    e.target.value < 3
      ? setError({ ...error, [field]: `${field} minimal 3 karakter` })
      : setError({ ...error, [field]: "" });
    setForm({ ...form, [field]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      {error?.errorNama}
      <br />
      <InputText
        label={"Nama"}
        value={form.nama}
        onChange={(e) => handleChange("nama", e)}
      />
      <br />
      {error?.errorPhone}
      <br />
      <InputText
        label={"Phone Number"}
        value={form.phone}
        onChange={(e) => handleChange("phone", e)}
      />
      <br />
      {error?.errorEmail}
      <br />
      <InputText
        label={"Email"}
        value={form.email}
        onChange={(e) => handleChange("email", e)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormMultipleValidation;

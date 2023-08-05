import { useState } from "react";
import InputText from "./InputText";

const MultipleForm = () => {
  const [form, setForm] = useState({
    nama: "",
    phone: "",
    email: "",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(form);
      }}
    >
      <InputText
        label={"Nama"}
        value={form.nama}
        onChange={(e) => setForm({ ...form, nama: e.target.value })}
      />
      <br />
      <InputText
        label={"Phone"}
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <br />
      <InputText
        label={"Email"}
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MultipleForm;

import { useState } from "react";
import InputText from "./InputText";

const FormInput = () => {
  const [nama, setNama] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(nama);
      }}
    >
      <InputText
        label={"Nama"}
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormInput;

import { useState } from "react";
import InputText from "./InputText";

const FormBasicValidation = () => {
  const [nama, setNama] = useState("");
  const [error, setError] = useState("Field minimal 3 karakter");

  const handleSubmit = (e) => {
    e.preventDefault();
    error ? console.log(error) : console.log(nama);
  };

  const handleChange = (e) => {
    setError("");
    e.target.value.length < 3 && setError("Field minimal 3 karakter");
    setNama(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error}
      <InputText label={"Nama"} value={nama} onChange={handleChange} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormBasicValidation;

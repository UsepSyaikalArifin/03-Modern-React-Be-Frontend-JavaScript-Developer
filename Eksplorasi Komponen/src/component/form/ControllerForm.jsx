import { useState } from "react";

const ControlledForm = () => {
  const [nama, setName] = useState("No Name");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(nama);
      }}
    >
      <label htmlFor="nama">
        Nama :{" "}
        <input
          type="text"
          value={nama}
          onChange={(e) => setName(() => e.target.value)}
        />
      </label>
      <input type="submit" value={"Submit"} />
    </form>
  );
};

export default ControlledForm;

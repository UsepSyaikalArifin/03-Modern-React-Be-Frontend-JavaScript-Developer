import { useRef } from "react";

const UseRefForm = () => {
  const inputName = useRef(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(inputName.current.value);
      }}
    >
      <label>
        Nama :{" "}
        <input
          type="text"
          ref={inputName}
          defaultValue={"Usep Syaikal Arifin"}
        />
      </label>
      <input type="submit" value={"Submit"} />
    </form>
  );
};

export default UseRefForm;

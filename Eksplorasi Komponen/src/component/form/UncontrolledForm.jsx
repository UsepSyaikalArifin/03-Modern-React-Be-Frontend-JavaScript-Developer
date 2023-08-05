import { useRef } from "react";

const UncontrollerForm = () => {
  const inputName = useRef();
  const inputPhoto = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(inputName?.current?.value);
        console.log(inputPhoto?.current?.files[0]);
      }}
    >
      <label htmlFor="nama">
        Nama :
        <input
          type="text"
          name="nama"
          defaultValue={"No Name"}
          ref={inputName}
        />
      </label>
      <label htmlFor="photo">
        Photo: <input type="file" name="photo" ref={inputPhoto} />
      </label>
      <input type="submit" defaultValue={"Submit"} />
    </form>
  );
};

export default UncontrollerForm;

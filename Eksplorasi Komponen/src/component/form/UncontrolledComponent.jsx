import { useRef } from "react";

const UncomtrolledComponent = () => {
  const inputName = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputName.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: <input type="text" ref={inputName} />
      </label>
      <input type="submit" value={"Submit"} />
    </form>
  );
};

export default UncomtrolledComponent;

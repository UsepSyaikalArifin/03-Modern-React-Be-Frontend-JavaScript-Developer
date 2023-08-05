// import FormInput from "./component/form/FormInput";
import FormMultipleValidation from "./component/form/FormMultipleValidation";
import FormBasicValidation from "./component/form/FormValidationBasic";
import MultipleForm from "./component/form/MultipleForm";

const App = () => {
  return (
    <div className="flex justify-center items-start min-h-screen flex-col p-20">
      <div className="border-2 mb-3 w-full">
        <MultipleForm />
      </div>
      <div className="border-2 mb-3 w-full">
        <FormBasicValidation />
      </div>
      <div className="border-2 w-full">
        <FormMultipleValidation />
      </div>
    </div>
  );
};

export default App;

import Hello from "./component/Hello";

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <Hello props="Usep Syaikal Arifin" gretting="Selamat Pagi" />
      <Hello />
    </div>
  );
};

export default App;

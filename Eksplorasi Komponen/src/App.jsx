import Hello from "./component/Hello";
import Article from "./component/article/Article";
import Rendering from "./component/Rendering";
import Conditional from "./component/Conditional";
import List from "./component/List";
import Event from "./component/Event";
import AllEvent from "./component/AllEvent";

const App = () => {
  return (
    <div className="flex justify-center items-start min-h-screen flex-col p-20">
      <Hello props="Usep Syaikal Arifin" gretting="Selamat Pagi" />
      <Hello />
      <Article userLogin={"sudah login"} />
      <Rendering />
      <Conditional />
      <List />
      <Event />
      <AllEvent />
    </div>
  );
};

export default App;

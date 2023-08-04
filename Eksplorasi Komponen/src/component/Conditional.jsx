const Conditional = () => {
  const isLogin = true;
  const userName = "Usep Syaikal Arifin";
  return (
    <div>{isLogin ? <b>user {userName} sudah login</b> : "silahkan Login"}</div>
  );
};

export default Conditional;

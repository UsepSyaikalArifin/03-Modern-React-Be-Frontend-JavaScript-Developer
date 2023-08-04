const Event = () => {
  return (
    <button
      onClick={(e) =>
        e.target.innerText === "Clicked"
          ? (e.target.innerText = "Info")
          : (e.target.innerText = "Clicked")
      }
    >
      Info
    </button>
  );
};

export default Event;

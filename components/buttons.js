const Buttons = ({ setValueLeft, setValueRight }) => {
  return (
    <div className="container-btn">
      <button
        onClick={() => {
          setValueLeft("❤️");
        }}
      >
        ✔️
      </button>
      <button
        onClick={() => {
          setValueRight("❤️");
        }}
      >
        ✔️
      </button>
    </div>
  );
};

export default Buttons;

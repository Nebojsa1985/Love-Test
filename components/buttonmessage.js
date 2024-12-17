const Buttonmessage = ({ reset, hearts, quote }) => {
  return (
    <div className="container-reset">
      <h1>{hearts}</h1>
      <h2>{hearts}</h2>
      <h3>{hearts}</h3>
      <h4>{hearts}</h4>
      <h5>{hearts}</h5>
      <div className="reset-msg">
        <h3>{quote}</h3>
      </div>
      <button onClick={reset} className="reset-btn">
        Test again
      </button>
    </div>
  );
};

export default Buttonmessage;

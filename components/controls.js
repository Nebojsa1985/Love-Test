const Controls = ({ handleLove, info, setInfo }) => {
  return (
    <div className="container-controls">
      <button
        className="set-btn owl-btn"
        onClick={() => {
          handleLove(100, 0);
        }}
      >
        🦉
      </button>

      <button
        className="set-btn unicorn-btn"
        onClick={() => {
          handleLove(100, 90);
        }}
      >
        🦄
      </button>
      <button
        className="set-btn duck-btn"
        onClick={() => {
          handleLove(15, 0);
        }}
      >
        🦆
      </button>
      <a
        href="https://nebojsajovanovic.netlify.app/"
        target="_blank"
        className="author-link"
      >
        ©️
      </a>

      <h2
        onClick={() => {
          info == false ? setInfo(true) : setInfo(false);
        }}
        className="info-btn"
      >
        ℹ️
      </h2>
      {info && (
        <div className="container-info">
          <p>🦄 love +</p>
          <p>🦉 real test</p>
          <p>🦆 love -</p>
          <p className="info-close-btn" onClick={() => setInfo(false)}>
            ❌
          </p>
        </div>
      )}
    </div>
  );
};

export default Controls;

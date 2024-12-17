const Avatars = ({ valueleft, valueright }) => {
  return (
    <div className="container-values">
      <div>
        <h1>{valueleft}</h1>
      </div>
      <div>
        <h1>{valueright}</h1>
      </div>
    </div>
  );
};

export default Avatars;

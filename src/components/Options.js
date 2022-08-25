const Options = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
  };
  const handleInput = (ev) => {
    props.handleInput(ev.target.value);
  };

  return (
    <form>
      <label className="title" htmlFor="word" onSubmit={handleChange}>
        Escribe aquí la palabra que hay que adivinar:
      </label>
      <input
        autofocus
        autocomplete="off"
        className="form__input"
        maxlength="15"
        type="text"
        value={props.word}
        id="word"
        name="word"
        onChange={handleInput}
      />
    </form>
  );
};

export default Options;

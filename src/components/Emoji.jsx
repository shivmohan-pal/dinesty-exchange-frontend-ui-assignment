const Emoji = ({ symbol, label, css }) => {
  return (
    <span
      className={css}
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      {String.fromCodePoint(symbol)}
    </span>
  );
};

export default Emoji;

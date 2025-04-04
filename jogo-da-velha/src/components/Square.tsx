type Props = {
  value: string | null;
  onClick: () => void;
};

const Square = ({ value, onClick }: Props) => {
  return (
    <button className="square" onClick={onClick}>
      <span className={value === "X" ? "x" : "o"}>{value}</span>
    </button>
  );
};

export default Square;

const Square = ({ value, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="font-['Permanent_Marker'] bg-gray-800 h-30 w-full rounded flex items-center justify-center text-4xl text-amber-100 font-bold cursor-pointer"
    >
      {value}
    </div>
  );
};

export default Square;

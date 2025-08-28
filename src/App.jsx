import Board from "./components/Board";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="w-full max-w-[400px] mx-5">
        <h1 className="font-semibold text-white text-5xl text-center mb-10">
          Tic Tac Toe
        </h1>
        <Board />
      </div>
    </div>
  );
};

export default App;

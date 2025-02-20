export default function Court({ players, rotation }) {
    return (
      <div className="relative w-[300px] h-[400px] bg-green-500 grid grid-cols-3 grid-rows-2 gap-2 p-4 rounded-lg shadow-lg border-4 border-white">
        {rotation.map((playerId) => {
          const player = players.find((p) => p.id === playerId);
          return (
            <div
              key={playerId}
              className="flex items-center justify-center p-2 bg-white rounded shadow text-sm font-bold"
            >
              {player ? `${player.name} (#${player.number})` : "Empty"}
            </div>
          );
        })}
      </div>
    );
  }
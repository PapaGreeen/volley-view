"use client";

import Court from "@/components/Court";
import useTeamStore from "@/store/TeamStore";

export default function Home() {
  const { rotation, players, rotatePlayers } = useTeamStore();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Volleyball Rotation Tracker</h1>
      <Court players={players} rotation={rotation} />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-700"
        onClick={rotatePlayers}
      >
        Rotate
      </button>
    </main>
  );
}
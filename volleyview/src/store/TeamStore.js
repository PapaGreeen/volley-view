import { create } from "zustand";

const useTeamStore = create((set) => ({
  players: [
    { id: 1, name: "Alice", number: 5 },
    { id: 2, name: "Bob", number: 12 },
    { id: 3, name: "Charlie", number: 8 },
    { id: 4, name: "David", number: 3 },
    { id: 5, name: "Eve", number: 7 },
    { id: 6, name: "Frank", number: 9 },
  ],
  rotation: [1, 2, 3, 4, 5, 6], // Player IDs in rotation order

  rotatePlayers: () => set((state) => ({
    rotation: [...state.rotation.slice(1), state.rotation[0]], // Move first player to last
  })),

  substitutePlayer: (oldPlayerId, newPlayer) => set((state) => ({
    players: [...state.players.filter((p) => p.id !== oldPlayerId), newPlayer],
    rotation: state.rotation.map((id) => (id === oldPlayerId ? newPlayer.id : id)),
  })),
}));

export default useTeamStore;
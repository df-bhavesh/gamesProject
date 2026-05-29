import { create } from 'zustand';

export const useGameStore = create((set) => ({
  heads: 0,
  tails: 0,
  isFlipping: false,
  result: null,
  history: [],

  flip: () => {
    set({ isFlipping: true, result: null });

    setTimeout(() => {
      const newResult = Math.random() > 0.5 ? 'heads' : 'tails';
      set((state) => ({
        isFlipping: false,
        result: newResult,
        [newResult]: state[newResult] + 1,
        history: [newResult, ...state.history.slice(0, 99)],
      }));
    }, 2000);
  },

  reset: () => set({ heads: 0, tails: 0, result: null, history: [] }),

  undo: () => {
    set((state) => {
      if (state.history.length === 0) return state;
      const lastResult = state.history[0];
      return {
        history: state.history.slice(1),
        [lastResult]: Math.max(0, state[lastResult] - 1),
      };
    });
  },
}));

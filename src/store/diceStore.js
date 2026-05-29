import { create } from 'zustand';

export const useDiceStore = create((set) => ({
  numDice: 1,
  numSides: 6,
  result: null,
  isRolling: false,
  diceValues: [],

  setNumDice: (num) => set({ numDice: Math.max(1, Math.min(4, num)) }),
  setNumSides: (sides) => set({ numSides: Math.max(2, Math.min(6, sides)) }),

  rollDice: () => {
    set({ isRolling: true });

    setTimeout(() => {
      set((state) => {
        const values = Array.from({ length: state.numDice }, () =>
          Math.floor(Math.random() * state.numSides) + 1
        );
        const total = values.reduce((a, b) => a + b, 0);

        return {
          diceValues: values,
          result: total,
          isRolling: false
        };
      });
    }, 600);
  },

  reset: () => set({ result: null, diceValues: [], numDice: 1, numSides: 6 })
}));

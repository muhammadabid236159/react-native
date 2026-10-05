import { create } from 'zustand';

// 🌟 Zustand Custom Hook (Store) with Theme & Counter
export const useCounterStore = create((set) => ({
  count: 0,
  userName: 'Abid',
  isDarkMode: false, // 🌙 Theme state: false = Light, true = Dark

  // Counter Actions
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  setUserName: (name) => set({ userName: name }),

  // 🎨 Theme Toggle Action
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

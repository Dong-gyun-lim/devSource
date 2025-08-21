//counterStore2.js
//persist미들웨어를 사용해보는 예제
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCountStore = create(
    persist((set) => ({
        count: 0,
        increase: () => set((state) => ({ count: state.count + 1 })),
        decrease: () => set((state) => ({ count: state.count - 1 })),
    })),
    { name: 'counter-storage' }
);

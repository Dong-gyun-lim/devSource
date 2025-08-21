//counterStore.js
//npm i zustand
import { create } from 'zustand';
export const useStore = create((set) => ({
    count: 0, //전역적으로 관리할 state 데이터
    increase: () =>
        set((state) => ({
            count: state.count + 1,
        })), // 액션 함수
    decrease: () =>
        set((state) => ({
            count: state.count - 1,
        })),
}));

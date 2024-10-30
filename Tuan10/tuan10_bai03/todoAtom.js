// recoil/todosAtom.js
import { atom } from 'recoil';

export const todosAtom = atom({
  key: 'todosAtom', // unique ID ( với mỗi atom )
  default: [], // giá trị mặc định
});

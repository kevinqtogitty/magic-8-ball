import create from 'zustand';

interface Props {
  clicked: boolean;
  setClicked: (value: boolean) => void;
}

const useClicked = create<Props>((set) => ({
  clicked: false,
  setClicked: (value) => set({ clicked: value })
}));

export default useClicked;

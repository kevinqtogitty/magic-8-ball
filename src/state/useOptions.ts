import create from 'zustand';

export type OptionObject = {
  optionText: string;
  positionEnter: number[];
  opacity: number;
};

interface Props {
  options: OptionObject[];
  addOption: (input: OptionObject) => void;
  removeOption: (filteredOptions: OptionObject[]) => void;
  clearAllOptions: () => void;
  chosenOption: string;
  setChosenOption: (randomlySelectedChoice: string) => void;
}

const useOptions = create<Props>((set) => ({
  options: [],
  addOption: (input) =>
    set((state) => ({ options: [...state.options, input] })),
  removeOption: (filteredOptions) => set({ options: filteredOptions }),
  clearAllOptions: () => set({ options: [], chosenOption: 'Hello' }),

  chosenOption: 'Hello',
  setChosenOption: (randomlySelectedChoice) =>
    set({ chosenOption: randomlySelectedChoice })
}));

export default useOptions;

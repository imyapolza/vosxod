export const onActiveButton = (
  index: number,
  activeButtons: Array<number>,
  setActiveButtons: (
    arg: Array<number> | ((prevState: Array<number>) => Array<number>)
  ) => void
) => {
  if (activeButtons.includes(index)) {
    const deletable = index;

    const newActiveButtons = activeButtons.filter((name) => name !== deletable);

    setActiveButtons(newActiveButtons);
  } else {
    setActiveButtons((prev) => [...prev, index]);
  }
};

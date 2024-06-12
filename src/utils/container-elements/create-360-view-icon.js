export const create360ViewIcon = () => {

  const view360Icon = document.createElement('div');
  view360Icon.className = 'mde-threehundredsixty__loader ajaxloader';
  const inner = document.createElement('div');
  inner.className = 'arc';
  view360Icon.appendChild(inner);

  return view360Icon;
};

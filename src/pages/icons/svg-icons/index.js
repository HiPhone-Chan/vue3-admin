const svgIconModules = import.meta.globEager('/src/icons/svg/**.svg');
const iconNames = [];

Object.keys(svgIconModules).forEach((key) => {
  iconNames.push(key.replace('/src/icons/svg/', '').replace('.svg', ''));
});

export default iconNames;

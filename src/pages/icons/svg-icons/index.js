const svgIconModules = import.meta.glob('/src/icons/svg/**.svg', { eager: true })
const iconNames = []

Object.keys(svgIconModules).forEach((key) => {
  iconNames.push(key.replace('/src/icons/svg/', '').replace('.svg', ''))
})

export default iconNames

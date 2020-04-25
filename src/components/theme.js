const sm = 768
const lg = 1500
const xl = 1900
const breakpoints = [sm, lg, xl]

export const theme = {
  pageMax: 1900,
  pagePaddingX: [10, 30, 120],
  imgRowGap: [0, 30, 75],
  imgColGap: [0, 30, 75],
  imgBottomGap: [30, 0],
  breakpoints: breakpoints.map((bp) => `${bp}px`)
}

export const colors = {
  black: '#000000',
  white: '#ffffff',
  pageBg: '#f2f2f2',
  activeTab: '#4b4b4b',
  tab: '#000000',
  hoverTab: '#333333'
}

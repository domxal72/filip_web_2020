const sm = 768
const lg = 1920

const bp = [sm, lg]

export const theme = {
  bg: 'teal',
  pageMax: 1920,
  // pageMax: 1000,
  imgRowGap: [0, 75],
  imgColGap: [0, 75],
  imgBottomGap: [30, 0],
  breakpoints: bp.map((b) => `${b}px`)
}

export const colors = {
  black: '#000000',
  white: '#ffffff',
  pageBg: '#f2f2f2',
  activeTab: '#000000',
  tab: '#4b4b4b',
  hoverTab: '#333333'
}

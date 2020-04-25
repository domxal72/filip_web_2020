import * as React from "react"

import Svg from '../components/ui/svg';
import { colors } from '../components/theme';

function LinkChevron({ width = 25, height = 13, fill = colors.activeTab, ...props }) {
  return (
    <Svg viewBox="0 0 25 13" width={width} height={height} {...props}>
      <path d="M13 13L25 0H0z" fill={fill} />
    </Svg>
  )
}

export default LinkChevron

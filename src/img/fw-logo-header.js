import * as React from "react"

import Svg from '../components/ui/svg';
import { colors } from '../components/theme';

function FwLogoHeader({ width = 71, height = 40, fill = colors.white, ...props }) {
	return (
		<Svg viewBox="0 0 71 40" width={width} height={height} {...props}>
			<path fill={fill} d="M36.3 0L23.9 26.6c2 4.2 3.9 8.7 5.6 13.4L48.2 0H36.3zM58.8 0L46.3 26.6c2 4.2 3.9 8.7 5.6 13.4L70.6 0H58.8zM16.7 14V0H4.5c4.3 3.7 8.4 8.4 12.2 14zM.4 21c3.7 1.6 6.8 4.3 8.9 7.7V13.3C7.2 16.6 4 19.3.4 21z" />
		</Svg>
	)
}

export default FwLogoHeader

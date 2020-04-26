import * as React from "react"

import Svg from '../components/ui/svg';
import { colors } from '../components/theme';

function FwLogoMain({
	width = '100%',
	height = '100%',
	maxWidth = '618',
	fill = colors.black,
	...props
}) {
	return (
		<Svg viewBox="0 0 618 352" width={width} height={height} maxWidth={maxWidth} {...props}>
			<path d="M316.4.1L207.3 234.2c18 36.8 34.6 76.2 49.6 117.7L420.9.1H316.4zM513.5.1L404.4 234.2c18 36.8 34.6 76.2 49.6 117.7L618 .1H513.5zM143.4 123.1V.1H36.2c38 32.6 74.1 74.1 107.2 123zM0 184.4c32.4 14.5 59.7 38.2 78.6 67.8V116.6C59.7 146.2 32.4 169.9 0 184.4z" />
		</Svg>
	)
}

export default FwLogoMain

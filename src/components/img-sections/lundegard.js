import React from 'react'

import SectionContainer from './section-container'
import { Flex, FlexImgRow, FlexImgCol, FlexSecCol } from '../ui/flex'
import { Img } from '../ui/img'

import { img } from '../img-list'
import { theme } from '../theme'

const { imgColGap } = theme

const { lundegard: {
  i01_A,
  i02,
  i03,
  i04,
  i05,
  i06,
  i07,
  i08,
  i09,
} } = img

export default function Lundegard() {
  return (
    <SectionContainer>
      <FlexSecCol>
        <FlexImgRow>
          <FlexImgCol>
            <Img src={i01_A} />
          </FlexImgCol>
        </FlexImgRow>
        <FlexImgRow>
          <FlexImgCol mr={imgColGap}>
            <Img src={i02} />
          </FlexImgCol>
          <FlexImgCol mr={imgColGap}>
            <Img src={i03} />
          </FlexImgCol>
          <FlexImgCol>
            <Img src={i04} />
          </FlexImgCol>
        </FlexImgRow>
        <FlexImgRow>
          <FlexImgCol mr={imgColGap}>
            <Img src={i05} />
          </FlexImgCol>
          <FlexImgCol>
            <Img src={i06} />
          </FlexImgCol>
        </FlexImgRow>
        <FlexImgRow>
          <FlexImgCol>
            <Img src={i07} />
          </FlexImgCol>
        </FlexImgRow>
        <FlexImgRow>
          <FlexImgCol mr={imgColGap}>
            <Img src={i08} />
          </FlexImgCol>
          <FlexImgCol>
            <Img src={i09} />
          </FlexImgCol>
        </FlexImgRow>
      </FlexSecCol>
    </SectionContainer>
  )
}

import React from 'react'

import SectionContainer from './section-container'
import { Flex, FlexImgRow, FlexImgCol, FlexSecCol } from '../ui/flex'
import { Img } from '../ui/img'

import { img } from '../img-list'
import { theme } from '../theme'

const { imgColGap } = theme

const { revma: {
  i18_A,
  i19,
  i20,
  i21,
  i22,
  i23,
} } = img

export default function Revma() {
  return (
    <SectionContainer>
      <FlexSecCol>
        <FlexImgRow>
          <FlexImgCol>
            <Img src={i18_A} />
          </FlexImgCol>
        </FlexImgRow>
        <FlexImgRow>
          <FlexImgCol mr={imgColGap}>
            <Img src={i19} />
          </FlexImgCol>
          <FlexImgCol>
            <Img src={i20} />
          </FlexImgCol>
        </FlexImgRow>
        <FlexImgRow>
          <FlexImgCol mr={imgColGap}>
            <Img src={i21} />
          </FlexImgCol>
          <FlexImgCol mr={imgColGap}>
            <Img src={i22} />
          </FlexImgCol>
          <FlexImgCol>
            <Img src={i23} />
          </FlexImgCol>
        </FlexImgRow>
      </FlexSecCol>
    </SectionContainer>
  )
}
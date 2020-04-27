import React from 'react'

import SectionContainer from './section-container'
import { Flex, FlexImgRow, FlexImgCol, FlexSecCol, FlexImgRowMain } from '../ui/flex'
import { Img } from '../ui/img'

import { img } from '../img-list'
import { theme } from '../theme'

const { imgColGap } = theme

const { ecosond: {
  i10_A,
  i11,
  i12,
  i13,
  i14,
  i15,
  i16,
  i17,
} } = img

export default function Ecosond() {
  return (
    <SectionContainer>
      <FlexSecCol>
        <FlexImgRowMain>
          <FlexImgCol>
            <Img src={i10_A} />
          </FlexImgCol>
        </FlexImgRowMain>
        <FlexImgRow>
          <FlexImgCol mr={imgColGap}>
            <Img src={i11} />
          </FlexImgCol>
          <FlexImgCol mr={imgColGap}>
            <Img src={i12} />
          </FlexImgCol>
          <FlexImgCol mr={imgColGap}>
            <Img src={i13} />
          </FlexImgCol>
          <FlexImgCol>
            <Img src={i14} />
          </FlexImgCol>
        </FlexImgRow>
        <FlexImgRow>
          <FlexImgCol mr={imgColGap}>
            <Img src={i15} />
          </FlexImgCol>
          <FlexImgCol mr={imgColGap}>
            <Img src={i16} />
          </FlexImgCol>
          <FlexImgCol>
            <Img src={i17} />
          </FlexImgCol>
        </FlexImgRow>
      </FlexSecCol>
    </SectionContainer>
  )
}
import React from 'react'

import SectionContainer from './section-container'
import { Flex, FlexImgRow, FlexImgCol, FlexSecCol } from '../ui/flex'
import { Img } from '../ui/img'

import { img } from '../img-list'
import { theme } from '../theme'

const { imgColGap } = theme

const { book: {
  i37_A,
  i38,
  i39,
  i40,
  i41,
  i42,
  i43,
} } = img

export default function Book() {
  return (
    <SectionContainer>
      <FlexSecCol>
        <FlexImgRow>
          <FlexImgCol>
            <Img src={i37_A} />
          </FlexImgCol>
        </FlexImgRow>
        <FlexImgRow>
          <FlexImgCol mr={imgColGap}>
            <Img src={i38} />
          </FlexImgCol>
          <FlexImgCol>
            <Img src={i39} />
          </FlexImgCol>
        </FlexImgRow>
        <FlexImgRow>
          <FlexImgCol mr={imgColGap}>
            <Img src={i40} />
          </FlexImgCol>
          <FlexImgCol>
            <Img src={i41} />
          </FlexImgCol>
        </FlexImgRow>
        <FlexImgRow>
          <FlexImgCol mr={imgColGap}>
            <Img src={i42} />
          </FlexImgCol>
          <FlexImgCol>
            <Img src={i43} />
          </FlexImgCol>
        </FlexImgRow>
      </FlexSecCol>
    </SectionContainer>
  )
}
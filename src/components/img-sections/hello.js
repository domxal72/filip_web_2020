import React from 'react'

import SectionContainer from './section-container'
import { Flex, FlexImgRow, FlexImgCol, FlexSecCol, FlexImgRowMain } from '../ui/flex'
import { Img } from '../ui/img'

import { img } from '../img-list'
import { theme } from '../theme'

const { imgColGap } = theme

const { hello: {
  i31_A,
  i32,
  i33,
  i34,
  i35,
  i36,
} } = img

export default function Hello() {
  return (
    <SectionContainer>
      <FlexSecCol>
        <FlexImgRowMain>
          <FlexImgCol>
            <Img src={i31_A} />
          </FlexImgCol>
        </FlexImgRowMain>
        <FlexImgRow>
          <FlexImgCol mr={imgColGap}>
            <Img src={i32} />
          </FlexImgCol>
          <FlexImgCol>
            <Img src={i33} />
          </FlexImgCol>
        </FlexImgRow>
        <FlexImgRow>
          <FlexImgCol mr={imgColGap}>
            <Img src={i34} />
          </FlexImgCol>
          <FlexImgCol mr={imgColGap}>
            <Img src={i35} />
          </FlexImgCol>
          <FlexImgCol>
            <Img src={i36} />
          </FlexImgCol>
        </FlexImgRow>
      </FlexSecCol>
    </SectionContainer>
  )
}
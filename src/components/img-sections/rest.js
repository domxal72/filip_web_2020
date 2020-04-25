import React from 'react'

import SectionContainer from './section-container'
import { Flex, FlexImgRow, FlexImgCol, FlexSecCol } from '../ui/flex'
import { Img } from '../ui/img'

import { img } from '../img-list'
import { theme } from '../theme'

const { imgColGap } = theme

const { rest: {
  i44,
  i45,
  i46,
  i47,
  i48,
  i49,
  i50,
  i51,
  i52,
  i53,
} } = img

export default function Book() {
  return (
    <SectionContainer>
      <FlexSecCol>
        <FlexImgRow>
          <FlexImgCol mr={imgColGap}>
            <Img src={i44} />
          </FlexImgCol>
          <FlexImgCol mr={imgColGap}>
            <Img src={i45} />
          </FlexImgCol>
          <FlexImgCol>
            <Img src={i46} />
          </FlexImgCol>
        </FlexImgRow>
        <FlexImgRow>
          <FlexImgCol mr={imgColGap}>
            <Img src={i47} />
          </FlexImgCol>
          <FlexImgCol mr={imgColGap}>
            <Img src={i48} />
          </FlexImgCol>
          <FlexImgCol>
            <Img src={i49} />
          </FlexImgCol>
        </FlexImgRow>
        <FlexImgRow>
          <FlexImgCol mr={imgColGap}>
            <Img src={i50} />
          </FlexImgCol>
          <FlexImgCol>
            <Img src={i51} />
          </FlexImgCol>
        </FlexImgRow>
        <FlexImgRow>
          <FlexImgCol mr={imgColGap}>
            <Img src={i52} />
          </FlexImgCol>
          <FlexImgCol>
            <Img src={i53} />
          </FlexImgCol>
        </FlexImgRow>
      </FlexSecCol>
    </SectionContainer>
  )
}
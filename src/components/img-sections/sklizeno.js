import React from 'react'

import SectionContainer from './section-container'
import { Flex, FlexImgRow, FlexImgCol, FlexSecCol } from '../ui/flex'
import { Img } from '../ui/img'

import { img } from '../img-list'
import { theme } from '../theme'

const { imgColGap, imgRowGap } = theme

const { sklizeno: {
  i24_A,
  i25,
  i26,
  i27,
  i28,
  i29,
  i30,
} } = img

export default function Sklizeno() {
  return (
    <SectionContainer>
      <FlexSecCol>
        <FlexImgRow>
          <FlexImgCol>
            <Img src={i24_A} />
          </FlexImgCol>
        </FlexImgRow>
        <FlexImgRow>
          <FlexImgCol mr={imgColGap}>
            <Img src={i25} />
          </FlexImgCol>
          <FlexImgCol>
            <Img src={i26} />
          </FlexImgCol>
        </FlexImgRow>
        <FlexImgRow>
          <FlexImgCol>
            <Img src={i27} />
          </FlexImgCol>
        </FlexImgRow>
        <FlexImgRow>
          <FlexImgCol mr={imgColGap}>
            <Flex flexDirection='column'>
              <FlexImgCol mb={imgRowGap}>
                <Img src={i28} />
              </FlexImgCol>
              <FlexImgCol>
                <Img src={i29} />
              </FlexImgCol>
            </Flex>
          </FlexImgCol>
          <FlexImgCol>
            <Img src={i30} />
          </FlexImgCol>
        </FlexImgRow>
      </FlexSecCol>
    </SectionContainer>
  )
}
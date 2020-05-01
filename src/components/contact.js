import React, { useContext, useRef } from 'react'
import styled from 'styled-components'

import { Flex } from './ui/flex'
import { Text } from './ui/text'
import { ALink } from './ui/a-link'
import { Button } from './ui/button'
import { Img } from './ui/img'
import { colors } from './theme'

import { AppContext } from './app-context'

import FwLogoMain from '../img/fw-logo-main'
import xicht from '../img/xicht.jpg'
import web2018 from '../img/link_01.jpg'
import web2011 from '../img/link_02.jpg'
import web2004 from '../img/link_03.jpg'
import decoded from '../img/link_04.jpg'

import cv from '../files/filip-walter-cv.pdf'
// import webLink from '../web-2018/index.html'

const WebCol = styled(Flex).attrs(() => ({
  flexDirection: 'column',
  alignItems: 'center',
  mx: 15,
  mb: [25],
}))``

export default function Contact() {

  const { appState: { visibleContact }, showDetail } = useContext(AppContext)

  return (
    <Flex
      display={visibleContact ? 'flex' : 'none'}
      alignItems={['center', 'flex-start']}
      flexDirection={['column', 'row']}
    >
      <Flex
        // flex={1}
        mb={[40]}
        pl={[20]}
        pr={[20, 40, 100]}
        width={['100%', '50%']}
        maxWidth={[450, 'none']}
        alignItems={['center', 'flex-start']}
        flexDirection='column'
        minHeight={0}
      >
        <Img src={xicht} />
      </Flex>
      <Flex
        // flex={1}
        width={['100%', '50%']} justifyContent='center' pt={50} flexDirection='column'>
        <Flex
          flexDirection='column'
          maxWidth='100%'
          alignItems={['center', 'flex-start']}
        >
          <Flex width='100%' justifyContent='center'>
            <FwLogoMain mb={60} alignItems='flex-start' maxWidth={[450, 618]} />
          </Flex>
          <Text mb={[30]} fontSize={[16]} fontWeight={[600]}>
            Filip Walter
          </Text>
          <Flex mb={[30]} flexDirection='column'>
            <Flex mb={[15]}>
              <Text width={[65]} fontSize={[16]}>
                E-mail:
              </Text>
              <Text fontSize={[16]}>
                <ALink href="mailto:filip@filipwalter.cz">filip@filipwalter.cz</ALink>
              </Text>
            </Flex>
            <Flex mb={[15]}>
              <Text width={[65]} fontSize={[16]}>
                Mobile:
              </Text>
              <Text fontSize={[16]}>
                <ALink href="tel:+420737060620">737 060 620</ALink>
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <ALink href={cv} target='_blank'>
              <Button mb={[80]}>
                <Text fontSize={[16]} cursor='pointer'>Download CV</Text>
              </Button>
            </ALink>
          </Flex>
          <Flex
            flexDirection={['row']}
            flexWrap={['wrap']}
            width='100%'
            alignItems={['flex-start']}
            justifyContent={['center', 'flex-start']}
            ml={[0, -15]}
          >
            <WebCol>
              <ALink href='' target='_blank'>
                <Img src={web2018} cursor='pointer' mb={10} />
              </ALink>
              <Text lineHeight={1.2}>2018</Text>
            </WebCol>
            <WebCol>
              <Img src={web2011} data-detail='0' onClick={showDetail} cursor='pointer' mb={10} />
              <Text lineHeight={1.2}>2011</Text>
              <Text color={colors.textSmall}>(Flash Website)</Text>
            </WebCol>
            <WebCol>
              <Img src={web2004} data-detail='1' onClick={showDetail} cursor='pointer' mb={10} />
              <Text lineHeight={1.2}>2004</Text>
              <Text color={colors.textSmall}>(Flash Website)</Text>
            </WebCol>
            <WebCol>
              <Img src={decoded} data-detail='2' onClick={showDetail} cursor='pointer' mb={10} />
              <Text lineHeight={1.2}>Decoded</Text>
              <Text color={colors.textSmall}>(Flash Website)</Text>
            </WebCol>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

import React from 'react'

import { Flex } from './ui/flex'
import { Text } from './ui/text'
import { ALink } from './ui/a-link'
import { Button } from './ui/button'
import { Img } from './ui/img'
import { colors } from './theme'

import FwLogoMain from '../img/fw-logo-main'

import xicht from '../img/xicht.jpg'
import web2018 from '../img/link_01.jpg'
import web2011 from '../img/link_02.jpg'
import web2004 from '../img/link_03.jpg'
import decoded from '../img/link_04.jpg'

function Contact({ state }) {
  return (
    <Flex display={state.visibleContact ? 'flex' : 'none'} bg={colors.white}>
      <Flex flex={1}>
        <Img src={xicht} />
      </Flex>
      <Flex flex={1}>
        <Flex flexDirection='column'>
          <FwLogoMain mb={60} />
          <Text>
            Filip Walter
          </Text>
          <Text>
            E-mail: <ALink href="mailto:filip@filipwalter.cz">filip@filipwalter.cz</ALink>
          </Text>
          <Text>
            Mobile: <ALink href="tel:+420737060620">737 060 620</ALink>
          </Text>
          <Flex>
            <Button>
              <Text>Download CV</Text>
            </Button>
          </Flex>
          <Flex>
            <Flex mr={40}>
              <Img src={web2018} />
            </Flex>
            <Flex mr={40}>
              <Img src={web2011} />
            </Flex>
            <Flex mr={40}>
              <Img src={web2004} />
            </Flex>
            <Flex>
              <Img src={decoded} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Contact

import React, { useContext } from 'react';
import styled from 'styled-components';

import { Flex } from './ui/flex'
import { Text } from './ui/text'

import { colors } from './theme'

import { AppContext } from './app-context'

import FwLogoHeader from '../img/fw-logo-header'
import LinkChevron from '../img/link-chevron'

const FlexNav = styled(Flex).attrs(() => ({
  flex: 1,
  minHeight: 60,
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
}))`
  :hover {
    background: ${ ({ active }) => active ? colors.activeTab : colors.hoverTab}
  }
`

export default function Header() {

  const { appState: { visibleContact, visiblePortfolio }, routeContact, routePortfolio } = useContext(AppContext)

  return (
    <Flex position='relative' zIndex={10}>
      <Flex bg={colors.black} position='fixed' width='100%' top={0} left={0} right={0}>
        <FlexNav
          pl={[10, 25, 25]}
          bg={visiblePortfolio ? colors.activeTab : colors.tab}
          active={visiblePortfolio}
          onClick={routePortfolio}
        >
          <Flex alignItems='center'>
            <Flex>
              <FwLogoHeader cursor='pointer' />
            </Flex>
            <Text cursor='pointer' color='white' ml={20}>FILIP WALTER</Text>
          </Flex>
          <Text cursor='pointer' color='white' mx={30}>PORTFOLIO</Text>
          <LinkChevron position='absolute' right={50} bottom={-12} display={visiblePortfolio ? 'block' : 'none'} />
        </FlexNav>
        <FlexNav
          bg={visibleContact ? colors.activeTab : colors.tab}
          active={visibleContact}
          onClick={routeContact}
        >
          <Text cursor='pointer' color='white' mx={30}>KONTAKT</Text>
          <LinkChevron position='absolute' left={50} bottom={-12} display={visibleContact ? 'block' : 'none'} />
        </FlexNav>
      </Flex>
    </Flex>
  );
}


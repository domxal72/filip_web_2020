import React, { useContext } from 'react';
import styled from 'styled-components';

import { Flex } from './ui/flex'
import { Text } from './ui/text'

import { colors, theme } from './theme'

import { AppContext } from './app-context'

import FwLogoHeader from '../img/fw-logo-header'
import LinkChevron from '../img/link-chevron'

const FlexNav = styled(Flex).attrs(({ justifyContent = 'space-between' }) => ({
  width: '50%',
  minHeight: 60,
  justifyContent: justifyContent,
  alignItems: 'center',
  cursor: 'pointer',
}))`
  :hover {
    background: ${ ({ active }) => active ? colors.activeTab : colors.hoverTab}
  }
`

const FlexNavFormat = styled(Flex).attrs(() => ({
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  height: '100%',
  maxWidth: theme.pageMax / 2,
  cursor: 'pointer',
}))``

export default function Header() {

  const { appState: { visibleContact, visiblePortfolio }, routeContact, routePortfolio } = useContext(AppContext)

  return (
    <Flex position='relative' zIndex={10}>
      <Flex bg={colors.black} position='fixed' width='100%' top={0} left={0} right={0}>
        <FlexNav
          pl={[10, 25, 25]}
          justifyContent='flex-end'
          bg={visiblePortfolio ? colors.activeTab : colors.tab}
          active={visiblePortfolio}
          onClick={routePortfolio}
        >
          <FlexNavFormat>
            <Flex alignItems='center'>
              <Flex>
                <FwLogoHeader cursor='pointer' />
              </Flex>
              <Text cursor='pointer' color='white' ml={20} display={['none', 'inline-block']}>FILIP WALTER</Text>
            </Flex>
            <Text cursor='pointer' color='white' mx={[15, 30]}>PORTFOLIO</Text>
            <LinkChevron
              position='absolute'
              right={[35, 50]}
              bottom={-12}
              display={visiblePortfolio ? 'block' : 'none'}
            />
          </FlexNavFormat>
        </FlexNav>
        <FlexNav
          bg={visibleContact ? colors.activeTab : colors.tab}
          active={visibleContact}
          onClick={routeContact}
        >
          <FlexNavFormat>
            <Text cursor='pointer' color='white' mx={[15, 30]}>KONTAKT</Text>
            <LinkChevron
              position='absolute'
              left={[35, 50]}
              bottom={-12}
              display={visibleContact ? 'block' : 'none'}
            />
          </FlexNavFormat>
        </FlexNav>
      </Flex>
    </Flex>
  );
}


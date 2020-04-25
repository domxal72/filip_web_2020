import React from 'react';

import { Flex } from './ui/flex'
import { Text } from './ui/text'
import { StyledLink } from './ui/styled-link'

import FwLogoHeader from '../img/fw-logo-header'
import LinkChevron from '../img/link-chevron'

import { colors } from './theme'

const Header = ({ state, setState }) => {

  const routeContact = () => {
    setState({
      ...state,
      visibleContact: true,
      visiblePortfolio: false,
    })
  }

  const routePortfolio = () => {
    setState({
      ...state,
      visibleContact: false,
      visiblePortfolio: true,
    })
  }

  return (
    <Flex position='relative' zIndex={10}>
      <Flex bg={colors.black} position='fixed' width='100%'>
        {/* <StyledLink */}
        <Flex
          position='relative'
          pl={25}
          flex={1}
          justifyContent='space-between'
          alignItems='center'
          minHeight={60}
          to="/portfolio"
          // activeStyle={{ background: colors.activeTab }}
          bg={state.visiblePortfolio ? colors.activeTab : colors.tab}
          onClick={routePortfolio}
        >
          <Flex alignItems='center'>
            <Flex>
              <FwLogoHeader />
            </Flex>
            <Text color='white' ml={20}>FILIP WALTER</Text>
          </Flex>
          <Text color='white' mx={30}>PORTFOLIO</Text>
          <LinkChevron position='absolute' right={50} bottom={-10} display={state.visiblePortfolio ? 'block' : 'none'} />
        </Flex>
        {/* <StyledLink */}
        <Flex
          position='relative'
          flex={1}
          justifyContent='space-between'
          alignItems='center'
          minHeight={60}
          to="/contact"
          // activeStyle={{ background: colors.activeTab }}
          bg={state.visibleContact ? colors.activeTab : colors.tab}
          onClick={routeContact}
        >
          <Text color='white' mx={30}>KONTAKT</Text>
          <LinkChevron position='absolute' left={50} bottom={-10} display={state.visibleContact ? 'block' : 'none'} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Header;

import React, { useContext } from 'react'
import Modal from 'react-modal';

import { Flex } from './ui/flex';
import { Img } from './ui/img';

import { GlobalStyle } from './global-styles';
import Header from './header';
import Main from './main';

import { AppContext } from './app-context'

function Content() {

  const { appState: { isModalOpen, bgGray, modalArr, modalDetail }, closeModal } = useContext(AppContext)

  const modalStyles = {
    overlay: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      zIndex: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
    content: {
      position: 'relative',
      margin: '20px',
      padding: 0,
      border: 'none',
      maxWidth: '100%',
      maxHeight: '100%',
      width: 'auto',
      display: 'flex',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }
  }

  return (
    <>
      <GlobalStyle bgGray={bgGray} />
      <Header />
      <Main />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <Flex onClick={closeModal} borderRadius={5} >
          <Img src={modalArr[modalDetail]} />
        </Flex>
      </Modal>
    </>
  )
}

export default Content

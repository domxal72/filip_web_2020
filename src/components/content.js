import React, { useContext } from 'react'
import Modal from 'react-modal';

import { Img } from './ui/img';

import { GlobalStyle } from './global-styles';
import Header from './header';
import Main from './main';

import { AppContext } from './app-context'

function Content() {

  const { appState: { isModalOpen, bgGray, modalArr, modalDetail }, closeModal } = useContext(AppContext)

  const modalStyles = {
    overlay: {
      zIndex: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
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
        <div onClick={closeModal}>
          <Img src={modalArr[modalDetail]} />
        </div>
      </Modal>
    </>
  )
}

export default Content

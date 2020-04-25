import React, { createContext, useState } from 'react'

import web2011 from '../img/web2011.jpg';
import web2004 from '../img/web2004.jpg';
import decoded from '../img/decoded.jpg';

export const AppContext = createContext();



export default function AppProvider(props) {

  const initialState = {
    bgGray: true,
    visibleContact: false,
    visiblePortfolio: true,
    isModalOpen: false,
    modalArr: [web2011, web2004, decoded],
    modalDetail: 0,
  }

  const [appState, setAppState] = useState(initialState)

  const routePortfolio = () => {
    setAppState({
      ...appState,
      visiblePortfolio: true,
      visibleContact: false,
      bgGray: true,
    })
  }

  const routeContact = () => {
    setAppState({
      ...appState,
      visibleContact: true,
      visiblePortfolio: false,
      bgGray: false,
    })
  }

  const openModal = () => {
    setAppState({ ...appState, isModalOpen: true })
  }

  const showDetail = (e) => {
    setAppState({ ...appState, isModalOpen: true, modalDetail: e.target.dataset.detail })
  }

  const closeModal = () => {
    setAppState({ ...appState, isModalOpen: false })
  }

  return (
    <AppContext.Provider
      value={
        {
          appState,
          setAppState,
          routePortfolio,
          routeContact,
          openModal,
          closeModal,
          showDetail,
        }
      }
    >
      {props.children}
    </AppContext.Provider>
  )
}
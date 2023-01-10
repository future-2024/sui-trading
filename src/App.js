import React, { useEffect, useContext } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import "@fontsource/ibm-plex-sans";
import './App.css';
import './css/tailwind.output.css';
import './font/font.css';
import './css/fontawesome-free-6.0.0-beta3-web/css/fontawesome.css';
import 'react-notifications/lib/notifications.css';

import Home from './pages/Home';
import Referral from './pages/Referral';
import Earn from './pages/Earn';
import Trade from './pages/Trade';
import Market from './pages/Market';
import Liquidity from './pages/Liquidity';

import Header from './components/Header';

import { StoreContext } from './store';
import { useSuiWallet } from './context/ConnectWallet/useSuiWallet';

import Suiet from './img/quotation/suiet.png';
import Martian from './img/quotation/martian.png';
import SUI from './img/quotation/SUI.png';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '300px',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#342D55',
    padding: '10px 20px',
    borderRadius: '9px',
    border: 'none'
  },
  overlay: {
    backgroundColor: 'rgb(0 0 0 / 86%)'
  }
};

function App() {
  const { account, connected, connecting, connect, disconnect } = useSuiWallet();
  const location = useLocation();
  const [modalIsOpen, setModalIsOpen] = React.useState(false);


  const closeModal = () => {
    setModalIsOpen(false);
  }
  const handleConnect = async (value) => {
    connect(value);
    closeModal();
  }
  const storeValue = {
    modalIsOpen, setModalIsOpen, account
  }

  useEffect(() => {
    localStorage.setItem('reward', 0);
  }, [location]);

  return (
    <StoreContext.Provider value= {storeValue}>
      <React.Fragment>  
        <Header />
        <Switch>       
          <Redirect from="/" exact to="/home" />
          <Route path="/home" exact component={Home} />
          <Route path="/referral" exact component={Referral} />
          <Route path="/earn" exact component={Earn} />
          <Route path="/trade" exact component={Trade} />
          <Route path="/market" exact component={Market} />
          <Route path="/liquidity" exact component={Liquidity} />
        </Switch>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <div className='d-flex justify-content-between'>
              <h5 className='text-white my-auto'>Connect Wallet</h5>
              <h4 className='text-white cursor-pointer' onClick={() => setModalIsOpen(false)}>x</h4>
            </div>
            <div className='py-3'>
              <p className='text-white'>
                To continue working with the site, you need to connect a wallet and allow the site access to your account.
              </p>
            </div>
            <div>
              <div className='d-flex wallet-item' onClick={() => { handleConnect('suietWallet') }}>                  
                <img src={Suiet} width={35} />
                  <div className='ml-3 align-self-center'>
                      <h6 className='text-white text-left'>Suiet</h6>
                  </div>
              </div>
              <div className='d-flex wallet-item' onClick={() => { handleConnect('martianSuiWallet') }}>
                  <img src={Martian} width={35} />
                  <div className='ml-3 align-self-center'>
                      <h6 className='text-white text-left'>Martian</h6>
                  </div>
              </div>
              <div className='d-flex wallet-item' onClick={() => { handleConnect('suiWallet') }}>
                  <img src={SUI} width={35} />
                  <div className='ml-3 align-self-center'>
                      <h6 className='text-white text-left'>SUI wallet</h6>
                  </div>
              </div>
            </div>
          </div>
          <div></div>
        </Modal>
      </React.Fragment>
    </StoreContext.Provider>
  );
}

export default App;

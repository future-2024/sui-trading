
import React, { useState, useEffect, useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {useHistory, useLocation} from 'react-router-dom';

import './index.css';
import Logo from '../../img/quotation/brand-logo.png';
import WalletIcon from '../../img/quotation/wallet.png';

import { useMediaQuery } from 'react-responsive';
import { FaList } from 'react-icons/fa';
import { StoreContext } from '../../store';
import { useSuiWallet } from '../../context/ConnectWallet/useSuiWallet';
import { ExportAddress } from '../../control/main';

const Header = () => {
    const history = useHistory();    
    const location = useLocation();
    const global = useContext(StoreContext);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const [menuItem, setMenuItem] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    const [isEarnMenu, setIsEarnMenu] = useState(false);
    const { account, connected, connecting, connect, disconnect } = useSuiWallet();


    const showModal = () => {
        setIsMenu(true);
    }
    const goLink = (text) => {
        history.push("/" + text);
        setMenuItem(text);
        setIsMenu(false);
        setIsEarnMenu(false);
    }
    const getItem = () => {        
        const path = location.pathname.split("/")[1];
        setMenuItem(path);
    }
    const disconnectWallet = () => {
        disconnect();
    }
    const connectWallet = () => {
        global.setModalIsOpen(true);
    }
    const openEarnMenu = () => {
        setIsEarnMenu(true);
    }
    useEffect(() => {
        getItem();
    }, [menuItem])
    return (
        <div className='nav py-2'>
            <div className='container'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <div className='m-auto logo cursor-pointer d-flex' onClick={() => goLink('home')}><img src={Logo} className='brand-logo align-self-center mt-1' width={35} /><h3 className='text-white ml-2 mt-1 font-bold mr-3 logo-text'>TRADEIFY</h3></div>
                        {!isTabletOrMobile && (
                            <div className='d-flex align-self-center mt-1'>
                                <div className='px-4' onClick={() => goLink('home')}><p className={`cursor-pointer ${menuItem !== 'home' ? 'text-gray' : 'text-white'}`}>Dashbaord</p></div>
                                <div className='px-4' onClick={() => goLink('trade')}><p className={`cursor-pointer ${menuItem !== 'trade' ? 'text-gray' : 'text-white'}`}>Trade</p></div>
                                <div className='px-4' onClick={() => goLink('liquidity')}><p className={`cursor-pointer ${menuItem !== 'liquidity' ? 'text-gray' : 'text-white'}`}>Liquidity</p></div>
                                
                                <div className='px-4 position-relative' onMouseEnter={openEarnMenu}>
                                    <p className={`cursor-pointer ${menuItem !== 'earn' ? 'text-gray' : 'text-white'}`}>Earn</p>                                    
                                    {isEarnMenu && (
                                        <div className='stake-menu'>
                                            <div className='py-2' onClick={() => goLink('earn')}>Stake TLP</div>
                                            <div className='py-2' onClick={() => goLink('earn/lockStake')}>Lock Stake</div>
                                        </div>
                                    )}
                                </div>

                                <div className='px-4' onClick={() => goLink('referral')}><p className={`cursor-pointer ${menuItem !== 'referral' ? 'text-gray' : 'text-white'}`}>Referral</p></div>
                            </div>
                        )}
                        {isTabletOrMobile && (
                            <div className='mt-2'>
                                <div className='d-flex mt-2'>
                                    <FaList className='text-white fs-24' onClick={showModal}/>
                                </div>
                                {isMenu && (
                                    <div className='nav-menu p-4'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='logo d-flex py-2'><img src={Logo} /></div>
                                            <div className='text-white' onClick={() => setIsMenu(false)}><h3 className='text-white'>x</h3></div>
                                        </div>
                                        <hr className='text-white' />
                                        <div className={`pt-1 ${menuItem !== 'home' ? '' : 'menu-active'}`} onClick={() => goLink('home')}><h4 className='text-white'>Dashboard</h4></div>
                                        <div className={`${menuItem !== 'trade' ? '' : 'menu-active'}`} onClick={() => goLink('trade')}><h4 className='text-white'>Trade</h4></div>
                                        <div className={`${menuItem !== 'liquidity' ? '' : 'menu-active'}`} onClick={() => goLink('liquidity')}><h4 className='text-white'>Liquidity</h4></div>
                                        <div className={`${menuItem !== 'earn' ? '' : 'menu-active'}`}>
                                            <h4 className='text-white'>Earn</h4>
                                            <div>
                                                <div className='py-2 pl-3 text-gray font-bold' onClick={() => goLink('earn')}>Stake TLP</div>
                                                <div className='py-2 pl-3 text-gray font-bold' onClick={() => goLink('earn/lockStake')}>Lock Stake</div>
                                            </div>
                                        </div>
                                        <div className={`${menuItem !== 'referral' ? '' : 'menu-active'}`} onClick={() => goLink('referral')}><h4 className='text-white'>Referral</h4></div>
                                        {/* <div className={`${menuItem !== 'liquidity' ? '' : 'menu-active'}`} onClick={() => goLink('liquidity')}><h4 className='text-white'>Liquidity</h4></div> */}
                                    </div>
                                )}                                
                            </div>
                        )}
                    </div>  
                    <div>
                        {account == undefined && (
                            <div className='button d-flex mt-2' onClick={connectWallet}><div className='align-self-center'><img src={WalletIcon} className='wallet' /></div><p className='mb-0 ml-1 lh-33 align-self-center'>Connect Wallet</p></div>
                        )}
                        {account != undefined && (
                            <div className='button d-flex mt-2' onClick={disconnectWallet}><div className='align-self-center'><img src={WalletIcon} className='wallet' /></div><p className='mb-0 ml-1 lh-33 align-self-center'>{ExportAddress(account)}</p></div>
                        )}
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Header;


import React, { useState, useEffect } from 'react';
import "@fontsource/space-grotesk";
import $ from 'jquery';
import './index.css';
import Header from '../../components/Header'
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import Countdown from 'react-countdown';
import BigNumber from "bignumber.js";
import moment from 'moment';
import Chart from 'react-apexcharts';

import { FaAccessibleIcon, FaAlignJustify, FaAngleDown, FaClipboard, FaKeyboard, FaKey } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import {useHistory} from 'react-router-dom';

import TokenIcon1 from '../../img/quotation/SUI.png';
import ExchangeLogo from '../../img/quotation/exchange.png';

const Staking = (props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    const [switchMarket, setSwitchMarket] = useState(1);
    return (
        <div className='px-5 d-flex'>
            <div className='w-15 align-self-center'>
                <div><p className='text-pink py-2 font-regular'>Overview</p></div>
                <div className='d-flex'><FaAccessibleIcon className='align-self-center mt-2 text-pink mr-2'/><p className='text-pink py-2 font-bold mt-2'>Overview</p></div>
                <div className='d-flex'><FaAlignJustify className='align-self-center mt-2 text-pink mr-2'/><p className='text-pink py-2 font-bold mt-2'>About MCB</p></div>
                
                <div><p className='text-pink py-2 font-regular mt-5'>Staking</p></div>
                <div className='d-flex'><FaAccessibleIcon className='align-self-center mt-2 text-pink mr-2'/><p className='text-pink py-2 font-bold mt-2'>gTRY</p></div>
                <div className='d-flex'><FaAlignJustify className='align-self-center mt-2 text-pink mr-2 text-white'/><p className='text-pink py-2 font-bold mt-2 text-white'>TLP</p></div>
                
                <div><p className='text-pink py-2 font-regular mt-5'>Vesting</p></div>
                <div className='d-flex'><FaKey className='align-self-center mt-2 text-pink mr-2'/><p className='text-pink py-2 font-bold mt-2'>TRY</p></div>
            </div>
            <div className='w-65 pb-3'>
                <div className='mt-5'><h3 className='text-white'>TLP Staking</h3></div>
                <div className='d-flex justify-content-between'>
                    <p className='text-gray w-75 font-regular'>Buy TLP tokens with your preferred assets. It takes around 18 minutes for the TRY broker to fill your buy orders, then the TLP tokens will be distributed to your wallet directly.</p>
                    <p className='text-gray d-flex'><span className='text-white'>Contract: </span><span className='text-pink mx-1'> 0x3423...32432</span><FaClipboard className='cursor-pointer mt-1'/></p>
                </div>
                <div className='d-flex mt-3'>
                    <div className='market-form w-50 window p-5 mr-2'>
                        <h4 className='mt-4'>Staking steps</h4>  
                        <div className='pt-5 py-4'>              
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'><span className='number-item text-center mr-2'>1</span><h6>Buy TLP</h6></div>
                                <p className='text-pink'>Buy TLP {'>'} </p>
                            </div>     
                            <div className='pt-2'><p className='text-grey-sharp'>Buy TLP tokens with your preferred assets. It takes around 18 minutes for the TRY broker to</p></div>
                        </div>
                        <div className='py-4'>              
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'><span className='number-item text-center mr-2'>2</span><h6>Bridge TLP to Arbitrum</h6></div>
                                <p className='text-pink'>Buy TLP {'>'} </p>
                            </div>     
                            <div className='pt-2'><p className='text-grey-sharp'>Buy TLP tokens with your preferred assets. It takes around 18 minutes for the TRY broker to</p></div>
                        </div>
                        <div className='py-4'>              
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'><span className='number-item text-center mr-2'>3</span><h6>Stake TLP</h6></div>
                                <p className='text-pink'>Buy TLP {'>'} </p>
                            </div>     
                            <div className='pt-2'><p className='text-grey-sharp'>Buy TLP tokens with your preferred assets. It takes around 18 minutes for the TRY broker to</p></div>
                        </div>
                        <div className='earn-button w-100 text-center py-2 border-radius mb-3 mt-5'>Connect Wallet</div>
                    </div>
                    <div className='w-50 pl-2'>
                        <div className='market-form window p-5'>
                            <div className='pt-3'>
                                <div className='d-flex'>
                                    <img src={TokenIcon1} className='mr-3' width={35} /> <h4>TLP</h4>
                                </div>
                                <div className='d-flex justify-content-between pt-3'>
                                    <p className='text-gray py-2 pt-3'>Stake APR</p>
                                    <h4 className='py-2'>36.79%</h4>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray py-2'>Price</p>
                                    <p className='py-2 text-pink-sharp'>$ 0.782</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray py-2'>Total staked</p>
                                    <p className='py-2 text-pink-sharp'>13,912,574 TLP</p>
                                </div>
                            </div>                         
                        </div>
                        <div className='market-form window p-5 mt-3'>
                            <div className='pt-3'>
                                <div className='d-flex'>
                                    <h4>Your TLP</h4>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray py-2'>Multichain Balance</p>
                                    <p className='py-2'>0.00 TLP</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray py-2'>You staked</p>
                                    <p className='py-2'>0.00 TLP</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray py-2'>Claimable rewards</p>
                                    <p className='py-2'>$0.00</p>
                                </div>
                                <div className='d-flex mt-3'>
                                    <div className='earn-button-grey w-100 text-center  py-2 border-radius mb-3 ml-2'>Claim rewards</div>
                                </div>
                            </div>                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Staking;


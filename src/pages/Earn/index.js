import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './index.css';
import Header from '../../components/Header'
import Web3 from 'web3';
import {useHistory} from 'react-router-dom';
import detectEthereumProvider from '@metamask/detect-provider';
import Countdown from 'react-countdown';
import BigNumber from "bignumber.js";
import moment from 'moment';

import TokenNomics from '../../img/quotation/bnb-busd.svg';
import TokenIcon1 from '../../img/quotation/SUI.png';
import TokenIcon2 from '../../img/quotation/eth-bg.png';
import TokenIcon3 from '../../img/quotation/BTC.svg';
import TLP from '../../img/quotation/token-logo.png';
import EtherIcon from '../../img/quotation/pan-bg2.svg';
import ExchangeLogo from '../../img/quotation/exchange.png';

import { FaAngleDown, FaClipboard } from 'react-icons/fa';

import { useMediaQuery } from 'react-responsive';
import Chart from 'react-apexcharts';

const Earn = (props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    const [switchMarket, setSwitchMarket] = useState(1);

    return (
        <div>
            <div className={`d-flex ${isMobile == true ? `px-3`:`px-5`}`}>
                <div className='w-15 align-self-center'>
                </div>
                <div className='w-65 pb-3'>
                    <div className='mt-5'><h3 className='text-white font-bold'>TLP Staking</h3></div>
                    <div className='d-flex justify-content-between'>
                        {/* <p className='text-gray w-75 font-regular'>Buy TLP tokens with your preferred assets. It takes around 18 minutes for the TRY broker to fill your buy orders, then the TLP tokens will be distributed to your wallet directly.</p> */}
                        {/* <p className='text-gray d-flex'><span className='text-white'>Contract: </span><span className='text-pink mx-1'> 0x3423...32432</span><FaClipboard className='cursor-pointer mt-1'/></p> */}
                    </div>
                    <div className='d-flex mt-3 flex-wrap'>
                        <div className={`market-form window ${isMobile == true ? `p-3`:`w-50 p-5`}`}>
                            <h4 className='mt-4'>Stake TLP</h4>  
                    
                            <div className='trade-token-select mb-2 p-4 mt-5'>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray text-left'>TLP Balance</p>
                                    <p className='text-gray text-left'>Max: 0.00</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <input type='text' className='token-select-input' placeholder='0.0' />
                                    <div className='d-flex cursor-pointer token-select'><h5>TLP</h5><FaAngleDown className='fs-26' /></div>
                                </div>
                                <div className='d-flex justify-content-between py-3'>
                                    <div className='percent-item'><p>25%</p></div>
                                    <div className='percent-item'><p>50%</p></div>
                                    <div className='percent-item'><p>75%</p></div>
                                    <div className='percent-item'><p>100%</p></div>
                                </div>
                            </div>
                            <div className='earn-button w-100 text-center py-2 border-radius mb-3 mt-15'>Connect Wallet</div>
                        </div>
                        <div className={`${isMobile == true ? `w-100`:`w-50`}`}>
                            <div className={`market-form window ${isMobile == true ? `p-3 mt-3 ml-0`:`ml-3 p-5 `}`}>
                                <div className='pt-3'>
                                    <div className='d-flex'>
                                        <img src={TLP} className='mr-3 img-circle' width={35} /> <h4>TLP</h4>
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
                            <div className={`market-form window mt-3 ${isMobile == true ? `p-3 ml-0`:`p-5 ml-3`}`}>
                                <div className='pt-3'>
                                    <div className='d-flex'>
                                        <h4>Your Stats</h4>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='text-gray py-2'>Balance</p>
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
        </div>
    )
}

export default Earn;
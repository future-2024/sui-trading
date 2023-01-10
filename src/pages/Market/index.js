
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

import { FaAngleDown, FaClipboard } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import {useHistory} from 'react-router-dom';

import TokenIcon1 from '../../img/quotation/token-logo.png';

import ExchangeLogo from '../../img/quotation/exchange.png';

const Market = (props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    const [switchMarket, setSwitchMarket] = useState(1);
    return (
        <div className='px-5 d-flex'>
            <div className='w-15'>
            </div>
            <div className='w-65 pb-3'>
                <div className='mt-5'><h3 className='text-white font-bold'>BUY/SELL TLP</h3></div>
                <div className='d-flex justify-content-between'>
                    {/* <p className='text-gray w-75'>Buy TLP tokens with your preferred assets. It takes around 18 minutes for the TRY broker to fill your buy orders, then the TLP tokens will be distributed to your wallet directly.</p> */}
                    {/* <p className='text-gray d-flex'><span className='text-white'>Contract: </span><span className='text-pink mx-1'> 0x3423...32432</span><FaClipboard className='cursor-pointer mt-1'/></p> */}
                </div>
                <div className='d-flex mt-3'>
                    <div className='market-form w-50 window p-5 mr-2'>
                        <div className='market-form-input d-flex justify-content-center mt-3'>
                            <div className={`py-3 w-50 ${switchMarket == 1 && 'active'}`}><p className={`text-center ${switchMarket != 1 ? 'text-grey':'text-white'}`} onClick={() => setSwitchMarket(1)}>Sell TLP</p></div>
                            <div className={`py-3 w-50 ${switchMarket == 2 && 'active'}`}><p className={`text-center ${switchMarket != 2 ? 'text-grey ':'text-white'}`} onClick={() => setSwitchMarket(2)}>Buy TLP</p></div>
                        </div>
                        <div className='trade-token-select mb-2 p-4 mt-4'>
                            <p className='text-gray text-left'>Pay</p>
                            <div className='d-flex justify-content-between'>
                                <input type='text' className='token-select-input' placeholder='0.0' />
                                <div className='d-flex cursor-pointer token-select'><h5>Select Token</h5><FaAngleDown className='fs-26' /></div>
                            </div>
                            <div className='d-flex justify-content-between py-3'>
                                <div className='percent-item'><p>25%</p></div>
                                <div className='percent-item'><p>50%</p></div>
                                <div className='percent-item'><p>75%</p></div>
                                <div className='percent-item'><p>100%</p></div>
                            </div>
                        </div>
                        <div className='ex-logo-part'><img src={ExchangeLogo} width={45} className='exchange-logo' /></div>
                        <div className='trade-token-select mt-3 p-4'>
                            <div className='d-flex justify-content-between'><p className='text-gray text-left'>Receive</p></div>
                            <div className='d-flex justify-content-between'>
                                <input type='text' className='token-select-input' placeholder='0.0' />
                                <div className='d-flex cursor-pointer token-select'><h5>TLP</h5><FaAngleDown className='fs-26' /></div>
                            </div>
                        </div>
                        <div className='pt-3'>
                            <div className='d-flex justify-content-between'>
                                <p className='text-gray py-2'>Free - Buy TLP</p>
                                <p className='py-2'>$0</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='text-gray py-2'>You will receive</p>
                                <p className='py-2'>0 TLP</p>
                            </div>
                        </div>                         
                        <div className='earn-button w-100 text-center py-2 border-radius mb-3'>Connect Wallet</div>
                    </div>
                    <div className='w-50 pl-2'>
                        <div className='market-form window p-5'>
                            <div className='pt-3'>
                                <div className='d-flex'>
                                    <img src={TokenIcon1} className='mr-3 img-circle' width={35} /> <h4>TLP</h4>
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
                                    <div className='earn-button w-100 text-center py-2 border-radius mb-3 mr-2'>Connect Wallet</div>
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

export default Market;


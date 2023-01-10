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
import DateSelector from '../../img/quotation/date-selector.png';

import { FaAngleDown, FaClipboard } from 'react-icons/fa';

import { useMediaQuery } from 'react-responsive';
import Chart from 'react-apexcharts';

const LockStake = (props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    const [switchMarket, setSwitchMarket] = useState(1);

    return (
        <div>
            {/* Lock stake */}
            <div className='px-5 d-flex'>
                <div className='w-15 align-self-center'>
                </div>
                <div className='w-65 pb-3'>
                <div className='mt-5'><h3 className='text-white font-bold'>gTRY Locked-Staking</h3></div>
                    <div className='d-flex mt-3'>
                        <div className='market-form w-50 window p-5 mr-2'>
                            <div className='d-flex justify-content-between'>
                                <h4>Create Lock</h4>
                                {/* <h6 className='text-pink mt-2'>Staking steps {`>`}</h6> */}
                            </div>
                            {/* <div className='market-form-input d-flex justify-content-center mt-3'>
                                <div className={`py-3 w-50 ${switchMarket == 1 && 'active'}`}><p className={`text-center ${switchMarket != 1 ? 'text-grey':'text-white'}`} onClick={() => setSwitchMarket(1)}>LOCK MCB</p></div>
                                <div className={`py-3 w-50 ${switchMarket == 2 && 'active'}`}><p className={`text-center ${switchMarket != 2 ? 'text-grey ':'text-white'}`} onClick={() => setSwitchMarket(2)}>LOCK TRY</p></div>
                            </div> */}
                            <div className='trade-token-select mb-2 p-4 mt-5'>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray text-left'>Lock Amount</p>
                                    <p className='text-gray text-left'>Max: 0.00</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <input type='text' className='token-select-input' placeholder='0.0' />
                                    <div className='d-flex cursor-pointer token-select'><h5>TRY</h5><FaAngleDown className='fs-26' /></div>
                                </div>
                                <div className='d-flex justify-content-between py-3'>
                                    <div className='percent-item'><p>25%</p></div>
                                    <div className='percent-item'><p>50%</p></div>
                                    <div className='percent-item'><p>75%</p></div>
                                    <div className='percent-item'><p>100%</p></div>
                                </div>
                            </div>
                            {/* <div className='ex-logo-part'><img src={ExchangeLogo} width={45} className='exchange-logo' /></div> */}
                            <div className='trade-token-select mt-3 p-4'>
                                <div className='d-flex justify-content-between'><p className='text-gray text-left'>Locked until</p></div>
                                <div className='d-flex justify-content-between'>
                                    <input type='text' className='token-select-input' placeholder='0.0' value='2023-05-12'/>    
                                    <img src={DateSelector} className='date-selector-icon' />                    
                                </div>
                            </div>
                            <div className='pt-3'>
                                <div className='d-flex justify-content-between pt-4'>
                                    <p className='text-gray py-2'>gTRY to receive</p>
                                    <p className='py-2'>0 gTRY</p>
                                </div>
                            </div>                  
                            <div className='board'>
                                <p className='text-gray-sharp'>The TRY will be locked out until the week of the selected date and cant be unlocked in advance.</p>
                            </div>       
                            <div className='earn-button w-100 text-center py-2 border-radius mb-3 mt-5'>Connect Wallet</div>
                        </div>
                        <div className='w-50 pl-2'>
                            <div className='market-form window p-5'>
                                <div className='pt-3'>
                                    <div className='d-flex'>
                                        <img src={TLP} className='mr-3 img-circle' width={35} /> <h4>gTRY</h4>
                                    </div>
                                    <div className='d-flex justify-content-between pt-3'>
                                        <p className='text-gray py-2 pt-3'>Stake APR</p>
                                        <h4 className='py-2'>36.79%</h4>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='text-gray py-2'>Total supply</p>
                                        <p className='py-2 text-pink-sharp'>13,921,574 gTRY</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='text-gray py-2'>Rate</p>
                                        <p className='py-2 text-pink-sharp'>23.54%</p>
                                    </div>
                                    <div className='board'>
                                        <p className='text-gray-sharp'><span className='text-white text-left'>Earn up to 35% rebate</span> by inviting traders to trade on TRY. Referral Program</p>
                                    </div>
                                </div>                         
                            </div>
                            <div className='market-form window p-5 mt-3'>
                                <div className='pt-3'>
                                    <div className='d-flex'>
                                        <h4>Your Stats</h4>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='text-gray py-2'>Balance</p>
                                        <p className='py-2'>0.00 gTRY  </p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='text-gray py-2'>You locked</p>
                                        <p className='py-2'>0.00 TRY</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='text-gray py-2'>Lock Time</p>
                                        <p className='py-2'>0 days</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='text-gray py-2'>Claimable Rewards</p>
                                        <p className='py-2'>$0.00</p>
                                    </div>
                                    <div className='d-flex mt-3'>
                                        <div className='earn-button w-100 text-center py-2 border-radius mb-3 mr-2'>Extend lock</div>
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

export default LockStake;
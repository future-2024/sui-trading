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
import TokenIcon1 from '../../img/quotation/bnb-busd.svg';
import TokenIcon2 from '../../img/quotation/lbd-bnb.svg';
import TokenIcon3 from '../../img/quotation/eth-bg.png';
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
            <div className='px-5 d-flex'>
                <div className='w-15 align-self-center'>
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


            {/* Lock stake */}
            <div className='px-5 d-flex'>
                <div className='w-15 align-self-center'>
                </div>
                <div className='w-65 pb-3'>
                <div className='mt-5'><h3 className='text-white'>gTRY Locked-Staking</h3></div>
                    <div className='d-flex justify-content-between'>
                        <p className='text-gray w-75'>Buy TLP tokens with your preferred assets. It takes around 18 minutes for the TRY broker to fill your buy orders, then the TLP tokens will be distributed to your wallet directly.</p>
                        <div className='earn-button text-center py-2 border-radius mb-3 text-regular fw-500'>Bridge MCB</div>
                    </div>
                    <div className='d-flex mt-3'>
                        <div className='market-form w-50 window p-5 mr-2'>
                            <div className='d-flex justify-content-between'>
                                <h4>Create Lock</h4>
                                <h6 className='text-pink mt-2'>Staking steps {`>`}</h6>
                            </div>
                            <div className='market-form-input d-flex justify-content-center mt-3'>
                                <div className={`py-3 w-50 ${switchMarket == 1 && 'active'}`}><p className={`text-center ${switchMarket != 1 ? 'text-grey':'text-white'}`} onClick={() => setSwitchMarket(1)}>LOCK MCB</p></div>
                                <div className={`py-3 w-50 ${switchMarket == 2 && 'active'}`}><p className={`text-center ${switchMarket != 2 ? 'text-grey ':'text-white'}`} onClick={() => setSwitchMarket(2)}>LOCK TRY</p></div>
                            </div>
                            <div className='trade-token-select mb-2 p-4 mt-5'>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray text-left'>Lock Amount</p>
                                    <p className='text-gray text-left'>Max: 0.00</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <input type='text' className='token-select-input' placeholder='0.0' />
                                    <div className='d-flex cursor-pointer token-select'><h5>MCB</h5><FaAngleDown className='fs-26' /></div>
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
                                <div className='d-flex justify-content-between'><p className='text-gray text-left'>Locked until</p></div>
                                <div className='d-flex justify-content-between'>
                                    <input type='text' className='token-select-input' placeholder='0.0' value='2023-05-12'/>                        
                                </div>
                            </div>
                            <div className='pt-3'>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray py-2'>gTRY to receive</p>
                                    <p className='py-2'>0 gTRY</p>
                                </div>
                            </div>                  
                            <div className='board'>
                                <p className='text-gray-sharp'>The MCB will be locked out until the week of the seelcted date and cant be unlocked in advance.</p>
                            </div>       
                            <div className='earn-button w-100 text-center py-2 border-radius mb-3 mt-3'>Connect Wallet</div>
                        </div>
                        <div className='w-50 pl-2'>
                            <div className='market-form window p-5'>
                                <div className='pt-3'>
                                    <div className='d-flex'>
                                        <img src={TokenIcon1} className='mr-3' width={35} /> <h4>gTRY</h4>
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
                                        <h4>Your TLP</h4>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='text-gray py-2'>Multichain Balance</p>
                                        <p className='py-2'>0.00 gTRY  </p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='text-gray py-2'>You locked</p>
                                        <p className='py-2'>0.00 TLP</p>
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
                                        <div className='earn-button w-100 text-center py-2 border-radius mb-3 mr-2'>Connect Wallet</div>
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
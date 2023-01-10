import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import './index.css';
import './style.css';

import Header from '../../components/Header'
import Web3 from 'web3';
import {useHistory} from 'react-router-dom';
import detectEthereumProvider from '@metamask/detect-provider';
import Countdown from 'react-countdown';
import BigNumber from "bignumber.js";
import moment from 'moment';
import DonutChart from 'react-donut-chart';

import TokenIcon1 from '../../img/quotation/SUI.png';
import TokenIcon2 from '../../img/quotation/eth-bg.png';
import TokenIcon3 from '../../img/quotation/BTC.svg';


import { useMediaQuery } from 'react-responsive';
import { FaAccessibleIcon } from 'react-icons/fa';

const Liquidity = (props) => {
    const history = useHistory();    
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    
    
    const goLink = (text) => {
        history.push("/" + text);
    }

    return (
        <div className='pb-5'>
            <div className={`d-flex ${isMobile == true ? `px-3`:`px-5`}`}>
                <div className='w-15 align-self-center'>
                </div>
                <div className='stats pt-5 w-65'>
                    <div>
                        <div className='d-flex justify-content-between'>
                            <h4 className='text-white font-bold'>Liquidity Overview</h4>    
                        </div>
                        {/* <p className='text-gray pt-4'>Buy TLP tokens with your preferred assets. It takes around 18 minutes for the MUX broker to fill your buy orders, then the TLP tokens will be distributed to your wallet directly.</p>            */}
                    </div>
                    <div className='d-flex justify-content-between flex-wrap'>
                        <div className={`market-form window mt-3 w-49 ${isMobile == true ? `p-3`:`p-5`}`}>
                            <div>
                                <div className='d-flex'>
                                    <img src={TokenIcon1} width={35} className='img-circle' />
                                    <h4 className='ml-3 font-bold'>TLP</h4>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray py-2 pt-4'>Stake APR</p>
                                    <h4 className='py-2 text-grey-sharp'>36.79% </h4>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray py-2'>Price</p>
                                    <div className='py-2 text-grey-sharp'>$0.215</div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray py-2'>Total Supply</p>
                                    <div className='py-2 text-grey-sharp'>12,213,123 TLP</div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray py-2'>Total Staked</p>
                                    <div className='py-2 text-grey-sharp'>12,213,123 TLP</div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray py-2'>TLP pool Value</p>
                                    <div className='py-2 text-grey-sharp'>12,214,122</div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray py-2'>Protocol Owned</p>
                                    <div className='py-2 text-grey-sharp'>$0.782</div>
                                </div>
                                <div className='d-flex mt-3'>
                                    <div className='earn-button w-100 text-center py-2 border-radius mb-3 mr-2' onClick={() => goLink('market')}>Buy / Sell TLP</div>
                                    <div className='earn-button-grey w-100 text-center  py-2 border-radius mb-3 ml-2'>Stake TLP</div>
                                </div>
                            </div>                         
                        </div>
                        <div className={`market-form window py-5 mt-3 w-49 ${isMobile == true ? `ml-0 px-2`:`ml-3 px-4`}`}>
                            <div>
                                <div className='d-flex'>
                                    <h4 className='font-bold'>Liquidity Pool</h4>
                                </div>
                                <div className='align-self-center donut px-0 pt-5'>
                                    <DonutChart
                                        className="dchart"
                                        width={isMobile == true ? 320:350}
                                        height={isMobile == true ? 200:250}
                                        innerRadius={0.8}
                                        selectedOffset={0}
                                        outerRadius={0.7}
                                        legend={true}
                                        colors={["rgb(92, 211, 255)", "rgb(6, 114, 255)", "rgb(254, 142, 14)"]}
                                        data={[
                                            {
                                            label: "SUI",
                                            value: 15
                                            },
                                            {
                                            label: "Ethereum",
                                            value: 30
                                            },
                                            {
                                            label: "Bitcoin",
                                            value: 45
                                            }
                                        ]}
                                    />
                                </div>
                            </div>                         
                        </div>
                    </div>

                    <div className='pt-5'>
                        <div className='d-flex justify-content-between'>
                            <h4 className='text-white font-bold'>Liquidity Composition</h4>
                        </div>
                        {/* <p className='text-gray pt-2'>The TLP pool consists of an assets portfolio; the assets are dynamically allocated for margin trading and third-party DEX mining.</p>            */}
                        <div className='pt-4'>
                            <div className='d-flex flex-wrap'>
                                <div className={`${isMobile == true ? ``:`w-50`}`}>
                                    <div className='composition mr-2'>
                                        <div className='d-flex'>
                                            <img src={TokenIcon1} className='img-circle' />
                                            <h4 className='font-bold ml-3 text-white'>SUI</h4>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='font-bold text-gray py-2'>Price</p>
                                            <h5 className='py-2 text-white'>$1,214.6</h5>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='font-bold text-gray py-2'>Total Pooled</p>
                                            <h5 className='py-2 text-white'>$2,232,322</h5>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='font-bold text-gray py-2'>Weight</p>
                                            <h5 className='py-2 text-white'>23.54% / 25.99%</h5>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='font-bold text-gray py-2'>Margin Trading Utilization</p>
                                            <h5 className='py-2 text-white'>23.54%</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${isMobile == true ? ``:`w-50`}`}>
                                    <div className={`composition ${isMobile == true ? `mt-3`:`ml-2`}`}>
                                        <div className='d-flex'>
                                            <img src={TokenIcon2} className='img-circle' />
                                            <h4 className='font-bold ml-3 text-white'>ETH</h4>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='font-bold text-gray py-2'>Price</p>
                                            <h5 className='py-2 text-white'>$1,214.6</h5>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='font-bold text-gray py-2'>Total Pooled</p>
                                            <h5 className='py-2 text-white'>$2,232,322</h5>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='font-bold text-gray py-2'>Weight</p>
                                            <h5 className='py-2 text-white'>23.54% / 25.99%</h5>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='font-bold text-gray py-2'>Margin Trading Utilization</p>
                                            <h5 className='py-2 text-white'>23.54%</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex pt-3'>
                                <div className={`${isMobile == true ? ``:`w-50`}`}>
                                    <div className='composition mr-2'>
                                        <div className='d-flex'>
                                            <img src={TokenIcon3} className='img-circle' />
                                            <h4 className='font-bold ml-3 text-white'>BTC</h4>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='font-bold text-gray py-2'>Price</p>
                                            <h5 className='py-2 text-white'>$1,214.6</h5>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='font-bold text-gray py-2'>Total Pooled</p>
                                            <h5 className='py-2 text-white'>$2,232,322</h5>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='font-bold text-gray py-2'>Weight</p>
                                            <h5 className='py-2 text-white'>23.54% / 25.99%</h5>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='font-bold text-gray py-2'>Margin Trading Utilization</p>
                                            <h5 className='py-2 text-white'>23.54%</h5>
                                        </div>
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

export default Liquidity;
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
import Chart from 'react-apexcharts';

import TokenIcon1 from '../../img/quotation/SUI.png';
import TokenIcon2 from '../../img/quotation/eth-bg.png';
import TokenIcon3 from '../../img/quotation/BTC.svg';
import TokenIcon4 from '../../img/quotation/BTC.svg';
import EtherIcon from '../../img/quotation/pan-bg2.svg';


import { useMediaQuery } from 'react-responsive';
import { FaAccessibleIcon, FaAlignJustify, FaAngleDown, FaClipboard, FaKeyboard, FaKey } from 'react-icons/fa';
const Liquidity = (props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    const [series1, setSeries1] = useState([75, 25, 11]);
    const [option1, setOption1] = useState({
        title: {
            text:'',
            align: 'center',
            style: {
                color:'white'
            }
        },
        plotOptions: {
            area: undefined,
        },
        labels:['TLP margin Trading', 'TLP margin Trading', 'TLP margin Trading'],
        chart: {
            type: 'donut',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                width: 300
                }
            }
        }]
    });

    return (
        <div className='pb-5'>
            <div className='px-5 d-flex'>
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
                        <div className='market-form window p-5 mt-3 w-49'>
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
                                    <div className='earn-button w-100 text-center py-2 border-radius mb-3 mr-2'>Buy / Sell TLP</div>
                                    <div className='earn-button-grey w-100 text-center  py-2 border-radius mb-3 ml-2'>Stake TLP</div>
                                </div>
                            </div>                         
                        </div>
                        <div className='ml-3 market-form window py-5 px-4 mt-3 w-49'>
                            <div>
                                <div className='d-flex'>
                                    <h4 className='font-bold'>Liquidity Pool</h4>
                                </div>
                                <div className='align-self-center donut px-0 pt-5'>
                                    <Chart options={option1} series={series1} type="donut"  width="450"/>
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
                            <div className='d-flex'>
                                <div className='w-50'>
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
                                <div className='w-50'>
                                    <div className='composition ml-2'>
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
                                <div className='w-50'>
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
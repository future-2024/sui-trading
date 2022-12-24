
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './index.css';
import Order from '../../components/Order';
import Web3 from 'web3';
import {useHistory} from 'react-router-dom';
import detectEthereumProvider from '@metamask/detect-provider';
import Countdown from 'react-countdown';
import BigNumber from "bignumber.js";
import moment from 'moment';

import { FaAngleDown } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

import Chart from 'react-apexcharts';
import TradingViewWidget, { Themes, IntervalTypes } from 'react-tradingview-widget';

import ExchangeLogo from '../../img/quotation/exchange.png';
import { Slider, RangeSlider } from 'rsuite';
import './style.css';
import './slider.less';
import TradeForm from '../../components/TradeForm';
import TokenIcon1 from '../../img/quotation/SUI.png';
import TokenIcon2 from '../../img/quotation/BTC.svg';
import TokenIcon3 from '../../img/quotation/eth-bg.png';

const Trade = (props) => {
    const [market, setMarket] = useState('ETH');
    const [isMarketMenu, setIsMarketMenu] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    
    const selectMarket = (market) => {
        setMarket(market);
        setIsMarketMenu(false);
    }
    return (
        <div className='container pt-5 text-center'>
            <div className='d-flex justify-content-between flex-wrap pb-2'>
                <div className='t-w-1'>
                    <div className='trade-header d-flex justify-content-between'>
                        <div className='d-flex'>
                            <h4 className='text-white m-auto cursor-pointer' onClick={() => setIsMarketMenu(true)}>{market}/USD</h4>
                            <FaAngleDown className='m-auto fs-28 text-white' />
                        </div>
                        <div className='d-flex trade-result flex-wrap justify-content-between'>
                            <div>
                                <p className='text-gray'>1,322.26</p>
                                <h6 className='text-white'>$1,322.26</h6>
                            </div>
                            <div>
                                <p className='text-gray'>24h Change</p>
                                <h6 className='text-green'>+4.19%</h6>
                            </div>
                            <div>
                                <p className='text-gray'>24h high</p>
                                <h6 className='text-white'>$1,346.79</h6>
                            </div>
                            <div>
                                <p className='text-gray'>1,322.26</p>
                                <h6 className='text-white'>$1,322.26</h6>
                            </div>
                        </div>
                    </div>                    
                    <div className="chartview">
                        <TradingViewWidget
                            theme={Themes.DARK}
                            locale="fr"
                            autosize
                            symbol="BINANCE:ETHPERP"
                            interval={IntervalTypes.D}
                            timezone="Etc/UTC"
                            style="1"
                            local="in"
                            allow_symbol_change={true}
                            className="view-chart"
                        />
                    </div>
                    <Order />
                </div>
                <div className='t-w-2'>
                    <TradeForm />                    
                    {/* <div className='trade-form mt-2'> */}
                        {/* <div>
                            <div>
                                <h5 className='text-white text-left'>Useful Links</h5>
                                <hr className='text-gray'/>
                                <div className='d-flex justify-content-between'>
                                    <p>Trading guide</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p>Leaderboard</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p>Speed up page loading</p>
                                </div>
                            </div>                            
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
            {isMarketMenu && (
                <div>
                    <div className='mask-background'></div>
                    <div className='token-menu p-4'>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex py-2'><h5 className='text-white'>Select Market</h5></div>
                            <div className='text-white cursor-pointer' onClick={() => setIsMarketMenu(false)}><h3 className='text-white'>x</h3></div>
                        </div>
                        <hr className='text-white my-1' />
                        <input className='referral text-gray mt-2 w-100 border-radius-0' type='text' placeholder='Search Token'/>
                        <div className='pt-4'>
                            <div className='d-flex token-item justify-content-between' onClick={()=>selectMarket('SUI')}>
                                <div className='d-flex'>
                                    <img src={TokenIcon1} width={45} />
                                    <div className='ml-4'>
                                        <h5 className='text-white text-left'>SUI</h5>
                                        <p className='text-gray'>Sui</p>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='text-white text-right'>$1.0034</h5>
                                    <p className='text-green text-right'>+0.02</p>
                                </div>
                            </div>
                            <div className='d-flex token-item justify-content-between' onClick={()=>selectMarket('ETH')}>
                                <div className='d-flex'>
                                    <img src={TokenIcon3} width={45} />
                                    <div className='ml-4'>
                                        <h5 className='text-white text-left'>ETH</h5>
                                        <p className='text-gray'>Ethereum</p>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='text-white text-right'>$1234.32</h5>
                                    <p className='text-red text-right'>-0.87</p>
                                </div>
                            </div>
                            <div className='d-flex token-item justify-content-between' onClick={()=>selectMarket('BTC')}>
                                <div className='d-flex'>
                                    <img src={TokenIcon2} width={45} />
                                    <div className='ml-4'>
                                        <h5 className='text-white text-left'>BTC</h5>
                                        <p className='text-gray'>Bitcoin</p>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='text-white text-right'>$14034.43</h5>
                                    <p className='text-red text-right'>-0.34</p>
                                </div>
                            </div>
                        </div>
                            {/* <div className='d-flex token-item'>
                                <img src={TokenIcon3} width={45} />
                                <div className='ml-4'>
                                    <h5 className='text-white text-left'>ETH</h5>
                                    <p className='text-gray'>Etherem</p>
                                </div>
                            </div>
                            <div className='d-flex token-item'>
                                <img src={TokenIcon2} width={45} />
                                <div className='ml-4'>
                                    <h5 className='text-white text-left'>BTC</h5>
                                    <p className='text-gray'>Bitcoin</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            )}   
        </div>
    )
}

export default Trade;


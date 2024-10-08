
import React, { useState, useEffect, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {useHistory} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaList, FaAngleDown } from 'react-icons/fa';
import { ethers } from "ethers";
import { Slider, RangeSlider } from 'rsuite';

import $ from 'jquery';
import Web3 from 'web3';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { StoreContext } from '../../store';

import ExchangeLogo from '../../img/quotation/exchange.png';
import Logo from '../../img/quotation/TWT.png';
import TokenIcon1 from '../../img/quotation/SUI.png';
import TokenIcon2 from '../../img/quotation/BTC.svg';
import TokenIcon3 from '../../img/quotation/eth-bg.png';

const TradeForm = () => {
    const global = useContext(StoreContext);
    const [formIndex, setFormIndex] = useState(1);
    const [optionIndex, setOptionIndex] = useState(1);
    const [limitPrice, setLimitPrice] = useState(1234.23);
    const [isOrderMenu, setIsOrderMenu] = useState(false);
    const [isTokenMenu, setIsTokenMenu] = useState(false);
    const [orderType, setOrderType] = useState(1);
    const [leverageValue, setLeverageValue] = useState(6);
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    const connectWallet = () => {
        global.setModalIsOpen(true);
    }
    const openMenu = () => {
        if(isOrderMenu == true) {
            setIsOrderMenu(false);
        } else {
            setIsOrderMenu(true);
        }
    }
    const selectOrderType = (index) => {
        setOrderType(index)
        setIsOrderMenu(false);
    }
    return (
        <div>
            <div className='trade-form'>
                <div className='trade-form-input d-flex justify-content-center'>
                    <div className={`${formIndex == 1 ? 'active' : ''}`}><p onClick={() => setFormIndex(1)}>Long</p></div>
                    <div className={`${formIndex == 2 ? 'active' : ''}`}><p onClick={() => setFormIndex(2)}>Short</p></div>
                    <div className={`${formIndex == 3 ? 'active' : ''}`}><p onClick={() => setFormIndex(3)}>Swap</p></div>
                </div>
                {formIndex == 1 && (
                    <div>
                        <div>
                            <div className='trade-form-select d-flex mt-2 p-relative'>
                                {/* <div><p className={`cursor-pointer ${optionIndex == 1 ? 'text-white' : 'text-gray'}`} onClick={() => setOptionIndex(1)}>Market</p></div>
                                <div><p className={`cursor-pointer ${optionIndex == 2 ? 'text-white' : 'text-gray'}`} onClick={() => setOptionIndex(2)}>Limit</p></div> */}
                                <div className='trade-token-select-1 mb-2 w-50'>
                                    <p className='text-gray text-left'>{orderType == 2 ? 'Limit Price':'Market Price'}</p>
                                    <div className='d-flex'>
                                        <span className={`${orderType == 1 && ('disabled')}`}>$</span><input type='text' className={`token-select-input ${orderType == 1 && ('disabled')}`} placeholder='0.0' value={limitPrice} onChange={(e) => setLimitPrice(e.target.value)} />
                                    </div>
                                </div>
                                <div className='trade-token-select-1 mb-2 ml-2 w-50'>
                                    <p className='text-gray text-left'>Order Type</p>
                                    <div className='d-flex justify-content-end'>
                                        <div className='d-flex cursor-pointer token-select mr-2' onClick={openMenu}><h5>{orderType == 2 ? 'Limit':'Market'}</h5><FaAngleDown className='fs-26 mt-1' /></div>
                                    </div>
                                </div>      
                                {isOrderMenu && (                        
                                    <div className='market-menu'>
                                        <div onClick={() => selectOrderType(1)}>Market</div>
                                        <div onClick={() => selectOrderType(2)}>Limit</div>
                                        <div onClick={() => selectOrderType(3)}>Stop Market</div>
                                    </div> 
                                )}    
                            </div> 

                            <div className='trade-token-select mb-2'>
                                <p className='text-gray text-left'>Pay</p>
                                <div className='d-flex justify-content-between'>
                                    <input type='text' className='token-select-input' placeholder='0.0' />
                                    <div className='d-flex cursor-pointer token-select' onClick={() => setIsTokenMenu(true)}><h5>ETH</h5><FaAngleDown className='fs-26 mt-1' /></div>
                                </div>
                            </div>
                            <div className='ex-logo-part'><img src={ExchangeLogo} width={45} className='exchange-logo' /></div>
                            <div className='trade-token-select mt-2'>
                                <div className='d-flex justify-content-between'><p className='text-gray text-left'>Long</p><p className='text-gray text-left'>Leverage:2.00x</p></div>
                                <div className='d-flex justify-content-between'>
                                    <input type='text' className='token-select-input' placeholder='0.0' />
                                    <div className='d-flex cursor-pointer token-select' onClick={() => setIsTokenMenu(true)}><h5>ETH</h5><FaAngleDown className='fs-26 mt-1' /></div>
                                </div>
                            </div>
                            {optionIndex == 2 && (
                                <div className='trade-token-select mt-2'>
                                    <div className='d-flex justify-content-between'><p className='text-gray text-left'>Price</p><p className='text-gray text-left'>Mark: 1233.23</p></div>
                                    <div className='d-flex justify-content-between'>
                                        <input type='text' className='token-select-input' placeholder='0.0' />
                                        <div className='d-flex cursor-pointer token-select'><h4>USD</h4></div>
                                    </div>
                                </div>
                            )}
                            <div>
                                <div className='text-left pt-2 d-flex justify-content-between'><p className='mt-3'>Leverage:{leverageValue}</p> <input type='text' className='form-control w-25 leverage' value={leverageValue} onChange={(e) => setLeverageValue(e.target.value)}/></div>
                                <div className='pt-3'>
                                    {/* <input type='text' onChange={(value) => setLeverageValue(value)} /> */}
                                    <Slider
                                        defaultValue={leverageValue}
                                        min={2}
                                        step={3}
                                        max={50}
                                        graduated
                                        progress
                                        value={leverageValue}
                                        onChange={(value) => { setLeverageValue(value) }}
                                        renderMark={mark => {
                                            return mark;
                                        }}
                                        className='custom-slider'
                                    />
                                </div>
                            </div>
                            <div className='earn-button w-100 text-center' onClick={connectWallet}>Connect Wallet</div>
                            <div className='pt-3'>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray'>Available Liquidity</p>
                                    <p>24,23.23 ETH</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray'>Liquidity Source</p>
                                    <p>Tradeify</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray'>Profits in</p>
                                    <p>ETH</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray'>Liq.Price</p>
                                    <p>-</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray'>Collateral</p>
                                    <p>-</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray'>Fees</p>
                                    <p>-</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray'>Spread</p>
                                    <p>0%</p>
                                </div>
                            </div>                            
                        </div>
                    </div>
                )}
                {formIndex == 2 && (
                    <div>
                        <div>
                            <div className='trade-form-select d-flex mt-2 p-relative'>
                                {/* <div><p className={`cursor-pointer ${optionIndex == 1 ? 'text-white' : 'text-gray'}`} onClick={() => setOptionIndex(1)}>Market</p></div>
                                <div><p className={`cursor-pointer ${optionIndex == 2 ? 'text-white' : 'text-gray'}`} onClick={() => setOptionIndex(2)}>Limit</p></div> */}
                                <div className='trade-token-select-1 mb-2 w-50'>
                                    <p className='text-gray text-left'>{orderType == 2 ? 'Limit Price':'Market Price'}</p>
                                    <div className='d-flex'>
                                        <span className={`${orderType == 1 && ('disabled')}`}>$</span><input type='text' className={`token-select-input ${orderType == 1 && ('disabled')}`} placeholder='0.0' value={limitPrice} onChange={(e) => setLimitPrice(e.target.value)} />
                                    </div>
                                </div>
                                <div className='trade-token-select-1 mb-2 ml-2 w-50'>
                                    <p className='text-gray text-left'>Order Type</p>
                                    <div className='d-flex justify-content-end'>
                                        <div className='d-flex cursor-pointer token-select mr-2' onClick={openMenu}><h5>{orderType == 2 ? 'Limit':'Market'}</h5><FaAngleDown className='fs-26 mt-1' /></div>
                                    </div>
                                </div>      
                                {isOrderMenu && (                        
                                    <div className='market-menu'>
                                        <div onClick={() => selectOrderType(1)}>Market</div>
                                        <div onClick={() => selectOrderType(2)}>Limit</div>
                                        <div onClick={() => selectOrderType(3)}>Stop Market</div>
                                    </div> 
                                )}    
                            </div> 

                            <div className='trade-token-select mb-2'>
                                <p className='text-gray text-left'>Pay</p>
                                <div className='d-flex justify-content-between'>
                                    <input type='text' className='token-select-input' placeholder='0.0' />
                                    <div className='d-flex cursor-pointer token-select' onClick={() => setIsTokenMenu(true)}><h5>ETH</h5><FaAngleDown className='fs-26 mt-1' /></div>
                                </div>
                            </div>
                            <div className='ex-logo-part'><img src={ExchangeLogo} width={45} className='exchange-logo' /></div>
                            <div className='trade-token-select mt-2'>
                                <div className='d-flex justify-content-between'><p className='text-gray text-left'>Short</p><p className='text-gray text-left'>Leverage:2.00x</p></div>
                                <div className='d-flex justify-content-between'>
                                    <input type='text' className='token-select-input' placeholder='0.0' />
                                    <div className='d-flex cursor-pointer token-select' onClick={() => setIsTokenMenu(true)}><h5>ETH</h5><FaAngleDown className='fs-26 mt-1' /></div>
                                </div>
                            </div>
                            {optionIndex == 2 && (
                                <div className='trade-token-select mt-2'>
                                    <div className='d-flex justify-content-between'><p className='text-gray text-left'>Price</p><p className='text-gray text-left'>Mark: 1233.23</p></div>
                                    <div className='d-flex justify-content-between'>
                                        <input type='text' className='token-select-input' placeholder='0.0' />
                                        <div className='d-flex cursor-pointer token-select'><h4>USD</h4></div>
                                    </div>
                                </div>
                            )}
                            <div>
                                <div className='text-left pt-2 d-flex justify-content-between'><p className='mt-3'>Leverage:{leverageValue}</p> <input type='text' className='form-control w-25 leverage' value={leverageValue} onChange={(e) => setLeverageValue(e.target.value)}/></div>
                                <div className='pt-3'>
                                    {/* <input type='text' onChange={(value) => setLeverageValue(value)} /> */}
                                    <Slider
                                        defaultValue={leverageValue}
                                        min={2}
                                        step={3}
                                        max={50}
                                        graduated
                                        progress
                                        value={leverageValue}
                                        onChange={(value) => { setLeverageValue(value) }}
                                        renderMark={mark => {
                                            return mark;
                                        }}
                                        className='custom-slider'
                                    />
                                </div>
                            </div>
                            <div className='earn-button w-100 text-center' onClick={connectWallet}>Connect Wallet</div>
                            <div className='pt-3'>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray'>Available Liquidity</p>
                                    <p>24,23.23 ETH</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray'>Liquidity Source</p>
                                    <p>Tradeify</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray'>Profits in</p>
                                    <p>ETH</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray'>Liq.Price</p>
                                    <p>-</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray'>Collateral</p>
                                    <p>-</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray'>Fees</p>
                                    <p>-</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-gray'>Spread</p>
                                    <p>0%</p>
                                </div>
                            </div>                            
                        </div>
                    </div>
                )}
                {formIndex == 3 && (
                    <div>
                        <div className='trade-form-select d-flex mt-2 p-relative'>
                            {/* <div><p className={`cursor-pointer ${optionIndex == 1 ? 'text-white' : 'text-gray'}`} onClick={() => setOptionIndex(1)}>Market</p></div>
                            <div><p className={`cursor-pointer ${optionIndex == 2 ? 'text-white' : 'text-gray'}`} onClick={() => setOptionIndex(2)}>Limit</p></div> */}
                            <div className='trade-token-select-1 mb-2 w-50'>
                                <p className='text-gray text-left'>{orderType == 2 ? 'Limit Price':'Market Price'}</p>
                                <div className='d-flex'>
                                    <span className={`${orderType == 1 && ('disabled')}`}>$</span><input type='text' className={`token-select-input ${orderType == 1 && ('disabled')}`} placeholder='0.0' value={limitPrice} onChange={(e) => setLimitPrice(e.target.value)} />
                                </div>
                            </div>
                            <div className='trade-token-select-1 mb-2 ml-2 w-50'>
                                <p className='text-gray text-left'>Order Type</p>
                                <div className='d-flex justify-content-end'>
                                    <div className='d-flex cursor-pointer token-select mr-2' onClick={openMenu}><h5>{orderType == 2 ? 'Limit':'Market'}</h5><FaAngleDown className='fs-26 mt-1' /></div>
                                </div>
                            </div>      
                            {isOrderMenu && (                        
                                <div className='market-menu'>
                                    <div onClick={() => selectOrderType(1)}>Market</div>
                                    <div onClick={() => selectOrderType(2)}>Limit</div>
                                    <div onClick={() => selectOrderType(3)}>Stop Market</div>
                                </div> 
                            )}    
                        </div> 
                        <div className='trade-token-select mb-2'>
                            <p className='text-gray text-left'>Pay</p>
                            <div className='d-flex justify-content-between'>
                                <input type='text' className='token-select-input' placeholder='0.0' />
                                <div className='d-flex cursor-pointer token-select' onClick={() => setIsTokenMenu(true)}><h4>ETH</h4><FaAngleDown className='fs-26 mt-2' /></div>
                            </div>
                        </div>
                        <div className='ex-logo-part'><img src={ExchangeLogo} width={45} className='exchange-logo' /></div>
                        <div className='trade-token-select mt-2'>
                            <div className='d-flex justify-content-between'><p className='text-gray text-left'>Receive</p></div>
                            <div className='d-flex justify-content-between'>
                                <input type='text' className='token-select-input' placeholder='0.0' />
                                <div className='d-flex cursor-pointer token-select' onClick={() => setIsTokenMenu(true)}><h4>ETH</h4><FaAngleDown className='fs-26 mt-2' /></div>
                            </div>
                        </div>
                        {optionIndex == 2 && (
                            <div className='trade-token-select mt-2'>
                                <div className='d-flex justify-content-between'><p className='text-gray text-left'>Price</p><p className='text-gray text-left'>Mark: 1233.23</p></div>
                                <div className='d-flex justify-content-between'>
                                    <input type='text' className='token-select-input' placeholder='0.0' />
                                    <div className='d-flex cursor-pointer token-select'><h4>USD Per ETH</h4></div>
                                </div>
                            </div>
                        )}
                        
                        <div className='earn-button w-100 text-center' onClick={connectWallet}>Connect Wallet</div>
                        <div className='d-flex justify-content-between'>
                            <p className='text-left pt-2'>Fees</p>
                            <p className='text-gray pt-2'>--</p>
                        </div>      
                        <div className='pt-3'>
                            <div className='d-flex justify-content-between'>
                                <p className='text-gray'>ETH price</p>
                                <p>$1,219.14</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='text-gray'>USDC price</p>
                                <p>$1.00</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='text-gray'>Avaiable Liquidity</p>
                                <p>$13,196,042.35</p>
                            </div>
                        </div>                         
                    </div>
                )}
            </div>
            
            {isTokenMenu && (
                <div>
                    <div className='token-menu p-4'>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex py-2'><h5 className='text-white'>Select Collateral</h5></div>
                            <div className='text-white cursor-pointer' onClick={() => setIsTokenMenu(false)}><h3 className='text-white'>x</h3></div>
                        </div>
                        <hr className='text-white my-1' />
                        <input className='referral text-gray mt-2 w-100 border-radius-0' type='text' placeholder='Search Token'/>
                        <div className='pt-4'>
                            <div className='d-flex token-item justify-content-between'>
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
                            <div className='d-flex token-item justify-content-between'>
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
                            <div className='d-flex token-item justify-content-between'>
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

export default TradeForm;

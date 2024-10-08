
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {useHistory} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaList } from 'react-icons/fa';
import { ethers } from "ethers";
import $ from 'jquery';

import Web3 from 'web3';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import Logo from '../../img/quotation/TWT.png';

const Order = () => {
    const [orderIndex, setOrderIndex] = useState(1);
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    return (
        <div className='order py-2 mt-2'>
            <div className='order-header d-flex'>
                <p className={`${orderIndex == 1 ? 'active' : ''}`} onClick={() => setOrderIndex(1)}>Position</p>
                <p className={`${orderIndex == 2 ? 'active' : ''}`} onClick={() => setOrderIndex(2)}>Open Orders</p>
                <p className={`${orderIndex == 3 ? 'active' : ''}`} onClick={() => setOrderIndex(3)}>Trades</p>
            </div> 
            {orderIndex == 1 && (
                <div className='order-content'>
                        {!isMobile && (                            
                            <div className='order-content-top d-flex'>
                                <p>Market</p>
                                <p>Size</p>
                                <p>NET value</p>
                                <p>Collateral</p>
                                <p>Entry Price</p>
                                <p>Mark Price</p>
                                <p>Liq. Price</p>                                    
                                <p>PNL & ROE</p>                                    
                                <p>Actions</p>                                    
                            </div>
                        )}
                    <hr className='text-gray my-0'/>
                    <div>
                        <p className='py-3 text-white'>No open postions</p>
                    </div>
                </div>     
            )}      
            {orderIndex == 2 && (
                <div className='order-content'>
                    {!isMobile && (
                        <div className='order-content-top d-flex'>
                            <p>Time</p>
                            <p>Market & Side</p>
                            <p>Operation & Type</p>
                            <p>Price</p>
                            <p>Amount</p>
                            <p>Collateral</p>
                            <p>Actions</p>
                        </div>
                    )}                    
                    <hr className='text-gray my-0'/>
                    <div>
                        <p className='py-3 text-white'>No open Orders</p>
                    </div>
                </div>     
            )}      
            {orderIndex == 3 && (
                <div className='order-content'>
                    <div>
                        <p className='py-3 text-white'>No traders yet</p>
                    </div>
                </div>     
            )}      
        </div>
    )
}

export default Order;

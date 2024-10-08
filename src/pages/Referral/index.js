
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

import { FaAngleDown } from 'react-icons/fa';

import { useMediaQuery } from 'react-responsive';
import Chart from 'react-apexcharts';

import Switch from "./Switch";
const Referral = (props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    return (
        <div className={`d-flex ${isMobile == true ? `py-2 px-3`:`py-5 px-5`}`}>
            <div className='text-center container'>
                <div className='mt-5'><h3 className='text-white font-bold'>Referrals</h3></div>
                <div><p className='text-gray'>Get fee discounts and earn rebates through the Tradeify referral program{!isMobile && (<br />)}For more information, please read the <span className='text-decoration-underline'>referral program details.</span></p></div>
                <Switch />
                <div className='input-referral'>
                    <h4 className='text-white pt-4'>Enter Referral Code</h4>
                    <p className='text-gray'>Please input a referral code to benefit from fee discounts.</p>
                    <input className='referral text-gray mt-5' type='text' placeholder='Enter referral code' />
                    <div className='referral-button'>Enter referral code</div>
                </div>
            </div>
        </div>
    )
}

export default Referral;


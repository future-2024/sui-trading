import React, { useCallback, useEffect, useState, useContext } from 'react';

// export const WalletType = 'suiWallet' | 'suietWallet' | 'martianSuiWallet' | 'ethosWallet';

// type SuiWalletProvider = {
//   children: React.ReactNode
// }

// type SuiWalletContextValues = {
//   account: string | undefined,
//   connected: boolean,
//   connecting: boolean,
//   connect: (type: WalletType) => void,
//   disconnect: () => void
// }

const StoreContext = React.createContext({
  account: undefined,
  connected: false,
  connecting: false,
  connect: (vaWalletType) => {},
  disconnect: () => { }
});

export const UseSuiWalletProvider = ({ children }) => {
  const [adapter, setAdapter] = useState(undefined);
  const [walletType, setWalletType] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);

  // console.log(new WalletStandardAdapterProvider().get());
  const connect = useCallback(async (vaWalletType) => {
    if (vaWalletType === 'ethosWallet') {
      const wallet = (window).ethosWallet;
      if (wallet) {
        try {
          let given = await wallet.requestPermissions();
          const newLocal = ["viewAccount"];
          let perms = await wallet.hasPermissions(newLocal);

          if (given && perms) {
            setConnected(true);
            setConnecting(true);
            setWalletType(vaWalletType);
            setAdapter(wallet);
            localStorage.setItem('suiWallet', vaWalletType);
          }

        } catch (err) {
          console.log(err);
        }
      } else {
        window.open('https://chrome.google.com/webstore/detail/ethos-sui-wallet/mcbigmjiafegjnnogedioegffbooigli?hl=en&authuser=1', '_blank')
      }
      return;
    }

    if (vaWalletType === 'martianSuiWallet') {
      const wallet = (window).martian;
      if (wallet && wallet.sui) {
        try {
          const response = await wallet.sui.connect(['viewAccount', 'suggestTransactions']);
          if (response && response.address) {
            setConnected(true);
            setConnecting(true);
            setWalletType(vaWalletType);
            setAdapter(wallet.sui);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        window.open('https://chrome.google.com/webstore/detail/martian-wallet-aptos-sui/efbglgofoippbgcjepnhiblaibcnclgk', '_blank')
      }

      return;
    }

    if (vaWalletType === 'suietWallet') {
      const wallet = (window).__suiet__;
      if (wallet) {
        try {
          const newLocal = ["viewAccount"];
          let given = await wallet.connect(newLocal);

          if (given.data) {
            setConnected(true);
            setConnecting(true);
            setWalletType(vaWalletType);
            setAdapter(wallet);
            localStorage.setItem('suiWallet', vaWalletType);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        window.open('https://chrome.google.com/webstore/detail/suiet-sui-wallet/khpkpbbcccdmmclmpigdgddabeilkdpd', '_blank')
      }

      return;
    }


    const wallet = (window).suiWallet;
    if (wallet) {
      try {
        let given = await wallet.requestPermissions();
        const newLocal = ["viewAccount"];
        let perms = await wallet.hasPermissions(newLocal);
        if (given && perms) {
          setConnected(true);
          setConnecting(true);
          setWalletType(vaWalletType);
          setAdapter(wallet);
          localStorage.setItem('suiWallet', vaWalletType);
        }

      } catch (err) {
        console.log(err);
      }
    } else {
      window.open('https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil', '_blank')
    }

  }, []);

  const disconnect = useCallback(() => {
    if (adapter && adapter.disconnect) {
      adapter.disconnect();
    }
    setWalletType(undefined);
    setAccount(undefined);
    setConnected(false);
    setConnecting(false);
    setAdapter(undefined);
    localStorage.removeItem('suiWallet');
  }, [adapter]);

  const getAccount = async () => {
    if (walletType === 'suiWallet') {
      const accounts = await (window).suiWallet.getAccounts();
      setAccount(accounts[0])
    }
    else if (walletType === 'suietWallet') {
      const accounts = await (window).__suiet__.getAccounts();
      setAccount(accounts.data[0])
    }
    else if (walletType === 'martianSuiWallet') {
      const accounts = await adapter.getAccounts();
      setAccount(accounts[0]);
    }
    else if (walletType === 'ethosWallet') {
      const accounts = await adapter.getAccounts();
      setAccount(accounts[0]);
    }
    else {

    }

  }

  useEffect(() => {
    if (connected && connecting && walletType) {
      getAccount();
    }
  }, [connecting, connected, walletType, adapter]);

  useEffect(() => {
    const initWallet = () => {
      const type = localStorage.getItem('suiWallet');
      if (type === 'suiWallet') {
        connect('suiWallet');
      } else if (type === 'suietWallet') {
        connect('suietWallet');
      }
      else if (type === 'surfWallet') {
        connect('martianSuiWallet');
      }
      else {
        disconnect();
      }
    }

    window.addEventListener('load', initWallet);
    return () => {
      window.removeEventListener('load', initWallet);
    }
  }, []);

  return (
    <StoreContext.Provider value={{ account, connected, connecting, connect, disconnect }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useSuiWallet = () => {
  return useContext(StoreContext);
};

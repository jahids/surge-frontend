import axios, { AxiosError, AxiosResponse } from 'axios';
import React, { useCallback, useState } from 'react';
import {
  usePlaidLink,
  PlaidLinkOnSuccess,
  PlaidLinkOnEvent,
  PlaidLinkOnExit,
  PlaidLinkOptions,
} from 'react-plaid-link';
import { instance } from '../../lib/AxiosInstance';

const PlaidInit = () => {
  const [token, setToken] = useState<string | null>(null);

  // get a link_token from your API when component mounts
  React.useEffect(() => {
    const createLinkToken = async () => {
      instance
        .get(`/plaid/link_token`)
        .then(res => {
          setToken(res.data.link_token);
          console.log(`🎽🎽🛶🎿`, res.data);
        })
        .catch(er => console.log(er));
    };
    createLinkToken();
  }, []);

  const onSuccess = useCallback<PlaidLinkOnSuccess>((publicToken, metadata) => {
    try {
      instance
        .post(`/plaid/exchange_token`, {
          token: publicToken,
          bank_name: metadata.institution?.name,
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(er => console.log(er));
    } catch (error) {}
  }, []);

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
    // onEvent,
    // onExit,
  };

  const {
    open,
    ready,
    // error,
    // exit
  } = usePlaidLink(config);

  return (
    <button onClick={() => open()} disabled={!ready}>
      Connect a bank account
    </button>
  );
};

export default PlaidInit;

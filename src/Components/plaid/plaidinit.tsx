// import { FC,CSSProperties } from "react";

// const buttonStyle : CSSProperties = {
//     padding:'16px 32px',
//     margin:'16px',
//     backgroundColor : 'green',
//     borderRadius  : '6px',
//     color : "white"
// };

// export const PlaidInit : FC = () => {

//     const handleClick   = ()=>{
//         console.log(`clicked to pay at : `,new Date().toLocaleTimeString());
//     };

//     return (
//         <div>
//             <button style={buttonStyle} onClick={handleClick} >Add Bank Account</button>
//         </div>
//     );
// }

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

            instance.get(`/plaid/link_token`).then(res => {

                setToken(res.data.link_token);
                console.log(`🎽🎽🛶🎿`, res.data);

            }).catch(er => console.log(er));

        };
        createLinkToken();
    }, []);

    const onSuccess = useCallback<PlaidLinkOnSuccess>((publicToken, metadata) => {
        // send public_token to your server
        // https://plaid.com/docs/api/tokens/#token-exchange-flow
        // console.log(`🔥🔥🔥🔥🔥🔥`);
        // console.log(publicToken, metadata);
        
        try {
            instance.post(`/plaid/exchange_token`, { token: publicToken , bank_name : metadata.institution?.name }).then(res => {
                console.log(res.data);
            }).catch(er => console.log(er));

        } catch (error) {

        }
    }, []);
    // const onEvent = useCallback<PlaidLinkOnEvent>((eventName, metadata) => {
    //     // log onEvent callbacks from Link
    //     // https://plaid.com/docs/link/web/#onevent
    //     if(eventName.toLowerCase()=='handoff'){
    //         console.log(eventName, metadata);
    //         console.log(`🩳`,metadata.institution_name)

    //     }
    // }, []);
    // const onExit = useCallback<PlaidLinkOnExit>((error, metadata) => {
    //     // log onExit callbacks from Link, handle errors
    //     // https://plaid.com/docs/link/web/#onexit
    //     console.log(`🎁🎀🎗🎁🎁🎗🎗🎞🎗🎁`);
    //     console.log(error, metadata);
    // }, []);

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
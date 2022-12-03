import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css"
import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains
} from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";

import { publicProvider } from "wagmi/providers/public";


import { App } from "./App";
const alchemyId = process.env.ALCHEMY_ID;


const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
  }),
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>

    <div className="w-full grid-cols-3 p-10 align-right">
      <div>
        <React.StrictMode>
          <WagmiConfig client={client}>
            <ConnectKitProvider>
              <App />
              <ConnectKitButton />
            </ConnectKitProvider>
          </WagmiConfig>
        </React.StrictMode>
      </div>
    </div>
    <div className='flex flex-col items-center w-full grid-cols-3 space-y-3 place-content-center lg-flex-row font-Caveat'>
      <h1 className="text-5xl font-Caveat">izeeyahmon.eth</h1>
      <h2 className="text-3xl font-Caveat">
        Junior dev for hire in #web3
      </h2>
      <div className="box-border text-3xl text-left">
        <a className="no-underline hover:underline" href='mailto:orange_morning@protonmail.com'>email</a>
        <a className="no-underline hover:underline" href='https://twitter.com/izeeyahmon'>twitter</a>
        <a className="no-underline hover:underline" href='https://github.com/izeeyahmon'>github</a>
        <div className="p-10 justify-left">
          <h2 className="text-2xl" >Current interests
          </h2>
          <ul className="list-disc">
            <li>Smart contract optimizations and security</li>
            <li>Yul & Rust programming language </li>
            <li>MEV and mempool hell</li>
          </ul>

        </div>
        <div className="p-10 justify-left">
          Open Source works:
          <ul className="list-disc">
            <li>
              <a href="https://cavedao.eth.limo">CaveDAO website</a>
            </li>
            <li>
              <a href="https://etherscan.io/address/0x7576001f171c2e5915E12171C550509aeD29529C#code">CaveDAO SmartContract</a>
            </li>
            <li>
              <a href="#">RonnBot Discord bot</a>
            </li>
          </ul>
        </div>
        <div className="fixed bottom-10 inset-x-100" id="footer"><p className="footer">This website was inspired by : <a className="no-underline hover:underline" href='https://franfran.dev'>franfran's website</a></p></div>
      </div>

    </div>
  </>
)
import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
const NFTDropPage = () => {
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()

  console.log(address)
  return (
    <div className="flex  h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left  */}
      <div className="bg-gradient-to-br from-cyan-800  to-rose-500 lg:col-span-4 ">
        <div className="flex lg:min-h-screen flex-col items-center justify-center py-2">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
            <img
              src="https://links.papareact.com/8sg"
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              alt=""
            />
          </div>
          <div className="text-white text-center p-5 space-y-2">
            <p className="text-4xl font-bold">KHUSH - DROP</p>
            <h2 className="text-gray-300 text-xl">
              A collection of awesome NFTs & collectables
            </h2>
          </div>
        </div>
      </div>

      {/* Right */}

      <div className="flex flex-1 flex-col p-12 col-span-6 ">
        <header className="flex items-center justify-between">
          <h1 className="text-black font-extralight text-xl w-52 lg:w-80 cursor-pointer ">
            The{''}{' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              Awesome🔥
            </span>{' '}
            NFT Marketplace
          </h1>
          <button
            onClick={() => (address ? disconnect() : connectWithMetamask())}
            className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? 'Sign out' : 'Sign in'}
          </button>
        </header>

        <hr className="my-2 border" />

        {address && (
          <p className="text-center text-sm text-rose-400">
            You are connected with wallet : {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}

        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            src="https://links.papareact.com/bdy"
            alt=""
            className="w-80 object-cover pb-10 lg:h-40"
          />

          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The Exclusive Coding Club | NFT Drop
          </h1>
          <p className="pt- text-xl text-green-500">13/21 NFTs are claimed</p>
        </div>

        <button className="mt-10 h-16 w-full rounded-full bg-red-600 text-white font-bold">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  )
}

export default NFTDropPage

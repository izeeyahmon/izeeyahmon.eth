import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function Connect() {
    const { connector: isConnected } = useAccount()
    const { connect, connectors, error, isLoading, pendingConnector } =
        useConnect()
    const { disconnect } = useDisconnect();

    return (
        <>
            {isConnected && (<button onClick={() => disconnect()}>Disconnect</button>)}

            {connectors.map((connector) => (
                <button
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => connect({ connector })}
                >
                    Amew
                    {isLoading &&
                        pendingConnector?.id === connector.id &&
                        ' (connecting)'}
                </button>
            ))}

            {error && <div>{error.message}</div>}
        </>
    )
}

import { useAccount } from 'wagmi'

export function Account() {
    const { address, isConnecting, isDisconnected } = useAccount()

    if (isConnecting) return <div>Connectingâ€¦</div>
    if (isDisconnected) return <div>Disconnected</div>
    return <div></div>


}

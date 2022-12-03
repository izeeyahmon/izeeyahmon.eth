
import { useAccount } from "wagmi";
import { Account, NetworkSwitcher } from "./component";

export function App() {
  const { address } = useAccount();
  return (
    <>
      {address && (
        <>
          <Account />
        </>
      )}
    </>
  )
}
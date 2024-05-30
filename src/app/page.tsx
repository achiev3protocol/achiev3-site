import Link from 'next/link'
import { RiTwitterXFill } from "react-icons/ri"
import { FaGithub } from "react-icons/fa"

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <h1 className="text-6xl font-bold mb-2">achiev3</h1>
            
            <p className="text-lg my-4 mx-8">
                achiev3 is a protocol for defining and rewarding achievements on-chain. It is open source (MIT License), decentralized, and composable, enabling anyone to tap into the robust set of contracts onchain to define 
                their perfect set of digital rewards for their players and users.
            </p>

            <p className="text-lg my-4 mx-8">
                Coming Summer 2024 to Base. Founded by <Link className="text-red-800 hover:text-red-600" href="https://ens0.me">ens0.eth</Link>.
            </p>

            <h2 className="text-3xl font-bold my-4">repos</h2>

            <p className="my-2">All code is MIT licensed unless otherwise noted.</p>

            <ul className="text-lg list-disc">
                <li className="my-2">
                    <Link href="https://github.com/achiev3protocol/achiev3-foundry" className="text-red-800 hover:text-red-600" target="_blank">foundry</Link> - protocol smart contracts
                </li>
            </ul>

            <div className="flex flex-row gap-4 pt-12">
                <a rel="noopener" href="https://x.com/achiev3protocol/" target="_blank" title="Twitter"><RiTwitterXFill style={{width: "32px", height: "32px"}} /></a>
                <a rel="noopener" href="https://github.com/achiev3protocol" target="_blank" title="GitHub"><FaGithub style={{width: "32px", height: "32px"}} /></a>
            </div>
            
        </main>
    )
}

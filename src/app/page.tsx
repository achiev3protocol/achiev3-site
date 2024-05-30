import Link from 'next/link'
import { RiTwitterXFill } from "react-icons/ri"

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <h1 className="text-6xl font-bold mb-2">achieve3</h1>
            
            <p className="text-lg my-4 mx-8">
                achiev3 is a protocol for defining and rewarding achievements on-chain. It is open source (MIT License), decentralized, and composable, enabling anyone to tap into the robust set of contracts onchain to define 
                their perfect rewards for users accomplishing tasks.
            </p>

            <h2 className="text-3xl font-bold my-4">repos</h2>

            <p className="my-2">All code is MIT licensed unless otherwise noted.</p>

            <ul className="text-lg list-disc">
                <li className="my-2">
                    <Link href="https://github.com/achiev3protocol/achiev3-foundry" className="text-red-800 hover:text-red-600" target="_blank">foundry</Link> - protocol smart contracts
                </li>
            </ul>

            <h2 className="text-3xl font-bold my-4">socials</h2>

            <a rel="noopener" href="https://x.com/achiev3protocol/" target="_blank" title="Twitter"><RiTwitterXFill style={{width: "32px", height: "32px"}} /></a>
        </main>
    )
}

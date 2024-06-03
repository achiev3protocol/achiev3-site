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

            <h2 className="text-3xl font-bold my-4">faqs</h2>

            <dl>
                <dt>How does it work?</dt>
                <dd>Creators register a new achievement set, which creates a new contract that they own! From there, the owner or other addresses with delegated unlocking privileges can unlock achievements within the set. These can be unlocked through off-chain conditions by calling the unlock function directly &mdash; but the delegated addresses can be smart contracts handling events on-chain!</dd>
            </dl>

            <dl>
                <dt>How much does it cost?</dt>
                <dd>Unlocking achievements only costs gas &mdash; and will remain that way forever. A small fee will be charged to register a new achievement set with the official implementation of the protocol. In the future, we may offer things like support packages or APIs for a modest price.</dd>
            </dl>

            <h2 className="text-3xl font-bold my-4">repos</h2>

            <p className="my-2">All code is MIT licensed unless otherwise noted.</p>

            <ul className="text-lg list-disc">
                <li className="my-1">
                    <Link href="https://github.com/achiev3protocol/achiev3-foundry" className="text-red-800 hover:text-red-600" target="_blank">foundry</Link> - protocol smart contracts
                </li>
                <li className="my-1">
                    <Link href="https://github.com/achiev3protocol/achiev3-site" className="text-red-800 hover:text-red-600" target="_blank">website</Link> - achiev3.com nextjs site
                </li>
            </ul>

            <div className="flex flex-row gap-4 pt-12">
                <a rel="noopener" href="https://x.com/achiev3protocol/" target="_blank" title="Twitter"><RiTwitterXFill style={{width: "32px", height: "32px"}} /></a>
                <a rel="noopener" href="https://github.com/achiev3protocol" target="_blank" title="GitHub"><FaGithub style={{width: "32px", height: "32px"}} /></a>
            </div>
            
        </main>
    )
}

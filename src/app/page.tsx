import Link from 'next/link'

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <h1 className="text-6xl font-bold mb-2">achive3</h1>
            
            <p className="text-lg my-4">
                achiev3 is a standardized protocol for defining and rewarding achievements onchain. It is open source (MIT License), decentralized, and composable, enabling anyone to tap into the robust set of contracts onchain to define 
                their perfect rewards for users accomplishing tasks. Founded by <Link href="https://ens0.me" className="text-red-800 hover:text-red-600" target="_blank">ens0.eth</Link>.
            </p>

            <h2 className="text-4xl font-bold my-4">Repositories</h2>
            <ul className="text-lg list-disc">
                <li className="my-2">
                    <Link href="https://github.com/achiev3protocol/achiev3-foundry" className="text-red-800 hover:text-red-600" target="_blank">foundry</Link>
                </li>
            </ul>
        </main>
    )
}

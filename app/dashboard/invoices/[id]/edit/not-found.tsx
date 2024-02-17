import { FaceFrownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NotFound() {
    return (
    <main className="flex h-full flex-col items-center justify-center">
        <FaceFrownIcon className='text-gray-400 w-10'></FaceFrownIcon>
        <h2 className="font-semibold text-xl">404 Not Found</h2>
        <p className="">Could not find the requested invoice.</p>
        <Link href="/dashboard/invoices" className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white text-sm transition-colors hover:bg-blue-400">Go Back</Link>
    </main>);
}
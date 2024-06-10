import Link from "next/link";

export default function Navbar () {
    return (
        <nav >
            <div class="flex flex-col mt-8">
                <Link href="/" class="font-bold mb-3">HOME</Link>
                <Link href="/about" class="font-bold">ABOUT</Link>
            </div>
        </nav>
    )
}
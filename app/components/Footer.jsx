import Link from "next/link"

export default function Footer() {
  return (
    <div className="absolute bottom-0 w-full pt-7 text-center">
        <p><span>© 2024</span> <Link href="/" className="hover:underline"> 02™</Link>. All Rights Reserved.</p>
    </div>
  )
}

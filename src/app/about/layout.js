import Link from "next/link";

export default function Layou({children}){
    return (
        <div>
            <ul>
                <li>
                    <Link href={"/about"}>About main</Link>
                </li>
                <li>
                    <Link href={"/about/aboutCollege"}> college main</Link>
                </li>
            </ul>
            {
                children
            }
        </div>
    )
}
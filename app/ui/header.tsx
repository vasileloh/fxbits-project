import Link from "next/link";
import { DropDown } from "../dropdown";


export default function Header() {
    return (
        <div className="inline-flex w-full flex-row px-3 py-3">
           <DropDown />
        </div>
    )
}




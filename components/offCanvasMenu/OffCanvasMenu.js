import Link from "next/link"
import styles from "./OffCanvasMenu.module.css"
import { MdClose } from "react-icons/md"
import { RxCaretDown } from "react-icons/rx"
import { useContext, useState } from "react"
import { AppContext } from "@/pages/_app"

function OffCanvasMeun() {
   const { menuStatus, setMenuStatus } = useContext(AppContext)
   const closeMenu = () => {
      setMenuStatus("close")
   }
   return (
      <aside className={menuStatus == "open" ? `${styles.offCanvasMenu}` : "close"}>
         <div className={styles.offCanvasHeader}>
            <h3>فروشگاه نکست وان کد</h3>
            <MdClose size='20px' onClick={closeMenu} />
         </div>
         <ul>
            <li>
               <Link href='/products/laptops'>لپ تاپ</Link>
               <RxCaretDown />
            </li>
            <li>
               <Link href='/products/mobiles'>موبایل</Link>
               <RxCaretDown />
            </li>
            <li>
               <Link href='/products/tablets'>تبلت</Link>
               <RxCaretDown />
            </li>
            <li>
               <Link href='/products/cameras'>دوربین</Link>
               <RxCaretDown />
            </li>
            <li>
               <Link href='/products/consoles'>کنسول و بازی</Link>
               <RxCaretDown />
            </li>
         </ul>
      </aside>
   )
}
export default OffCanvasMeun
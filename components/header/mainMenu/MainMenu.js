import Link from "next/link"
import { RxCaretDown } from "react-icons/rx"
import styles from "./MainMenu.module.css"
import {useState } from "react"
import SubMenu from "../subMenu/SubMenu"


function MainMenu() {
   const [showSubMenu, setShowSubMenu] = useState(false)
   return (
      <div className={styles.menu}>
         <div className="container">
            <ul>
               <li
                  onMouseEnter={() => setShowSubMenu(true)}
                  onMouseLeave={() => setShowSubMenu(false)}
               >
                  <Link href="/products/laptops">لپ تاپ</Link>
                  <RxCaretDown />
                  {showSubMenu && <SubMenu />}
               </li>
               <li>
                  <Link href="/products/mobiles">موبایل</Link>
                  <RxCaretDown />
               </li>
               <li>
                  <Link href="/products/tablets">تبلت</Link>
                  <RxCaretDown />
               </li>
               <li>
                  <Link href="/products/cameras">دوربین</Link>
                  <RxCaretDown />
               </li>
               <li>
                  <Link href="/products/consoles">کنسول و بازی</Link>
                  <RxCaretDown />
               </li>
            </ul>
         </div>
      </div>
   )
}

export default MainMenu
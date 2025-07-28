import Link from "next/link"
import styles from "./Navbar.module.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { useContext } from "react"
import { AppContext } from "@/pages/_app"

function Navbar() {
   const { setMenuStatus } = useContext(AppContext)
   return (
      <div className={styles.navbar}>
         <div className='container'>
            <ul>
               <li>
                  <GiHamburgerMenu size='20px' onClick={() => setMenuStatus("open")} />
               </li>
               <li>
                  <Link href='/'>صفحه اصلی</Link>
               </li>
               <li>
                  <Link href='/articles'>مقالات</Link>
               </li>
               <li>
                  <Link href='/about'>درباره ما</Link>
               </li>
               <li>
                  <Link href='/contact'>تماس با ما</Link>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Navbar
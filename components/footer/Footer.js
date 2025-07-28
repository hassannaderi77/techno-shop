import styles from "./Footer.module.css"
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa"
import { FaXTwitter, FaTelegram } from "react-icons/fa6"

function Footer() {
   return (
      <div className={styles.footer}>
         <div className="container">
            <div className="row">
               <div className="col">
                  <h4>نکست وان کد</h4>
                  <ul>
                     <li>مجوز و گواهینامه‌ها</li>
                     <li>قوانین و مقررات</li>
                     <li>حریم خصوصی</li>
                     <li>تماس با ما</li>
                     <li>درباره ما</li>
                  </ul>
               </div>

               <div className="col">
                  <h4>راهنما</h4>
                  <ul>
                     <li>تضمین اصالت کالا</li>
                     <li>شرایط عودت کالا</li>
                     <li>نحوه ارسال کالا</li>
                     <li>راهنمای خرید</li>
                     <li>تخفیف‌ها</li>
                  </ul>
               </div>

               <div className="col">
                  <h4>خدمات</h4>
                  <ul>
                     <li>مشاوره رایگان</li>
                     <li>پشتیبانی</li>
                     <li>تبلیغات</li>
                     <li>خرید سازمانی</li>
                     <li>اعتبار سنجی خریداران</li>
                     <li>اسمبل آنلاین</li>
                  </ul>
               </div>

               <div className={`col ${styles.socials}`}>
                  <h4>با ما در ارتباط باشید</h4>
                  <ul>
                     <li>
                        <FaInstagram size="30px" />
                     </li>
                     <li>
                        <FaXTwitter size="30px" />
                     </li>
                     <li>
                        <FaTelegram size="30px" />
                     </li>
                     <li>
                        <FaFacebook size="30px" />
                     </li>
                     <li>
                        <FaLinkedin size="30px" />
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer
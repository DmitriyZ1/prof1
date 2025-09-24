import "./Footer.scss";
import Link from 'next/link'
import { contacts } from "@/options";

export default function Footer() {
    const {tel, mail, vk, telega, whatsapp} = contacts

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__left">
                    <div className="footer-foot">
                        <div className="footer-foot__label"> <Link href={"/"}> <img src="./png/logo.png" className="foot-logo" alt="label" /></Link> </div>
                        <div className="footer-foot__links">
                            <Link className="footer-foot__link" href={"/"}>Home</Link><span className="footer-foot__separator">|</span>
                            <Link className="footer-foot__link" href={"/"}>About</Link><span className="footer-foot__separator">|</span>
                            <Link className="footer-foot__link" href={"/"}>Contacts</Link>
                        </div>
                        <div className="footer-foot__copyright">Разработка и продвижение сайта zavoronk@mail.ru</div>
                    </div>
                </div>
                <div className="footer__average">
                    <div className="footer-foot">
                        <div className="footer-foot__tel footer-foot__item">
                            <Link rel="stylesheet" href={`tel:${tel.link}`}>
                                <div className="svg-circle">
                                    <img src="./svg/phone-svgrepo-com.svg" className="svg-circle__pic" width={20} height={20} alt="phone" />
                                </div>
                            </Link>
                            <div className="footer-foot__point"> {tel.title1}</div>
                        </div>
                        <div className="footer-foot__mail footer-foot__item">
                            <Link rel="stylesheet" href={mail.link}>
                                <div className="svg-circle">
                                    <img src="./svg/mail-svgrepo-com.svg" className="svg-circle__pic" width={20} height={20} alt="mail" />
                                </div>
                            </Link>
                            <div className="footer-foot__point point-mail"> {mail.title1} </div>
                        </div>
                    </div>
                </div>
                <div className="footer__right">
                    <div className="footer-foot">
                        <div className="footer-foot__info">
                            <p>&#x24d2; 2025</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nisi praesentium, nihil eius expedita repellat ducimus blanditiis error maxime, accusantium sit possimus</p>
                        </div>
                        <div className="footer-foot__social">
                            <Link href={vk.link} target="_blank">
                                <div className="social-item">
                                    <img className="social-item__svg" src="./svg/vk-svgrepo-com.svg" alt="" width={25} height={25} />
                                </div>
                            </Link>
                            <Link href={telega.link} target="_blank">
                                <div className="social-item">
                                    <img className="social-item__svg" src="./svg/telegram-alt-svgrepo-com.svg" alt="" width={25} height={25} />
                                </div>
                            </Link>
                            {/* <Link href={"/"}>
                                <div className="social-item">
                                    <img className="social-item__svg" src="./svg/instagram-svgrepo-com.svg" alt="" width={25} height={25} />
                                </div>
                            </Link>
                            <Link href={"/"}>
                                <div className="social-item">
                                    <img className="social-item__svg" src="./svg/instagram-svgrepo-com.svg" alt="" width={25} height={25} />
                                </div>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-fixed">
                <Link href={vk.link} target="_blank" className="footer-fixed__item">
                    <img src="./svg/vk-svgrepo-com.svg" alt="" className="footer-fixed__svg" width="25" height="25" />
                </Link>
                <Link href={whatsapp.link} target="_blank" className="footer-fixed__item">
                    <img src="./svg/whatsapp-svgrepo-com.svg" alt="" className="footer-fixed__svg" width="25" height="25" />
                </Link>
            </div>
        </footer>
    )
}
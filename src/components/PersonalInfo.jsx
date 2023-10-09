import img from '../assets/life_pic_20230927.jpg';
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
const PersonalInfo = (prop) => {
    const { onClickScrollButton } = prop;
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-xs rounded-sm shadow-2xl" />
                    <div className='w-32'></div>
                    <div>
                        <div className='flex items-center justify-content-space-between gap-5'>
                            <h1 className="text-2xl font-bold">Jimmy Wang  /  Frontend Developer</h1>
                            <button className="btn btn-neutral" onClick={() => document.getElementById('contact-info').showModal()}>Contact Info</button>
                            <dialog id="contact-info" className="modal">
                                <div className="modal-box">
                                    <ul>
                                        {
                                            [
                                                "profile",
                                                "email"
                                            ].map((info, i) => (
                                                <li key={i} className='mt-5'>
                                                    {info == "profile" && (<a href='https://linkedin.com/in/jimmyww9' target="_blank" rel="noreferrer" className="flex items-center justify-content-space-between gap-5"><AiFillLinkedin size={24} /> <p>linkedin.com/in/jimmyww9</p></a>)}
                                                    {info == "email" && (<a href='mailto:https://jimmyww7710@gmail.com' className="flex items-center justify-content-space-between gap-5"><AiOutlineMail size={24} /><p>jimmyww7710@gmail.com</p></a>)}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>Close</button>
                                </form>
                            </dialog>
                        </div>

                        <ul className="py-6 ml-4">
                            <li className="list-disc">
                                Experience in working projects: Angularjs, Angular 2+, Angular Material UI, Vue2, Vue3, Vuetify, Node.js, Electron, HTML, CSS, SCSS, Canvas, JavaScript, TypeScript.
                            </li>
                            <li className="list-disc pt-4">
                                Side Project experience: React.js, Next.js (CSR, SSR) <br />
                                (Work on learning React 18 recently by building some projects. )
                            </li>
                            <li className="list-disc pt-4">
                                Experience years on reaching customer needs of UI surface and animation effects for products. Also experience in software development of building desktop applications.
                            </li>
                        </ul>
                        <button className="btn btn-primary" onClick={onClickScrollButton}>view works</button>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default PersonalInfo

import img from '../assets/myself.png';
import bgImg from '../assets/Designer.jpeg';
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
const PersonalInfo = (prop) => {
    const { onClickScrollButton } = prop;
    const bg = {
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 200%), 
        url('${bgImg}')`,
        backgroundSize: `cover`,
        backgroundPosition: `center`
    }
    return (
        <div>
            <div className="min-h-screen" style={bg}>
                <div className="flex items-end min-h-screen flex-wrap">
                    <img src={img} className="w-full max-w-[30%] rounded-sm hidden sm:block" />
                    <div className='w-16'></div>
                    <div className="self-center sm:max-w-[50%] card p-8 mt-8 mb-8 bg-[#ffffff]">
                        <div className='flex items-center justify-content-space-between gap-5 flex-wrap'>
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
                                Experience in working projects: React.js ,Angularjs, Angular 2+, Angular Material UI, Vue2, Vue3, Vuetify, Node.js, Electron, HTML, CSS, SCSS, Canvas, JavaScript, TypeScript.
                            </li>
                            <li className="list-disc pt-4">
                                Experience years on reaching customer needs of UI interface and animation effects for products. Also experience in software development of building desktop applications.
                            </li>
                        </ul>
                        <button className="btn btn-outline border-2 border-[#8c8c8c]-500" onClick={onClickScrollButton}>view works</button>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default PersonalInfo

import img from '../assets/life_pic_20230927.jpg';
const PersonalInfo = (prop) => {
    const { onClickScrollButton } = prop;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-xs rounded-sm shadow-2xl" />
                    <div className='w-32'></div>
                    <div>
                        <h1 className="text-2xl font-bold">Jimmy Wang  /  Frontend Developer</h1>
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
            </div>
        </div>
    )
}

export default PersonalInfo

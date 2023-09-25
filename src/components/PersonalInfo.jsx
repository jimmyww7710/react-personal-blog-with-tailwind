// import img from '../assets/jimmy.png';
const PersonalInfo = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-32'></div>
                    <div>
                        <h1 className="text-2xl font-bold">Jimmy Wang  /  Frontend Developer</h1>
                        <ul className="py-6">
                            <li className="list-disc">
                                Experience on work project: Angularjs, Angular 2+, Angular Material UI, Vue2, Vue3, Vuetify, Node.js, Electron, HTML, CSS, SCSS, Canvas, JavaScript, TypeScript.
                            </li>
                            <li className="list-disc">
                                Side Project experience: React.js, Next.js (CSR, SSR) <br />
                                (Work on learning React 18 recently by building some projects. )
                            </li>
                            <li className="list-disc">
                                Experience years on reaching customer needs of UI surface and animation effects for products. Also experience in software development of building desktop applications.
                            </li>
                        </ul>
                        <button className="btn btn-primary">works</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo

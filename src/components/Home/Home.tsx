import { Link } from "react-router-dom";

const Home = () => {
    return (
        
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">¡Bienvenidos!</h1>
                    <p className="py-6">El propósito de esta web es simplificar la planificación digital al ofrecer una calculadora que genera presupuestos personalizados para publicidad en línea, optimización de motores de búsqueda (SEO) y diseño de páginas web, adaptados a las necesidades específicas de cada usuario. Solo tienes que ingresar tus datos y preferencias, y obtendrás un presupuesto detallado en segundos.</p>
                    <Link to="/form" className="btn btn-neutral">Comenzar</Link>
                </div>
            </div>
        </div>

    )

}

export default Home;
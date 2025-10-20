import Logo from '../../assets/logo-econverse.png'

import './brands.scss'

const Brands = () => {
    return (
        <section className="brands">
            <div className="container">
                <h2>Navegue por marcas</h2>
                <div className="card-container-econverse">
                    <div className='card-econverse'>
                        <img src={Logo} alt="Logo Econverse" />
                    </div>
                    <div className='card-econverse'>
                        <img src={Logo} alt="Logo Econverse" />
                    </div>
                    <div className='card-econverse'>
                        <img src={Logo} alt="Logo Econverse" />
                    </div>
                    <div className='card-econverse'>
                        <img src={Logo} alt="Logo Econverse" />
                    </div>
                    <div className='card-econverse'>
                        <img src={Logo} alt="Logo Econverse" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Brands;
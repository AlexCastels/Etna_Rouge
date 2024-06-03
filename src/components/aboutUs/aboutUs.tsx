import '../aboutUs/aboutUs.scss'
import Footer from '../footer/Footer';
import NavBarBottom from '../navbar/NavbarBottom';
import NavBarTop from '../navbar/NavbarTop';
const AboutUs = () => {

    return (
        <>
            <NavBarTop/>
            <div className="wrapper-aboutus">
                <div className="container-aboutus">
                    <img className='first-img-aboutus' src={'./src/assets/VulcanImgAboutUs.webp'} alt="Image of Vulcan" />
                    <div className='header-text'>
                        <h1>ABOUT ETNAROUGE</h1>
                        <h2>EtnaRouge è lo shop online internazionale più scottante dell'XXI secolo</h2>
                        <h3>Un'idea nata da un gruppo di sviluppatori ha dato vita a questo e-commerce dove potrai trovare le ultime mode del momento! </h3>
                    </div>
                    <div className="personal-card-section">
                        <h1>WHO WE ARE</h1>
                        <div className='personal-card-container'>
                            <div className='personal-card'>
                                <img src="../src/assets/alessandroCastelliPhoto.png" id='person-1' alt="person 1" />
                                <h3>Alessandro Castelli</h3>
                            </div>
                            <div className='personal-card'>
                                <img src="../src/assets/eleonoraMelodiaPhoto.jpeg" id='person-2' alt="person 2" />
                                <h3>Eleonora Melodia</h3>
                            </div>
                            <div className='personal-card'>
                                <img src="../src/assets/paoloBaiadaPhoto-2.jpg" id='person-3' alt="person 3" />
                                <h3>Paolo Baiada</h3>
                            </div>
                            <div className='personal-card'>
                                <img src="../src/assets/jacopoSangregorioPhoto-3.jpg" id='person-4' alt="person 4" />
                                <h3>Jacopo Sangregorio</h3>
                            </div>
                            <div className='personal-card'>
                                <img src="../src/assets/dennisGloriosoPhoto.jpg" id='person-5' alt="person 5" />
                                <h3>Dennis Glorioso</h3>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <Footer/>
            <NavBarBottom/>
        </>
    )
}

export default AboutUs;
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
                                <img src="https://th.bing.com/th/id/R.fa274bcbaaaaa6296613c77708b739f7?rik=0RqgUJLImvJgiw&riu=http%3a%2f%2fdl9fvu4r30qs1.cloudfront.net%2fa2%2f25%2f9921c1ca4822aab89c4a83bc1658%2fthe-office-steve-carell.jpg&ehk=2zULbkNCNrjof9MQ%2bWww4gaqDfiCAqUDSH67f1gqBaw%3d&risl=&pid=ImgRaw&r=0" alt="person 1" />
                                <h3>Alessandro Castelli</h3>
                                <p>Descrizione 1</p>
                            </div>
                            <div className='personal-card'>
                                <img src="https://th.bing.com/th/id/R.fa274bcbaaaaa6296613c77708b739f7?rik=0RqgUJLImvJgiw&riu=http%3a%2f%2fdl9fvu4r30qs1.cloudfront.net%2fa2%2f25%2f9921c1ca4822aab89c4a83bc1658%2fthe-office-steve-carell.jpg&ehk=2zULbkNCNrjof9MQ%2bWww4gaqDfiCAqUDSH67f1gqBaw%3d&risl=&pid=ImgRaw&r=0" alt="person 1" />
                                <h3>Eleonora Melodia</h3>
                                <p>Descrizione 2</p>
                            </div>
                            <div className='personal-card'>
                                <img src="https://th.bing.com/th/id/R.fa274bcbaaaaa6296613c77708b739f7?rik=0RqgUJLImvJgiw&riu=http%3a%2f%2fdl9fvu4r30qs1.cloudfront.net%2fa2%2f25%2f9921c1ca4822aab89c4a83bc1658%2fthe-office-steve-carell.jpg&ehk=2zULbkNCNrjof9MQ%2bWww4gaqDfiCAqUDSH67f1gqBaw%3d&risl=&pid=ImgRaw&r=0" alt="person 1" />
                                <h3>Paolo Baida</h3>
                                <p>Descrizione 3</p>
                            </div>
                            <div className='personal-card'>
                                <img src="https://th.bing.com/th/id/R.fa274bcbaaaaa6296613c77708b739f7?rik=0RqgUJLImvJgiw&riu=http%3a%2f%2fdl9fvu4r30qs1.cloudfront.net%2fa2%2f25%2f9921c1ca4822aab89c4a83bc1658%2fthe-office-steve-carell.jpg&ehk=2zULbkNCNrjof9MQ%2bWww4gaqDfiCAqUDSH67f1gqBaw%3d&risl=&pid=ImgRaw&r=0" alt="person 1" />
                                <h3>Jacopo Sangregorio</h3>
                                <p>Descrizione 4</p>
                            </div>
                            <div className='personal-card'>
                                <img src="https://th.bing.com/th/id/R.fa274bcbaaaaa6296613c77708b739f7?rik=0RqgUJLImvJgiw&riu=http%3a%2f%2fdl9fvu4r30qs1.cloudfront.net%2fa2%2f25%2f9921c1ca4822aab89c4a83bc1658%2fthe-office-steve-carell.jpg&ehk=2zULbkNCNrjof9MQ%2bWww4gaqDfiCAqUDSH67f1gqBaw%3d&risl=&pid=ImgRaw&r=0" alt="person 1" />
                                <h3>Dennis Glorioso</h3>
                                <p>Descrizione 5</p>
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
// import { Plp } from './components/Plp'
import { Carousel } from './components/Carousel.tsx'

function App() {
    const items: string[] = ['https://images.pexels.com/photos/13939465/pexels-photo-13939465.jpeg?auto=compress&cs=tinysrgb&w=600', 'Item 2', 'Item 3', 'Item 4','Item 5','Item 6','Item 7'];

    return (
        <>
            {/* <Plp/> */}
            <Carousel items={items}/>
        </>
    )
}

export default App

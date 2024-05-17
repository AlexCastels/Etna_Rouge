import { useAppSelector } from '../../redux/hook';
import { useParams } from 'react-router-dom';

const PdpHeader = () => {
    const { id } = useParams()
    const product = useAppSelector((state) => state.product.products)
    const element = product.find((p: any) => p.id == id)
    return (
        <>
            <div className="pdp-detail-header">
                <h4 className="pdp-name-product">{element?.name}</h4>
                <p className="pdp-price">{element?.price}€</p>
                <p className="pdp-color">Color ###</p>
            </div>
        </>
    )
}

export default PdpHeader
import { useNavigate } from "react-router-dom";
import "../errorPage/ErrorPage.scss"
import Button from "../UI/button/Button";


const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="error-wrapper">
                <div className="error-container">
                    <h1>Something went wrong</h1>
                    <Button onClick={() => navigate(-1)}>Go Back</Button>
                </div>
            </div>
            


        </>
    )
}

export default ErrorPage;
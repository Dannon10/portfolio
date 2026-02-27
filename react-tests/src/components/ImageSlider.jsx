import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider(props) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true);
                setErrorMsg(null);
                const response = await fetch(`${props.url}?page=${props.page}&limit=${props.limit}`);
                const data = await response.json();
                setImages(data);
                setLoading(false);
            } catch (e) {
                setLoading(false);
                setErrorMsg(e.message);
            }
        };

        fetchImages();
    }, [props.url, props.page, props.limit]); 

    function handlePrevSlide() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handleNextSlide() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }


    return (
        <div className="image-slider-container">
            {loading ? <div>Loading data! Please wait</div> : null}
            {errorMsg ? <>
            <div>Error occurred {errorMsg} </div> 
            <p>Check Network Connection!</p>
            </>: null}
            <BsArrowLeftCircleFill
                className=" arrow left-arrow"
                onClick={() => handlePrevSlide()}
            />
            {images.map((imageItem, index) => (
                    <img
                        src={imageItem.download_url}
                        alt={imageItem.download_url}
                        key={imageItem.id}
                        className={
                            currentSlide === index
                                ? "image-slider"
                                : "hide-image-slider"}
                    />
                ))}
            <BsArrowRightCircleFill
                className=" arrow right-arrow"
                onClick={() => handleNextSlide()}
            />
            {
                <span className="circle-indicators">
                    {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={
                                    currentSlide === index 
                                    ? "current-indicator" 
                                    : " current-indicator inactive-indicator"}
                                    >
                            </button>
                        ))}
                </span>
            }
        </div>
    )
}

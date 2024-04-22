import {useState} from "react";
import './ImageSlider.css'

type ImageSliderProps = {
    images: {
        src: string
        alt: string
    }[]
}

export function ImageSlider({images}: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)

    function showNext() {
        setImageIndex(index => {
            if (index === images.length - 1) return 0
            return index + 1
        })
    }

    function showPrev() {
        setImageIndex(index => {
            if (index === 0) return images.length - 1
            return index - 1
        })
    }

    return (
        <div className="main-box" style={{
            width: '25rem',
            height: '35rem',
            aspectRatio: '10 / 6',
            margin: '0 auto',
            position: 'relative',
        }}>
            <div style={{width: '100%', height: '100%', overflow: 'hidden', display: 'flex'}}>
                {images.map(({src, alt}, index) => (
                    <img
                        className='slidedImage'
                        key={src}
                        src={src}
                        alt={alt}
                        aria-hidden={imageIndex === index}
                        style={{
                        translate: `${-100 * imageIndex}%`
                    }}/>
                ))}
            </div>
            <button onClick={showNext} className='but' style={{right: 0}} aria-label='View next image'>➡️</button>
            <button onClick={showPrev} className='but' style={{left: 0}} aria-label='View previous image'>⬅️</button>
            <div style={{
                position: 'absolute',
                bottom: '.5rem',
                left: '50%',
                translate: '-50%',
                display: 'flex',
                gap: '.25rem'
            }}>
                {images.map((_, index) => (
                        <button className='slider-but-dot'
                                aria-label={`View image ${index}`}
                                onClick={
                            () => setImageIndex(index)}>
                            {index === imageIndex ? '💖' : '❤️'}
                        </button>
                    )
                )}
            </div>
        </div>

    )
}
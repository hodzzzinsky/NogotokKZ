import {useState} from "react";
import './ImageSlider.css'

type ImageSliderProps = {
    imageSource: string[]
}

export function ImageSlider({imageSource}: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)

    function showNext() {
        setImageIndex(index => {
            if (index === imageSource.length - 1) return 0
            return index + 1
        })
    }

    function showPrev() {
        setImageIndex(index => {
            if (index === 0) return imageSource.length - 1
            return index - 1
        })
    }

    return (
        <div style={{
            width: '100%',
            height: '100%',
            aspectRatio: '10 / 6',
            margin: '0 auto',
            position: 'relative',
        }}>
            <div style={{width: '100%', height: '100%', overflow: 'hidden', display: 'flex'}}>
                {imageSource.map(src => (
                    <img key={src} className='slidedImage' src={src} alt="name" style={{
                        translate: `${-100 * imageIndex}%`
                    }}/>
                ))}
            </div>
            <button onClick={showNext} className='but' style={{right: 0}}>➡️</button>
            <button onClick={showPrev} className='but' style={{left: 0}}>⬅️</button>
            <div style={{
                position: 'absolute',
                bottom: '.5rem',
                left: '50%',
                translate: '-50%',
                display: 'flex',
                gap: '.25rem'
            }}>
                {imageSource.map((_, index) => (
                        <button className='slider-but-dot' onClick={
                            () => setImageIndex(index)}>
                            {index === imageIndex ? '💖' : '❤️'}
                        </button>
                    )
                )}
            </div>
        </div>

    )
}
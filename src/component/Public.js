import React from 'react'
import PhotoGallery from "./PhotoGallery";

const Public = () => {
    return (
        <>
            {/* content */}
            <div>
                <img src="./imgs/img (1).webp" style={{ 'text-align': 'center' }} alt='resort' />
                <p style={{ 'text-align': 'center', fontSize: 'small' }} >
                    location 1
                </p>
            </div>
            <div style={{ 'min-width': '10em' }}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dui pellentesque, elementum eros
                    sit amet, rutrum mauris. Nunc ornare nulla non mauris pharetra ornare. Mauris at est ac sem commodo
                    efficitur. Nullam imperdiet magna non commodo ullamcorper. Curabitur maximus orci iaculis massa
                    interdum varius. Maecenas non nisl tortor. Sed vel ornare erat.

                    Vivamus nec porta quam. Fusce ut lectus in nisl pretium auctor id id purus. Nullam tellus sapien,
                    tempus ac pellentesque sed, pharetra ut libero. Quisque facilisis semper ante, at cursus orci
                    vehicula
                    nec. Ut sagittis sollicitudin est, ac ultricies leo vehicula ac. Maecenas in fringilla eros, vel
                    dignissim risus. Donec facilisis ornare tortor vitae eleifend. Nam eu facilisis libero. Sed dapibus
                    condimentum diam in tempus. Nam pharetra arcu enim, a venenatis justo dictum et. Pellentesque
                    rhoncus
                    elit at faucibus ullamcorper. Aenean nec nunc convallis nulla vulputate rutrum et in nibh. Praesent
                    elit ex, cursus et venenatis sit amet, varius luctus erat. Pellentesque nec velit et metus rhoncus
                    tempus. Duis faucibus pulvinar est, id accumsan risus fringilla id.
                </p>
            </div>
            <div style={{
                backgroundColor: 'var(--theme-color)',
                backgroundImage: 'url("./imgs/img (10).jpg")',
                color: 'white',
                height: '18em',
                textAlign: 'left',
                padding: '30px'
            }}>
                <h2>We offer many services;<br />from your flights to <br />your accomodations,  <br />worldwide.</h2>
            </div>
            {/* <PhotoGallery /> */}
            {/* content */}
        </>
    )
}
export default Public;
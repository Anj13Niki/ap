import './Portfolio.css'


import Slider from './Slider'
import data from './data'
export default function Portfolio(){
    
    return(
        <>
            <section id='portfolio'className='portfolio'>
                <h2>Portfolio</h2>
                <Slider slides={data}/>

            </section>
        </>
    )
}
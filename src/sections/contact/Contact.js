import './Contact.css'

export default function Contact(){
    return(
        <section id='contact'>
            <h2>Let's Connect!!......</h2>
            <h3><p>Start by saying Hello &#128075;....</p></h3>
            <div className='contact'>
                <form action='https://formspree.io/f/mvojpvpr' method='POST'>
                    <label>Your Name</label>
                    <input type='text'name='username' placeholder='Enter your name....'required/>
                    <br/>
                    <label>Your email</label>
                    <input type='email' name='email' placeholder='Enter your email...' required/><br/>
                    <label>Your message</label>
                    <textarea rows="6" name='mesaage' placeholder='Enter your message.....' required/>
                    <button className='btn'>Send</button>
                </form>
            </div>
        </section>
    )
}
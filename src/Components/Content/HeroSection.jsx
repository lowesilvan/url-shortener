import React from 'react'
import illustration from '../../Assets/images/illustration-working.svg'

function HeroSection() {
    return (
        <section>
            <div>
                <img src={illustration} alt="illustration"/>
            </div>
            <div>
                <h1>More than just shorter links</h1>
                <p>Build your brand’s recognition and get detailed insights on how your
                    links are performing.</p>
                <a href="/">Get Started</a>
            </div>
        </section>   
    )
}

export default HeroSection

import React from 'react'
import BoostSection from './BoostSection'
import Feature from './Feature'
import LinkResultSection from './LinkResultSection'
import StatisticsSection from './StatisticsSection'


function ShortenerSection({isPending, error, shorten, alert}) {

    return (
        <div className="shorten">
                {isPending && <div><h1>Loading</h1></div>}
                {error && 
                    <div className="link-result">
                        <div className="alert">
                            <p>
                                {error}
                            </p>
                        </div>
                    </div>
                }
                { alert && 
                    <div className="link-result">
                        <div className="alert">
                            <p>
                                Cannot Shorten an Empty Field. Please Enter a valid URL!
                            </p>
                        </div>
                    </div>
                }
                { shorten && shorten.map((card, index) => (<LinkResultSection key={index} shorten={card} />))}
                <StatisticsSection />
            <div>
                <Feature />
            </div>
            <div>
                <BoostSection />
            </div>
        </div>
    )
}

export default ShortenerSection

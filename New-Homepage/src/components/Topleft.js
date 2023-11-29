import { useEffect, useState } from "react"

export default function Top(){
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(()=> {
        window.addEventListener('resize', function(){
            setWindowWidth(window.innerWidth)
        })
        return window.removeEventListener('resize', function(){
            setWindowWidth(window.innerWidth)
        })
    }, [])

    
return(
    <div className="top-content">
        <div className="top-left">
            <img className="web3-image" src={`${process.env.PUBLIC_URL}/assets/images/${windowWidth > 700 ? 'image-web-3-desktop.jpg':'image-web-3-mobile.jpg'}`} alt="" />
            <div className="top-left-description">
                <h1>The Bright Future of Web 3.0?</h1>
                <div className="description-more">
                    <p className="left-description">We dive into the next
                        evolution of the web that claims to put the power of
                        the platforms back into the hands of the people. But 
                        is it really fulfilling its promise?
                    </p>
                    <button className="more">READ MORE</button>
                </div>
            </div>
        </div>
        <div className="top-right">
            <div className="top-right-contents">
                <h2>New</h2>
                <div className="top-right-description">
                    <h3 className="head">Hydrogen VS Electric Cars</h3>
                    <p className="description">Will hydrogen-fueled cars ever catch up to EVs?</p>
                    <div className="field-bar"></div>
                </div>

                <div className="top-right-description">
                    <h3 className="head">The Downsides of AI Artistry</h3>
                    <p className="description">What are the possible adverse effects of 
                        on-demand AI image generation?
                    </p>
                    <div className="field-bar"></div>
                </div>

                <div className="top-right-description">
                    <h3 className="head last-desc">Is VC Funding Drying Up?</h3>
                    <p className="description">Private funding by VC firms is down 50% YOY. 
                        We take a look at what that means.
                    </p>
                </div>
            </div>
            
        </div>
    </div>
)
}
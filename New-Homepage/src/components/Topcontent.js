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
                <h2>The Bright Future of Web 3.0?</h2>
                <div className="description-more">
                    <p className="left-description">We dive into the next
                        evolution of the web that claims to put the power of
                        the platforms back into the hands of people. But 
                        is it really fulfilling its promise?
                    </p>
                    <button>READ MORE</button>
                </div>
            </div>
        </div>
        <div className="top-right">
            <h3>New</h3>
            <div className="top-right-description">
                <h4>Hydrogen VS Electric Cars</h4>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                <div className="field-bar"></div>
            </div>

            <div className="top-right-description">
                <h4>The Downside of AI Artistry</h4>
                <p>What are the possible adverse effects of 
                    on-demand AI image generation?
                </p>
                <div className="field-bar"></div>
            </div>

            <div className="top-right-description">
                <h4>Is VC Funding Drying Up?</h4>
                <p>Private funding by VC firms is down 50% YOY. 
                    We take a look at what that means.
                </p>
            </div>
            
        </div>
    </div>
)
}
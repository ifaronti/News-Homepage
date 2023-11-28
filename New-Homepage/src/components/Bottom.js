import React from "react";

export default function Bottom(){
    let [datas, setDatas] = React.useState([])

    React.useEffect(() => {
        fetch('Bottomdata.json')
            .then(response => response.json())
            .then(json => setDatas(json))
    }, [])

    return(
        datas.map(data =>{
            return(
                <div className="headline-card">
                    <img className="headline-img" src={data.image} alt="" />
                    <div className="heading-details">
                        <h4 className="headline-id">{data.id}</h4>
                        <h5 className="headline-heading">{data.heading}</h5>
                        <p className="headline-details">{data.paragraph}</p>
                    </div>
                </div>
            )
        })
    )
}
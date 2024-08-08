

export default function Card(props){
    console.log(props.img)
    return(
        <div className="card">
            <div className="card--image">
                <img 
                    src = {props.img}
                />
                <div className="card--stats">
                    <img 
                    src = "images/star1.png"
                    />
                    <span>{props.rating}</span>
                    <span className="grey">(6) . </span>
                    <span className="grey">USA</span>
                </div>
                <p>Life Lessons with {props.name}</p>
                <p><span className="bold">From $136 </span>/ person</p>
            </div>
        </div>
    )
}


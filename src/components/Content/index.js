import "./index.scss"
import Data from "./data"
import Mapcontent from "./Mapcontent"


export default function Content(){

    const Item = Data.map((item) => {

        return <Mapcontent 
        key={item.id}
        {...item}
        />
    })
    return(
        <div className="cards-list">
            {Item}
        </div>
    )
}
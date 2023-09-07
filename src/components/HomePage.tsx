import { useState } from "react";
import data from "../mock/Data1.json";

function Panel({title, children }: any){
    const[isActive, setIsActive] = useState(false);
    return(
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (<p>{children}</p>) : (<button onClick = {()=> setIsActive(true)}> Show </button>)}
        </section>
    )
}

export  const Accordion: any = () => {
    const newData = data.namesOfCities.map((data) => {
        return(
            <>
                <Panel title={data.title}> {data.Etymology}</Panel>
            </>
        )
    })
    return newData;
}

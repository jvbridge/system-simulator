import { useState } from "react";
import { Card } from "react-bootstrap"
import BasicTile from "../../components/basic"

import './plus.css'

export default function MainPage(){
  const [incrementer, setIncrementer] = useState(5);
  const [tiles, setTiles] = useState([1,2,3,4])


  return ( 
    <div className="mainBody">
      <div className="created tiles">
      {tiles.map((curr) => {
          return (<div className="m-2" key={curr}><BasicTile /></div>)
        }
      )}
      </div>
      <div className="createTile mx-2">
        <Card onClick={()=>{
            const tmp = tiles;
            tmp.push(incrementer)
            setTiles(tmp)
            setIncrementer(incrementer + 1);
          }}>
          <Card.Body>
          <button className="circle plus" ></button>
          </Card.Body>
        </Card>
      </div>
    </div>
    
)
}
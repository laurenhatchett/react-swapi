import { useState, useEffect } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom" 

const StarshipList = () => {
  const [starships, setStarships] = useState([])
  
  useEffect(() => {
    const fetchStarshipData = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
      console.log(starships)
    }
    fetchStarshipData()
  }, [])
  
  
  return ( 
    <>
      <div ClassName="page-container">
          {starships.map((starship) =>
          <div key={starship.name}>
            <Link
            class="starship-list-container"
            to='/starship'
            state={{ starship }}
            >
              {starship.name}
            </Link>
          </div>
          )}
      </div>
    </>
  );
}

export default StarshipList;
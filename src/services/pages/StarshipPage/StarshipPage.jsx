import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import { getStarshipDetails } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipPage = () => {
  const [starshipPage, setStarshipPage] = useState([])
  const location = useLocation()

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarshipDetails(location.state.starship.url)
      setStarshipPage(starshipData)
    }
    fetchStarshipDetails()
  }, [location.state.starship.url])
  
  return (
    <>
      <div className="starship-details-container">
        {getStarshipDetails.name?
        <>
        <h2>Name:{starshipPage.name}</h2>
        <h2>Model:{starshipPage.model}</h2>
        <Link 
        to='/'
        class="return-link">
      <p>RETURN</p> 
        </Link>
        </>
        :
        <>
        <p>Loading Starship details...</p>
        </>
      }
      </div>
    </>
  );
}

export default StarshipPage;
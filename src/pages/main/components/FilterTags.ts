import IBrewery from "../../../core/interfaces/IBrewery";
import { useGetBreweriesAllQuery } from "../../../services/brewery_service";


export default function FilterTags () {

  const {data} = useGetBreweriesAllQuery("20")


  function removeDuplicateCityes(objects: IBrewery[]){
    const uniCityes = [...new Set(objects.map(obj => obj.city))]
    return uniCityes
  }

  function removeDuplicateTypes(objects: IBrewery[]) {
    const uniTypes = [...new Set(objects.map(obj => obj.brewery_type))]
    return uniTypes
  }
  function removeDuplicateStates(objects: IBrewery[]) {
    const uniStates = [...new Set(objects.map(obj => obj.state))]
    return uniStates
  }
  
  const cities = data ? removeDuplicateCityes(data) : []
  const types = data ? removeDuplicateTypes(data) : []
  const states = data ? removeDuplicateStates(data) : []

return {cities, types, states }
}



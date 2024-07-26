// вся логика по динамическому отображению городов и типов и чего то еще
//  Возвраащает 3 массива данных

import IBrewery from "../../../core/interfaces/IBrewery";
import { useGetBreweriesAllQuery } from "../../../services/brewery_service";



export default function FilterTags () {
  const {data, error, isLoading} = useGetBreweriesAllQuery("20")


  function removeDuplicateCityes(objects: IBrewery){

    const uniCityes = new Set()
    for (const obj of objects) {
        for (const tag in obj) {
          if (!uniCityes.has(tag.city)) {
            uniCityes.add(tag.city)
          }
        }
    }
    return Array.from(uniCityes) 
  }

  const cities = data ? removeDuplicateCityes<IBrewery>(data) : []
    

  function removeDuplicateTypes() {

  }
  function removeDuplicateStates() {

}


return cities

    
}



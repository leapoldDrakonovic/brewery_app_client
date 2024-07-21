import { useEffect, useState } from "react";



export default function useFetch<T> (url: string, method: string,) {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
          try {
            setIsLoading(true)
            const response = await fetch(url, {method: method})
            const rdata = await response.json()
            setData(rdata)
            setIsLoading(false)
          } catch (error) {
            throw new Error("Fetch data failed: " + JSON.stringify(error))
          }
        }
    
        fetchData()
      }, []);

      return {data, isLoading}
}
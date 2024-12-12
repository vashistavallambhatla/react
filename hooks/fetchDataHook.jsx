import { useEffect, useState } from "react"

const useFetchData = (url) => {
    const [data,setData] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(null)

    const fetchData = async() => {
        setIsLoading(true)
        setTimeout(async()=>{
            try{
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error("Network response was not ok.")
                }
                const data=await response.json()
                console.log(data)
                setIsLoading(false)
                setData(data)
            } catch(error){
                setIsLoading(false)
                setError(error)
            } finally{
                setIsLoading(false)
            }
        },2000) // using setTimeout to display the loading state
    }

    return {user : data, isLoading, error,refetch : fetchData}
}

export default useFetchData
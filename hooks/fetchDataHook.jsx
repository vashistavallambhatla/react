import { useEffect, useState } from "react"

const useFetchData = (url) => {
    const [data,setData] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(null)

    const fetchData = async() => {
        setIsLoading(true)
        const timer = setTimeout(async()=>{
            try{
                const response = await fetch(url)
                if(!response.ok){
                    if(response.status===404){
                        throw new Error("User not found!")
                    }else {
                        throw new Error("Network response was not ok.")
                    }
                }
                const data=await response.json()
                console.log(data)
                setIsLoading(false)
                setData(data)
            } catch(error){
                setError(error.message)
                setIsLoading(false)
            } finally{
                setIsLoading(false)
            }
        },2000) // using setTimeout to display the loading state

        return () => clearTimeout(timer)
    }

    return {user : data, isLoading, error,refetch : fetchData}
}

export default useFetchData
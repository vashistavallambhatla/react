import { useState } from "react"
import useFetch from "../hooks/useFetch"

export default function CustomHook() {
    const [userId,setUserId] = useState(-1)
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`
    const {user,isLoading,error,refetch} = useFetch(url)

    if(error) return <p>{error}</p>

    if(isLoading) return <p>Fetching...</p>
    
    return (
        <>
          <div>
            <form action={refetch} className="users-form">
                <input type="text" placeholder="Enter a user ID between 1 and 10" onChange={e => setUserId(e.target.value)} className="userId-input"></input>
                <br/>
                <button>Fetch Data</button>
            </form>
            <div>
                {
                    user && (
                        <div className="user-details">
                            <p>name : {user.name}</p>
                            <p>username : {user.username}</p>
                            <p>email : {user.email}</p>
                        </div>
                    )
                }
            </div>
          </div>
        </>
    )
}
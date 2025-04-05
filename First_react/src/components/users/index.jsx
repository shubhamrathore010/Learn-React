import { useEffect, useState } from "react"




export default function Users() {

    const  [usersList, setUserList] = useState([]);
    const [pending, setPending] = useState(false);

    async function fetchAllUser() {
        try {
            setPending(true)
            const apiResponse = await fetch('https://dummyjson.com/users')
            const result = await apiResponse.json()
            console.log("result" + result);
            
            if(result?.users) {
                setPending(false)
                setUserList(result?.users)
            } else {
                setUserList([])
                console.log("Problem");
                setPending(false)
            }

        } catch(error){
            console.log(error);         
        }
    }

    // function handleFetchUserList(){
    //     fetchAllUser();
    // }
// useEffect(() => {
//     fetchAllUser();
// }, [])

if(pending) return <h1>Fetching users! Please wait...</h1>

    return (
        <div>
            <h1>All Users Listed here</h1>
            <button onClick={fetchAllUser}>Fecth User List</button>
        <ul>
            {
               usersList && usersList.length > 0 ?
               usersList.map((userItem=> <li key={userItem?.id}>
               <p>{userItem?.firstName} {userItem?.lastName}</p>

               </li>))
                : (<h1>No users found</h1> 
            )}
        </ul>
        </div>
    )
}

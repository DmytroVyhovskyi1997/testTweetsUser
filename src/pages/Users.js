import { Card } from "components/Card/Card"
import { useEffect, useState } from "react"
import { fetchUsers } from "services/Api"

export const Users = () => {
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers(page)
          .then(res => setUsers(res))
          .then(res => setPage(res))
          .catch(err => console.log(err))
      }, [page])
      
    return(
        <>
        <Card users={users}/>
        </>
    )
}
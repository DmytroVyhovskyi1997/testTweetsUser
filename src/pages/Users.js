import { Card } from "components/Card/Card"
import { useEffect, useState } from "react"
import { fetchUsers } from "services/Api"

export const Users = () => {
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers(page)
          .then(res => setUsers(res))
          .catch(err => console.log(err))
      }, [page])
      console.log(setPage)
    return(
        <>
        <Card users={users}/>
        </>
    )
}
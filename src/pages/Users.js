import { Card } from "components/Card/Card"
import { useEffect, useState } from "react"
import { fetchUsers } from "services/Api"
import GoBack from'components/GoBack/GoBack'
import { useLocation } from "react-router"
import { LoadMore } from "components/LoadMore/LoadMore"

export const Users = () => {
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';
    useEffect(() => {
        fetchUsers(page)
          .then(res => setUsers(res))
          .catch(err => console.log(err))
      }, [page])
      console.log(setPage)

      const handlePage = () => {
        setPage(prevpage => prevpage + 1);
      };
    return(
        <>
        <GoBack to={backLinkHref}>Go back</GoBack>
        {users.length > 0 &&<Card users={users}/>}
        {users.length < 12 && <LoadMore loading={handlePage}/>}
        </>
    )
}
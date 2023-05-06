import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchUsers} from 'redux/users/operations'
import { getFilter, getUsers } from "redux/users/selectors"

export const Card = ()=>{
const dispatch = useDispatch()
const users = useSelector(getUsers);
const filter = useSelector(getFilter);

    useEffect(()=>{
        dispatch(fetchUsers())  

    },[dispatch]);
    
    const findUsers = () => {
        const normalizedFilter = filter ? filter.toLowerCase() : '';
    
        if (!users) {
          return [];
        }
    
        return users.filter(users =>
          users.name.toLowerCase().includes(normalizedFilter)
        );
      };
      const filteredUsers = findUsers();

    return(
<>
<ul>
      {filteredUsers.map(({ id, users, tweets, followers, avatar }) => {
        return (
          <li key={id}>
            <p>
              {users}
            </p>
          </li>
        );
      })}
    </ul>
</>
    )
}
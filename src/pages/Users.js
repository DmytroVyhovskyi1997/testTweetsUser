import { Card } from 'components/Card/Card';
import { useEffect, useState } from 'react';
import { fetchUsers } from 'services/Api';
import GoBack from 'components/GoBack/GoBack';
import { useLocation } from 'react-router';
import { LoadMore } from 'components/LoadMore/LoadMore';

export const Users = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const getUsers = async page => {
    try {
      const res = await fetchUsers(page);
      setUsers(prevUsers => [...prevUsers, ...res]);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getUsers(page);
  }, [page]);

  const handlePage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <GoBack to={backLinkHref}>Go back</GoBack>
      <Card users={users} />
      <LoadMore load={handlePage} />
    </>
  );
};

export const Card = ({ users }) => {
    return (
      <div>
        <ul>
          {users.map(({ id, user, avatar, followers, tweets, isFollowing }) => (
            <li key={id}>
              <p>{user}</p>
              <p>{followers}</p>
              <p>{tweets}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  
  
  
  





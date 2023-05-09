import answer from 'images/answer.png';
import logo from 'images/logo.png';
import { useState } from 'react';
import {
  Box,
  Img,
  Stick,
  Ul,
  UserList,
  User,
  Button,
  Span,
  ImgAnswer,
  ImgLogo,
  ButtonFollow,
} from './Card.styled';

export const Card = ({ users }) => {
  const [followingState, setFollowingState] = useState(users.map(() => false));
  const [, setUsers] = useState()

  const toggleFollowing = index => {
    setFollowingState(prevState => {
      const newState = [...prevState];
      newState[index] = !prevState[index];
      return newState;
    });
  };

  const addFollower = index => {
    setFollowingState(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
    const updatedUsers = [...users];
    updatedUsers[index].followers += 1;
    setUsers(updatedUsers);
  };

  return (
    <div>
      <Ul>
        {users.map(({ id, user, avatar, followers, tweets }, index) => (
          <Box key={id}>
            <ImgLogo src={logo} alt="logo" />
            <ImgAnswer src={answer} alt="answer" />
            <Img src={avatar} alt="avatar" />
            <Stick></Stick>
            <UserList>
              <User>{user}</User>
              <User>{tweets} tweets</User>
              {followingState[index] ? (
                <User>{(followers + 1).toLocaleString('en-US')} Followers</User>
              ) : (
                <User>{followers.toLocaleString('en-US')} Followers</User>
              )}
              {followingState[index] ? (
                <ButtonFollow type="button" onClick={() => toggleFollowing(index)}>
                  <Span>Following</Span>
                </ButtonFollow>
              ) : (
                <Button type="button" onClick={() => addFollower(index)}>
                  <Span>Follow</Span>
                </Button>
              )}
            </UserList>
          </Box>
        ))}
      </Ul>
    </div>
  );
};


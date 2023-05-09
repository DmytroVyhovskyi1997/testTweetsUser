import answer from'images/answer.png'
import logo from'images/logo.png'
import { useState } from 'react';
import { Box, Img, Stick, Ul, UserList,  User, Button,Span, ImgAnswer, ImgLogo } from "./Card.styled";

export const Card = ({ users }) => {
    const [followingState, setFollowingState] = useState(
        users.map(() => false) 
    )

    const toggleFollowing = (index) => { 
        setFollowingState(prevState => {
            const newState = [...prevState]
            newState[index] = !prevState[index]
            return newState
        })
    }

    return (
      <div>
        <Ul>
          {users.map(({ id, user, avatar, followers, tweets }, index) => (
            <Box key={id}>
                <ImgLogo src={logo} alt="logo" />
                <ImgAnswer src={answer} alt="answer" />
                <Img src={avatar} alt="avatar" />
                <Stick ></Stick>
                <UserList>
                <User>{user}</User>
              <User>{tweets} tweets</User>
              <User>{followers.toLocaleString('en-US')} Followers</User>
              {followingState[index] ? (<Button  type="button" onClick={() => toggleFollowing(index)}><Span>Following</Span></Button>) : 
              <Button  type="button" onClick={() => toggleFollowing(index)}><Span>Follow</Span></Button>}
                </UserList>
             
            </Box>
            
          ))}
        </Ul>
        
      </div>
    );
};


  
  
  
  
  





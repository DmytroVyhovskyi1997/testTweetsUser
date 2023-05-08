import answer from'images/answer.png'
import logo from'images/logo.png'
import { useState } from 'react';
import { Box, Img, Stick, Ul, UserList,  User, Button,Span, ImgAnswer, ImgLogo } from "./Card.styled";

export const Card = ({ users }) => {
    const [following, isFollowing] = useState()
    return (
      <div>
        <Ul>
          {users.map(({ id, user, avatar, followers, tweets }) => (
            <Box key={id}>
                <ImgLogo src={logo} alt="" />
                <ImgAnswer src={answer} alt="" />
                <Img src={avatar} alt="" />
                <Stick ></Stick>
                <UserList>
                <User>{user}</User>
              <User>{tweets} tweets</User>
              <User>{followers} Followers</User>
              {isFollowing ? (<Button  type="button"><Span>Follow</Span></Button>) : 
              <Button  type="button"><Span>Follow</Span></Button>}
              <Button  type="button"><Span>Following</Span></Button>
                </UserList>
             
            </Box>
            
          ))}
        </Ul>
        
      </div>
    );
  };
  
  
  
  
  





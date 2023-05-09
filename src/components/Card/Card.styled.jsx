import styled from 'styled-components';

export const Box = styled.li`
  position: relative;
  width: 380px;
  height: 496px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 20px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-basis: calc(33.33333% - 20px);
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-bottom: 20px;
  padding: 0;
`;

export const Img = styled.img`
  position: absolute;
  z-index: 999;
  top: 178px;
  left: 150px;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
  display: flex;
  justify-content: center;
  width: 80px;
  height: 80px;
  overflow: hidden;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;
export const Stick = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 216px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  height: 8px;
`;
export const UserList = styled.div`
  text-align: center;
  align-items: center;
  margin-top: 242px;
  margin-bottom: 26px;
`;
export const User = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;
export const Button = styled.button`
  width: 196px;
  height: 50px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
export const ButtonFollow = styled.button`
  width: 196px;
  height: 50px;

  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
export const Span = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;
export const ImgAnswer = styled.img`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;
`;
export const ImgLogo = styled.img`
  margin-left: 20px;
  margin-top: 20px;
`;

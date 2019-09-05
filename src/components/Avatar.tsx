import React from 'react';
import styled from 'styled-components';
import { ImageCircle } from './ImageCircle';

interface Props {
  avatarUrl: string;
  username: string;
}

const UserName = styled.figcaption``;

const Profile = styled.figure`
  display: flex;
  align-items: center;
  margin: 0;
  margin-bottom: 2rem;

  > ${ImageCircle} + ${UserName} {
    margin-left: 0.5rem;
  }
`;

const Avatar = ({ avatarUrl, username }: Props) => (
  <Profile>
    <ImageCircle
      src={avatarUrl}
      alt={`Avatar for ${username}`}
      data-testid="user-avatar"
    />
    <UserName>{username}</UserName>
  </Profile>
);

export { Avatar };

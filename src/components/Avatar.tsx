import React from 'react';

interface Props {
  avatarUrl: string;
  username: string;
}

const Avatar = ({ avatarUrl, username }: Props) => (
  <figure>
    <img
      src={avatarUrl}
      alt={`Avatar for ${username}`}
      data-testid="user-avatar"
    />
    <figcaption>{username}</figcaption>
  </figure>
);

export { Avatar };

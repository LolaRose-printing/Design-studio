import React from 'react';
import { observer } from 'mobx-react-lite';

import { Button, Position, Menu, MenuItem, Popover } from '@blueprintjs/core';
import { LogIn, LogOut, User } from '@blueprintjs/icons';
import { useProject } from '../project';

export const UserMenu = observer(({ store }) => {
  const project = useProject();
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    if (project.cloudEnabled) {
      window.puter.auth.getUser().then((user) => {
        setUser(user);
      });
    }
  }, [project.cloudEnabled]);
  return (
    <>
     
    </>
  );
});

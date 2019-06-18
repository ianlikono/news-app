/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';

export const MeContext = React.createContext();

function MeProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [firebaseToken, setFirebaseToken] = useState(null);
  function updateMe(userData) {
    setUser(userData);
  }
  function updateToken(token) {
    setFirebaseToken(token);
  }
  return (
    <>
      <div>
        <MeContext.Provider
          value={{
            me: user,
            firebaseToken,
            updateMe,
            updateToken,
          }}
        >
          {children}
        </MeContext.Provider>
      </div>
    </>
  );
}

const MeConsumer = MeContext.Consumer;

export default MeProvider;
export { MeConsumer };

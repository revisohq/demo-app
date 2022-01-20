import {
  createElement,
  createContext,
  useEffect,
  useMemo,
  useState,
  useContext
} from "react";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  gql
} from "@apollo/client";

const INTROSPECT_USER = gql`
  query introspectUser {
    users {
      id
      name
    }
  }
`;

const AuthContext = createContext();

const AuthProvider = ({
  children,
  loginComponent = () => "noAuth",
  loadingComponent = () => "loading..."
}) => {
  const [sessionToken, setSessionToken] = useState(null);
  const [userData, setUserData] = useState(null);

  // Create the Apollo client
  const apollo = useMemo(() => {
    return sessionToken
      ? new ApolloClient({
          link: new HttpLink({
            uri: `${process.env.REACT_APP_HASURA_URL}/v1/graphql`,
            headers: {
              Authorization: `Bearer ${sessionToken}`
            }
          }),
          cache: new InMemoryCache()
        })
      : new ApolloClient({
          link: new HttpLink({
            uri: `${process.env.REACT_APP_HASURA_URL}/v1/graphql`
          }),
          cache: new InMemoryCache()
        });
  }, [sessionToken]);

  const logout = () => {
    setUserData(null);
    setSessionToken(null);
    localStorage.removeItem("ssid");
  };

  const login = (ssid) => {
    setSessionToken(ssid);
    localStorage.setItem("ssid", ssid);
  };

  // Load session token
  useEffect(() => {
    const token = localStorage.getItem("ssid");
    if (token) setSessionToken(token);
  }, []);

  // Introspect the User
  useEffect(() => {
    if (!sessionToken) return;
    apollo
      .query({ query: INTROSPECT_USER })
      .then(({ data }) => setUserData(data.users[0]))
      .catch((err) => {
        console.error(err);
        logout();
      });
  }, [sessionToken, apollo]);

  // TODO: refresh the token ?!?

  return (
    <ApolloProvider client={apollo}>
      <AuthContext.Provider
        value={{
          user: userData,
          logout,
          login
        }}
      >
        {sessionToken
          ? userData
            ? children
            : createElement(loadingComponent)
          : createElement(loginComponent)}
      </AuthContext.Provider>
    </ApolloProvider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;

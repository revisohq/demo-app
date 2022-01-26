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

import { useGetContext } from "@forrestjs/react-root";
import ErrorBoundary from "../../components/ErrorBoundary";

const INTROSPECT_USER = gql`
  query introspectUser {
    users {
      id
      name
    }
  }
`;

const OneAuthContext = createContext();

export const OneAuthProvider = ({ children }) => {
  const loginComponent = useGetContext("one.login.component");
  const loadingComponent = useGetContext("one.loading.component");
  const [sessionToken, setSessionToken] = useState(null);
  const [userData, setUserData] = useState(null);

  // Create the Apollo client
  const apollo = useMemo(() => {
    const options = {
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "no-cache",
          errorPolicy: "ignore"
        },
        query: {
          fetchPolicy: "no-cache",
          errorPolicy: "all"
        }
      }
    };
    return sessionToken
      ? new ApolloClient({
          ...options,
          link: new HttpLink({
            uri: `${process.env.REACT_APP_HASURA_URL}/v1/graphql`,
            headers: {
              Authorization: `Bearer ${sessionToken}`
            }
          })
        })
      : new ApolloClient({
          ...options,
          link: new HttpLink({
            uri: `${process.env.REACT_APP_HASURA_URL}/v1/graphql`
          })
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
        console.log("!!!!!");
        console.error(err);
        // logout();
      });
  }, [sessionToken, apollo]);

  // TODO: refresh the token ?!?

  return (
    <ApolloProvider client={apollo}>
      <OneAuthContext.Provider
        value={{
          user: userData,
          logout,
          login
        }}
      >
        <ErrorBoundary>
          {sessionToken
            ? userData
              ? children
              : createElement(loadingComponent)
            : createElement(loginComponent)}
        </ErrorBoundary>
      </OneAuthContext.Provider>
    </ApolloProvider>
  );
};

export const useOneAuth = () => useContext(OneAuthContext);

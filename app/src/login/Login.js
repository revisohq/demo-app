import { useQuery, useMutation, gql } from "@apollo/client";
import { useAuth } from "../OneFront";

const LIST_USERS = gql`
  query listUsers {
    users {
      name
    }
  }
`;

const LOGIN_USER = gql`
  mutation loginUser($name: String!) {
    login(name: $name) {
      id
      name
      token
    }
  }
`;

const Login = () => {
  const { login } = useAuth();
  const { data } = useQuery(LIST_USERS);
  const users = data ? data.users.map(({ name }) => name) : [];

  const [verifyUser] = useMutation(LOGIN_USER);

  const authenticate = (name) =>
    verifyUser({ variables: { name } })
      .then(({ data }) => login(data.login.token))
      .catch((err) => {
        console.error("could not do login", err);
      });

  return (
    <div>
      <h4>login as:</h4>
      <ul>
        {users.map((user) => (
          <li key={user} onClick={() => authenticate(user)}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Login;

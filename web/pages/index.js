import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_SERVICES_QUERY = gql`
  query GET_SERVICES_QUERY {
    allService {
      name
    }
  }
`;
const Index = () => {
  return (
    <div>
      <p>Hello world!</p>
      <Query query={GET_SERVICES_QUERY}>
        {(payload) => {
          console.log("we out here", payload);
          return <p>{JSON.stringify(payload.data)}</p>;
        }}
      </Query>
    </div>
  );
};

export default Index;

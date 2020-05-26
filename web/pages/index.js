import { Query } from "react-apollo";
import gql from "graphql-tag";
import * as R from "ramda";

const GET_SERVICES_QUERY = gql`
  query GET_SERVICES_QUERY {
    allService {
      name
    }
  }
`;

const Service = ({ name }) => <p>{name}</p>;
const Index = () => {
  return (
    <div>
      <Query query={GET_SERVICES_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <p>LOADING...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return R.map(Service)(data.allService);
        }}
      </Query>
    </div>
  );
};

export default Index;

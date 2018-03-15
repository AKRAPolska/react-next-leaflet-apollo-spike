import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-link-http';

// can also be a function that accepts a `headers` object (SSR only) and returns a config
const config = {
  link: new HttpLink({
    uri: 'http://localhost:4000', // Server URL (must be absolute)
  }),
};

export default withData(config);

import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

class SampleData extends React.Component {
  constructor(props) {
    super(props);

    this.refreshPosts = this.refreshPosts.bind(this);
  }

  refreshPosts() {
    this.props.feedQuery.refetch();
  }

  deletePost = async (id) => {
    await this.props.deletePost({
      variables: { id },
    });
    this.props.feedQuery.refetch();
  };

  render() {
    if (this.props.feedQuery.loading) {
      return (
        <div>
          <div>Loading (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})</div>
        </div>
      );
    }

    return (
      <React.Fragment>
        <button onClick={this.refreshPosts}>Refresh</button>
        <br />
        <br />
        {this.props.feedQuery.feed &&
          this.props.feedQuery.feed.map(post => (
            <React.Fragment>
              <span key={post.id}>{post.title} | </span>
              <button onClick={() => this.deletePost(post.id)}> Delete </button>
              <br />
              <br />
            </React.Fragment>
          ))}
        {this.props.children}
      </React.Fragment>
    );
  }
}

const FEED_QUERY = gql`
  query FeedQuery {
    feed {
      id
      text
      title
      isPublished
    }
  }
`;

const DELETE_MUTATION = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;

export default compose(
  graphql(FEED_QUERY, {
    name: 'feedQuery',
  }),
  graphql(DELETE_MUTATION, {
    name: 'deletePost',
  }),
)(SampleData);

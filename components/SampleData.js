import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { Button } from 'antd';
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
        <Button onClick={this.refreshPosts}>Refresh</Button>
        <br />
        <br />
        {this.props.feedQuery.feed &&
          this.props.feedQuery.feed.map(post => (
            <React.Fragment>
              <span key={post.id}>{post.title} | </span>
              <Button type="danger" onClick={() => this.deletePost(post.id)}>
                {' '}
                Delete{' '}
              </Button>
              <br />
              <br />
            </React.Fragment>
          ))}
      </React.Fragment>
    );
  }
}

SampleData.propTypes = {
  feedQuery: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

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

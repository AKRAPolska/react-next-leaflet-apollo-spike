import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { Button } from 'antd';
import gql from 'graphql-tag';
import PostForm from './PostForm';

class SampleData extends React.Component {
  constructor(props) {
    super(props);

    this.refreshPosts = this.refreshPosts.bind(this);
  }

  refreshPosts() {
    this.props.draftsQuery.refetch();
  }

  deletePost = async (id) => {
    await this.props.deletePost({
      variables: { id },
    });
    this.props.draftsQuery.refetch();
  };

  render() {
    if (this.props.draftsQuery.loading) {
      return (
        <div>
          <div>Loading (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})</div>
        </div>
      );
    }

    return (
      <React.Fragment>
        <PostForm />
        <br />
        <Button onClick={this.refreshPosts}>Refresh</Button>
        <br />
        <br />
        {this.props.draftsQuery.drafts &&
          this.props.draftsQuery.drafts.map(post => (
            <React.Fragment key={post.id}>
              <span>{post.title} | </span>
              <Button type="danger" onClick={() => this.deletePost(post.id)}> Delete </Button>
              <br />
              <br />
            </React.Fragment>
          ))}
      </React.Fragment>
    );
  }
}

SampleData.propTypes = {
  draftsQuery: PropTypes.shape({
    refetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    drafts: PropTypes.array.isRequired,
  }).isRequired,
  deletePost: PropTypes.func.isRequired,
};

const DRAFTS_QUERY = gql`
  query draftsQuery {
    drafts {
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
  graphql(DRAFTS_QUERY, {
    name: 'draftsQuery',
  }),
  graphql(DELETE_MUTATION, {
    name: 'deletePost',
  }),
)(SampleData);

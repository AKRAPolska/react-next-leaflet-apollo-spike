import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';


class PostForm extends React.Component {
  state = {
    title: '',
  }

  handlePost = async (e) => {
    e.preventDefault();
    const { title } = this.state;
    await this.props.createPostMutation({
      variables: { title },
    });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handlePost}>
          <h2>Add new</h2>
          <input type="text" placeholder="Post title" onChange={e => this.setState({ title: e.target.value })} value={this.state.title} />
          <input type="submit" disabled={!this.state.title} value="Create" />
        </form>
      </React.Fragment>
    );
  }
}

PostForm.propTypes = {
  createPostMutation: PropTypes.func.isRequired,
};

const CREATE_POST_MUTATION = gql`
  mutation createPostMutation($title: String!) {
    createDraft(title: $title, text: "") {
      id
      title
    }
  }
`;

export default compose(graphql(CREATE_POST_MUTATION, {
  name: 'createPostMutation',
}))(PostForm);

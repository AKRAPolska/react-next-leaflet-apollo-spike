import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { Form, Button, Input, Icon } from 'antd';

const FormItem = Form.Item;

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
        <Form onSubmit={this.handlePost} layout="inline" className="login-form">
          <h4>Dodaj nowy element</h4>
          <FormItem>
            <Input type="text" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Tytuł" onChange={e => this.setState({ title: e.target.value })} value={this.state.title} />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" disabled={!this.state.title}>Dodaj</Button>
          </FormItem>
        </Form>
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

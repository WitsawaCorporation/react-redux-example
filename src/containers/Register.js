import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Layout,
  Form,
  Input,
  Button,
} from 'antd';
import { session } from '../redux/modules';

const { Content } = Layout;
const FormItem = Form.Item;

class Register extends Component {
  checkPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.register(values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <Layout>
        <Content style={{ height: '100vh' }}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="Firstname"
            >
              {getFieldDecorator('firstName', {
                rules: [{ required: true, message: 'Please input your firstname!', whitespace: true }],
              })(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Lastname"
            >
              {getFieldDecorator('lastName', {
                rules: [{ required: true, message: 'Please input your lastname!', whitespace: true }],
              })(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="E-mail"
            >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Password"
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }, {
                  validator: this.checkConfirm,
                }],
              })(<Input type="password" />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Confirm Password"
            >
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: 'Please confirm your password!',
                }, {
                  validator: this.checkPassword,
                }],
              })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">Register</Button>
            </FormItem>
          </Form>
        </Content>
      </Layout>
    );
  }
}

Register.propTypes = {
  form: PropTypes.shape({
    validateFieldsAndScroll: PropTypes.func,
    getFieldDecorator: PropTypes.func,
  }).isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuth: state.session.isAuth,
});
const mapDispatchToProps = dispatch => ({
  register: data => dispatch(session.actions.register(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Register));

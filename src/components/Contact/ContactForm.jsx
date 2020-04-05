import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Button } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
ContactForm.propTypes = {};

function ContactForm(props) {
  const [form] = Form.useForm();
  const { t, i18n } = useTranslation();
  const onFinish = (values) => {
    console.log(values);
  };
  const formItemLayout = {
    // labelCol: {
    //   xs: { span: 24 },
    //   sm: { span: 8 },
    // },
    // wrapperCol: {
    //   xs: { span: 24 },
    //   sm: { span: 16 },
    // },
  };
  return (
    <div style={{ marginRight: "10px" }}>
      <Form
        {...formItemLayout}
        form={form}
        name="contact"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item name="name" rules={[]}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder={t("info_contact_form_item_placeholder_name")}
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: t("validate_message_email"),
            },
          ]}
        >
          <Input
            size="large"
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder={t("info_contact_form_item_placeholder_email")}
          />
        </Form.Item>
        <Form.Item name="subject" rules={[]}>
          <Input
            size="large"
            placeholder={t("info_contact_form_item_placeholder_subject")}
          />
        </Form.Item>
        <Form.Item name="content" rules={[]}>
          <Input.TextArea
            rows={5}
            placeholder={t("info_contact_form_item_placeholder_message")}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="send-form-button">
            {t("info_contact_form_item_button_send")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ContactForm;

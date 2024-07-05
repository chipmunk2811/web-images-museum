import { Popconfirm, Table, Button,Form,Modal,Input } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as ActionType from './duck/types';

export default function Setting() {
  let { Navlink, manhinh } = useSelector((state) => state.settingReducer);
  const [screen, setScreen] = useState(manhinh);
  const [link, setLink] = useState(Navlink);

  const handleChange = (e) => {
    setScreen(e.target.value);
  };

  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch({
      type: ActionType.SETTING_SCREEN,
      payload: screen
    });
  };

  const handleDelete = (index) => {
    Navlink.splice(index, 1);
    localStorage.setItem('Navlink', JSON.stringify(Navlink));
    dispatch({
      type: ActionType.SETTING_DELETE,
      payload: Navlink
    });
    setLink(JSON.parse(localStorage.getItem('Navlink')));
  }

  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const handleAdd = (values) => {
    Navlink.push(values);
    localStorage.setItem('Navlink', JSON.stringify(Navlink));
    dispatch({
      type: ActionType.SETTING_CREATE,
      payload: Navlink
    });
    setLink(JSON.parse(localStorage.getItem('Navlink')));
    setVisible(false);
    // Thực hiện các hành động với giá trị values như gửi lên server, cập nhật state, ...
  };

  const columns = [
    {
      title: 'Page',
      dataIndex: 'link',
      key: 'link'
    },
    {
      title: 'Tên Trang',
      dataIndex: 'namePage',
      key: 'namePage',
    }, {
      title: 'Icon Trang',
      dataIndex: 'icon',
      key: 'icon'
    }, {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      render: (text, record, index) => (
        <span>
          <Popconfirm title="Are you sure to delete?" onConfirm={() => handleDelete(index)}>
            <Button type="danger">Xóa</Button>
          </Popconfirm>
        </span>
      ),
    }
  ];
  return (
    <>
      <div>
        <h1>Màn Hình</h1>
        <input type="number" value={screen} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>

   

      <Table columns={columns} dataSource={link} />

      <div className='mt-3'>
        <Button type="primary" onClick={() => setVisible(true)}>
          Thêm Điều Hướng Trang
        </Button>
        <Modal
          visible={visible}
          title="Thêm mới trang"
          okText="Thêm"
          cancelText="Hủy"
          onCancel={() => setVisible(false)}
          onOk={() => {
            form
              .validateFields()
              .then((values) => {
                form.resetFields();
                handleAdd(values);
              })
              .catch((info) => {
                console.log('Validate Failed:', info);
              });
          }}
        >
          <Form form={form} layout="vertical">
            <Form.Item
              name="link"
              label="Link"
              rules={[{ required: true, message: 'Vui lòng nhập link!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="namePage"
              label="Tên trang"
              rules={[{ required: true, message: 'Vui lòng nhập tên trang!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="icon"
              label="Icon"
              rules={[{ required: true, message: 'Vui lòng nhập icon!' }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  )
}

import React, { useState } from 'react';
import { Table, Button, Popconfirm, Image } from 'antd';
import ModalComponent from '../modal/index';
import api from '../../../../utils/apiUtil';
import { actCustomImages } from '../../images/duck/action';
import { useDispatch, useSelector } from 'react-redux';
import ModalUpdate from '../modalupdate/index';
import { actGetDetail } from './duck/action';
// import ImageUpload from '../createmany';

const DataTable = (props) => {
  let { dataIMG } = props;
  const dispatch = useDispatch();
  const [showUpdate, setShowUpdate] = useState(false);
  const [screen, setscreen] = useState('');

  const handleDelete = (id) => {
    api.delete(`/quan-ly-hinh-anh/${id}`)
      .then((result) => {
        if (result.data.statusCode === 200) dispatch(actCustomImages());
      })
      .catch((error) => {
        console.log(error)
      });
  };

  const handleUpdate = (id) => {
    dispatch(actGetDetail(id))
    setShowUpdate(true);
  };
  let { data } = useSelector((state) => state.GetDetailReducer);
  dataIMG = dataIMG?.filter((item) => {
    if (screen) {
      return item.manhinh === screen;
    } else {
      return item;
    };
  })

  const columns = [
    {
      title: 'Page',
      dataIndex: 'page',
      key: 'page',
      sorter: (a, b) => a.page.localeCompare(b.page),
    },
    {
      title: 'Vị Trí',
      dataIndex: 'vitri',
      key: 'vitri',
      sorter: (a, b) => a.vitri - b.vitri,
    },
    {
      title: 'Image',
      dataIndex: 'urlImg',
      key: 'urlImg',
      render: (urlImg) => <Image
        width={50}
        src={urlImg}
      />,
    },
    {
      title: 'Kích Thước',
      dataIndex: 'kichthuoc',
      key: 'kichthuoc'
    },
    {
      title: 'Nội Dung',
      dataIndex: 'noidung',
      key: 'noidung',
    },
    {
      title: 'Mô Tả',
      dataIndex: 'mota',
      key: 'mota',
    },
    {
      title: 'Loại',
      dataIndex: 'loai',
      key: 'loai',
    },
    {
      title: 'Màn Hình',
      dataIndex: 'manhinh',
      key: 'manhinh',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      render: (id) => (
        <span>
          <Button type="primary" style={{ marginRight: 8 }} onClick={() => handleUpdate(id)}>Cập nhật</Button>
          <Popconfirm title="Are you sure to delete?" onConfirm={() => handleDelete(id)}>
            <Button type="danger">Xóa</Button>
          </Popconfirm>
        </span>
      ),
    },
  ];
  return (
    <>
      {/* <ImageUpload /> */}
      <ModalUpdate setShow={setShowUpdate} show={showUpdate} initialValues={data} />
      <ModalComponent setscreen={setscreen} />
      <Table columns={columns} dataSource={dataIMG} />
    </>
  );
};

export default DataTable;

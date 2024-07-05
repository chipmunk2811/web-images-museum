import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import api from '../../../../utils/apiUtil';
import {actCustomImages} from '../../images/duck/action';

const ModalUpdate = ({ show, setShow, initialValues }) => {
  const [id, setId] = useState('');
  const [kichthuoc, setKickthuoc] = useState('');
  const [vitri, setVitri] = useState('');
  const [noidung, setNoidung] = useState('');
  const [mota, setMota] = useState('');
  const [page, setPage] = useState('');
  const [loai, setLoai] = useState('');
  const [manhinh, setManhinh] = useState('');

  useEffect(() => {
    if (initialValues) {
      setId(initialValues.id || '');
      setKickthuoc(initialValues.kichthuoc || '');
      setVitri(initialValues.vitri || '');
      setNoidung(initialValues.noidung || '');
      setMota(initialValues.mota || '');
      setPage(initialValues.page || '');
      setLoai(initialValues.loai || '');
      setManhinh(initialValues.manhinh || '');
    }
  }, [initialValues]);

  const handleClose = () => setShow(false);

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = {
      id,
      kichthuoc,
      vitri,
      noidung,
      mota,
      page,
      loai,
      manhinh
    };
   
    api.patch(`/quan-ly-hinh-anh/${id}`,updatedData)
    .then((result) => {
        if(result.data.statusCode===200) dispatch(actCustomImages())
    })
    .catch((error) => {
        console.log(error)
    })
    // dispatch(actUpdateImages(updatedData));
   
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Image</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formId">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              disabled
            />
          </Form.Group>
          <Form.Group controlId="formKickthuoc">
            <Form.Label>Kích Thước</Form.Label>
            <Form.Control
              type="text"
              value={kichthuoc}
              onChange={(e) => setKickthuoc(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formVitri">
            <Form.Label>Vị Trí</Form.Label>
            <Form.Control
              type="number"
              value={vitri}
              onChange={(e) => setVitri(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formNoidung">
            <Form.Label>Nội Dung</Form.Label>
            <Form.Control
              type="text"
              value={noidung}
              onChange={(e) => setNoidung(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formMota">
            <Form.Label>Mô Tả</Form.Label>
            <Form.Control
              type="text"
              value={mota}
              onChange={(e) => setMota(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPage">
            <Form.Label>Page</Form.Label>
            <Form.Control
              type="text"
              value={page}
              onChange={(e) => setPage(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formLoai">
            <Form.Label>Loại</Form.Label>
            <Form.Control
              type="text"
              value={loai}
              onChange={(e) => setLoai(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formManhinh">
            <Form.Label>Màn Hình</Form.Label>
            <Form.Control
              type="text"
              value={manhinh}
              onChange={(e) => setManhinh(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalUpdate;
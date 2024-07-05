import React, { useState } from 'react';
import { actAddImages } from './duck/action';
import { Modal, Button, Form,Dropdown, DropdownButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ModalComponent = ({setscreen}) => {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const [kichthuoc, setKickthuoc] = useState('');
  const [vitri, setVitri] = useState('');
  const [noidung, setNoidung] = useState('');
  const [mota, setMota] = useState('');
  const [page, setPage] = useState('');
  const [loai, setLoai] = useState('');
  const [manhinh, setManhinh] = useState('');
 

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setFile('');
    setKickthuoc('');
    setVitri('');
    setNoidung('');
    setMota('');
    setPage('');
    setLoai('');
    setManhinh('');
    setShow(true);
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('kichthuoc', kichthuoc);
    formData.append('vitri', vitri);
    formData.append('noidung', noidung);
    formData.append('mota', mota);
    formData.append('page', page);
    formData.append('loai', loai);
    formData.append('manhinh', manhinh);
    dispatch(actAddImages(formData));
  };

  const handleSort = (key) => {
    // Xử lý khi chọn một tùy chọn sắp xếp
    setscreen(key)
 
  };
  
  return (
    <>
      <div className='container mt-5 d-flex '>
        <Button variant="primary" onClick={handleShow} >
          Thêm Ảnh
        </Button>

        <DropdownButton id="dropdown-basic-button" title="Màn Hình" className="mx-auto">
        <Dropdown.Item onClick={() => handleSort('')}>Tất Cả</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('1')}>1</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('2')}>2</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('3')}>3</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('4')}>4</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('5')}>5</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('6')}>6</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('7')}>7</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('8')}>8</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('9')}>9</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('10')}>10</Dropdown.Item>
        </DropdownButton>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload File</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile">
              <Form.Label>Choose File</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
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
              Thêm
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};


export default ModalComponent

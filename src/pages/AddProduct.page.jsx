import { useNavigate } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';

import useForm from '../hooks/useForm';
import api from '../api/api';

import { Message } from '../components';

const AddProduct = () => {
  const navigate = useNavigate();

  const initialFormData = {
    title: '',
    price: '',
    stock: '',
    thumbnail: '',
    description: ''
  };
  const apiPath = '/products/add';
  const navigatePath = '/';

  const {
    formData,
    error,
    handleChange,
    handleSubmit
  } = useForm(initialFormData, api.post, apiPath, navigatePath);


  return (
    <>
      <Button onClick={() => navigate('/')} className='mb-3 mt-3'>
        חזרה
      </Button>

      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formName'>
              <Form.Label>שם המוצר:</Form.Label>
              <Form.Control
                type='text'
                name='title'
                value={formData.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId='formPrice'>
              <Form.Label>מחיר:</Form.Label>
              <Form.Control
                type='number'
                name='price'
                value={formData.price}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId='formStock'>
              <Form.Label>מלאי:</Form.Label>
              <Form.Control
                type='number'
                name='stock'
                value={formData.stock}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId='formThumbnail'>
              <Form.Label>תמונה:</Form.Label>
              <Form.Control
                type='text'
                name='thumbnail'
                value={formData.thumbnail}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId='formDescription'>
              <Form.Label>תיאור:</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                name='description'
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>

            {error.isError && (
              <Message variant='danger' dismissible={false}>
                {error.message}
              </Message>
            )}

            <Button variant='primary' type='submit' className='mt-3'>
              הוסף מוצר
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default AddProduct;

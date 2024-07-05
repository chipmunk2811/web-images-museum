import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../../../utils/apiUtil';
import { actCustomImages } from '../../images/duck/action';
import { useDispatch } from 'react-redux';

const ImageUpload = () => {
    const [files, setImages] = useState([]);

    const dispatch = useDispatch();
    const handleImageChange = (e) => {
        setImages([...e.target.files]);
       console.log(files)
        api.post(`/quan-ly-hinh-anh/createMany`, files, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((result) => {
            if (result.data.statusCode === 200) dispatch(actCustomImages())
        })
            .catch((error) => {
                console.log(error)
            })


    };



    return (
        <div className="container mt-5">
            <h2>Upload Multiple Images</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="imageUpload" className="btn btn-primary">
                        Upload Images
                        <input
                            type="file"
                            className="form-control-file"
                            id="imageUpload"
                            multiple
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                        />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default ImageUpload;
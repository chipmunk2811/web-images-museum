import React, { useEffect } from 'react'
import DataTable from '../Components/datatable'
import { actCustomImages } from './duck/action'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Loader';
export default function CustomImages() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actCustomImages())
  }, [dispatch])

  let { data, loading } = useSelector((state) => state.customImagesReducer);

  return (
    <>
      {loading && loading ? <Loader /> : <DataTable dataIMG={data}/>}
    </>

  )
}

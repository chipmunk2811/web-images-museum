import React, { useEffect } from 'react';
import Carousel from '../Components/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { actPAGE1 } from '../Page1/duck/action';

export default function Page2() {
  const { manhinh } = useSelector((state) => state.settingReducer);
  const page = 2;
 
  const dispatch = useDispatch();
  useEffect(() => {
    const pagescreen = { manhinh, page };
    dispatch(actPAGE1(pagescreen))
  }, [dispatch,manhinh,page])

  let { data, loading } = useSelector((state) => state.page1Reducer);
 
  return (
    <Carousel data={data} loading={loading}/>
  )
}

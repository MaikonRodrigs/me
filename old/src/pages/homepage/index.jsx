import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoadingPage } from '@/utils/loading';

// import { Container } from './styles';

function Homepage() {
  const [loading, setLoading] = useState(false)
  const localItemRepo = sessionStorage.getItem('__inf')
  const getItem = ((localItemRepo))
  const navigate = useNavigate()


  useEffect(() => {
    if (getItem === null) {
      navigate(`/`)
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  if (loading) {
    return (
      <LoadingPage />
    )
  }

  return <h1>Homepage</h1>;
}

export default Homepage;
import React from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  color: #FFF;
`

const useSelectCurrencies = (label) => {
  const SelectCurrencies = () => (
    <>
      <Label>{label}</Label>
    </>
  )

  

  return [ SelectCurrencies ]
};

export default useSelectCurrencies;

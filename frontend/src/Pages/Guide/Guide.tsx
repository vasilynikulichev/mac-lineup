import React, { useState } from 'react';
import ProductList from './Components/ProductList'
import { MAC_FAMILIES, IMacFamily } from '../../types/IProduct'

export function Guide() {
  const [selected, setSelected] = useState<IMacFamily>(MAC_FAMILIES[0]);

  return (
    <div>
        <ProductList selected={selected} setSelected={setSelected} />
    </div>
  );
}

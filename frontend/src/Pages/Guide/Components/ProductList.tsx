import React, { useState } from 'react';
import { MAC_FAMILIES, IMacFamily } from '../../../types/IProduct'

export type IImagesDict = { [key in IMacFamily]: string };

const person: IPerson = {
  name: "Qwe",
  age: 23,
}


// https://en.wikipedia.org/wiki/Hash_table

const hash = {
  "Qwe": 12,
  "Yhth": 6,
  "Erggerg": 7,
}


const imagesDict: IImagesDict = {
  "MacBook Air": "..",
  "MacBook Pro 13": "..",
  "MacBook Pro 16": "..",
  "iMac": "..",
};

// const a: string[] = ["67", "uhgyut", "byytytg"];
// const a: Array<string> = ["67", "uhgyut", "byytytg"];
// const b: Array<number> = [6, 8];

interface IProductListProps {
  selected: IMacFamily,
  setSelected: (value: IMacFamily) => void,
}

function ProductList({ selected, setSelected }: IProductListProps) {
  return (
    <div>
        {MAC_FAMILIES.map((title) => (
            <label key={title}>
                <h3>{title}</h3>
                <img src={imagesDict[title]} />
                <input
                  name="product"
                  value={title}
                  type="radio"
                  checked={title === selected}
                  onChange={() => setSelected(title)}
                />
            </label>
        ))}
    </div>
  );
}

export default ProductList;

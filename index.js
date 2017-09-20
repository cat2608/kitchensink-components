import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { Select } from '@transferwise/components';
import { Comparison } from '@transferwise/comparison-components';

import "@transferwise/comparison-components/dist/comparison-components.css";
import "@transferwise/components/build/main.css";
import "./css/style.css";

const handleOptionChange = (e) => {
  console.log(e);
};

const Root = () => (
  <div>
    <Select
      selected={null}
      onChange={handleOptionChange}
      onSearchChange={undefined}
      searchValue={undefined}
      options={[
        {
          "header": "Currencies"
        },
        {
          "value": 4,
          "label": "British Pound",
          "currency": "gbp"
        },
        {
          "value": 5,
          "label": "Euro",
          "currency": "eur"
        }
      ]}
    />
    <Comparison
      source="EUR"
      target="GBP"
      amount={5000}
    />
  </div>
);

ReactDom.render(<Root />, document.querySelector('#root'));

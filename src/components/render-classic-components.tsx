import React from "react";
import parse from 'html-react-parser'

import { RenderClassicProps } from "../typescript/component";

export default function RenderClassicComponents(props: RenderClassicProps) {
    
  const { classicData } = props;
  const results = [];
  for (const [key, value] of Object.entries(classicData)) {    
    results.push(
      <div>
        <div>dishcalories: {value.dishcalories}</div>
        <div>dishdesc: {parse(value.dishdesc)}</div>
        <div>dishname: {value.dishname}</div>
        <div>dishprice: {value.dishprice}</div>
        <div>title: {value.title}</div>
        <img src={value.dishimglink.href} alt={value.dishimglink.title}></img>
        <div>locale: {value.locale}</div>
      </div>
    );
  }
  return (
      <div>
        {results}
      </div>
  );
}

// src/components/BorderRadius.js
import React, { useState } from 'react';

function Dimension({ value, onChange, property }: any) {
  const increment = () => {
    let newVal = parseInt(value.replace('px', '')) + 1;
    onChange(`${newVal}px`);
  }

  const decrement = () => {
    let newVal = parseInt(value.replace('px', '')) - 1;
    onChange(`${newVal}px`);
  }

  const handleInputChange = (e: any) => {
    onChange(`${e.target.value}`);
  }

  return (
    <div>
      <p>{property === "width" ? 'Width' : 'Height'}</p>
      <div>
      <input type="text" value={value} onChange={handleInputChange} />
      <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      </div>
      </div>
    </div>
  );
}

function Border({ value, onChange, borderRadius }: any) {
  const [borderRadiusValue, setBorderRadiusValue] = useState<string>(borderRadius.replace('%', ''));
  const [borderWidth, setBorderWidth] = useState<string>('');
  const [borderStyle, setBorderStyle] = useState<string>('');
  const [borderColor, setBorderColor] = useState<string>('');
  const handleInputChange = (e: any, property: string) => {
    if(property==="width"){
      setBorderWidth(e.target.value);
      onChange(`${e.target.value} ${borderStyle} ${borderColor}`, borderRadiusValue);
    } else if(property === "style"){
      setBorderStyle(e.target.value);
      onChange(`${borderWidth} ${e.target.value} ${borderColor}`, borderRadiusValue);
    }else if(property === "color"){
      setBorderColor(e.target.value);
      onChange(`${borderWidth} ${borderStyle} ${e.target.value}`, borderRadiusValue);
    }
  }
  const handleChange = (e: any) => {
    setBorderRadiusValue(e.target.value);
    onChange(`${borderWidth} ${borderStyle} ${borderColor}`, e.target.value);
  }

  return (
    <div>
      <p>Border</p>
      <p>Border Radius</p>
      <div>
      <input type="range" value={borderRadiusValue} min="0" max="100" onChange={handleChange} />
      <p>{value}</p>
      </div>
      <div>
      <input type="text" value={borderWidth} onChange={(e) => {handleInputChange(e, "width")}} placeholder='Width' />
      <select value={borderStyle} onChange={(e) => {handleInputChange(e, "style"); setBorderStyle(e.target.value)}}>
        <option value="">Select a border style</option>
        <option value="none">none</option>
        <option value="hidden">hidden</option>
        <option value="dotted">dotted</option>
        <option value="dashed">dashed</option>
        <option value="solid">solid</option>
        <option value="double">double</option>
        <option value="groove">groove</option>
        <option value="ridge">ridge</option>
        <option value="inset">inset</option>
        <option value="outset">outset</option>
        <option value="initial">initial</option>
        <option value="inherit">inherit</option>
      </select>
      <input type="color" value={borderColor} onChange={(e) => {handleInputChange(e, "color")}} />
      </div>
      {`${borderWidth} ${borderStyle} ${borderColor}`}
    </div>
  );
}

function ColorPicker({ value, onChange,  property }: any) {
  const handleInputChange = (e: any) => {
    onChange(e.target.value);
  }
  return (
    <div>
      <p>{property === "text" ? "Text Color" : "Background Color"}</p>
      <div>
      <input type="color" value={value} onChange={handleInputChange} />
      <p>{value}</p>
      </div>
    </div>
  );
}

export {Dimension, Border, ColorPicker}
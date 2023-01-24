import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Program: Multifib <br/>
      Autor: Maciej Zarębski <br/>
      Nr grupy dziekańskiej: I2ST5
      <Link to="/">Go back home</Link>
    </div>
  );
};

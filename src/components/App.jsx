import React, { useState } from 'react';
import './app.less';
import SearchBar from './SearchBar';
import Card from './Card';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';
import img7 from '../img/7.jpg';
import img8 from '../img/8.jpg';
import Form from './Form';
import Ticket from './Ticket';

const App = () => {
  const [formValues, setFormValues] = useState([]);
  return (
    <div className="app">
      <Form setFormValues={setFormValues} />
      <div className="tickets">
        {formValues.map((item, key) => (
          <div key={key}>
            <Ticket item={item} />
          </div>
        ))}
      </div>
      <SearchBar />
      <div className="cards-wrapper">
        <Card img={img1} pictureTag="forest-1" price="100" />
        <Card img={img2} pictureTag="forest-2" price="50" />
        <Card img={img3} pictureTag="forest-3" price="200" />
        <Card img={img4} pictureTag="forest-4" price="300" />
        <Card img={img5} pictureTag="forest-5" price="130" />
        <Card img={img6} pictureTag="forest-6" price="190" />
        <Card img={img7} pictureTag="forest-7" price="230" />
        <Card img={img8} pictureTag="forest-8" price="110" />
      </div>
    </div>
  );
};

export default App;

/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import './form.less';

// eslint-disable-next-line import/prefer-default-export
const Form = ({ setFormValues }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [country, setCountry] = useState('');
  const [agree, setAgree] = useState(true);
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormValues((state) => [...state, {
      firstName, lastName, birthday, country, agree, time,
    }]);
    console.log(firstName, lastName, birthday, country, agree, time);
  };
  return (
    <form method="POST" onSubmit={handleSubmit} className="form">
      <label htmlFor="firstName">
        First Name:
        <input
          className="form-input"
          type="text"
          value={firstName}
          id="firstName"
          name="firstName"
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>

      <label htmlFor="lastName">
        Last Name:
        <input
          className="form-input"
          type="text"
          value={lastName}
          id="lastName"
          name="lastName"
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>

      <label htmlFor="birthday">
        DOB:
        <input
          className="form-input"
          type="date"
          value={birthday}
          id="lastName"
          name="birthday"
          onChange={(event) => setBirthday(event.target.value)}
        />
      </label>

      <label htmlFor="country">
        Country:
        <select
          defaultValue="USA"
          className="select"
          name="country"
        //  value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          <option>Russia</option>
          <option>Belarus</option>
          <option>Germany</option>
          <option>Ukraine</option>
          <option>USA</option>
        </select>
      </label>

      <label className="agree" htmlFor="agree">
        I agree:
        <input
          type="checkbox"
          id="agree"
          name="agree"
          checked={agree}
          onChange={() => setAgree((prev) => !prev)}
        />
      </label>

      <div className="submit-button">
        <input type="submit" value="Send" className="button" onClick={() => setTime(new Date().toGMTString())} />
      </div>
    </form>
  );
};

export default Form;

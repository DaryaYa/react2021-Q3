import React, { useState, useEffect } from 'react';
import './form.less';

const Form = ({ setFormValues }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [country, setCountry] = useState('');
  const [agree, setAgree] = useState(false);
  const [time, setTime] = useState('');
  const [error, setError] = useState({});

  useEffect((() => {
    const validate = () => {
      setError({});
      if (!agree) {
        setError((state) => ({ ...state, agree }));
      }
      if (birthday === '') {
        setError((state) => ({ ...state, birthday }));
      }
      if (firstName === '') {
        setError((state) => ({ ...state, firstName }));
      }
      if (lastName === '') {
        setError((state) => ({ ...state, lastName }));
      }
      if (country === '') {
        setError((state) => ({ ...state, country }));
      }
    };
    validate();
  }), [agree, birthday, country, firstName, lastName]);

  const reset = () => {
    setFirstName('');
    setLastName('');
    setBirthday('');
    setCountry('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(error).length === 0) {
      setFormValues((state) => [...state, {
        firstName, lastName, birthday, country, agree, time,
      }]);
    }
    console.log(firstName, lastName, birthday, country, agree, time, error);
    reset();
  };

  return (
    <form method="POST" onSubmit={handleSubmit} className="form">
      <label htmlFor="firstName">
        First Name:
        {' '}
        {error?.firstName !== undefined && <span className="error"> * should be filled</span>}
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
        {' '}
        {error?.lastName !== undefined && <span className="error"> * should be filled</span>}
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
        {' '}
        {error?.birthday !== undefined && <span className="error"> * should be chosen</span>}
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
        {' '}
        {error?.country !== undefined && <span className="error"> * should be chosen</span>}
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
        {error?.agree !== undefined && <span className="error"> * should be checked</span>}

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

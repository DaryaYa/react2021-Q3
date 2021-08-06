import React from 'react';
import './ticket.less';

const Ticket = ({ item }) => {
  const {
    firstName, lastName, birthday, country, agree, time,
  } = item;
  return (
    <div className="ticket">
      <p className="card-info">Card info</p>
      <p>
        First Name:
        {' '}
        {firstName}
      </p>
      <p>
        Last Name:
        {' '}
        {lastName}
      </p>
      <p>
        Birthday:
        {' '}
        {birthday}
      </p>
      <p>
        Country:
        {' '}
        {country}
      </p>
      <p>
        I agree:
        {' '}
        {agree ? ' yes' : ' no'}
      </p>
      <p>
        time issued:
        {' '}
        {time}
      </p>
    </div>
  );
};
export default Ticket;

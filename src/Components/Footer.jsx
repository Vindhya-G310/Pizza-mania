import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  // console.log(hour);
  const openHour = 11;
  const closedHour = 23;

  // if (hour >= openHour && hour < closedHour) {
  //   alert("we are open");
  // } else {
  //   alert("We are closed Sorry!");
  // }

  let isOpen = hour >= openHour && hour < closedHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            we are open until {closedHour}:00, Come visit us or order online
          </p>

          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          we are happy to serve u between {openHour}:00 to {closedHour}:00
        </p>
      )}
    </footer>
  );
};

export default Footer;

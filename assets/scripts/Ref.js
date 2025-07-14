document.addEventListener("DOMContentLoaded", () => {
  const iconics = [
    { icon: "./assets/icons/fac/002-card.png", title: "Gift Cards" },
    { icon: "./assets/icons/fac/003-change.png", title: "Forex Cash & Cards" },
    {
      icon: "./assets/icons/fac/004-two-glasses-celebration.png",
      title: "EMT Airport Experience",
    },
    {
      icon: "./assets/icons/fac/005-credit-card.png",
      title: "EMT Cards",
    },
    { icon: "./assets/icons/fac/001-church.png", title: "EasyDarshan" },
    { icon: "./assets/icons/fac/006-helicopter.png", title: "Heli Yatra" },
    { icon: "./assets/icons/fac/007-luggage.png", title: "EasyEloped" },
  ];

  const fac_container = document.getElementById("faculty");

  iconics.forEach((dx) => {
    const div = document.createElement("div");
    div.className = "fac_css";
    div.innerHTML = `
    <img src=${dx.icon} alt="img">
    <h3>${dx.title}</h3>
    `;
    fac_container.appendChild(div);
  });
  const exclusives = document.getElementById("exclusive");
  /*exclusive*/
  const exclusive = [
    "Bank Offers",
    "Flight",
    "Hotel",
    "Bus",
    "Holidays",
    "Cabs",
  ];
  exclusive.forEach((ix) => {
    const h6 = document.createElement("h6");
    h6.textContent = ix;
    h6.className = "ix_ed";
    exclusives.appendChild(h6);
  });
  //Famous Places
  const tourists = document.getElementById("tourist_spots");
  const tour_db = [
    {
      icon: "./assets/icons/tourism/001-federal-palace-of-switzerland.png",
      name: "Udaipur",
    },
    {
      icon: "./assets/icons/tourism/002-federal-palace-of-switzerland-1.png",
      name: "Andaman",
    },
    {
      icon: "./assets/icons/tourism/006-gyeongbokgung-palace-1.png",
      name: "Kashmir",
    },
    { icon: "./assets/icons/tourism/004-hawa-mahal.png", name: "Jaipur" },
    { icon: "./assets/icons/tourism/009-burj-al-arab.png", name: "Bengaloru" },
    { icon: "./assets/icons/tourism/009-burj-al-arab.png", name: "Paris" },
    { icon: "./assets/icons/tourism/010-building.png", name: "Leh" },
    {
      icon: "./assets/icons/tourism/005-palace-of-versailles.png",
      name: "Bali",
    },
    { icon: "./assets/icons/tourism/008-burj-khalifa.png", name: "Dubai" },
    { icon: "./assets/icons/tourism/007-island.png", name: "Kerala" },
  ];
  tour_db.forEach((tour) => {
    const div = document.createElement("div");
    div.className = "tourist_clss";
    div.innerHTML = `
    <div class="img_col">
    <img src=${tour.icon} alt="icon" width="60" />
    </div>
    <span>${tour.name}</span>
    `;
    tourists.appendChild(div);
  });

  // Details why choose us?
  const det_con = document.getElementById("details");

  const det_obj = [
    {
      icon: "./assets/icons/details/plane.png",
      title: "Easy Booking",
      desc: "We offer easy and convenient flight bookings with attractive offers.",
    },
    {
      icon: "./assets/icons/details/rupee.png",
      title: "Lowest Price",
      desc: "We ensure low rates on hotel reservation, holiday packages and on flight tickets.",
    },
    {
      icon: "./assets/icons/details/icons8-transaction-80.png",
      title: "Instant Refund",
      desc: "Get instant refunds effortlessly on your travel bookings with us.",
    },
    {
      icon: "./assets/icons/details/icons8-hotline-50.png",
      title: "24/7 Support",
      desc: "Get assistance 24/7 on any kind of travel related query. We are happy to assist you.",
    },
    {
      icon: "./assets/icons/details/icons8-fire-50.png",
      title: "Exciting Deals",
      desc: "Enjoy exciting deals on flights, hotels, buses, car rental and tour packages.",
    },
  ];
  det_obj.forEach((det_cons) => {
    const div = document.createElement("div");
    div.className="div_sec"
    div.innerHTML = `
    <img src=${det_cons.icon} alt="img">
    <h4>${det_cons.title}</h4>
    <p>${det_cons.desc}</p>
    `;
    det_con.appendChild(div)
  });

});

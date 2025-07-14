document.addEventListener("DOMContentLoaded", () => {
  const dataSet = [
    {
      image: "./assets/icons/a.png",
      heading: "EMTMate",
      para: "Agent Travel solution",
    },
    {
      image: "./assets/icons/b.png",
      heading: "EMTDesk",
      para: "Corporate travel program",
    },
    {
      image: "./assets/icons/c.png",
      heading: "EMTRoyale",
      para: "For Prime Members",
    },
    {
      image: "./assets/icons/d.png",
      heading: "Explore Bharat",
      para: "A Tour to India",
    },
    {
      image: "./assets/icons/e.png",
      heading: "Join EMTPro",
      para: "Enjoy More Benefits",
    },
  ];

  const container = document.getElementById("right_nav");

  dataSet.forEach((data) => {
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    wrapper.innerHTML = `
    <div class="under_wrap">
                <img src="${data.image}" alt="">
                <h2>${data.heading}</h2>
            </div>
            <p>${data.para}</p>
            </div>
    `;
    container.appendChild(wrapper);
  });
});


document.addEventListener("DOMContentLoaded",()=>
{
  const iconSet=[
    {icon:"./assets/icons/001-arrival.png",title:"Flights"},
    {icon:"./assets/icons/002-resort.png",title:"Hotels"},
    {icon:"./assets/icons/003-airport.png",title:"Flight + Hotel"},
    {icon:"./assets/icons/004-train.png",title:"Trains"},
    {icon:"./assets/icons/005-bus.png",title:"Bus"},
    {icon:"./assets/icons/006-vacations.png",title:"Holidays"},
    {icon:"./assets/icons/007-taxi.png",title:"Cabs"},
    {icon:"./assets/icons/008-bulb.png",title:"Activities"},
    {icon:"./assets/icons/009-passport.png",title:"Visa"},
    {icon:"./assets/icons/010-menu.png",title:"More"},
  ];
  const icon_container=document.getElementById("icon-c")

  iconSet.forEach((icon,index)=>
  {
    const ul=document.createElement("ul")
    ul.className="u_list"
    const li=document.createElement("li")
    if(index===0)
    {
      li.classList.add("active")
    }
    li.innerHTML=`
    <img src=${icon.icon} alt="Image">
    <h6>${icon.title}</h6>
    `
    ul.appendChild(li);

    icon_container.appendChild(ul)
  }
  )
})
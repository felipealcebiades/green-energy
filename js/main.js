
function preloader () {
    const imagesPaths = [
           "./img/img1.jpg",
           "./img/img2.jpg",
           "./img/img3.jpg"
        ];

        const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
}

window.addEventListener("load",preloader)

        const contentObj = {

            solar:{
                    heading: "Solar Energy",
                    img:"img/img1.jpg",
                
                    content:`<p>More than a million homes have already gone solar in the U.S., and many more homeowners are considering installing solar. If you’re in the market for solar, you probably want to know what actually happens during a solar panel installation. There are five big steps that need to happen after you sign your solar contract before the solar panels on your roof can actually power your home, and a lot of it is behind the scenes. To show you what you can expect, we’ve outlined a simple five-step guide for the typical solar installation process.

                            <p>It’s always good to start with a broad overview. Start out by watching EnergySage’s time-lapse video, Solar Installation in Less Than a Minute, which shows one of EnergySage’s pre-screened solar installers assemble a 6.7 kW solar energy system on a home in Newton, Massachusetts. The happy homeowners now save $2,250 on their electricity bills every year thanks to their new solar panels, and will break even on their investment in just five years.
                            </p>

                            <p>Installing solar panels doesn’t happen overnight – there’s a process for what needs to happen to get your panels ready to begin powering your home. Overall, from the day you sign your contract with your installer, it will typically take between one and three months before your solar panels are grid-connected and producing energy for your home.
                            </p>
                            <p>The contract you sign should spell out all the details of financing, ownership, and performance expectations. Also, because these systems can include web-enabled devices, you should check if anyone is collecting data on your home energy production and usage and who has access to it.That’s a lot of details to keep in mind. IREC collected some additional resources that dive into greater detail. When in doubt, don’t go it alone, Weissman says: “If you’re not getting the answers that you need, then it’s probably best to seek some legal advice.”
                            </p>`
                  },
            wind:{
                    heading:"Wind Energy",
                    img:"img/img2.jpg",
                    content:`<p>Small-scale wind energy, often referred to as microgeneration, enables homes, farms, businesses and public facilities to off-set all or a portion of on-site electricity consumption. Small-scale wind turbines are very different than larger utility-scale wind turbines which are often grouped in wind farms and widely used by utilities and other power producers across Canada. Small-scale turbines are much smaller in size.breakBy generating their own electricity, small-scale generators are able to reduce emissions and reduce electricity costs. Additionally, in some provinces, small-scale generators can also get a credit for every kilowatt-hour generated but not used.

    

                <p>Small-scale wind turbines are very different than larger utility-scale wind turbines which are often grouped in wind farms and widely used by utilities and other power producers across Canada. Small-scale turbines are much smaller in size.break

                A small-scale wind turbine can be connected to the electricity grid through your power provider or it can stand alone (off-grid). Small-scale wind energy, often referred to as microgeneration, enables homes, farms, businesses and public facilities to off-set all or a portion of on-site electricity consumption. Small-scale wind turbines are very different than larger utility-scale wind turbines which are often grouped in wind farms and widely used by utilities and other power producers across Canada. 
This makes wind energy an option for remote communities that are not connected to the provincial or territorial grid. In fact, the use of wind energy in remote areas can often help reduce the use of diesel generators, saving fuel costs and reducing pollution.<p>

<p>Here’s the deal: For a home wind turbine to be worth your investment, you really need to live on an acre or more. That’s the guideline from the U.S. Department of Energy’s Guide to Small Wind Electric Systems, a free publication for homeowners. Living in a rural area helps, because if you’re in a residential neighborhood, you’re likely to run into conflicts with zoning and local homeowners associations. Additionally, you’re more likely to find a high average wind speed in wide open spaces far from windbreaks such as buildings and trees. Altogether, while installing a small wind turbine in a city or suburb is certainly possible, you’re much more likely to have the right conditions for home wind power if you live well outside city limits.

That’s the case for Cam and Michelle Mather, who live on 150 forested acres in rural Ontario. The Mathers live in an off-grid home powered by solar panels and their micro wind turbine, a 1-kilowatt (kw) Bergey Excel 1. On such a large property, they’re nowhere near their closest neighbors, so there’s no one who might be upset about the noticeable — but not unpleasant — wind turbine noise or the very visible 100-foot tower in the couple’s yard.

</p>

               <p> Several provinces have programs for individuals and businesses who want to generate using small-scale or microgeneration wind turbines. Visit the links below for further information.  </p>`

                  },
            rain: {
                    heading:"Rain Energy",
                    img:"img/img3.jpg",
                    content:`<p>
                              Critics of solar energy like to point out a fundamental flaw in photovoltaic technology: it doesn’t work in the rain. But now a team of Chinese researchers have created a solar cell that harvests energy from raindrops. The hybrid device works by collecting spare electrons from falling droplets of water so it derives solar energy AND rain energy.

                    <p>It does this by utilising the triboelectric effect: the creation of electric charge as water or air disturbs a surface.<p>

                    <p>Triboelectricity is often associated with wind energy technology. It is seen as a promising area of research in the field of biomimetics – mimicking natural processes with artificial means.

                    Compared to the output from traditional solar panels, this charge is relatively small. But with improvements, the researchers say it could offset performance loss from solar panels on rainy days.<p>

                    <p>Generating solar power in the rain, Performance GuaranteeSolar Power Systems - Quality
                    Electric raindrops? New solar cell design harvests energy from rain
                    March 16, 2018Energy Matters 2
                    Solar-cell-rain-to-energyResearchers make solar cell that harvests energy from raindrops
                    Critics of solar energy like to point out a fundamental flaw in photovoltaic technology: it doesn’t work in the rain. But now a team of Chinese researchers have created a solar cell that harvests energy from raindrops. The hybrid device works by collecting spare electrons from falling droplets of water so it derives solar energy AND rain energy.

                    It does this by utilising the triboelectric effect: the creation of electric charge as water or air disturbs a surface.<p>

                    <p[>Triboelectricity is often associated with wind energy technology. It is seen as a promising area of research in the field of biomimetics – mimicking natural processes with artificial means.

                    Compared to the output from traditional solar panels, this charge is relatively small. But with improvements, the researchers say it could offset performance loss from solar panels on rainy days.

                    Generating solar power in the rain
                    Rain energy from a solar panel
                    Soochow University researchers create solar cell that harvests energy from raindrops

                    The team from Soochow University built a sandwich-style device incorporating a top layer of triboelectric nanogenerators (TENGs), with a  PV solar cell. A transparent electrode between the layers allows sunlight to pass freely to the solar cell below.

                    <p>Because the TENG and electrode layers are clear, the base solar cell operates at close to standard efficiency. But falling raindrops create static friction, which generates additional voltage, boosting the device’s energy output.

                    By etching microscopic grooves into the surface of the top triboelectric layer and electrode, the researchers found they could also trap more sunlight and improve raindrop interactions.

                    In testing, the solar cell demonstrated a power conversion efficiency of 13.6 per cent. Then  the team used simulated rainfall to test the output from the nanogenerating layers. Water drops falling at a rate of one per second from five centimetres up generated 2.14 volts of electricity.

                    Rain energy: Rainy day solar could roll out in 3-5 years
                    The amount of power the device generates from falling rain is too low to revolutionise the solar industry anytime soon. But researchers say a prototype capable of producing hundreds of volts could be available in 3-5 years.

                    A significant application could be the weaving of rain-harvesting solar devices into clothing.

                    In the meantime, households must make do with tried-and-tested rooftop and ground mount solar panels.
                              </p>
                              `
                    }

        }



const content = document.querySelector(".dynamic-content")
const btn = document.querySelectorAll(".energy-box")
const sun= document.querySelector(".sun")
const turbineHead = document.querySelector(".turbine-head")
const rain = document.querySelector(".rain-box")

let heading = document.querySelector(".content-heading")
let img = document.querySelector(".content-img")
let content_text = document.querySelector(".content-text")



heading.innerHTML = contentObj.wind.heading
img.setAttribute("src",`${contentObj.wind.img}`)
content_text.innerHTML = contentObj.wind.content
btn.forEach(a=>a.addEventListener("click", handleSelection))

  function handleSelection (e) {
  content.classList.add("load")
  setTimeout(()=>{content.classList.remove("load")},350)
  
  if ((e.target.parentElement.getAttribute("data-key") || e.target.getAttribute("data-key"))  == "1") {
      heading.innerHTML = contentObj.wind.heading
      img.setAttribute("src",`${contentObj.wind.img}`)
      content_text.innerHTML = contentObj.wind.content
      setTimeout(()=>{turbineHead.classList.remove("spin")},1500)
  }
    else if ((e.target.parentElement.getAttribute("data-key") || e.target.getAttribute("data-key")) == "2") {
      heading.innerHTML = contentObj.rain.heading
      img.setAttribute("src",`${contentObj.rain.img}`)
      content_text.innerHTML = contentObj.rain.content
       e.target.closest(".energy-box-wrap").classList.add("active")
  }
    else if ((e.target.parentElement.getAttribute("data-key") || e.target.getAttribute("data-key")) == "3") {
      heading.innerHTML = contentObj.solar.heading
      img.setAttribute("src",`${contentObj.solar.img}`)
      content_text.innerHTML = contentObj.solar.content
    e  .target.closest(".energy-box-wrap").classList.add("active")

  }
}
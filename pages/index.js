import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Slider from "react-slick";

export default function Home() {

   const registerUser = async event => {
      event.preventDefault()
      document.getElementById("submitbuttonform").value = "Submitting form...."
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
          console.log(this.responseText);
      }
      xhttp.open("Post", 'https://ajrkhan.xyz/yomamultinational/wp-json/contact-form-7/v1/contact-forms/18/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
          if (xhttp.readyState == 4) {
              if (xhttp.status == 200) {
                  document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                  document.getElementById("showlabel").style.display = "block";
                  window.setTimeout(function() {
                     window.location.href = "/thank-you-lp"
                  }, 3000);

              } else {
                  alert('There was a problem with the request.');
              }
          }
      };
      xhttp.send("leadsquared-FirstName=" + event.target.name.value +
          "&leadsquared-EmailAddress=" + event.target.email.value +
          "&leadsquared-Mobile=" + event.target.number.value +
          "&leadsquared-Notes=" + event.target.message.value +
          "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value)

  }

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
      };




  return (
    <>
      <Head>
         <title>Natraj Pen Pencil Company</title>
         <meta name="description" content="Natraj Pen Pencil Job 15000 Advance 30000 Sallery Joining Fees 620"/>
      </Head>
      
 <section className="slsec ssll">
 <Slider {...settings}>
      <div>
      <img src="assets/images/ba1.jpg" />
      </div>
      <div>
      <img src="assets/images/ba2.jpg" />
      </div>
      <div>
      <img src="assets/images/ba3.jpg" />
      </div>
      <div>
      <img src="assets/images/ba4.jpg" />
      </div>
    </Slider>
</section>

            <div class="ship_section layout_padding">
                <div class="container">
                    <h1 class="ship_text">जॉब में क्या करना पड़ता है ?</h1>
                    <p class="ship_taital">
                        अगर आप घर बैठे जॉब करना चाहते हैं तो आपके लिए वेस्ट जॉब है, यह जॉब महिला/पुरुष, मैरिड / अनमैरिड कोई भी कर सकता है। इस जॉब में आपको पेंसिल पैकिंग का काम करना होता है,कंपनी से आपको खाली बॉक्स और पेंसिल आपके घर तक
                        डिलीवरी कर दी जाएगी और आपको पेंसिल पैकिंग घर बैठे करना होता है। एक खाली डिब्बे में आपको 10 पीस पेंसिल भरना होता है, एक डिब्बे भरने का ₹6 कंपनी से मिलता है। इसी तरीके का कंपनी से आपको रबर, कटर, पेन और अन्य तरह का
                        प्रोडक्ट आपको पैक करने के लिए कंपनी से दिया जाता है।यह जॉब करके आप आसानी से महीने का 25000 से ₹30000 इनकम कर सकते हैं।
                    </p>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="image_1"><img src="assets/images/sl1.png" /></div>
                            </div>
                            <div class="carousel-item">
                                <div class="image_1"><img src="assets/images/sl2.png" /></div>
                            </div>
                            <div class="carousel-item">
                                <div class="image_1"><img src="assets/images/sl3.png" /></div>
                            </div>
                            <div class="carousel-item">
                                <div class="image_1"><img src="assets/images/sl4.jpg" /></div>
                            </div>
                        </div>
                    </div>
                    <div class="seemore_main">
                        <div class="seemore_bt"><a href="tel:7799680585">Call: 7799680585</a></div>
                    </div>
                </div>
            </div>
            <div class="rrrt">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <div><img src="assets/images/pee.jpg" /></div>
                        </div>
                        <div class="col-sm-12 about_main">
                            <h4 class="">Pencil Packing Job</h4>
                            <p>
                                10 Pencil = 1 Box<br />
                                Packing Profit 1 Box = 6 ₹
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact_section layout_padding">
                <div class="container">
                    <h1 class="requst_text">Requst A call for You</h1>
                    <div class="contact_section_2">
                        <div class="row">
                            <div class="col-md-6 padding_0">
                                <div class="address_main">
                                    <div class="border_dotted">
                                        <div class="map_text"><img src="assets/images/map-icon.png" /><span class="map_icon">Address : 702 Western Express Highway, Sir Mathuradas Vasanji Rd, Junction, Mumbai, Maharashtra 400069</span></div>
                                        <div class="map_text_2"><img src="assets/images/call-icon.png" /><span class="map_icon">Phone : 7799680585</span></div>
                                        <div class="map_text_2"><img src="assets/images/email-icon.png" /><span class="map_icon">Email : natrajpen@gmail.com</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

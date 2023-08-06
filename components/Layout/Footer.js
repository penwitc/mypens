import React from 'react'

export default function Footer() {
    const registerUser = async event => {
        event.preventDefault()
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/yomamultinational/wp-json/contact-form-7/v1/contact-forms/14/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabelc").innerHTML = "Thank you for submitting your details.";

                    document.getElementById("showlabelc").style.display = "block";
                    window.setTimeout(function() {
                    //    window.location.href = "/thank-you-lp"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("your-email=" + event.target.fmail.value)

    }
  return (
    <>
<div class="copyright_section">
                <div class="container"><p class="copyright_text">Copyright © 2023 natrajpen.com</p></div>
            </div>
    </>
  )
}

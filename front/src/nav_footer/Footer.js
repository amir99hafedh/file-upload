import React from 'react';
import "./Footer.css"

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section>
        <img  className='sign-img1' src='astute1.png' alt=''/>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
              Enter en contact
          </section>
          <section className="footer-info__returns">
             ronan.eudier@astute.fr
            <br />
            0695653394
          </section>        
        </section>
        <section className="footer-info-center">
          
          <section className="footer-info__terms">
          &copy;{new Date().getFullYear()}  Astute <br/> All right reserved
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
          Localisation
          </section>
          <section className="footer-info__contact">
            11 rue des longs prés
            <br />
            92100 Boulogne Billancourt
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;
/*<div className='"row'>
                <p className='col-sm'>
                    &copy;{new Date().getFullYear()} All right reserved
                </p>

            </div> */
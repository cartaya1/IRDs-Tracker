import React from 'react';

function About() {
  return (
    <div className='about'>

      <div class="container-md">

        <div class="container contact-form">
          <div class="row">
            <div class="col-md-6">
              <p><i class="fas fa-dice-d20"></i> LRC CARTAYA HOUSE INC</p>
              <p><i class="fas fa-map-marker-alt"></i> Adress: Kissimme FLorida</p>
              <p><i class="fas fa-mobile-alt"></i> Phone: 321-482-3885</p>
              <p><i class="fas fa-envelope"></i> Email: cartaya1@msn.com</p>
            </div>
            <div class="col-md-6">
              <form method="POST">
                <div class="form-group">
                  <label>Name</label>
                  <input type="text" class="form-control"></input>
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input type="text" class="form-control"></input>
                </div>
                <div class="form-group">
                  <label>Message</label>
                  <textarea class="form-control" rows="5"></textarea>
                </div>
                <div class="form-group">
                  <button class="btn btn-outline-light btn-block btn-lg" value="Send Email"
                    onclick="sendEmail()">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

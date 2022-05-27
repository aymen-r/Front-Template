import React from "react";
import "./welcome.css";

const Welcome = () => {
  return (
    <section id="about">
      <div class="container">
        <h3 className="head-line">Welcome to Thager Alrafedain </h3>

        <hr class="hr offset-top-45" />
        {/* <div class="row justify-content-sm-center offset-top-40">*/}
        <div class="text-wrap">
          <p class="text-base">
            As a customer-focused company, Thager alrafedain has built up a
            sound pre-sale and after-sale service team. All the team members are
            experienced in the clean energy industry. They are well-trained and
            always care about customers' requirements. The Thager alrafedain
            service team is keen on providing excellent and highly efficient
            service to our global customers with their expertise and passion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

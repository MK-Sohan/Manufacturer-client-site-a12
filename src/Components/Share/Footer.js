import React from "react";

const Footer = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      {" "}
      <footer class="footer p-10 bg-neutral text-base-content">
        <div>
          <span class="footer-title text-yellow-200">Services</span>
          <a class="link text-white link-hover">Branding</a>
          <a class="link text-white link-hover">Design</a>
          <a class="link text-white link-hover">Marketing</a>
          <a class="link text-white link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title text-yellow-200">Company</span>
          <a class="link text-white link-hover">About us</a>
          <a class="link text-white link-hover">Contact</a>
          <a class="link text-white link-hover">Jobs</a>
          <a class="link text-white link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title text-yellow-200">Legal</span>
          <a class="link text-white link-hover">Terms of use</a>
          <a class="link text-white link-hover">Privacy policy</a>
          <a class="link text-white link-hover">Cookie policy</a>
        </div>
        <div>
          <span class="footer-title text-yellow-200">Newsletter</span>
          <div class="form-control w-80">
            <label class="label">
              <span class="label-text text-yellow-200">
                Enter your email address
              </span>
            </label>
            <div class="relative">
              <input
                type="text"
                placeholder="username@site.com"
                class="input input-bordered w-full pr-16"
              />
              <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

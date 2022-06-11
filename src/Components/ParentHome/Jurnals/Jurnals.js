import React from "react";
import "./Jurnals.css";
const Jurnals = () => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-easing="linear"
      data-aos-duration="2000"
    >
      <section class="latest-news">
        <div class="">
          <h1 class="section-heading text-4xl font-bold text-center mt-10 mb-10">
            Lastest News from Blog
          </h1>
          <div class="flex flex-col w-full">
            <div class="divider"></div>
          </div>

          <div class="article-wrapper">
            <article class="card magic-shadow-sm">
              <div>
                <img
                  src="https://i.ibb.co/YQ4WNB5/sergio-de-paula-c-Gmwf-HBDzk-unsplash.jpg"
                  alt=""
                />
              </div>
              <div class="card-content">
                <div class="post-meta flex items-center justify-between">
                  <span>January 03, 2021</span>
                  <div>
                    <span>
                      Posted by <strong>Michele Jordan</strong>
                    </span>
                    <span class="comment-count">12 Comments</span>
                  </div>
                </div>

                <h2>SpaceDesk Mechanical</h2>
                <p>
                  For manufacturing companies, attaining and maintaining quality
                  certifications can take a lot of time and effort, but it's
                  important to have these qualifications for a number of
                  reasons—including winning new business.
                </p>
              </div>
            </article>
            <article class="card magic-shadow-sm">
              <div>
                <img
                  src="https://i.ibb.co/LgxS21s/michael-austin-jg-SAuq-Mm-JUE-unsplash.jpg"
                  alt=""
                />
              </div>
              <div class="card-content">
                <div class="post-meta flex items-center justify-between">
                  <span>may 03, 2022</span>
                  <div>
                    <span>
                      Posted by <strong>Mandella</strong>
                    </span>
                    <span class="comment-count">12 Comments</span>
                  </div>
                </div>

                <h2>The Must-Haves On Your Company's Contact Us Page</h2>
                <p className="">
                  While buyers are typically 70% of the way to making a purchase
                  before they reach out, you need to make it simple for them to
                  get in touch when they're ready. Think about it — your dream
                  customer has made it to your website, read your blog posts,
                </p>
              </div>
            </article>
          </div>
          <div class="text-center btn-wrapper">
            <button class="btnn2  text-white hover:bg-slate-300 hover:text-black bg-slate-500">
              View All
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jurnals;

import React from "react";
import './HowItWorksContent.css';

function HowItWorksContent() {
  return (
    <>
      <section class="timer-section">
        <div class="container">
          <div class="timer-container">
            <ul class="timer">
              <li class="step">
                <span>1</span>
                <div class="content">
                  <h3 className='gilroy-bold'>Create your account</h3>
                  <p>Create an account in a few seconds to have a public profile link where people can send you messages.</p>
                </div>
              </li>
              <li class="step">
                <span>2</span>
                <div class="content">
                  <h3 className='gilroy-bold'>Set up your account</h3>
                  <p>Set how many satoshis you want to earn per message and to which email address you want to receive the messages.</p>
                </div>
              </li>
              <li class="step">
                <span>3</span>
                <div class="content">
                  <h3 className='gilroy-bold'>Share the link</h3>
                  <p>Post your link on linktree, your instagram profile or sites where you usually put your raw email address.</p>
                </div>
              </li>
              <li class="step">
                <span>4</span>
                <div class="content">
                  <h3 className='gilroy-bold'>Receive and earn</h3>
                  <p>Start receiving messages and earn satoshis. You will need a Lightning wallet to withdraw funds.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <span className="icon-Bitcoin-Lightning-Gold icon-lg"></span>
      </section>
    </>
  );
}

export default HowItWorksContent;

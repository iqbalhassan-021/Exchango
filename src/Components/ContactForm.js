import React from 'react'

function ContactForm() {
  return (
    <div class="contact-container">
    <div class="page-cover">
        <div class="contact">
            <form class="contact-form">
                <div class="form-tab">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required class="form-input" placeholder="Enter your name"></input>
                </div>
                <div class="form-tab">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required class="form-input" placeholder="Enter your email"></input>
                </div>

                <div class="form-tab">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required class="form-input" placeholder="Enter your subject"></input>
                </div>
                <div class="form-tab">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" required class="form-textarea" placeholder="Enter your message" rows="10"></textarea>
                </div>
                <div class="form-tab">
                    <button type="submit" class="primary-button">Send</button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default ContactForm
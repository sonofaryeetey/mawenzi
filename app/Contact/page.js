import React from 'react'
import CustomHero from '../components/CustomHero'

const Contact = () => {
  const pageInfo = {
    name: 'Contact Us',
    image: '/Contact-us.jpeg',
  }

  return (
    <div>
      <CustomHero props={pageInfo} />
      <section className="w-full min-h-[80vh] flex items-center justify-center py-16 px-2" style={{ background: 'white' }}>
        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-10 items-stretch justify-center">
          {/* Left: Contact Info */}
          <div className="flex-1 text-black flex flex-col justify-center md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-Outfit font-bold mb-4">Contact Us</h2>
            <p className="mb-6 text-base font-light">If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
            <div className="mb-4">
              <div className="mb-2 font-semibold">Mawenzi Health</div>
              <div className="mb-2">3 Columbus Circle, 15th Floor, New York, NY 10019</div>
              <div className="mb-2">Support@mawenzihealth.com</div>
              <div className="mb-2">3472613722</div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="material-icons text-lg">email</span>
              <span>Support@mawenzihealth.com</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="material-icons text-lg">phone</span>
              <span>3472613722</span>
            </div>
            <p className="mt-6 text-xs opacity-80">By continuing to use our services, you acknowledge that you have read and understood this Privacy Policy.</p>
          </div>
          {/* Right: Contact Form */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center overflow-hidden box-border w-full">
            <h3 className="text-2xl font-Outfit font-semibold mb-2">We'd love to hear from you!<br />Let's get in touch</h3>
            <form className="mt-4 flex flex-col gap-4 w-full">
              <div className="flex gap-2 w-full">
                <input type="text" placeholder="Full Name" className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full" />
                <input type="text" placeholder="Company" className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full" />
              </div>
              <div className="flex gap-2 w-full">
                <input type="email" placeholder="Email" className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full" />
                <input type="tel" placeholder="Phone number" className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full" />
              </div>
              <input type="text" placeholder="Address" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full" />
              <div>
                <label className="block text-sm font-medium mb-1">Your Message</label>
                <textarea placeholder="Type your message here" rows={4} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none" />
              </div>
              <button type="submit" className="mt-2 bg-[#5c4b7d] text-white font-semibold py-2 rounded-md hover:bg-[#473a61] transition w-full">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
"use client"
import React, { useState } from 'react'
import CustomHero from '../components/CustomHero'

const Contact = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const pageInfo = {
    name: 'Contact Us',
    image: '/Contact-us.jpeg',
  }

  return (
    <div>
      <CustomHero props={pageInfo} />
      <section className="w-full min-h-[80vh] flex items-center justify-center py-16 px-2" style={{ background: '#F0F4F8' }}>
        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-10 items-stretch justify-center">
          {/* Left: Contact Info */}
          <div className="flex-1 text-black flex flex-col justify-center md:pr-8 mb-8 md:mb-0 px-4 py-2">
            <h2 className="text-3xl font-Outfit font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Contact Us</h2>
            <p className="mb-6 text-base font-light">If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
            <div className="mb-4">
              <div className="mb-2 font-semibold flex items-center gap-2 mr-4">Mawenzi Health</div>
              <div className="mb-2 flex items-center gap-2"><span className="material-icons text-blue-600">place</span>3 Columbus Circle, 15th Floor, New York, NY 10019</div>
              <div className="mb-2 flex items-center gap-2"><span className="material-icons text-blue-600">email</span>Support@mawenzihealth.com</div>
              <div className="mb-2 flex items-center gap-2"><span className="material-icons text-blue-600">phone</span><a href="tel:3472613722" className="text-blue-600 hover:underline">3472613722</a></div>
            </div>
            {/* <div className="flex items-center gap-2 mb-2">
              <span className="material-icons text-blue-600">email</span>
              <span>Support@mawenzihealth.com</span>
            </div> */}
            {/* <div className="flex items-center gap-2 mb-2">
              <span className="material-icons text-blue-600">phone</span>
              <a href="tel:3472613722" className="text-blue-600 hover:underline">3472613722</a>
            </div> */}
            <p className="mt-6 text-xs opacity-80">
              By continuing to use our services, you acknowledge that you have read and understood this 
              <button type="button" className="text-blue-600 underline ml-1 hover:text-blue-800" onClick={() => setShowPrivacy(true)}>
                Privacy Policy
              </button>.
            </p>
            {/* Google Map Embed */}
            <div className="mt-8 w-full rounded-2xl overflow-hidden shadow-lg relative" style={{height: '300px', minHeight: '200px'}}>
              <iframe
                title="Mawenzi Health Location"
                src="https://www.google.com/maps?q=3+Columbus+Circle,+15th+Floor,+New+York,+NY+10019&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=3+Columbus+Circle,+15th+Floor,+New+York,+NY+10019"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-4 bottom-4 px-5 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition text-sm z-10"
              >
                Get Directions
              </a>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center overflow-hidden box-border w-full">
            <h3 className="text-2xl font-Outfit font-semibold mb-2">We'd love to hear from you!<br />Let's get in touch</h3>
            <form className="mt-4 flex flex-col gap-4 w-full">
              <div className="flex flex-col md:flex-row gap-2 w-full">
                <input type="text" placeholder="Full Name" className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full" />
                <input type="text" placeholder="Company" className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full" />
              </div>
              <div className="flex flex-col md:flex-row gap-2 w-full">
                <input type="email" placeholder="Email" className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full" />
                <input type="tel" placeholder="Phone number" className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full" />
              </div>
              <input type="text" placeholder="Address" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full" />
              <div>
                <label className="block text-sm font-medium mb-1">Your Message</label>
                <textarea placeholder="Type your message here" rows={4} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none" />
              </div>
              <button type="submit" className="mt-2 bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition w-full">Request a demo</button>
            </form>
          </div>
        </div>
      </section>
      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setShowPrivacy(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setShowPrivacy(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold">&times;</button>
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <div className="text-sm text-gray-700 space-y-4">
              <div className="mb-2">
                <span className="font-semibold">Effective Date:</span> Wednesday April 2, 2025<br/>
                <span className="font-semibold">Last Updated:</span> Wednesday April 2, 2025
              </div>
              <p className="mb-2">Mawenzi Health Inc. ("we," "our," or "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website and use our services, including Remote Patient Monitoring (RPM) and Nurse Triage services.</p>
              <p className="mb-2">By using our website and services, you agree to the collection and use of information in accordance with this policy.</p>
              <h3 className="font-semibold mt-4 mb-1">1. Information We Collect</h3>
              <ul className="list-disc list-inside mb-2">
                <li><span className="font-semibold">Information You Provide Directly:</span> Contact details such as name, email address, phone number, and any other information you provide when you fill out forms or communicate with us. Health-related data provided as part of our Remote Patient Monitoring (RPM) services, Nurse Triage, or other health-related services.</li>
                <li><span className="font-semibold">Information We Collect Automatically:</span> Web server logs (IP address, browser type, timestamps), cookies and similar technologies for analytics and website functionality, and web analytics (e.g., Google Analytics).</li>
                <li><span className="font-semibold">Information from Third Parties:</span> If you interact with third-party services through our website or use integrated services, we may collect certain information from those providers, subject to your privacy settings.</li>
              </ul>
              <h3 className="font-semibold mt-4 mb-1">2. How We Use Your Information</h3>
              <ul className="list-disc list-inside mb-2">
                <li>To provide, operate, and improve our services, including Nurse Triage and Remote Patient Monitoring.</li>
                <li>To communicate with you, such as sending service updates, newsletters, or responses to your inquiries.</li>
                <li>To improve our website functionality and user experience.</li>
                <li>To comply with legal obligations and respond to requests or investigations.</li>
              </ul>
              <h3 className="font-semibold mt-4 mb-1">3. Data Security</h3>
              <p className="mb-2">We implement a range of security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. This includes using encryption, access controls, and secure storage practices.</p>
              <h3 className="font-semibold mt-4 mb-1">4. Data Sharing and Disclosure</h3>
              <ul className="list-disc list-inside mb-2">
                <li>We do not sell, rent, or share your personal information with third parties for their own marketing purposes.</li>
                <li>We may share information with healthcare providers and third-party partners involved in providing services related to Remote Patient Monitoring, Nurse Triage, or other health services, as necessary for patient care.</li>
                <li>We may share information with legal authorities if required to do so by law, such as in response to subpoenas or other legal requests.</li>
              </ul>
              <h3 className="font-semibold mt-4 mb-1">5. Consent to Data Collection</h3>
              <p className="mb-2">By using our website and services, you consent to the collection and use of your information as described in this Privacy Policy. For our Remote Patient Monitoring services, we obtain patient consent before collecting any health data.</p>
              <h3 className="font-semibold mt-4 mb-1">6. Patient Data Rights</h3>
              <ul className="list-disc list-inside mb-2">
                <li>Access your personal and health-related data held by Mawenzi Health.</li>
                <li>Request corrections or updates to your data.</li>
                <li>Request the deletion of your personal information, subject to legal requirements and our data retention policy.</li>
              </ul>
              <h3 className="font-semibold mt-4 mb-1">7. Data Retention</h3>
              <p className="mb-2">We retain personal data only as long as necessary to provide our services or as required by law. We will notify you about how long we retain your data when collecting it.</p>
              <h3 className="font-semibold mt-4 mb-1">8. Third-Party Websites</h3>
              <p className="mb-2">Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites. We encourage you to review the privacy policies of those third-party sites.</p>
              <h3 className="font-semibold mt-4 mb-1">9. International Data Transfers</h3>
              <p className="mb-2">If you are located outside the United States, please be aware that your personal information may be transferred to, stored, and processed in the United States, where our servers are located. By using our services, you consent to this transfer.</p>
              <h3 className="font-semibold mt-4 mb-1">10. Privacy of Children</h3>
              <p className="mb-2">Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.</p>
              <h3 className="font-semibold mt-4 mb-1">11. Updates to This Privacy Policy</h3>
              <p className="mb-2">We may update this Privacy Policy from time to time. When we make changes, we will post the updated policy on our website with the new effective date. We encourage you to review this policy periodically for any updates.</p>
              <h3 className="font-semibold mt-4 mb-1">12. Contact Us</h3>
              <div className="mb-2">
                Mawenzi Health<br/>
                3 Columbus Circle, 15th Floor, New York, NY 10019<br/>
                Support@mawenzihealth.com<br/>
                <a href="tel:3472613722" className="text-blue-600 hover:underline">3472613722</a>
              </div>
              <p className="mb-2">By continuing to use our services, you acknowledge that you have read and understood this Privacy Policy.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact
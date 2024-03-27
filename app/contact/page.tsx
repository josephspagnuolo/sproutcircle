import ContactForm from '@/components/contact-form';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sprout Circle - Contact Us',
  description: "If you have any questions, comments, or inquiries, we'd love to hear from you.You can reach out to us via email, or by filling out the contact form below. Our team is here to assist you during business hours, and we strive to respond to all inquiries promptly. Thank you for considering contacting us. We look forward to connecting with you!",
}

export default function Contact() {
  return (
    <div className="flex grow items-center justify-center">
      <div className="w-full max-w-2xl overflow-hidden">
        <div className="flex justify-center px-4">
          <div className="flex w-full sm:w-5/12 flex-col items-center justify-center space-y-2 border-b border-gray-600 px-4 py-4 pt-5 text-center sm:px-16">
            <h3 className="text-xl font-semibold">Contact Us</h3>
          </div>
        </div>
        <ContactForm />
        <div className="flex justify-center w-full pt-6">
          <a href="mailto:sproutcirclegames@gmail.com">sproutcirclegames@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
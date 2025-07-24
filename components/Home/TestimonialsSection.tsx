import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Script from "next/script"

export default function TestimonialsSection() {
  return (

    <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join over 20,000 satisfied travelers who trusted us with their visa journey
              </p>
            </div>

            {/* Google Maps Location */}
            <div className="w-full mb-16">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.792579569361!2d75.89165447476209!3d22.74531142661918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd20edc7c45f%3A0xd4beadabd06ce124!2sSky%20Visa%20Consultants%20(Visa%20Assistance)%20%7C%20Tourism%20%26%20Visa%20Consultants%20in%20Indore!5e1!3m2!1sen!2sin!4v1751999864782!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sky Visa Consultants Location"
                />
              </div>
            </div>
          </div>
        </section>
  )
}
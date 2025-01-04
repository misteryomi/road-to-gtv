'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Clock } from 'lucide-react';

const ContactPage = () => {


  return (
    <div className="min-h-screen bg-black">
      {/* Header section */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Contact Us</h1>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-gray-300">
                Have questions about our Global Talent Visa guidance services? We're here to help. Choose the most convenient way to reach us.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/5 border-white/10 p-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-400 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Email Us</h3>
                    <p className="text-gray-300 mt-2">
                      For general inquiries: support@roadtogtv.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/5 border-white/10 p-6">
                <div className="flex items-start">
                  <MessageSquare className="w-6 h-6 text-blue-400 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Community</h3>
                    <p className="text-gray-300 mt-2">
                      Join our community forum for peer support and discussions
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/5 border-white/10 p-6">
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-400 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Response Time</h3>
                    <p className="text-gray-300 mt-2">
                      We aim to respond to all inquiries within 24-48 hours during business days.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="bg-white/5 border-white/10 p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                How quickly can I start after purchasing?
              </h3>
              <p className="text-gray-300">
                You'll get immediate access to our course materials and can schedule your first consultation within 48 hours.
              </p>
            </Card>
            <Card className="bg-white/5 border-white/10 p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-gray-300">
                Yes, we offer a 14-day refund policy if you haven't accessed any premium content or received consultations.
              </p>
            </Card>
          </div>
        </div>
        </div>

  
      </div>
    </div>
  );
};

export default ContactPage;
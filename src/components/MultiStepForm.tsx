import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Progress } from './ui/progress';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MultiStepFormProps {
  open: boolean;
  onClose: () => void;
}

export function MultiStepForm({ open, onClose }: MultiStepFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    urgency: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    zipCode: '',
    message: '',
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Simulate form submission
    console.log('Form submitted:', formData);
    setStep(5); // Success step
    setTimeout(() => {
      onClose();
      setStep(1);
      setFormData({
        serviceType: '',
        urgency: '',
        name: '',
        phone: '',
        email: '',
        address: '',
        zipCode: '',
        message: '',
      });
    }, 3000);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {step < 5 ? 'Request Service' : 'Request Received!'}
          </DialogTitle>
        </DialogHeader>

        {step < 5 && (
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">Step {step} of {totalSteps}</span>
              <span className="text-gray-500">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  What service do you need?
                </Label>
                <RadioGroup value={formData.serviceType} onValueChange={(value) => updateFormData('serviceType', value)}>
                  <div className="space-y-3">
                    {['AC Repair', 'Heating Repair', 'Installation', 'Maintenance', 'Emergency Service'].map((service) => (
                      <div key={service} className="relative">
                        <RadioGroupItem value={service} id={service} className="peer sr-only" />
                        <Label
                          htmlFor={service}
                          className="flex items-center p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 hover:bg-gray-50 transition-all"
                        >
                          <span className="font-medium">{service}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  How urgent is your request?
                </Label>
                <RadioGroup value={formData.urgency} onValueChange={(value) => updateFormData('urgency', value)}>
                  <div className="space-y-3">
                    {[
                      { value: 'emergency', label: 'Emergency - ASAP', desc: 'System not working at all' },
                      { value: 'today', label: 'Today', desc: 'System working but needs attention' },
                      { value: 'week', label: 'This Week', desc: 'Preventive maintenance or quote' },
                      { value: 'flexible', label: 'Flexible', desc: 'Not urgent, schedule when convenient' },
                    ].map((option) => (
                      <div key={option.value} className="relative">
                        <RadioGroupItem value={option.value} id={option.value} className="peer sr-only" />
                        <Label
                          htmlFor={option.value}
                          className="flex flex-col p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 hover:bg-gray-50 transition-all"
                        >
                          <span className="font-medium">{option.label}</span>
                          <span className="text-sm text-gray-500">{option.desc}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  Your Contact Information
                </Label>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      placeholder="John Doe"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      placeholder="john@example.com"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  Service Location
                </Label>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => updateFormData('address', e.target.value)}
                      placeholder="123 Main Street"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => updateFormData('zipCode', e.target.value)}
                      placeholder="90210"
                      maxLength={5}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Additional Details (Optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => updateFormData('message', e.target.value)}
                      placeholder="Describe the issue or any specific requirements..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Request Received!
              </h3>
              <p className="text-gray-600 mb-2">
                Thank you for choosing HVAC Elite. We'll contact you within the next 30 minutes to confirm your appointment.
              </p>
              <p className="text-sm text-gray-500">
                Check your email for confirmation details.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {step < 5 && (
          <div className="flex justify-between gap-4 mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 1}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            {step < totalSteps ? (
              <Button
                onClick={handleNext}
                disabled={
                  (step === 1 && !formData.serviceType) ||
                  (step === 2 && !formData.urgency) ||
                  (step === 3 && (!formData.name || !formData.phone))
                }
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!formData.address || !formData.zipCode}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
              >
                Submit Request
                <CheckCircle2 className="w-4 h-4" />
              </Button>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

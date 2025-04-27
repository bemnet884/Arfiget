'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import MultiSelect from './ui/multiselect';
import { freelancerSchema, clientSchema } from '@/lib/zod';
import { z } from 'zod';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialFormData = {
  name: '',
  email: '',
  skills: [] as string[],
  experience: '',
  expectedRate: '',
  businessName: '',
  projectDescription: '',
};

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState<'Freelancer' | 'Client' | ''>('');
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);

  const resetForm = () => {
    setFormData(initialFormData);
    setRole('');
    setStep(0);
    setErrors({});
    setSuccess(false);
  };

  const handleChange = (field: keyof typeof formData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validateCurrentStep = () => {
    let schema: z.ZodObject<any>;

    if (role === 'Freelancer') {
      if (step === 1) schema = freelancerSchema.pick({ name: true, email: true });
      if (step === 2) schema = freelancerSchema.pick({ skills: true });
      if (step === 3) schema = freelancerSchema.pick({ experience: true, expectedRate: true });
    } else if (role === 'Client') {
      if (step === 1) schema = clientSchema.pick({ businessName: true, email: true });
      if (step === 2) schema = clientSchema.pick({ projectDescription: true });
    }

    if (!schema) return true;

    const result = schema.safeParse(formData);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return false;
    }

    return true;
  };

  const next = () => {
    if (validateCurrentStep()) setStep((prev) => prev + 1);
  };

  const back = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    if (validateCurrentStep()) {
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

  const renderStepContent = () => {
    if (step === 0) {
      return (
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Get Started</h2>
          <div className="flex justify-center gap-6">
            {['Freelancer', 'Client'].map((r) => (
              <Card
                key={r}
                className={`cursor-pointer p-6 rounded-xl border-2 transition-all ${role === r ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-300'
                  }`}
                onClick={() => {
                  setRole(r as any);
                  setStep(1);
                }}
              >
                <h3 className="text-xl font-semibold">{r}</h3>
              </Card>
            ))}
          </div>
        </div>
      );
    }

    if (role === 'Freelancer') {
      if (step === 1)
        return (
          <>
            <h3 className="text-2xl font-bold mb-4">Your Info</h3>
            <Input
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="mb-2"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
            <Input
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </>
        );

      if (step === 2)
        return (
          <>
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <MultiSelect
              options={['Web Development', 'Design', 'Marketing', 'Writing']}
              onChange={(selected) => handleChange('skills', selected)}
            />
            {errors.skills && <p className="text-red-500">{errors.skills}</p>}
          </>
        );

      if (step === 3)
        return (
          <>
            <h3 className="text-2xl font-bold mb-4">Experience & Rate</h3>
            <Input
              placeholder="Years of Experience"
              value={formData.experience}
              onChange={(e) => handleChange('experience', e.target.value)}
              className="mb-2"
            />
            {errors.experience && <p className="text-red-500">{errors.experience}</p>}
            <Input
              placeholder="Expected Hourly Rate ($)"
              value={formData.expectedRate}
              onChange={(e) => handleChange('expectedRate', e.target.value)}
            />
            {errors.expectedRate && <p className="text-red-500">{errors.expectedRate}</p>}
          </>
        );
    }

    if (role === 'Client') {
      if (step === 1)
        return (
          <>
            <h3 className="text-2xl font-bold mb-4">Business Info</h3>
            <Input
              placeholder="Business Name"
              value={formData.businessName}
              onChange={(e) => handleChange('businessName', e.target.value)}
              className="mb-2"
            />
            {errors.businessName && <p className="text-red-500">{errors.businessName}</p>}
            <Input
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </>
        );

      if (step === 2)
        return (
          <>
            <h3 className="text-2xl font-bold mb-4">Project Details</h3>
            <Input
              placeholder="Describe your project..."
              value={formData.projectDescription}
              onChange={(e) => handleChange('projectDescription', e.target.value)}
            />
            {errors.projectDescription && <p className="text-red-500">{errors.projectDescription}</p>}
          </>
        );
    }

    return null;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-8 rounded-2xl">
        {success ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-600">Thanks for registering!</h2>
            <p className="text-gray-500">We’ll review your info and get back to you soon.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {renderStepContent()}

            <div className="flex justify-between mt-6">
              {step > 0 && (
                <Button variant="outline" onClick={back}>
                  Back
                </Button>
                )}
                {role && step !== (role === 'Freelancer' ? 3 : 2) && (
                  <Button onClick={next}>Next</Button>
                )}
                {role && step === (role === 'Freelancer' ? 3 : 2) && (
                  <Button onClick={handleSubmit}>Submit</Button>
                )}
              </div>
            </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;

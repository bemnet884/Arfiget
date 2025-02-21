'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import MultiSelect from './ui/multiselect';
import { freelancerSchema, clientSchema } from '@/lib/zod';
import { z } from 'zod';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState<string>('');
  const [step, setStep] = useState<number>(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: [] as string[],
    experience: '',
    expectedRate: '',
    businessName: '',
    projectDescription: '',
  });

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      skills: [],
      experience: '',
      expectedRate: '',
      businessName: '',
      projectDescription: '',
    });
    setErrors({});
    setRole('');
    setStep(0);
    setIsSubmitting(false);
  };


  const handleRoleSelection = (selectedRole: string) => {
    setRole(selectedRole);
    setStep(1);
  };

  const handleChange = (key: keyof typeof formData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  const validateField = (key: keyof typeof formData, value: string | string[]) => {
    const schema = role === 'Freelancer' ? freelancerSchema : clientSchema;
    const partialValidation = schema.safeParse({ ...formData, [key]: value });

    if (!partialValidation.success) {
      const error = partialValidation.error.errors.find((err) => err.path[0] === key);
      setErrors((prev) => ({ ...prev, [key]: error ? error.message : '' }));
    } else {
      setErrors((prev) => ({ ...prev, [key]: '' }));
    }
  };
  const validateStep = () => {
    let schema;

    if (role === 'Freelancer') {
      if (step === 1) {
        schema = z.object({
          name: freelancerSchema.shape.name,
          email: freelancerSchema.shape.email,
        });
      } else if (step === 2) {
        schema = z.object({
          skills: freelancerSchema.shape.skills,
        });
      } else if (step === 3) {
        schema = z.object({
          experience: freelancerSchema.shape.experience,
          expectedRate: freelancerSchema.shape.expectedRate,
        });
      }
    } else if (role === 'Client') {
      if (step === 1) {
        schema = z.object({
          businessName: clientSchema.shape.businessName,
          email: clientSchema.shape.email,
        });
      } else if (step === 2) {
        schema = z.object({
          projectDescription: clientSchema.shape.projectDescription,
        });
      }
    }

    const result = schema?.safeParse(formData);

    if (!result?.success) {
      const newErrors: Record<string, string> = {};
      result?.error.errors.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return false;
    }
    return true;
  };


  const nextStep = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    if (validateStep()) {
      setIsSubmitting(true);
      setSuccessMessage(`Thank you for registering as a ${role}. Your application was submitted successfully!`);
      setTimeout(() => {
        setSuccessMessage('');
        onClose();
        setIsSubmitting(false);
      }, 4000);
    }
  };
  const handleBlur = (key: keyof typeof formData) => {
    let fieldSchema;
    if (role === 'Freelancer' && key in freelancerSchema.shape) {
      fieldSchema = freelancerSchema.shape[key as keyof typeof freelancerSchema.shape];
    } else if (role === 'Client' && key in clientSchema.shape) {
      fieldSchema = clientSchema.shape[key as keyof typeof clientSchema.shape];
    }
    if (fieldSchema) {
      const result = fieldSchema.safeParse(formData[key]);
      if (!result.success) {
        setErrors((prev) => ({ ...prev, [key]: result.error.errors[0].message }));
      } else {
        setErrors((prev) => ({ ...prev, [key]: '' }));
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl rounded-2xl p-6 shadow-lg">
        {successMessage ? (
          <div className="text-center space-y-4 p-6 bg-green-50 rounded-xl shadow-lg transition-opacity duration-500 ease-in-out">
            <h2 className="text-2xl font-bold text-green-700">{successMessage}</h2>
            <p className="text-gray-600">
              Our team will review your submission. You&apos;ll be notified once your account has been verified.
            </p>
            <Button onClick={onClose} className="mt-4 bg-green-600 hover:bg-green-700 text-white">
              Close
            </Button>
          </div>
        ) : (
          <>
            {step === 0 && (
              <div className="space-y-6 text-center">
                <h2 className="text-3xl font-extrabold text-gray-800">Join as a...</h2>
                <div className="flex justify-center gap-6">
                  {['Freelancer', 'Client'].map((r) => (
                    <Card
                      key={r}
                      className={`cursor-pointer p-6 border-2 rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:border-blue-400 ${role === r ? 'border-blue-500 bg-blue-50' : ''}`}
                      onClick={() => handleRoleSelection(r)}
                    >
                      <h3 className="text-xl font-medium">{r}</h3>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Freelancer Flow */}
            {role === 'Freelancer' && step === 1 && (
                <div className="space-y-4 p-4 bg-white rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-blue-600">Step 1: Personal Info</h3>
                  <Input
                    placeholder="Full Name"
                    value={formData.name}
                    onBlur={() => handleBlur('name')}
                    onChange={(e) => handleChange('name', e.target.value)}
                    aria-label="Full Name"
                    className="p-3 rounded-xl border focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.name && <p className="text-red-500 text-sm italic">{errors.name}</p>}
                  <Input
                    placeholder="Email Address"
                    value={formData.email}
                    onBlur={() => handleBlur('email')}
                    onChange={(e) => handleChange('email', e.target.value)}
                    aria-label="Email Address"
                    className="p-3 rounded-xl border focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.email && <p className="text-red-500 text-sm italic">{errors.email}</p>}
                  <Button
                    onClick={nextStep}
                    disabled={isSubmitting}
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 transition-all"
                  >
                    Next
                  </Button>
                </div>
            )}

            {role === 'Freelancer' && step === 2 && (
                <div className="space-y-4 p-4 bg-white rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-blue-600">Step 2: Skills</h3>
                <MultiSelect options={['Web Development', 'Graphic Design', 'Marketing', 'Writing']} onChange={(selected) => handleChange('skills', selected)} />
                {errors.skills && <p className="text-red-500">{errors.skills}</p>}
                <Button onClick={prevStep}>Back</Button>
                  <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 transition-all" onClick={nextStep} disabled={isSubmitting}>Next</Button>
              </div>
            )}

            {role === 'Freelancer' && step === 3 && (
                <div className="space-y-4 p-4 bg-white rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-blue-600">Step 3: Experience & Rates</h3>
                <Input
                  placeholder="Years of Experience"
                  value={formData.experience}
                  onBlur={() => validateField('experience', formData.experience)}
                  onChange={(e) => handleChange('experience', e.target.value)}
                    aria-label="Years of Experience"
                    className="p-3 rounded-xl border focus:ring-2 focus:ring-blue-500"
                />
                {errors.experience && <p className="text-red-500">{errors.experience}</p>}
                <Input
                  placeholder="Expected Hourly Rate ($)"
                  value={formData.expectedRate}
                  onBlur={() => validateField('expectedRate', formData.expectedRate)}
                  onChange={(e) => handleChange('expectedRate', e.target.value)}
                    aria-label="Expected Hourly Rate"
                    className="p-3 rounded-xl border focus:ring-2 focus:ring-blue-500"
                />
                {errors.expectedRate && <p className="text-red-500">{errors.expectedRate}</p>}
                <Button onClick={prevStep}>Back</Button>
                  <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 transition-all" onClick={handleSubmit} disabled={isSubmitting}>Submit</Button>
              </div>
            )}

            {/* Client Flow */}
            {role === 'Client' && step === 1 && (
                <div className="space-y-4 p-4 bg-white rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-blue-600">Step 1: Business Info</h3>
                <Input placeholder="Business Name" value={formData.businessName} onChange={(e) => handleChange('businessName', e.target.value)} aria-label="Business Name" />
                {errors.businessName && <p className="text-red-500">{errors.businessName}</p>}
                <Input placeholder="Email Address" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} aria-label="Email Address" />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                  <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 transition-all" onClick={nextStep} disabled={isSubmitting}>Next</Button>
              </div>
            )}

            {role === 'Client' && step === 2 && (
                <div className="space-y-4 p-4 bg-white rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-blue-600">Step 2: Project Description</h3>
                <Input placeholder="Project Description" value={formData.projectDescription} onChange={(e) => handleChange('projectDescription', e.target.value)} aria-label="Project Description" />
                {errors.projectDescription && <p className="text-red-500">{errors.projectDescription}</p>}
                <Button onClick={prevStep}>Back</Button>
                  <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 transition-all" onClick={handleSubmit} disabled={isSubmitting}>Submit</Button>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;


import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';

// Extracted Input Component: Defined OUTSIDE the main component to prevent re-renders losing focus
const EditorialInput = memo(({ label, name, type = "text", value, onChange, disabled }) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;
  const isActive = isFocused || hasValue;

  return (
    <div className="relative pt-6 pb-2 w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="block w-full bg-transparent border-b-2 border-white/30 text-2xl md:text-3xl font-bold text-white py-4 focus:outline-none focus:border-white transition-colors duration-200 placeholder-transparent rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
        placeholder={label}
        autoComplete="off"
      />
      <label
        className={`absolute left-0 pointer-events-none transition-all duration-300 ease-out font-mono uppercase tracking-widest ${
          isActive 
            ? 'top-0 text-xs text-white/60' 
            : 'top-8 text-xl text-white/40'
        }`}
      >
        {label}
      </label>
    </div>
  );
});

EditorialInput.displayName = "EditorialInput";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Reset status on user input if previously errored
    if (submissionStatus === 'error') setSubmissionStatus('idle');
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    
    if (!name.trim()) {
      toast({
        variant: "destructive",
        title: "VALIDATION_ERROR",
        description: "Identification (Name) is required.",
        className: "bg-black border border-red-500 text-red-500" // Bright Red error text
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "VALIDATION_ERROR",
        description: "Invalid frequency format (Email).",
        className: "bg-black border border-red-500 text-red-500" // Bright Red error text
      });
      return false;
    }

    if (!message.trim()) {
      toast({
        variant: "destructive",
        title: "VALIDATION_ERROR",
        description: "Payload (Message) cannot be empty.",
        className: "bg-black border border-red-500 text-red-500" // Bright Red error text
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmissionStatus('loading');

    try {
      // 1. Store in Supabase Database
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            status: 'new'
          }
        ]);

      if (dbError) throw dbError;

      // 2. Send Email via Edge Function
      const { error: fnError } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (fnError) {
        console.warn("Email dispatch failed, but DB record saved.", fnError);
        // We generally treat this as a partial success or just log it, 
        // as the user's data is safely stored.
      }

      // Success State
      setSubmissionStatus('success');
      toast({
        title: "TRANSMISSION_COMPLETE",
        description: "Data successfully encrypted and sent.",
        className: "bg-black border border-white text-white"
      });

      // Reset Form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmissionStatus('idle');
        setIsSubmitting(false);
      }, 4000);

    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('error');
      setIsSubmitting(false);
      toast({
        variant: "destructive",
        title: "TRANSMISSION_FAILED",
        description: error.message || "Network anomaly detected. Please retry.",
        className: "bg-black border border-red-500 text-red-500" // Bright Red error text
      });
    }
  };

  return (
    <section id="contact-protocol" className="relative bg-black min-h-screen flex flex-col justify-between pt-24 border-t border-white/10 pb-32 md:pb-0">
      
      <div className="max-w-7xl mx-auto w-full px-6 flex-grow flex flex-col md:flex-row gap-16 md:gap-32">
        
        {/* Left Column: Context */}
        <div className="md:w-1/3 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="block font-mono text-xs text-white/50 tracking-widest mb-4 uppercase">
              // INDEX_04_CONTACT
            </span>
            <h2 className="text-6xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Initiate<br/>Protocol
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              Available for high-impact engineering contracts and architectural consultation.
            </p>
          </motion.div>

          {/* Minimal Text Links */}
          <div className="space-y-4">
            <a href="mailto:bryce.rambach@gmail.com" className="group flex items-center gap-4 text-white hover:text-gray-300 transition-colors">
              <Mail className="w-5 h-5" />
              <span className="font-mono text-sm tracking-widest uppercase border-b border-transparent group-hover:border-white">Email_Secure</span>
            </a>
            <a href="https://github.com/brambach" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-white hover:text-gray-300 transition-colors">
              <Github className="w-5 h-5" />
              <span className="font-mono text-sm tracking-widest uppercase border-b border-transparent group-hover:border-white">Github_Repo</span>
            </a>
            <a href="https://www.linkedin.com/in/bryce-rambach/" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-white hover:text-gray-300 transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="font-mono text-sm tracking-widest uppercase border-b border-transparent group-hover:border-white">LinkedIn_Profile</span>
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Form */}
        <div className="md:w-2/3 pb-20">
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <EditorialInput 
              key="name-input"
              label="Identify Yourself (Name)" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              disabled={isSubmitting}
            />
            
            <EditorialInput 
              key="email-input"
              label="Secure Frequency (Email)" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              disabled={isSubmitting}
            />
            
            <EditorialInput 
              key="message-input"
              label="Mission Brief (Message)" 
              name="message" 
              value={formData.message} 
              onChange={handleInputChange} 
              disabled={isSubmitting}
            />

          </motion.form>
        </div>
      </div>

      {/* Massive Footer Button */}
      <motion.button
        onClick={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        disabled={isSubmitting || submissionStatus === 'success'}
        className={`w-full py-10 md:py-14 transition-all duration-300 group relative overflow-hidden
          ${submissionStatus === 'success' ? 'bg-green-600 text-white cursor-default' : ''}
          ${submissionStatus === 'error' ? 'bg-red-600 text-white' : ''}
          ${submissionStatus === 'idle' || submissionStatus === 'loading' ? 'bg-white text-black hover:bg-gray-200 active:bg-gray-300' : ''}
        `}
      >
        <span className="relative z-10 flex items-center justify-center gap-4 text-xl md:text-3xl font-black tracking-[0.3em] uppercase">
          {submissionStatus === 'loading' && (
            <>Transmitting <Loader2 className="w-8 h-8 animate-spin" /></>
          )}
          {submissionStatus === 'success' && (
            <>Transmission Sent <CheckCircle2 className="w-8 h-8" /></>
          )}
          {submissionStatus === 'error' && (
            <>Transmission Failed <AlertCircle className="w-8 h-8" /></>
          )}
          {submissionStatus === 'idle' && (
            <>Initiate_Contact <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-200" /></>
          )}
        </span>
      </motion.button>

    </section>
  );
};

export default Contact;

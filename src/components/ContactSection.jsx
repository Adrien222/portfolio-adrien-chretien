import React, { memo, useState, useRef, useEffect } from 'react';
import { contactConfig, contactData, personalInfo } from '../data/portfolioData';
import Button from './Button';
import emailjs from '@emailjs/browser';
import { useContactAnimations } from '../hooks/useContactAnimation';

const ContactSection = memo(({ className = '' }) => {
  
  // État du formulaire
  const [formData, setFormData] = useState(() => {
    const initialData = {};
    contactConfig.fields.forEach(field => {
      initialData[field.id] = '';
    });
    return initialData;
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Hook d'animations
  const { observeElement, getAnimationClasses } = useContactAnimations();

  // Refs pour les éléments à animer
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);
  const footerRef = useRef(null);
  const fieldRefs = useRef([]);

  // Observer les éléments au montage
  useEffect(() => {
    observeElement(titleRef.current);
    observeElement(subtitleRef.current);
    observeElement(formRef.current);
    observeElement(buttonRef.current);
    observeElement(footerRef.current);
    
    fieldRefs.current.forEach(ref => {
      if (ref) observeElement(ref);
    });
  }, [observeElement]);

  // Gestion des changements d'input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validation des champs
  const validateForm = () => {
    const newErrors = {};

    contactConfig.fields.forEach(field => {
      const value = formData[field.id];
      
      if (field.required && !value.trim()) {
        newErrors[field.id] = `Le champ ${field.label} est requis`;
      }
      
      if (field.type === 'email' && value.trim()) {
        if (!contactConfig.validation.email.regex.test(value)) {
          newErrors[field.id] = contactConfig.validation.email.message;
        }
      }
      
      if (field.type === 'textarea' && value.trim() && value.trim().length < contactConfig.validation.message.minLength) {
        newErrors[field.id] = contactConfig.validation.message.message;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Envoi avec EmailJS
  const sendEmail = async (templateParams) => {
    try {
      await emailjs.send(
        contactConfig.emailjs.serviceId,
        contactConfig.emailjs.templateId,
        templateParams,
        contactConfig.emailjs.publicKey
      );
      
      return { success: true };
      
    } catch (error) {
      if (error.status === 400) {
        return { success: false, message: 'Configuration EmailJS incorrecte.' };
      } else if (error.status === 401) {
        return { success: false, message: 'Clé API EmailJS invalide.' };
      } else if (error.status === 403) {
        return { success: false, message: 'Quota EmailJS dépassé.' };
      } else if (!navigator.onLine) {
        return { success: false, message: contactConfig.messages.networkError };
      } else {
        return { success: false, message: contactConfig.messages.error };
      }
    }
  };

  // Gestion de la soumission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitMessage(contactConfig.messages.validationError);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const templateParams = {
        name: formData.name,
        from_email: formData.email,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString('fr-FR', {
          day: '2-digit',
          month: '2-digit', 
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const result = await sendEmail(templateParams);
      
      if (result.success) {
        setSubmitMessage(contactConfig.messages.success);
        
        setFormData(() => {
          const resetData = {};
          contactConfig.fields.forEach(field => {
            resetData[field.id] = '';
          });
          return resetData;
        });
        
        setTimeout(() => {
          setSubmitMessage('');
        }, 5000);
        
      } else {
        setSubmitMessage(result.message || contactConfig.messages.error);
      }
      
    } catch (error) {
      setSubmitMessage(contactConfig.messages.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className={`py-20 ${className}`}
    >
      <div className="container-portfolio">
        
        <h2 
          ref={titleRef}
          id="contact-title"
          className={getAnimationClasses('contact-title', 'contact-title contact-title-animate')}
        >
          {contactData.title}
        </h2>
        
        <p 
          ref={subtitleRef}
          id="contact-subtitle"
          className={getAnimationClasses('contact-subtitle', 'contact-subtitle contact-subtitle-animate')}
        >
          {contactData.subtitle}
        </p>
        
        <div className="max-w-2xl mx-auto">
          <form 
            ref={formRef}
            id="contact-form"
            className={getAnimationClasses('contact-form', 'contact-form contact-form-animate')}
            onSubmit={handleSubmit}
          >
            
            {contactConfig.fields.map((field, index) => (
              <div 
                key={field.id} 
                ref={el => fieldRefs.current[index] = el}
                id={`contact-field-${field.id}`}
                className={getAnimationClasses(`contact-field-${field.id}`, 'contact-field-group contact-field-animate')}
              >
                
                <label htmlFor={field.id} className="contact-label">
                  {field.label}
                  {field.required && <span className="contact-required">*</span>}
                </label>
                
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleInputChange}
                    required={field.required}
                    className={`form-field form-textarea ${errors[field.id] ? 'error' : ''}`}
                    placeholder={contactData.placeholders[field.id]}
                    disabled={isSubmitting}
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleInputChange}
                    required={field.required}
                    className={`form-field ${errors[field.id] ? 'error' : ''}`}
                    placeholder={contactData.placeholders[field.id]}
                    disabled={isSubmitting}
                  />
                )}
                
                {errors[field.id] && (
                  <span className="contact-error-message">
                    {errors[field.id]}
                  </span>
                )}
              </div>
            ))}
            
            {submitMessage && (
              <div className={`contact-submit-message ${submitMessage.includes('succès') ? 'success' : 'error'}`}>
                {submitMessage}
              </div>
            )}
            
            <div 
              ref={buttonRef}
              id="contact-button"
              className={getAnimationClasses('contact-button', 'text-center contact-button-animate')}
            >
              <Button
                type="submit"
                variant="primary"
                size="medium"
                disabled={isSubmitting}
                className="contact-submit-button"
              >
                {isSubmitting ? contactConfig.messages.sending : 'Envoyer'}
              </Button>
            </div>
            
          </form>
        </div>
        
        <footer 
          ref={footerRef}
          id="contact-footer"
          className={getAnimationClasses('contact-footer', 'contact-footer contact-footer-animate')}
        >
          <p className="contact-footer-text">
            {contactData.footer.copyright.replace('{name}', personalInfo.name)}
          </p>
          <div className="contact-social-links">
            {contactData.footer.socialLinks.map((link, index) => (
              <React.Fragment key={link.key}>
                {index > 0 && <span className="text-gray-500">•</span>}
                <a 
                  href={personalInfo[link.key]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  {link.name}
                </a>
              </React.Fragment>
            ))}
          </div>
        </footer>
        
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';
export default ContactSection;
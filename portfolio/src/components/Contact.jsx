import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    otherReason: '',
    message: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    reason: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

  const handleReasonChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      reason: value,
      otherReason: value === 'Other' ? prevData.otherReason : '',
    }));
    validateField('reason', value);
    toggleOtherReasonInput(value === 'Other');
  };

  const handleOtherReasonChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, otherReason: value }));
    validateField('otherReason', value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setIsSubmitted(true); 
      console.log('Form data submitted:', formData);
    }
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach((field) => {
      const value = formData[field];
      const isValid = validateField(field, value);
      if (!isValid) {
        errors[field] = 'This field is required.';
      }
    });
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateField = (field, value) => {
    switch (field) {
      case 'name':
        setValidationErrors((prevErrors) => ({ ...prevErrors, name: value ? '' : 'This field is required.' }));
        return !!value;
      case 'email':
        const emailRegex = /\S+@\S+\.\S+/;
        const isEmailValid = emailRegex.test(value);
        setValidationErrors((prevErrors) => ({ ...prevErrors, email: isEmailValid ? '' : 'Invalid email address.' }));
        return isEmailValid;
      case 'reason':
        setValidationErrors((prevErrors) => ({ ...prevErrors, reason: value ? '' : 'This field is required.' }));
        return !!value;
      case 'otherReason':
        if (formData.reason !== 'Other') {
          setValidationErrors((prevErrors) => ({ ...prevErrors, otherReason: '' }));
          return true;
        }
        setValidationErrors((prevErrors) => ({ ...prevErrors, otherReason: value ? '' : 'This field is required.' }));
        return !!value;
      default:
        return true;
    }
  };
  

  const toggleOtherReasonInput = (show) => {
    const contactElement = document.getElementById('contact');
    if (show) {
      contactElement.classList.add('show-other-reason');
    } else {
      contactElement.classList.remove('show-other-reason');
    }
  };
 

  return (
   
       
    <div id="contact" className="con" tabIndex="-1">
      <h1 className="contactu">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-label="Name"
          aria-required="true"
        />
        {validationErrors.name && <p className="error-message">{validationErrors.name}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-label="Email"
          aria-required="true"
        />
        {validationErrors.email && <p className="error-message">{validationErrors.email}</p>}

        <label htmlFor="reason">Reason for Contact:</label>
        <select
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleReasonChange}
          aria-label="Reason for Contact"
          aria-required="true"
        >
           <option value="">Select a reason</option>
          <option value="Inquiry">Inquiry</option>
          <option value="Feedback">Feedback</option>
          <option value="Other">Other</option>
        </select>
        {validationErrors.reason && <p className="error-message">{validationErrors.reason}</p>}

        {formData.reason === 'Other' && (
          <div>
            <label htmlFor="otherReason">Specify Other Reason:</label>
            <input
              type="text"
              id="otherReason"
              name="otherReason"
              value={formData.otherReason}
              onChange={handleOtherReasonChange}
              aria-label="Other Reason"
              aria-required={formData.reason === 'Other'}
            />
            {validationErrors.otherReason && <p className="error-message">{validationErrors.otherReason}</p>}
          </div>
        )}

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          aria-label="Message"
        ></textarea>

        <button type="submit" className={isSubmitted ? 'submitted-button' : ''}>
          {isSubmitted ? 'Submitted' : 'Submit'}
        </button>
      </form>
    </div>
    
  );
};

export default Contact;
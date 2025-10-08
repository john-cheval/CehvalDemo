"use client";
import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

const MobileReCaptcha = forwardRef(({ siteKey, callback, id }, ref) => {
  const recaptchaRef = useRef(null);
  const [widgetId, setWidgetId] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Check if reCAPTCHA is already loaded
  useEffect(() => {
    const checkRecaptchaLoaded = () => {
      if (window.grecaptcha && window.grecaptcha.render) {
        setIsLoaded(true);
        return true;
      }
      return false;
    };

    if (checkRecaptchaLoaded()) {
      return;
    }

    // Load reCAPTCHA script if not already loaded
    if (!document.querySelector('script[src*="recaptcha/api.js"]')) {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;

      script.onload = () => {
        // Wait for grecaptcha to be fully available
        const pollForRecaptcha = () => {
          if (window.grecaptcha && window.grecaptcha.render) {
            setIsLoaded(true);
          } else {
            setTimeout(pollForRecaptcha, 100);
          }
        };
        pollForRecaptcha();
      };

      document.head.appendChild(script);
    } else {
      // Script already exists, poll for availability
      const pollForRecaptcha = () => {
        if (window.grecaptcha && window.grecaptcha.render) {
          setIsLoaded(true);
        } else {
          setTimeout(pollForRecaptcha, 100);
        }
      };
      pollForRecaptcha();
    }
  }, []);

  // Render the captcha when ready
  useEffect(() => {
    // Only attempt to render if loaded, ref is available, grecaptcha is ready, and widget hasn't been rendered yet for this instance
    if (
      isLoaded &&
      recaptchaRef.current &&
      window.grecaptcha &&
      widgetId === null
    ) {
      try {
        // Clear any existing content within the ref element
        recaptchaRef.current.innerHTML = "";

        const widget = window.grecaptcha.render(recaptchaRef.current, {
          sitekey: siteKey,
          callback: callback,
        });
        setWidgetId(widget);
      } catch (error) {
        console.error(`Error rendering reCAPTCHA for ID ${id}:`, error);
      }
    }
  }, [isLoaded, siteKey, callback, widgetId, id]); // Add id to dependency array

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (widgetId !== null && window.grecaptcha) {
        try {
          window.grecaptcha.reset(widgetId);
          // Set widgetId to null to allow re-rendering if the component remounts
          setWidgetId(null);
        } catch (error) {
          console.error("Error resetting reCAPTCHA on unmount:", error);
        }
      }
    };
  }, [widgetId]);

  // Expose reset to parent
  useImperativeHandle(ref, () => ({
    resetCaptcha: () => {
      if (window.grecaptcha && widgetId !== null) {
        try {
          window.grecaptcha.reset(widgetId);
          setWidgetId(null); // Reset widgetId to allow re-rendering
        } catch (error) {
          console.error("Error resetting reCAPTCHA:", error);
        }
      }
    },
  }));

  return <div id={id} ref={recaptchaRef} />;
});

MobileReCaptcha.displayName = "MobileReCaptcha";

export default MobileReCaptcha;

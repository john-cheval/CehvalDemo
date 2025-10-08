"use client";
import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

const ReCaptcha = forwardRef(({ siteKey, callback }, ref) => {
  const recaptchaRef = useRef(null);
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);

  const onRecaptchaLoad = () => {
    setIsRecaptchaLoaded(true);
  };

  useEffect(() => {
    window.onRecaptchaLoad = onRecaptchaLoad;

    if (!window.grecaptcha) {
      const script = document.createElement("script");
      script.src =
        "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else if (window.grecaptcha && window.grecaptcha.render) {
      onRecaptchaLoad();
    }

    return () => {
      window.onRecaptchaLoad = null;
    };
  }, []);

  useEffect(() => {
    if (isRecaptchaLoaded) {
      window?.grecaptcha?.render(recaptchaRef.current, {
        sitekey: siteKey,
        callback: callback,
      });
    }
  }, [isRecaptchaLoaded]);

  useImperativeHandle(ref, () => ({
    resetCaptcha: () => {
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    },
  }));

  return <div ref={recaptchaRef}></div>;
});

export default ReCaptcha;

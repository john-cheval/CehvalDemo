/** @format */

import ContactTopSection from "@/components/Contact/NewContact/ContactTopSection";
import ContactMiddleSection from "@/components/Contact/NewContact/ContactMiddleSection";

import FaqSchemaAccordion from "@/components/common/FaqSchemaAccordion";
import ContactForm from "@/components/Contact/NewContact/ContactForm";

function ContactPage({ services, faq_title, faq_list, content }) {
  return (
    <>
      <div className="bg-white m-0 p-0">
        <ContactTopSection />
        <ContactMiddleSection data={content} />
        <ContactForm services={services} title="Start a conversation." />
        {faq_list && faq_title && (
          <FaqSchemaAccordion
            faqs_heading_footer={faq_title}
            faqs_list_footer={faq_list}
          />
        )}
      </div>
    </>
  );
}

export default ContactPage;

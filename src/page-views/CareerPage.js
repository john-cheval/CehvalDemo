/** @format */

import { CareerForm } from "@/components/Career/CareerForm";

function CareerFormPage({ title, isCareerInner }) {
  return (
    <>
      <CareerForm title={title} isCareerInner={isCareerInner} />
    </>
  );
}

export default CareerFormPage;

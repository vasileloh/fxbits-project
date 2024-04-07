"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function DefaultAccordion() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion placeholder={""} open={open === 1}>
        <AccordionHeader placeholder={""} onClick={() => handleOpen(1)}>
          Return policy
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          volutpat nunc quis magna imperdiet faucibus. Quisque placerat ligula
          id sapien semper, vitae auctor nunc volutpat. Aliquam erat volutpat.
          Quisque aliquam euismod libero, et sollicitudin quam ultrices in.
          Mauris odio turpis, fringilla id imperdiet sit amet, fringilla vitae
          massa. Vivamus id lorem imperdiet lorem pretium congue. Etiam
          fringilla urna vitae blandit condimentum. Mauris vestibulum, nisl eu
          tristique tristique, lacus lectus pellentesque felis, sit amet gravida
          justo leo tincidunt nisl. Quisque tempor tincidunt magna, non
          fermentum ligula faucibus in. Phasellus vel magna eget lorem sodales
          fermentum. Nulla mattis nulla justo, non malesuada dolor blandit sed.
        </AccordionBody>
      </Accordion>
      <Accordion placeholder={""} open={open === 2}>
        <AccordionHeader placeholder={""} onClick={() => handleOpen(2)}>
          Shipping
        </AccordionHeader>
        <AccordionBody>
          WLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          volutpat nunc quis magna imperdiet faucibus. Quisque placerat ligula
          id sapien semper, vitae auctor nunc volutpat. Aliquam erat volutpat.
          Quisque aliquam euismod libero, et sollicitudin quam ultrices in.
          Mauris odio turpis, fringilla id imperdiet sit amet, fringilla vitae
          massa. Vivamus id lorem imperdiet lorem pretium congue. Etiam
          fringilla urna vitae blandit condimentum. Mauris vestibulum, nisl eu
          tristique tristique, lacus lectus pellentesque felis, sit amet gravida
          justo leo tincidunt nisl. Quisque tempor tincidunt magna, non
          fermentum ligula faucibus in. Phasellus vel magna eget lorem sodales
          fermentum. Nulla mattis nulla justo, non malesuada dolor blandit sed.
        </AccordionBody>
      </Accordion>
      <Accordion placeholder={""} open={open === 3}>
        <AccordionHeader placeholder={""} onClick={() => handleOpen(3)}>
          Waranty
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          volutpat nunc quis magna imperdiet faucibus. Quisque placerat ligula
          id sapien semper, vitae auctor nunc volutpat. Aliquam erat volutpat.
          Quisque aliquam euismod libero, et sollicitudin quam ultrices in.
          Mauris odio turpis, fringilla id imperdiet sit amet, fringilla vitae
          massa. Vivamus id lorem imperdiet lorem pretium congue. Etiam
          fringilla urna vitae blandit condimentum. Mauris vestibulum, nisl eu
          tristique tristique, lacus lectus pellentesque felis, sit amet gravida
          justo leo tincidunt nisl. Quisque tempor tincidunt magna, non
          fermentum ligula faucibus in. Phasellus vel magna eget lorem sodales
          fermentum. Nulla mattis nulla justo, non malesuada dolor blandit sed.
        </AccordionBody>
      </Accordion>
    </>
  );
}

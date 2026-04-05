"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={i} className="border-border">
          <AccordionTrigger className="text-left text-base font-semibold text-text-primary hover:text-navy py-5">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-text-secondary leading-relaxed pb-5">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

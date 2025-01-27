import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import chev from "../../../static/chev.svg";
import Image from "next/image";

export const FaqItem = (props: any) => {
  return (
    <Accordion
      className="overflow-hidden border-b border-black shadow-none rounded-none"
      style={{ borderRadius: "0%" }}
    >
      <AccordionSummary
        expandIcon={<Image src={chev} alt="" width={16} height={16} />}
        className="fw_400 px-0 py-2 text-sm sm:text-base"
      >
        <h3>{props.item.question}</h3>
      </AccordionSummary>
      <AccordionDetails className="p-0 m-0">
        <div className="mx-0 my-0 border-none px-0 pb-4 pt-2 text-sm sm:text-base">
          {props.item.answer}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

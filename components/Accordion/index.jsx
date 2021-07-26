import { IconContext } from "react-icons";
import {
  AccordionSection,
  Container,
  Wrap,
  Dropdown,
} from "./AccordionElement";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";

const Accordion = ({ Data }) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider
      value={{ color: "hsl(163, 100%, 50%)", size: "25px" }}
    >
      <AccordionSection>
        <Container>
          {Data.map((item, index) => (
            <>
              <Wrap onClick={() => toggle(index)} key={index}>
                <p>{item.question}</p>
                <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
              </Wrap>
              {clicked === index ? (
                <Dropdown>
                  <p>{item.answer}</p>
                </Dropdown>
              ) : null}
            </>
          ))}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;

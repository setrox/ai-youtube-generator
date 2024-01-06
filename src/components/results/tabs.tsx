import React, { useState } from "react";

const AccordionItem = ({
  id,
  title,
  content,
  isOpen,
}: {
  id: any;
  title: any;
  content: any;
  isOpen: boolean;
}) => {
  return (
    <div
      id={`accordion-collapse-body-${id}`}
      className={`rounded-[10px] accordion-item bg-app py-4 px-6 mt-4 ${
        isOpen ? "open" : "closed"
      }`}
    >
      <button
        type="button"
        className="accordion-button"
        aria-expanded={isOpen}
        aria-controls={`accordion-collapse-body-${id}`}
      >
        <h2 className="font-bold text-xl"> {title}</h2>
      </button>
      <div className="accordion-content">
        {isOpen && <div className="mt-4 pl-4">{content}</div>}
      </div>
    </div>
  );
};

const TabsYT = ({ data }: { data: any }) => {
  const [tOpen, setTOpen] = useState(true);
  const [dOpen, setdOpen] = useState(false);
  const [tagsOpen, setTagsOpen] = useState(false);

  return (
    <div className="accordion w-full" id="accordion-collapse">
      <AccordionItem
        isOpen={tOpen}
        id={1}
        title="Choose Title"
        content={
          <>
            <p>{data?.title}</p>
          </>
        }
      />
      <AccordionItem
        isOpen={dOpen}
        id={2}
        title="Choose description"
        content={
          <>
            <p>{data?.description}</p>
          </>
        }
      />
      <AccordionItem
        isOpen={tagsOpen}
        id={3}
        title="Choose tags"
        content={
          <>
            <p>
              {data?.tags.map((tag: any, i: any) => (
                <p>tag</p>
              ))}
            </p>
          </>
        }
      />
    </div>
  );
};

export default TabsYT;

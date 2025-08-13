import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Lorem ipsum dolor, sit amet consectetur?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat temporibus amet odit, quo magni quam perspiciatis ab nemo provident. Necessitatibus, vero dolor architecto at earum nostrum ipsa neque! Reiciendis, ipsam?",
  },
  {
    question: "Lorem ipsum dolor, sit amet consectetur?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat temporibus amet odit, quo magni quam perspiciatis ab nemo provident. Necessitatibus, vero dolor architecto at earum nostrum ipsa neque! Reiciendis, ipsam?",
  },
  {
    question: "Lorem ipsum dolor, sit amet consectetur?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat temporibus amet odit, quo magni quam perspiciatis ab nemo provident. Necessitatibus, vero dolor architecto at earum nostrum ipsa neque! Reiciendis, ipsam?",
  },
  {
    question: "Lorem ipsum dolor, sit amet consectetur?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat temporibus amet odit, quo magni quam perspiciatis ab nemo provident. Necessitatibus, vero dolor architecto at earum nostrum ipsa neque! Reiciendis, ipsam?",
  },
];

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <section className="bg-muted py-20">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mt-4 max-w-2xl text-muted-foreground"
            >
              Find answers to common questions about our services and process.
            </motion.p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index, isOpen, onToggle }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="transition-all border-2 border-gray-300 duration-300 hover:shadow-md">
        <div className="p-0">
          <button
            onClick={onToggle}
            className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/50"
          >
            <span className="font-semibold">{faq.question}</span>
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </button>
          <motion.div
            initial={false}
            animate={{ height: isOpen ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-muted-foreground">{faq.answer}</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

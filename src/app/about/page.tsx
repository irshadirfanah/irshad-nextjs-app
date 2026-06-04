import { FC } from "react";

const AboutPage: FC = () => {
  return (
    <div className="grid items-left justify-items-center min-h-[calc(100vh-theme(spacing.32))] p-8 pt-24 pb-20 gap-16 sm:p-20 sm:pt-32 text-[#E0C4B0] font-[family-name:var(--font-cormorant-garamond)]">
      <div className="flex flex-col gap-[32px] items-center sm:items-start max-w-4xl">
        <h1 className="text-7xl font-bold text-[#F4B400]">
          Hello! I&apos;m Irshad.
        </h1>
        <div className="text-2xl space-y-6">
          <p>
            I am a Software Engineer at The Economist, and a Fellow at the Royal
            Society of Arts.
          </p>
          <p>
            In a previous life, I was headed towards a medical career in
            Médecins Sans Frontières. My academic career was heavily focused on
            the sciences and research - I spent my summers working in local
            oncology clinics, setting up medical camps across Nepal, and
            studying forensic science in Wuhan, China. I graduated with a
            Diploma in Biomedical Science in Singapore, where I was born and
            raised. My final year research was on the relationship between three
            prominent genes in the role of breast cancer metastasis - you can
            find out more{" "}
            <a href="/writing" className="text-[#F4B400] hover:underline">
              here
            </a>
            .
          </p>
          <p>
            At the cusp of adulthood, I packed my bags and moved across the
            world to the United Kingdom to do my Bachelors in Biochemistry at
            Queen Mary University of London. The plan was to eventually
            transform my bench skills to the bedside, and care for those
            suffering from the very diseases I had based my research on.
          </p>
          <p>
            My final year coincided with the onset of the COVID-19 pandemic; I
            spent the beginning of lockdown back in Singapore, where I worked on
            the frontlines as a Swab Officer. My efforts were later recognised
            with a Medal of Resilience awarded by the Prime Minister’s Office.
          </p>
          <p>
            I came back to London to complete my final year and dissertation,
            and continued working on the frontlines. My love for investigative
            journalism and forensic sciences coincided beautifully with my
            Dissertation Supervisor’s passion for Palaeontology - we were
            interested in dating bones, and I ended up writing about existing
            skeletal age estimation techniques for humans, which you can read{" "}
            <a href="/writing" className="text-[#F4B400] hover:underline">
              here
            </a>
            .
          </p>
          <p>
            Outside university, I continued swabbing across the city for
            multiple projects, including TV sets. I was later trained to work as
            a Junior Paramedic on site, and then on ambulances. During the long
            waiting hours, I signed up for Code First Girls’ Introduction to Web
            Development programme on a whim. It was sponsored by The Economist,
            a company I had not heard much of then, and while I had thoroughly
            enjoyed the programme, I did not think much of coding except as a
            hobby.
          </p>
          <p>
            Upon graduation, and in the midst of preparing for graduate medical
            school, I worked as a 111 Health Advisor. As an advocate for
            widening healthcare access, I was confronted with challenges beyond
            scope, and realised there are systemic challenges I would not be
            able to address even as a medical professional. My epiphany led to a
            decision to leave the only field I had ever known then.
          </p>
          <p>
            Technology was on the rise in popularity, and I quickly embraced it
            despite my lack of, well, everything. I started as an IT Operations
            Analyst at The Economist, where I learnt everything from scratch -
            from connecting a bluetooth mouse to laptops, to managing Active
            Directory, and writing Powershell scripts. Fifteen months later,
            beyond my wildest dreams, I became a Software Engineer for Content
            Tools & Discovery at the same company.
          </p>
          <p>
            Today, I build features for The Economist’s digital publication -
            some of which are featured{" "}
            <a
              href="/projects/economist"
              className="text-[#F4B400] hover:underline"
            >
              here
            </a>
            . I am also pursuing an MSc in Technology and Public Policy at UCL,
            because I believe the most important question in technology is not
            what we can build, but what we should.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

import { ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure Data Science Professional",
    issuer: "Oracle University",
    date: "October 2025",
    image: "/certificates/cert1.png",
    link: "https://drive.google.com/file/d/1Ooru6n4hUW6QdQh9GgfBBEclFYpMat_k/view?usp=sharing",
  },
  {
    id: 2,
    title: "Cloud Computing — Elite",
    issuer: "NPTEL | IIT Kharagpur",
    date: "Jul-Oct 2025",
    image: "/certificates/cert2.png",
    link: "https://drive.google.com/file/d/1D8U0Sx3wQbHD_IQbc3GMBDnK8JPBiawz/view?usp=sharing",
  },
  {
    id: 3,
    title: "Introduction to DevOps",
    issuer: "IBM | Coursera",
    date: "September 2025",
    image: "/certificates/cert3.png",
    link: "https://drive.google.com/file/d/1XaeByN-wrkDuc9OV9f46RP5lAcIvQmBk/view?usp=sharing",
  },
  {
    id: 4,
    title: "Introduction to Agile Development and Scrum",
    issuer: "IBM | Coursera",
    date: "September 2025",
    image: "/certificates/cert4.png",
    link: "https://drive.google.com/file/d/1B27YjiDt-WmIiIpWfzKsLD1dVkC_E0YV/view?usp=sharing",
  },
  {
    id: 5,
    title: "SQL Intermediate",
    issuer: "HackerRank",
    date: "June 2025",
    image: "/certificates/cert5.png",
    link: "https://drive.google.com/file/d/1E2A4KS4xnuwFfEb_IYsm-7a4xGPHQze9/view?usp=sharing",
  },
  {
    id: 6,
    title: "From Data to Decisions: A Hands-On Approach to Data Science",
    issuer: "LPU — Centre for Professional Enhancement",
    date: "June - July 2025",
    image: "/certificates/cert6.png",
    link: "https://drive.google.com/file/d/1atOcVdnpsmRaigkB9qtr80eFmjghNtxr/view?usp=sharing",
  },
];

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Certificates</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Certifications I've earned through dedicated learning and skill development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover block"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                  <ExternalLink size={16} className="text-primary" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
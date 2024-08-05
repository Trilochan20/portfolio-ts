const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Firebase",
  "WordPress",
  "WooCommerce",
  "GatsbyJS",
  "Next.js",
  "D3.js",
  "AWS",
  "Python",
  "SQL",
  "BigQuery",
  "PostgreSQL",
  "Supabase",
  "NodeJs",
  "Vite",
  "Chakra UI",
  "Ant Design",
  "Flask",
  "Web3",
  "Lottie",
  "Metamask",
  "React Native",
  "FastAPI",
  "Flutter",
  "Figma",
  "OpenCart",
  "Apache",
  "PayPal Payment Gateway",
  "Google AMP",
  "Create Razzle App",
  "PayUMoney Payment Gateway",
  "E-commerce",
  "jQuery",
  "SSR",
  "Lambda",
  "S3",
  "Google Search Console",
  "SEO",
  "Gatsby",
  "NextJS",
  "Dashboard",
  "Paytm Payment Gateway",
  "Shopify",
  "Heroku",
  "Firestore",
  "NFT",
  "Elementor",
  "UI/UX",
  "",
  // here other techs to be added
];

export function highlightTechnologies(text: string): React.ReactNode[] {
  const regex = new RegExp(`\\b(${technologies.join("|")})\\b`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (
      technologies.some((tech) => tech.toLowerCase() === part.toLowerCase())
    ) {
      return (
        <mark
          key={index}
          className="text-indigo-800 bg-indigo-100  rounded-md font-semibold
          dark:bg-indigo-900
         dark:text-indigo-200"
        >
          {part}
        </mark>
      );
    }
    return part;
  });
}

import "../styles/globals.scss";
import Header from "@/components/Header/Header.jsx";
import AboutSection from "@/components/AboutSection/AboutSection.jsx";
import Form from "@/components/Form/Form.jsx";
import Footer from "@/components/Footer/Footer.jsx";

export const metadata = {
  title: "my-portfolio",
  description: "A portfolio website showcasing my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
          <AboutSection />
          <main className="main">{children}</main>
          <Form />
          <Footer />
        </div>
      </body>
    </html>
  );
}

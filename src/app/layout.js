import "../styles/globals.scss";
import Header from "@/components/Header/Header.jsx";
import AboutSection from "@/components/AboutSection/AboutSection.jsx";
import Form from "@/components/Form/Form.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Analytics from "@/components/Analytics/Analytics";

export const metadata = {
  title: "my-portfolio",
  description: "A portfolio website showcasing my projects and skills.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
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

import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Form from "@/components/contacts/Form";

export default function Home() {
  return (
    <>
      <div>
        <div id="Home"></div>
        <Header />
        <br />
        <br />
        <br />
        <br />
        <div id="About"></div>
        <br />
        <br />
        <br />
        <AboutMe />
        <div id="Projects"></div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Projects />
        <div id="Contact"></div>
        <hr />
        <br />
        <br />
        <Form />
        <br />
        <br />
        <br /> <br />
      </div>
    </>
  );
}

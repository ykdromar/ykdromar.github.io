import { ToastContainer } from "react-toastify";
import Contact from "./contact";
import Educations from "./education";
import Experiences from "./experiences";
import Footer from "./footer";
import Projects from "./projects";
import Skills from "./skills";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Experiences />
      <Projects />
      <Skills />
      <Educations />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

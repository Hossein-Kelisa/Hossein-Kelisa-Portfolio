import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import RequirementForm from "../components/RequirementForm";
import Proposal from "../components/Proposal";
import ScrollTop from "../components/ScrollTop";

const HomePage = () => {
  return (
    <>
      <main>
        <ScrollTop />
        <Projects />
        <Skills />
        <RequirementForm />
        <Proposal />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;


// function Services() {
//   return (
//     <main style={{ maxWidth: 900, margin: "2rem auto", padding: "1rem" }}>
//       <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Website Services</h1>
//       <p style={{ marginBottom: "1rem" }}>
//         I build simple, fast, and responsive websites using React. Read below for
//         the process, download contract and requirements, or fill the request form.
//       </p>

//       <section style={{ marginBottom: "1.5rem" }}>
//         <h2 style={{ fontSize: "1.25rem" }}>What I offer</h2>
//         <ul>
//           <li>Responsive website (desktop & mobile)</li>
//           <li>Contact form + deployment</li>
//           <li>SEO basics and performance tuning</li>
//         </ul>
//       </section>

//       <section style={{ marginBottom: "1.5rem" }}>
//         <h2 style={{ fontSize: "1.25rem" }}>Downloads</h2>
//         <p>
//           <a href="/contract.pdf" download>Download contract (PDF)</a>
//         </p>
//         <p>
//           <a href="/requirements.pdf" download>Download requirements (PDF)</a>
//         </p>
//       </section>

//       <section style={{ marginBottom: "2rem" }}>
//         <h2 style={{ fontSize: "1.25rem" }}>Request a website</h2>
//         <p>Fill the form below to send your request.</p>
//         {/* We will replace this with Netlify form code in Step 3 */}
//         <form name="website-request" method="POST" data-netlify="true">
//           <input type="hidden" name="form-name" value="website-request" />
//           <div style={{ marginBottom: ".5rem" }}>
//             <label>Your name<br />
//               <input type="text" name="name" required />
//             </label>
//           </div>
//           <div style={{ marginBottom: ".5rem" }}>
//             <label>Your email<br />
//               <input type="email" name="email" required />
//             </label>
//           </div>
//           <div style={{ marginBottom: ".5rem" }}>
//             <label>Project details<br />
//               <textarea name="details" rows="4" required />
//             </label>
//           </div>
//           <button type="submit">Submit request</button>
//         </form>
//       </section>
//     </main>
//   );
// }
// export default Services;

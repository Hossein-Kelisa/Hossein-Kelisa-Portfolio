import Fades from "../../Animations/Fades";
import "./Proposal.css";
import { FaFilePdf } from "react-icons/fa";

const Proposal = () => {
  return (
    <section id="requirements" className="proposal-section">
      <Fades animationType="fadeUp">
        <h2 className="proposal-title">Project Requirements & Contract</h2>
      </Fades>

      <Fades animationType="fadeUp">
        <p className="proposal-text">
          Download the complete project document, including requirements,
          workflow, pricing, and contract details. This helps you understand the
          full process before submitting a request.
        </p>

        <a
          href="/Website_Requirement.pdf"
          download
          className="proposal-download-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download PDF <FaFilePdf className="proposal-icon" />
        </a>
      </Fades>
    </section>
  );
};

export default Proposal;

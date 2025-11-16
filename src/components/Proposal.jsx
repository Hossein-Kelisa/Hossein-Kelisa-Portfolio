import Fades from "../Animations/Fades";
import "./Proposal.css";
import { FaFilePdf } from "react-icons/fa";

const Proposal = () => {
  return (
    <section id="proposal" className="proposal-section">
      <Fades animationType="fadeUp">
        <h2>Project Proposal</h2>
      </Fades>
      <Fades animationType="fadeUp">
        <p>
          Here you can download the full project proposal, including
          requirements, structure, and planning details.
        </p>

        <a
          href="/Website_Requirement.pdf"
          download
          className="download-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Proposal <FaFilePdf className="proposal-icon" />
        </a>
      </Fades>
    </section>
  );
};

export default Proposal;

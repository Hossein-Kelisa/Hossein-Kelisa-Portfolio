import "./RequirementForm.css";

function RequirementForm() {
  return (
    <section className="requirement-container">
      <h2 className="requirement-title">Project Requirement Form</h2>
      <p className="requirement-subtitle">
        Fill in your details and upload any supporting documents.  
        I will review your information and contact you shortly.
      </p>

      <form
        name="requirement-form"
        method="POST"
        data-netlify="true"
        encType="multipart/form-data"
        className="requirement-form"
      >
        <input type="hidden" name="form-name" value="requirement-form" />

        <div className="form-group">
          <input type="text" name="name" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <input type="email" name="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <textarea
            name="details"
            placeholder="Describe your project..."
            required
          ></textarea>
        </div>

        <div className="form-group file-group">
          <label className="file-label">
            Upload File (PDF, DOC, JPG, max 10MB)
          </label>
          <input
            type="file"
            name="attachment"
            accept=".pdf,.doc,.docx,.jpg,.png"
            className="file-input"
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Request
        </button>
      </form>
    </section>
  );
}

export default RequirementForm;

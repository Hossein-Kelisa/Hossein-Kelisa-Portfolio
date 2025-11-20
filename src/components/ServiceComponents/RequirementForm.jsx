import "./RequirementForm.css";

function RequirementForm() {
  return (
    <form
      name="requirement-form"
      method="POST"
      data-netlify="true"
      encType="multipart/form-data"
    >
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea
        name="details"
        placeholder="Your answers here"
        required
      ></textarea>
      <label>
        Upload File (PDF, DOC, JPG, max 10MB):
        <input
          type="file"
          name="attachment"
          accept=".pdf,.doc,.docx,.jpg,.png"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default RequirementForm;

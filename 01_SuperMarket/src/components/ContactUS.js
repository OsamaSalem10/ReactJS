export const ContactUS = () => {
  return (
    <main>
  <section className="my-lg-14 my-8">
    <div className="container">
      <div className="row">
        <div className="offset-lg-2 col-lg-8 col-12">
          <div className="mb-8">
            <h1 className="h3">Retailer Inquiries</h1>
            <p className="lead mb-0">
              This form is for retailer inquiries only. For all other customer
              or shopper support requests, please visit the links below this
              form.
            </p>
          </div>
          <form className="row needs-validation" noValidate>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="contactFName">
                First Name
                <span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                id="contactFName"
                name="contactFName"
                placeholder="Enter Your First Name"
                required
                type="text"
              />
              <div className="invalid-feedback">Please enter firstname.</div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="contactLName">
                Last Name
                <span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                id="contactLName"
                name="contactLName"
                placeholder="Enter Your Last name"
                required
                type="text"
              />
              <div className="invalid-feedback">Please enter lastname.</div>
            </div>
            <div className="col-md-12 mb-3">
              <label className="form-label" htmlFor="contactCompanyName">
                Company
                <span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                id="contactCompanyName"
                name="contactCompanyName"
                placeholder="Your Company"
                required
                type="text"
              />
              <div className="invalid-feedback">Please enter company.</div>
            </div>
            <div className="col-md-12 mb-3">
              <label className="form-label" htmlFor="contactTitle">
                Title
              </label>
              <input
                className="form-control"
                id="contactTitle"
                name="contactTitle"
                placeholder="Your Title"
                required
                type="text"
              />
              <div className="invalid-feedback">Please enter title.</div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="contactEmail">
                Email
                <span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                id="contactEmail"
                name="contactEmail"
                placeholder="Enter Your Email"
                required
                type="email"
              />
              <div className="invalid-feedback">Please enter email.</div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="contactPhone">
                Phone
              </label>
              <input
                className="form-control"
                id="contactPhone"
                name="contactPhone"
                placeholder="Your Phone Number"
                required
                type="text"
              />
              <div className="invalid-feedback">Please enter phone.</div>
            </div>
            <div className="col-md-12 mb-3">
              <label className="form-label" htmlFor="contactTearea">
                Textarea
              </label>
              <textarea
                className="form-control"
                id="contactTearea"
                placeholder="Additional Comments"
                required
                rows="3"
              />
              <div className="invalid-feedback">
                Please enter a message in the textarea.
              </div>
            </div>
            <div className="col-md-12">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>
  );
}
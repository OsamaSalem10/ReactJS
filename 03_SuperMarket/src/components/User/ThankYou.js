import { Link } from "react-router-dom";
export const ThankYou = () => {
  return (
    <main className="content-wrapper">
  <section className="container pt-3 pt-sm-4 pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
    <div
      className="position-relative overflow-hidden rounded-5 p-4 p-sm-5"
      style={{
        backgroundColor: "var(--cz-success-border-subtle)",
      }}>
      <div
        className="position-relative z-2 text-center py-4 py-md-5 my-md-2 my-lg-5 mx-auto"
        style={{
          maxWidth: "536px",
        }}>
        <h1 className="pt-xl-4 mb-4">Thank you for your order!</h1>
        <p className="text-dark-emphasis pb-3 pb-sm-4">
          Your order <span className="fw-semibold">#234000</span> accepted and
          will be processed shortly. Expect our courier{" "}
          <span className="fw-semibold">
            today (Sunday, May 9) at 12:00 - 14:00.
          </span>
        </p>
        <Link
          className="btn btn-lg btn-dark rounded-pill mb-xl-4"
          to="/">
          Continue shopping
        </Link>
      </div>
      <img
    alt=""
        className="animate-up-down position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        src="assets/img/shop/grocery/thankyou-bg-1.png"
      />
      <img
    alt=""
        className="animate-down-up position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        src="assets/img/shop/grocery/thankyou-bg-2.png"
      />
    </div>
  </section>
  
</main>
  );
}
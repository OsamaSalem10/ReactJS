import { Link } from "react-router-dom"
export const Chat = () => {
    return (
     <main className="content">
  <div className="container-fluid p-0">
    <h1 className="h3 mb-3">Messages</h1>
    <div className="card">
      <div className="row g-0">
        <div className="col-12 col-lg-5 col-xl-3 border-end list-group">
          <div className="px-4 d-none d-md-block">
            <div className="d-flex align-items-start align-items-center">
              <div className="flex-grow-1">
                <input
                  className="form-control my-3"
                  placeholder="Search..."
                  type="text"
                />
              </div>
            </div>
          </div>
          <Link
            className="list-group-item list-group-item-action border-0"
            to="#">
            <div className="badge bg-success float-end">5</div>
            <div className="d-flex align-items-start">
              <img
                alt="Ashley Briggs"
                className="rounded-circle me-1"
                height="40"
                src="assets/img/avatars/avatar-5.jpg"
                width="40"
              />
              <div className="flex-grow-1 ms-3">
                Ashley Briggs
                <div className="small">
                  <span className="bi bi-circle-fill chat-online" /> Online
                </div>
              </div>
            </div>
          </Link>
          <Link
            className="list-group-item list-group-item-action border-0"
            to="#">
            <div className="badge bg-success float-end">2</div>
            <div className="d-flex align-items-start">
              <img
                alt="Carl Jenkins"
                className="rounded-circle me-1"
                height="40"
                src="assets/img/avatars/avatar-2.jpg"
                width="40"
              />
              <div className="flex-grow-1 ms-3">
                Carl Jenkins
                <div className="small">
                  <span className="bi bi-circle-fill chat-online" /> Online
                </div>
              </div>
            </div>
          </Link>
          <Link
            className="list-group-item list-group-item-action border-0"
            to="#">
            <div className="d-flex align-items-start">
              <img
                alt="Bertha Martin"
                className="rounded-circle me-1"
                height="40"
                src="assets/img/avatars/avatar-3.jpg"
                width="40"
              />
              <div className="flex-grow-1 ms-3">
                Bertha Martin
                <div className="small">
                  <span className="bi bi-circle-fill chat-online" /> Online
                </div>
              </div>
            </div>
          </Link>
          <Link
            className="list-group-item list-group-item-action border-0"
            to="#">
            <div className="d-flex align-items-start">
              <img
                alt="Stacie Hall"
                className="rounded-circle me-1"
                height="40"
                src="assets/img/avatars/avatar-4.jpg"
                width="40"
              />
              <div className="flex-grow-1 ms-3">
                Stacie Hall
                <div className="small">
                  <span className="bi bi-circle-fill chat-offline" /> Offline
                </div>
              </div>
            </div>
          </Link>
          <Link
            className="list-group-item list-group-item-action border-0"
            to="#">
            <div className="d-flex align-items-start">
              <img
                alt="Fiona Green"
                className="rounded-circle me-1"
                height="40"
                src="assets/img/avatars/avatar-5.jpg"
                width="40"
              />
              <div className="flex-grow-1 ms-3">
                Fiona Green
                <div className="small">
                  <span className="bi bi-circle-fill chat-offline" /> Offline
                </div>
              </div>
            </div>
          </Link>
          <Link
            className="list-group-item list-group-item-action border-0"
            to="#">
            <div className="d-flex align-items-start">
              <img
                alt="Doris Wilder"
                className="rounded-circle me-1"
                height="40"
                src="assets/img/avatars/avatar-2.jpg"
                width="40"
              />
              <div className="flex-grow-1 ms-3">
                Doris Wilder
                <div className="small">
                  <span className="bi bi-circle-fill chat-offline" /> Offline
                </div>
              </div>
            </div>
          </Link>
          <Link
            className="list-group-item list-group-item-action border-0"
            to="#">
            <div className="d-flex align-items-start">
              <img
                alt="Haley Kennedy"
                className="rounded-circle me-1"
                height="40"
                src="assets/img/avatars/avatar-4.jpg"
                width="40"
              />
              <div className="flex-grow-1 ms-3">
                Haley Kennedy
                <div className="small">
                  <span className="bi bi-circle-fill chat-offline" /> Offline
                </div>
              </div>
            </div>
          </Link>
          <Link
            className="list-group-item list-group-item-action border-0"
            to="#">
            <div className="d-flex align-items-start">
              <img
                alt="Jennifer Chang"
                className="rounded-circle me-1"
                height="40"
                src="assets/img/avatars/avatar-3.jpg"
                width="40"
              />
              <div className="flex-grow-1 ms-3">
                Jennifer Chang
                <div className="small">
                  <span className="bi bi-circle-fill chat-offline" /> Offline
                </div>
              </div>
            </div>
          </Link>
          <hr className="d-block d-lg-none mt-1 mb-0" />
        </div>
        <div className="col-12 col-lg-7 col-xl-9">
          <div className="py-2 px-4 border-bottom d-none d-lg-block">
            <div className="d-flex align-items-start align-items-center py-1">
              <div className="position-relative">
                <img
                  alt="Bertha Martin"
                  className="rounded-circle me-1"
                  height="40"
                  src="assets/img/avatars/avatar-3.jpg"
                  width="40"
                />
              </div>
              <div className="flex-grow-1 ps-3">
                <strong>Bertha Martin</strong>
                <div className="text-muted small">
                  <em>Typing...</em>
                </div>
              </div>
              <div>
                <button className="btn btn-primary btn-lg me-2 px-3">
                  <i className="bi-phone"  />
                </button>
                <button className="btn btn-info btn-lg me-2 px-3 d-none d-md-inline-block">
                  <i className="bi bi-camera-reels"  />
                </button>
                <button className="btn btn-light border btn-lg px-3">
                  <i className="bi-three-dots"  />
                </button>
              </div>
            </div>
          </div>
          <div className="position-relative">
            <div className="chat-messages p-4">
              <div className="chat-message-right pb-4">
                <div>
                  <img
                    alt="Chris Wood"
                    className="rounded-circle me-1"
                    height="40"
                    src="assets/img/avatars/avatar.jpg"
                    width="40"
                  />
                  <div className="text-muted small text-nowrap mt-2">
                    2:33 am
                  </div>
                </div>
                <div className="flex-shrink-1 bg-body-tertiary rounded py-2 px-3 me-3">
                  <div className="fw-bold mb-1">You</div>
                  Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                  prodesset te vix.
                </div>
              </div>
              <div className="chat-message-left pb-4">
                <div>
                  <img
                    alt="Bertha Martin"
                    className="rounded-circle me-1"
                    height="40"
                    src="assets/img/avatars/avatar-3.jpg"
                    width="40"
                  />
                  <div className="text-muted small text-nowrap mt-2">
                    2:34 am
                  </div>
                </div>
                <div className="flex-shrink-1 bg-body-tertiary rounded py-2 px-3 ms-3">
                  <div className="fw-bold mb-1">Bertha Martin</div>
                  Sit meis deleniti eu, pri vidit meliore docendi ut, an eum
                  erat animal commodo.
                </div>
              </div>
              <div className="chat-message-right pb-4">
                <div>
                  <img
                    alt="Chris Wood"
                    className="rounded-circle me-1"
                    height="40"
                    src="assets/img/avatars/avatar.jpg"
                    width="40"
                  />
                  <div className="text-muted small text-nowrap mt-2">
                    2:35 am
                  </div>
                </div>
                <div className="flex-shrink-1 bg-body-tertiary rounded py-2 px-3 me-3">
                  <div className="fw-bold mb-1">You</div>
                  Cum ea graeci tractatos.
                </div>
              </div>
              <div className="chat-message-left pb-4">
                <div>
                  <img
                    alt="Bertha Martin"
                    className="rounded-circle me-1"
                    height="40"
                    src="assets/img/avatars/avatar-3.jpg"
                    width="40"
                  />
                  <div className="text-muted small text-nowrap mt-2">
                    2:36 am
                  </div>
                </div>
                <div className="flex-shrink-1 bg-body-tertiary rounded py-2 px-3 ms-3">
                  <div className="fw-bold mb-1">Bertha Martin</div>
                  Sed pulvinar, massa vitae interdum pulvinar, risus lectus
                  porttitor magna, vitae commodo lectus mauris et velit. Proin
                  ultricies placerat imperdiet. Morbi varius quam ac venenatis
                  tempus.
                </div>
              </div>
              <div className="chat-message-left pb-4">
                <div>
                  <img
                    alt="Bertha Martin"
                    className="rounded-circle me-1"
                    height="40"
                    src="assets/img/avatars/avatar-3.jpg"
                    width="40"
                  />
                  <div className="text-muted small text-nowrap mt-2">
                    2:37 am
                  </div>
                </div>
                <div className="flex-shrink-1 bg-body-tertiary rounded py-2 px-3 ms-3">
                  <div className="fw-bold mb-1">Bertha Martin</div>
                  Cras pulvinar, sapien id vehicula aliquet, diam velit
                  elementum orci.
                </div>
              </div>
              <div className="chat-message-right pb-4">
                <div>
                  <img
                    alt="Chris Wood"
                    className="rounded-circle me-1"
                    height="40"
                    src="assets/img/avatars/avatar.jpg"
                    width="40"
                  />
                  <div className="text-muted small text-nowrap mt-2">
                    2:38 am
                  </div>
                </div>
                <div className="flex-shrink-1 bg-body-tertiary rounded py-2 px-3 me-3">
                  <div className="fw-bold mb-1">You</div>
                  Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                  prodesset te vix.
                </div>
              </div>
              <div className="chat-message-left pb-4">
                <div>
                  <img
                    alt="Bertha Martin"
                    className="rounded-circle me-1"
                    height="40"
                    src="assets/img/avatars/avatar-3.jpg"
                    width="40"
                  />
                  <div className="text-muted small text-nowrap mt-2">
                    2:39 am
                  </div>
                </div>
                <div className="flex-shrink-1 bg-body-tertiary rounded py-2 px-3 ms-3">
                  <div className="fw-bold mb-1">Bertha Martin</div>
                  Sit meis deleniti eu, pri vidit meliore docendi ut, an eum
                  erat animal commodo.
                </div>
              </div>
              <div className="chat-message-right pb-4">
                <div>
                  <img
                    alt="Chris Wood"
                    className="rounded-circle me-1"
                    height="40"
                    src="assets/img/avatars/avatar.jpg"
                    width="40"
                  />
                  <div className="text-muted small text-nowrap mt-2">
                    2:40 am
                  </div>
                </div>
                <div className="flex-shrink-1 bg-body-tertiary rounded py-2 px-3 me-3">
                  <div className="fw-bold mb-1">You</div>
                  Cum ea graeci tractatos.
                </div>
              </div>
              <div className="chat-message-right pb-4">
                <div>
                  <img
                    alt="Chris Wood"
                    className="rounded-circle me-1"
                    height="40"
                    src="assets/img/avatars/avatar.jpg"
                    width="40"
                  />
                  <div className="text-muted small text-nowrap mt-2">
                    2:41 am
                  </div>
                </div>
                <div className="flex-shrink-1 bg-body-tertiary rounded py-2 px-3 me-3">
                  <div className="fw-bold mb-1">You</div>
                  Morbi finibus, lorem id placerat ullamcorper, nunc enim
                  ultrices massa, id dignissim metus urna eget purus.
                </div>
              </div>
              <div className="chat-message-left pb-4">
                <div>
                  <img
                    alt="Bertha Martin"
                    className="rounded-circle me-1"
                    height="40"
                    src="assets/img/avatars/avatar-3.jpg"
                    width="40"
                  />
                  <div className="text-muted small text-nowrap mt-2">
                    2:42 am
                  </div>
                </div>
                <div className="flex-shrink-1 bg-body-tertiary rounded py-2 px-3 ms-3">
                  <div className="fw-bold mb-1">Bertha Martin</div>
                  Sed pulvinar, massa vitae interdum pulvinar, risus lectus
                  porttitor magna, vitae commodo lectus mauris et velit. Proin
                  ultricies placerat imperdiet. Morbi varius quam ac venenatis
                  tempus.
                </div>
              </div>
              <div className="chat-message-right pb-4">
                <div>
                  <img
                    alt="Chris Wood"
                    className="rounded-circle me-1"
                    height="40"
                    src="assets/img/avatars/avatar.jpg"
                    width="40"
                  />
                  <div className="text-muted small text-nowrap mt-2">
                    2:43 am
                  </div>
                </div>
                <div className="flex-shrink-1 bg-body-tertiary rounded py-2 px-3 me-3">
                  <div className="fw-bold mb-1">You</div>
                  Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                  prodesset te vix.
                </div>
              </div>
              <div className="chat-message-left pb-4">
                <div>
                  <img
                    alt="Bertha Martin"
                    className="rounded-circle me-1"
                    height="40"
                    src="assets/img/avatars/avatar-3.jpg"
                    width="40"
                  />
                  <div className="text-muted small text-nowrap mt-2">
                    2:44 am
                  </div>
                </div>
                <div className="flex-shrink-1 bg-body-tertiary rounded py-2 px-3 ms-3">
                  <div className="fw-bold mb-1">Bertha Martin</div>
                  Sit meis deleniti eu, pri vidit meliore docendi ut, an eum
                  erat animal commodo.
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow-0 py-3 px-4 border-top">
            <div className="input-group">
              <input
                className="form-control"
                placeholder="Type your message"
                type="text"
              />
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
    )
}
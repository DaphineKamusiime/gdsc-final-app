import "./home.css";
function Home() {
  return (
    <>
      <div
        className="home-hero"
        style={{
          backgroundImage:
            "url(https://user-images.githubusercontent.com/107240847/232215183-dc8ecaf2-c1cf-40e0-91df-98e0a75d2421.jpeg)",
        }}
      >
        <div className="hero-content">
          <h1 className="hero-header">
            <center>
              {/* {user && user.email} */}
              Welcome to the
              <br />
              <span style={{ color: "blue" }}>DSC</span>&nbsp;
              <span style={{ color: "red" }}>UCU</span>&nbsp;
              <span style={{ color: "orange" }}>COM</span>
              <span style={{ color: "yellow" }}>MUN</span>
              <span style={{ color: "green" }}>ITY</span>
            </center>
          </h1>
        </div>
      </div>
      <main>
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className=" rounded-lg shadow-lg h-96 "
                  src="https://images.unsplash.com/photo-1674574124792-3be232f1957f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">
                    A community that matters
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Grow your tech career with us.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">We are passionate</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Amazing and caring mentors
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Awesome events</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  Meet Our Amazing Team
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-6">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold"> Racheal</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Project manager
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-6">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Mike </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      UX/UI designer
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-6">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">- Daniel</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Front-end developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-6">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Bella</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Front-end developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-6">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jayden</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Back-end developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-6 py-6">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Mani</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Back-end developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-6">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Tom</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Database Admin
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-6">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Angel</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      QA testing
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-6">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Olivia </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Database administrator
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-200">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold  text-black">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-900">
                  Alot of great projects out there, start yours today
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-gray-900">
                  We provide you with resources you might need
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold">Grow your skills</h5>
                <p className="mt-2 mb-4 text-gray-900">
                  Learn from peers and mentors
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold">hackathons</h5>
                <p className="mt-2 mb-4 text-gray-900">Open participation</p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

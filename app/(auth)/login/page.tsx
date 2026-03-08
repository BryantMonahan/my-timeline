import Link from "next/link";

export default function Login() {
    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white rounded-b-lg">
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <div className="form-floating mb-4 text-secondary">
                                        <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder="Email" />
                                        <label htmlFor="typeEmailX">Email</label>
                                    </div>

                                    <div className="form-floating mb-4 text-secondary">
                                        <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder="Password" />
                                        <label htmlFor="typePasswordX">Password</label>
                                    </div>

                                    <p className="small mb-5 pb-lg-2"><Link href="./forgot-password" className="text-gray-200 no-underline">Forgot password?</Link></p>

                                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5 w-full" type="submit">Login</button>
                                    <p className="my-2">or</p>
                                    <div className="d-flex justify-content-center text-center pt-1">
                                        <button data-mdb-button-init data-mdb-ripple-init className="btn btn-lg btn-block w-full bg-[#dd4b39]! rounded-none! text-white"
                                            type="submit"><i className="fab fa-google me-2"></i> Sign in with Google</button>
                                        {/* </div> */}
                                        {/* <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a> */}
                                    </div>

                                </div>

                                <div>
                                    <p className="mb-0">Don't have an account? <Link href="./register">Register</Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
        // <div className="max-w-100 flex justify-center mx-auto bg-slate-300 p-5 rounded-md">
        //     {/* <div>Welcome to your login page!</div>
        //     <Link href="/forgot-password">Forgot Password</Link> */}

        //     {/* <!-- Pills content --> */}
        //     <div className="tab-content">
        //         <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
        //             <form>
        //                 <div className="text-center mb-3">
        //                     {/* <p>Sign in with:</p> */}
        //                     <button data-mdb-button-init data-mdb-ripple-init className="btn btn-lg btn-block w-full bg-[#dd4b39]! rounded-none! text-white"
        //                         type="submit"><i className="fab fa-google me-2"></i> Sign in with Google</button>
        //                 </div>

        //                 <p className="text-center">or:</p>

        //                 {/* <!-- Email input --> */}
        //                 <div data-mdb-input-init className="form-outline mb-4">
        //                     <input type="email" id="loginName" className="form-control" />
        //                     <label className="form-label" htmlFor="loginName">Email or username</label>
        //                 </div>

        //                 {/* <!-- Password input --> */}
        //                 <div data-mdb-input-init className="form-outline mb-4">
        //                     <input type="password" id="loginPassword" className="form-control" />
        //                     <label className="form-label" htmlFor="loginPassword">Password</label>
        //                 </div>

        //                 {/* <!-- 2 column grid layout --> */}
        //                 <div className="row mb-4">
        //                     <div className="col-md-6 d-flex justify-content-center">
        //                         {/* <!-- Checkbox --> */}
        //                         <div className="form-check mb-3 mb-md-0">
        //                             <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
        //                             <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
        //                         </div>
        //                     </div>

        //                     <div className="col-md-6 d-flex justify-content-center">
        //                         {/* <!-- Simple link --> */}
        //                         <Link href="/forgot-password">Forgot Password</Link>
        //                     </div>
        //                 </div>

        //                 {/* <!-- Submit button --> */}
        //                 <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4 w-full">Sign in</button>

        //                 {/* <!-- Register buttons --> */}
        //                 <div className="text-center">
        //                     <p>Not a member? <Link href="/register">Register</Link></p>
        //                 </div>
        //             </form>
        //         </div>
        //         <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
        //             <form>
        //                 <div className="text-center mb-3">
        //                     <p>Sign up with:</p>
        //                     <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
        //                         <i className="fab fa-facebook-f"></i>
        //                     </button>

        //                     <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
        //                         <i className="fab fa-google"></i>
        //                     </button>

        //                     <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
        //                         <i className="fab fa-twitter"></i>
        //                     </button>

        //                     <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
        //                         <i className="fab fa-github"></i>
        //                     </button>
        //                 </div>

        //                 <p className="text-center">or:</p>

        //                 {/* <!-- Name input --> */}
        //                 <div data-mdb-input-init className="form-outline mb-4">
        //                     <input type="text" id="registerName" className="form-control" />
        //                     <label className="form-label" htmlFor="registerName">Name</label>
        //                 </div>

        //                 {/* <!-- Username input --> */}
        //                 <div data-mdb-input-init className="form-outline mb-4">
        //                     <input type="text" id="registerUsername" className="form-control" />
        //                     <label className="form-label" htmlFor="registerUsername">Username</label>
        //                 </div>

        //                 {/* <!-- Email input --> */}
        //                 <div data-mdb-input-init className="form-outline mb-4">
        //                     <input type="email" id="registerEmail" className="form-control" />
        //                     <label className="form-label" htmlFor="registerEmail">Email</label>
        //                 </div>

        //                 {/* <!-- Password input --> */}
        //                 <div data-mdb-input-init className="form-outline mb-4">
        //                     <input type="password" id="registerPassword" className="form-control" />
        //                     <label className="form-label" htmlFor="registerPassword">Password</label>
        //                 </div>

        //                 {/* <!-- Repeat Password input --> */}
        //                 <div data-mdb-input-init className="form-outline mb-4">
        //                     <input type="password" id="registerRepeatPassword" className="form-control" />
        //                     <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
        //                 </div>

        //                 {/* <!-- Checkbox --> */}
        //                 <div className="form-check d-flex justify-content-center mb-4">
        //                     <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck"
        //                         aria-describedby="registerCheckHelpText" />
        //                     <label className="form-check-label" htmlFor="registerCheck">
        //                         I have read and agree to the terms
        //                     </label>
        //                 </div>

        //                 {/* <!-- Submit button --> */}
        //                 <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-3">Sign in</button>
        //             </form>
        //         </div>
        //     </div>
        //     {/* <!-- Pills content --> */}
        // </div>
    );
}
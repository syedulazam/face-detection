import "tachyons";
import "./register.css";

const Register = ({ onRouteChange2, onRouteChange1, onRouteChange }) => {
  return (
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-2">
      <main className="pa4 black-80 center">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 tc">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 margin" htmlFor="name">
                Name
              </label>
              <div className="tc">
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70"
                  type="name"
                  name="name"
                  id="name"
                  required
                />
              </div>
            </div>
            <div className="mt3">
              <label
                className="db fw6 lh-copy f6 margin"
                htmlFor="email-address"
              >
                Email
              </label>
              <div className="tc">
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-75"
                  type="email"
                  name="email-address"
                  id="email-address"
                  required
                />
              </div>
            </div>
            <div className="padding"></div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6 margin" htmlFor="password">
                Password
              </label>
              <div className="tc">
                <input
                  className=" b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-75"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </div>
          </fieldset>
          <div className="flex justify-center pa3">
            <input
              onClick={() => onRouteChange("signin")}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="register"
            />
          </div>
          <a
            onClick={() => onRouteChange("signin")}
            className="f6 link dim black db tc pointer"
          >
            Already have an account? Signin
          </a>
          <div className="lh-copy mt3"></div>
        </div>
      </main>
    </article>
  );
};

export default Register;

import "tachyons";
import "./signin.css";

const Signin = ({ onRouteChange, onRouteChange2 }) => {
  return (
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-2">
      <main className="pa4 black-80 center">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 tc">Sign In</legend>
            <div className="mt3">
              <label
                className="db fw6 lh-copy f6 padding"
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
                />
              </div>
            </div>
            <div className="padding"></div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6 padding" htmlFor="password">
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
              onClick={() => onRouteChange("home")}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <a
            onClick={() => onRouteChange("register")}
            className="f6 link dim black db tc pointer"
          >
            Don't have an account? Register
          </a>
          <div className="lh-copy mt3"></div>
        </div>
      </main>
    </article>
  );
};

export default Signin;

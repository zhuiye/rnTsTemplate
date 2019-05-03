import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ApplicationState, userAction } from "../store";

// ...

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ user }: ApplicationState) => ({
  user
});

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = (dispatch: Dispatch) => ({
  doLogin: () => dispatch(userAction.doLogin()),
  loginOut: () => dispatch(userAction.loginOut())
});

const withReducerState = (page: any) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(page);
};
export default withReducerState;

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(HeroesPage)

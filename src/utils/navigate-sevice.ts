import {
  NavigationContainerComponent,
  NavigationActions
} from "react-navigation";
import { ScreenIds } from "../values";

export default class NavigationService {
  private static navigator: NavigationContainerComponent | null;

  static setTopNavigator(navigator: NavigationContainerComponent | null) {
    NavigationService.navigator = navigator;
  }

  static navigate(RouteName: ScreenIds) {
    if (NavigationService.navigator) {
      NavigationService.navigator.dispatch(
        NavigationActions.navigate({ routeName: RouteName })
      );
    }
  }
}

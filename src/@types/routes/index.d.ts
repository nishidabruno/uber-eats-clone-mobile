/* eslint-disable @typescript-eslint/no-empty-interface */
import { RootStackParamsList } from '../../routes/app.stack.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamsList {}
  }
}

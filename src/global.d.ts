declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: string;
}

declare interface ReduxAction<Payload = any> {
  type: string;
  payload?: Payload;
}
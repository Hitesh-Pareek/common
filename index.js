import { createApp } from 'vue';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';
import * as AllQuasarComponents from 'quasar';

import MyButton from './components/MyButton.vue';

const app = createApp({});

app.use(Quasar, {
  config: {},
  components: AllQuasarComponents
});

app.component('MyButton', MyButton);

export { MyButton };
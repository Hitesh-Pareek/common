import { createApp } from 'vue';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';

import MyButton from './components/MyButton.vue';

const app = createApp({});

app.use(Quasar, {
  config: {}
});

app.component('MyButton', MyButton);

export { MyButton };
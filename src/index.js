import { createApp } from 'vue';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';
import MyButton from './components/DemoComponent.vue';

// Create a plugin to install Quasar and your components
const install = (app) => {
  app.use(Quasar, {
    components: {
      MyButton,
    },
  });

  app.component('MyButton', MyButton);
};

export { MyButton, install as default };
import QuasarPlugin from './quasar';
import MyButton from './components/DemoComponent.vue';

const install = (app) => {
  app.use(QuasarPlugin);
  app.component('MyButton', MyButton);
};

export { MyButton, install as default };
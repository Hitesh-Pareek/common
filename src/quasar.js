import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';

const install = (app) => {
  app.use(Quasar, {
    components: {
      QBtn: require('quasar').QBtn,
      // Add other Quasar components here as needed
    }
  });
};

export default { install };
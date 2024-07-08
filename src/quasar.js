import { Quasar, QBtn } from 'quasar';

const install = (app) => {
  app.use(Quasar, {
    config: {},
    components: {
      QBtn,
      // Add more Quasar components here if needed
    }
  });
};

export default { install };
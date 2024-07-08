import { createApp } from 'vue';
import QuasarPlugin from './quasar';
import MyButton from './components/DemoComponent.vue';

const app = createApp({});

app.use(QuasarPlugin);

export { MyButton };
import { configure } from '@storybook/angular';
import './app.min.css';
import './overwrite.css';

configure([
    require.context('../stories', true, /\.stories\.[tj]s$/),
], module);
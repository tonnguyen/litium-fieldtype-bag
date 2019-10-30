import { RootStore } from './mock-ng-redux';
import { moduleMetadata } from '@storybook/angular';
import { NgRedux } from '@angular-redux/store';

export const withRedux = (reducers, initialState = {}) => storyFn => {
    const ngRedux = new RootStore(null);
    ngRedux.configureStore(reducers, initialState, [], []);

    return moduleMetadata({
        providers: [{ provide: NgRedux, useFactory: () => NgRedux.instance }],
    })(storyFn);
}
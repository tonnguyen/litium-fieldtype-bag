import { moduleMetadata } from '@storybook/angular';
import { TranslateLoader, TranslateModule, MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { of, Observable } from 'rxjs';

export const withTranslation = (translations) => storyFn => {
    return moduleMetadata({
        imports: [
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: () => new FakeLoader(translations),
                },
                missingTranslationHandler: {
                    provide: MissingTranslationHandler,
                    useFactory: () => new FakeLoader(translations),
                }
            }),
        ],
    })(storyFn);
}

class FakeLoader implements TranslateLoader, MissingTranslationHandler {
    constructor(private _translations) { }

    getTranslation(lang: string): Observable<any> {
        return of(this._translations);
    }
    
    handle(params: MissingTranslationHandlerParams) {
        return this._translations[params.key] || params.key;
    }
}
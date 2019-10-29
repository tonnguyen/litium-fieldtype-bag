export const defaultState = { 
    locale: {
        language: 'en-US',
        editLanguage: 'en-US',
        uiLanguages: [],
        languages: [
            { id: 'en-US', systemId: 'en-US', title: 'English (United States)' },
            { id: 'sv-SE', systemId: 'sv-SE', title: 'Swedish (Sweden)' },
        ],
    },
    formField: {
        previewLanguage: 'en-US',
        isExpandAllGroup: true,
        isEditAllGroup: false,
        value: null,
        result: null,
        dirty: false,
        disabled: false,
        losePendingChangeConfirm: undefined,
        schema: {},
        modelKeyToReload: '',
        reloadCounter: 0,
        forceSubmitCounter: 0,
    },
    error: {
        submitFormField: {
            byId: {}
        }
    },
};
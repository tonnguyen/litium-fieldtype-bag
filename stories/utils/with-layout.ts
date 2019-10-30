export const withLayout = templateFn => storyFn => {
    const story = storyFn();
    return {
        ...story,
        template: templateFn(story.template),
    };
}
export const Output = $.views.viewModels({
    getters: [
        {getter: "messages",      defaultVal: ''}
    ],
    extend: { append: append }
});

function append(message) {
    $.observable(this).setProperty("messages", this.messages()+message+'\n');
}
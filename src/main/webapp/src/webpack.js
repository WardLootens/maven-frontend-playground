import $ from 'jquery';

function component() {
    const element = document.createElement('div');

    $(element).html('Hello world!');

    return element;
}

document.body.appendChild(component());
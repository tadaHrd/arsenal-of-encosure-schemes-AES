// Written by TadaHrd.
// If this doesn't work blame him.

// functions
window.chr = String.fromCharCode;
window.ord = v => v.charCodeAt(0);
window.rand = max => Math.floor(Math.random() * (max + 1)) % (max + 1);
window.updateValue = function updateValue(value, type) {
    if (type == "encode")
        output.value = window[schemeSelect.value + "_encode"](value, separator.value.replace(/\\n/g, "\n"));
    else if (type == "decode")
        input.value = window[schemeSelect.value + "_decode"](value, true);
};

// variables
window.textEncoder = new TextEncoder();
window.textDecoder = new TextDecoder();

window.input = document.getElementById("input");
window.output = document.getElementById("output");
window.schemeSelect = document.getElementById("select-scheme");
window.separator = document.getElementById("separator-text");

// types
window.Bool = Boolean;
window.Num = Number;
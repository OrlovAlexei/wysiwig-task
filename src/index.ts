import {debounce} from "./debounce";
import { makeDecorator } from "./decorator";
import {getSelectionText, hasSelection} from "./selection";

const editor: HTMLDivElement = document.querySelector<HTMLDivElement>(
  ".edit-area"
)!;

let selectstart = false;


document.addEventListener("selectionchange",
    function(){
        if(hasSelection()) {
            console.log(getSelectionText());
            selectstart = false;
        }
    }, false);




editor.addEventListener("input", function (this: HTMLDivElement) {
  console.log(this)
});

editor.addEventListener(
  "selectstart",
    function (this: HTMLDivElement, ev: Event) {
        selectstart = true;
    },
);





const controls = Array.from(document.querySelector(".toolkit")!.children);
const [hed1, _, bold, italic] = controls;


hed1.addEventListener("click", function( ) {console.log(editor)});

bold.addEventListener("click", () => makeDecorator("bold","font-weight:bold;"));
italic.addEventListener("click", () => makeDecorator('italic',"font-style:italic;"));

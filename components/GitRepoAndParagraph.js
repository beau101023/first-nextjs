import React from "react";

export default function GitRepoAndParagraph() {

  return (
    <div>
        <a href="https://github.com/beau101023/first-nextjs"><button>Github repo for this website.</button></a>
        <h3>Final Project Description</h3>
        
        <p>My team's final project topic is WebAssembly, a language that runs on all modern web browsers much like javascript.
        It is not a javascript framework, instead it's an entirely separate runtime. It's also a compiled intermediate language,
        which means that you first compile some other language into a WebAssembly file, and then the browser compiles it to machine
        code before running the file.<br/><br/>
        
        Since it's ultimately compiled to machine code, just like a language like C, it has the potential to be much faster than javascript.
        Additionally, since it's an intermediate language, you can write your source code in Rust, C, Go, and many
        other languages and then compile it to the common WebAssembly file format.
        </p>
    </div>
  );
}
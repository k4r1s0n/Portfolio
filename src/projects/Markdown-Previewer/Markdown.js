import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import './Markdown.css';


class Markdown extends Component {
  constructor(props) {
    super(props)
     this.state = {
    markdown: placeholder
    }
    this.handleChange = this.handleChange.bind(this);
  }
  

  handleChange (markdown) {
    this.setState ({markdown});
  }
  render() {
    const marked = require('marked');
    marked.setOptions({
      breaks: true,
    });
    let {markdown} = this.state;
    console.log(markdown);
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>
        <div className="wrap container-fluid">
          <div className="Toolbar row text-center">
            <div className="col-md-6">
                <h2>Markdown Input</h2>
            </div>
            <div className="col-md-6"> 
              <h2>Preview</h2>                                        
            </div>
          </div>
          <div className="Main row">
            <div className="Input col-md-6">
              <Textarea id="editor" value={markdown} onChange ={(event) => this.handleChange(event.target.value)}/>
            </div>
            <div className="Output col-md-6 container"> 
              <div id="preview" dangerouslySetInnerHTML={{__html:marked(markdown)}}></div>                                                 
            </div>
          </div>
        </div>

      </div>
    );
  }
}
const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`




export default Markdown;





import { Component, State, EventEmitter, Event, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  public items : Array<any> = [
    {  heading: 'Virtual DOM',
       description: 'A tree of custom objects representing a part of the DOM which can be acted upon quicker than manipulating the DOM itself'
    },
    {
       heading: 'Async rendering',
       description : 'Allows parts of a component state to be rendered asynchronously (I.e. via XHR)'
    },
    {
       heading : 'Reactive data-binding',
       description : 'Allows data binding to be implemented through binding a state variable to an onChange event which allows the state to be changed as the input value changes'
    },
    {
       heading : 'TypeScript',
       description : 'A superset of JavaScript providing strong typing and class based programming constructs'
    },
    {
       heading : 'JSX',
       description : 'JavaScriptXML allows DOM nodes to be built with HTML-like syntax'
    }
 ];


  @State() toggle: boolean = false;

  @Event() onToggle  : EventEmitter;

  toggleComponent() {
    this.toggle = !this.toggle;
    console.log(this.toggle)
  }



  render() {


    return (
      <div>
      <button class="accordion" onClick={this.toggleComponent}>Click here</button>
      <div>
        <p>This is the inner text...</p>
      </div>
      <button class="accordion">Click here</button>
      <div class="text-box">
        <p>This is the inner text...</p>
      </div>
      <button class="accordion">Click here</button>
      <div class="text-box">
        <p>This is the inner text...</p>
      </div>
      </div>
    )
    
  }
}

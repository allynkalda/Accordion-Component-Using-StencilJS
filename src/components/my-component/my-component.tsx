import { Component, State, EventEmitter, Event, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true
})

export class MyComponent {

  @Prop() name: string = "Accordion Component";

  @State() toggle: boolean = false;

  @Event() onToggle  : EventEmitter;

  @Prop() title: string;

  @Prop() description: string;

  toggleComponent() {
    this.toggle = !this.toggle;
    //this.onToggle.emit({ visible: this.toggle });
  }



  render() {


    return (
      <div>
      <button class="accordion" onClick={() => this.toggleComponent()}>
      {this.title}
      {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}</button>
      <div class={ this.toggle ? 'active' : 'inactive' }>
      <p>{this.description}</p>
      </div>
      </div>
    )
  }
}

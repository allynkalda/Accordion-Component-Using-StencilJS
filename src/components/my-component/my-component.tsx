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

  list: Array<Object> = [
    {
      title: 'Title 1',
      description: 'description 1'
    },
    {
      title: 'Title 2',
      description: 'description 2'
    },
    {
      title: 'Title 3',
      description: 'description 3'
    },
  ]

  toggleComponent() {
    this.toggle = !this.toggle;
    //this.onToggle.emit({ visible: this.toggle });
  }

  const createAccordion = (title, description) => {
    return (
      <button class="accordion"onClick={() => this. toggleComponent()}>
    {title}
    {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}</button>
    <div class={ this.toggle ? 'active' : 'inactive' }>
    <p>{description}</p>
    </div>
    )
    
  }


  render() {

    return (
      <div>{
        this.list.map(data => { 
          <button class="accordion"onClick={() => this. toggleComponent()}>
          {data.title}
          {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}</button>
          <div class={ this.toggle ? 'active' : 'inactive' }>
          <p>{data.description}</p>
          </div>
      })
      }
      
      </div>
    )
  }
}

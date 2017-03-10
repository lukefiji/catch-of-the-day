import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  // Binding a method to class (only constructor() & render() binds to class)
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();
    console.log('You changed the URL');
    // Grab text from input
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    // Transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    // Comments can go here outside of return
    // onSubmit can also be: this.goToStore.bind(this);
    // Ref makes a reference to the node, in this case, <input>
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name"
          defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

export default StorePicker;

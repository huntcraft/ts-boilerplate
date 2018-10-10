import React from 'react';
import './style.css';

type Props = {
  name?: string
}

const TestPage: React.SFC = () => {
  return (
    <div>
      this is test page.
    </div>
  );
};

/** 根组件 */
export default class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  fa() {
    const da = import(/* webpackChunkName: "momentjs" */ './fa');
    da.then(data => {
      console.log(data.default);
    })
  }

  render() {
    return (
      <div onClick={this.fa} styleName="wrapper">{this.props.name}</div>
    );
  }
}
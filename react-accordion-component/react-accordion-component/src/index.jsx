import React from 'react';
import ReactDOM from 'react-dom/client';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedSection: 1
    };
    this.handleClick = this.handleClick.bind(this);
    this.ListItem = this.ListItem.bind(this);
  }

  ListItem(props) {
    let contentClass = 'content-class';
    if (props.topic.id !== this.state.openedSection) {
      contentClass = 'hidden';
    }
    return (
      <div className='unit-container'>
        <div className='list-topic' onClick={props.onClick}>
          {props.topic.title}
        </div>
        <div className={contentClass}>
          {props.topic.content}
        </div>
      </div>
    );
  }

  handleClick(id) {
    this.setState({
      openedSection: id
    });
  }

  render() {
    const topicsArray = this.props.propsArray;
    const listedTopics = topicsArray.map(topic =>
      <this.ListItem key={topic.id} topic = {topic} onClick={
        () => this.handleClick(topic.id === this.state.openedSection ? 0 : topic.id)
      } />
    );
    return (
      <div>
        <div>
          {listedTopics}
        </div>
      </div>
    );
  }
}

const articles = [
  { id: 1, title: 'JavaScript', content: 'JavaScript content' },
  { id: 2, title: 'CSS', content: 'CSS content' },
  { id: 3, title: 'Bible', content: 'Jesus' },
  { id: 4, title: 'Cookbook', content: 'Never Used' }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Accordion propsArray = {articles} />);

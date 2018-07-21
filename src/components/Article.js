import React, { Component } from 'react';
import './../css/Article.css';
class Article extends React.Component {
    constructor(props){
        super(props);
        this.state={isClose:true};
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isClose: !prevState.isClose
        }));

    }


    render() {
      
      const text = !this.state.isClose && <h2>{this.props.text}</h2>;
      const date = !this.state.isClose && <h3>{this.props.date}</h3>;

      return <div>
          <h1>{this.props.name}
              <button onClick={this.handleClick}>
                  {this.state.isClose? 'Открыть': 'Закрыть'}
              </button>
          </h1>
          {text}
          {date}
            </div>;
    }
  }
// function Article(props) {
//     return <div><h1>{props.name}</h1>
//                 <h2>{props.text}</h2>
//                 <h3>{props.date}</h3></div>;
//   }


export default Article;
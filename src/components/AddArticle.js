import React, { Component } from 'react';
import Popup from './Popup';
import './../css/Article.css';
class AddArticle extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showPopup: false
        };
    }

    togglePopup() {
        this.state.showPopup?alert("Товар успешно добавлен"):null;
        this.setState({
          showPopup: !this.state.showPopup
        });
      }

    render() {
      return <div>
          {this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
          <h1>
          <button onClick={this.togglePopup.bind(this)}>Добавить новый Товар</button>
          </h1>
            </div>;
    }
  }


export default AddArticle;
import React, { Component } from 'react';

class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
            <form action="">
                <label>Название</label><input type="text"/>
                <label>Цена</label><input type="text"/>
                <label>Дата</label><input type="text"/>
            </form>
          <button onClick={this.props.closePopup}>Добавить товар</button>
          </div>
        </div>
      );
    }
  }

  export default Popup;
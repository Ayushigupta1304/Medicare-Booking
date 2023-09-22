import React, { Component } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

class Chatbot extends Component {
  componentDidMount() {
    addResponseMessage('Welcome to the medical chatbot! How can I assist you today?');
  }

  handleNewUserMessage = (newMessage) => {
    // Send the user's message to Dialogflow for processing and get a response
    // You'll need to set up a Dialogflow agent and integrate it here.
    // Replace the code below with your Dialogflow integration.
    // Example:
    // sendUserMessageToDialogflow(newMessage).then((response) => {
    //   addResponseMessage(response);
    // });

    // For this example, we'll just echo the user's message.
    addUserMessage(newMessage);
    addResponseMessage(`You said: "${newMessage}"`);
  };

  render() {
    return (
      <div className="chatbot-container">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          title="Medical Chatbot"
          subtitle="Ask me anything about your health"
        />
      </div>
    );
  }
}

export default Chatbot;

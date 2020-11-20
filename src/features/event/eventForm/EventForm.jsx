import React, { Component } from "react";
import { Form, Segment, Button } from "semantic-ui-react";

export class EventForm extends Component {
  state = {
    event: {
      title: " ",
      date: " ",
      city: " ",
      venue: " ",
      hostedBy: " ",
    },
  };
  onInputChange = (evt) => {
    const event = this.state.event;
    event[evt.target.name] = evt.target.value;
    this.setState({
      event,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleCreateEvent(this.state.event);
  };
  render() {
    const { event } = this.state;
    const { handleCancel } = this.props;

    return (
      <div>
        <Segment>
          <Form onSubmit={this.onFormSubmit}>
            <Form.Field>
              <label>Event Title</label>
              <input
                name="title"
                placeholder="First Name"
                onChange={this.onInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Event Date</label>
              <input
                name="date"
                type="date"
                placeholder="Event Date"
                onChange={this.onInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input
                name="city"
                placeholder="City event is taking place"
                onChange={this.onInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input
                name="venue"
                placeholder="Enter the Venue of the event"
                onChange={this.onInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Hosted By</label>
              <input
                name="hostedBy"
                placeholder="Enter the name of person hosting"
                onChange={this.onInputChange}
              />
            </Form.Field>
            <Button positive type="submit">
              Submit
            </Button>
            <Button onClick={handleCancel} type="button">
              Cancel
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default EventForm;

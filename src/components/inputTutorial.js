import React, { Component } from "react"
import ReactJoyride, { ACTIONS, STATUS } from "react-joyride"

class InputTutorial extends Component {
  constructor(props) {
    super(props)

    this.state = {
      run: false,
      steps: [],
      callback: props.callback,
    }
  }

  componentWillReceiveProps = props => {
    if (props && props.run) {
      this.setState({
        run: props.run,
        steps: [
          {
            target: "#covid-form",
            title: "Scenario Builder",
            content: (
              <React.Fragment>
                This table contains all the measure that will be applied. A
                measure is defined by a type of activity, a date at which it
                starts and a value defining the intensity of the activity. By
                inserting rows which define specific measure, you can run
                simulation with different scenarios in order to assess the
                impact of different exit strategies. Note that all the measure
                that this model allow to simulate concerne the modification of
                mobility (e.g. closing stores, stopping public transportation,
                etc.) but do not take into action other measure of social
                distancing such as wearing masks, keeping safety distances, and
                so on.
              </React.Fragment>
            ),
            disableBeacon: true,
          },
          {
            target:
              "#covid-form > div > div.react-grid-Container > div > div > div.react-grid-Header > div > div > div:nth-child(1) > div",
            title: "Measure",
            content: (
              <React.Fragment>
                <p>
                  The type of activity for which you wish to change the
                  intensitiy. The complete description of the dataset can be
                  found on the{" "}
                  <a
                    href="https://www.google.com/covid19/mobility/data_documentation.html?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google COVID-19 Community Mobility Reports
                  </a>
                  . We currently support four types supported:
                </p>
                <ul>
                  <li>
                    <strong>Park & Outdoor activities:</strong> Mobility trends
                    for places like local parks, national parks, public beaches,
                    marinas, dog parks, plazas, and public gardens.
                  </li>
                  <li>
                    <strong>Public Transport:</strong> Mobility trends for
                    places like public transport hubs such as subway, bus, and
                    train stations.
                  </li>
                  <li>
                    <strong>Retail & Recreation:</strong> Mobility trends for
                    places like restaurants, cafes, shopping centers, theme
                    parks, museums, libraries, and movie theaters.
                  </li>
                  <li>
                    <strong>Workplaces:</strong> Mobility trends for places of
                    work.
                  </li>
                </ul>
              </React.Fragment>
            ),
            placement: "right",
          },
          {
            target:
              "#covid-form > div > div.react-grid-Container > div > div > div.react-grid-Header > div > div > div:nth-child(2) > div",
            title: "Date",
            content: (
              <React.Fragment>
                Date at which the new value for the type of activity selected
                should be set. There is no concept of an end date, and to end a
                measure, create a new row for the same type of activity with a
                different value.
              </React.Fragment>
            ),
          },
          {
            target:
              "#covid-form > div > div.react-grid-Container > div > div > div.react-grid-Header > div > div > div:nth-child(3) > div",
            title: "Value",
            content: (
              <React.Fragment>
                The value represents the activity relative to a baseline which
                is the median value, for the corresponding day of the week,
                during the 5-week period starting on January 3, 2020 and ending
                on Febrary 6, 2020. A value of 100% represents that baseline
                value; a value lower than 100% represents a decrease of activity
                (with 0% meaning complete stop of the activity); and a value
                over 100% represents an increase of the activity relative to the
                baseline.
              </React.Fragment>
            ),
          },
          {
            target: "#covid-add-measure",
            title: "Add new row",
            content: (
              <React.Fragment>
                When clicking on the add button, a new row is added at the end
                of the table containing all the measures.
              </React.Fragment>
            ),
          },
          {
            target: "#covid-remove-measure",
            title: "Remove selected rows",
            content: (
              <React.Fragment>
                When clicking on the remove button, all selected rows are
                deleted from the table containing all the measures.
              </React.Fragment>
            ),
          },
          {
            target: "#covid-load-measure",
            title: "Load predefined scenario",
            content: (
              <React.Fragment>
                <p>
                  When clicking on the load measure button, a list of predefined
                  measure appears. If you click on one of this measure, it will
                  update the table and replace anything that it is containing by
                  the predefined scenario that was selected from the popup. The
                  goal of this predefined strategies is to help you start
                  creating your own by providing easy to use and understand
                  example. Here, where provide two examples:
                </p>
                <ul>
                  <li>
                    <strong>Brutal Exit:</strong> All confinement measures are
                    lifted on the May 11, 2020.
                  </li>
                  <li>
                    <strong>Cyclic Exit:</strong> All measure a lifted
                    periodically before being put back in place in order to
                    smooth the effect.{" "}
                  </li>
                </ul>
              </React.Fragment>
            ),
          },
          {
            target: "#covid-compute-measure",
            title: "Run simulation",
            content: (
              <React.Fragment>
                Once you are satisfied with your scenario, you can click the
                play button to launche the simulation. This button triggers a
                call to our servers which will run the simulation and return a
                result. This process typically takes less than 10 seconds. Once
                the simulation is ready, the results are presented in a chart on
                the right of this form, depicting the evolution of different
                metrics, such as the number of cases, number of death, etc. over
                the simulation period.
              </React.Fragment>
            ),
          },
          {
            target: "#covid-country-selection",
            title: "Country Selection",
            content: (
              <React.Fragment>
                Finally, in its current form, the prediction tool only work
                country by country, making a strong assumption on the fact that
                all borders are closed. Therefore, the total pool for each
                simulation is the total population of people leaving in the
                country at the beginning of the simulation.{" "}
                <strong>Note</strong> that for some countres the mobitlity
                dataset is not representative of the population because of the
                low market share of Android and/or the low usage of shared GPS
                data on Android devices.
              </React.Fragment>
            ),
          },
        ],
      })
    } else {
      this.setState({
        run: props.run,
        steps: [],
      })
    }
  }

  handleJoyrideCallback = data => {
    if (
      [STATUS.FINISHED, STATUS.SKIPPED].includes(data["status"]) ||
      ACTIONS.CLOSE === data["action"]
    ) {
      this.setState({ run: false, steps: [] })
      this.state.callback("end", null)
    }
  }

  render = () => {
    return (
      <ReactJoyride
        run={this.state.run}
        styles={{ options: {zIndex:9999}}}
        steps={this.state.steps}
        callback={this.handleJoyrideCallback}
        disableBeacon
        disableOverlayClose
        continuous
        showProgress
      />
    )
  }
}

export default InputTutorial

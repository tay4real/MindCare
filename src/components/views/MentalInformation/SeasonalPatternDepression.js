import React, { Component } from "react";

export default class SeasonalPatternDepression extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: true,
      signs: false,
      generalized: false,
      panic: false,
      phobia: false,
      risk: false,
      treatment: false,
    };
    this.onClickOverview = this.onClickOverview.bind(this);
    this.onClickSigns = this.onClickSigns.bind(this);
    this.onClickRisk = this.onClickRisk.bind(this);
    this.onClickTreatment = this.onClickTreatment.bind(this);
    this.onClickGeneralized = this.onClickGeneralized.bind(this);
    this.onClickPanic = this.onClickPanic.bind(this);
    this.onClickPhobia = this.onClickPhobia.bind(this);
  }

  onClickOverview() {
    this.setState({
      overview: true,
      signs: false,
      generalized: false,
      panic: false,
      phobia: false,
      risk: false,
      treatment: false,
    });
  }

  onClickSigns() {
    this.setState({
      overview: false,
      signs: true,
      generalized: true,
      panic: false,
      phobia: false,
      risk: false,
      treatment: false,
    });
  }

  onClickGeneralized() {
    this.setState({
      overview: false,
      signs: true,
      generalized: true,
      panic: false,
      phobia: false,
      risk: false,
      treatment: false,
    });
  }
  onClickPanic() {
    this.setState({
      overview: false,
      signs: true,
      generalized: false,
      panic: true,
      phobia: false,
      risk: false,
      treatment: false,
    });
  }

  onClickPhobia() {
    this.setState({
      overview: false,
      signs: true,
      generalized: false,
      panic: false,
      phobia: true,
      risk: false,
      treatment: false,
    });
  }

  onClickRisk() {
    this.setState({
      overview: false,
      signs: false,
      generalized: false,
      panic: false,
      phobia: false,
      risk: true,
      treatment: false,
    });
  }
  onClickTreatment() {
    this.setState({
      overview: false,
      signs: false,
      generalized: false,
      panic: false,
      phobia: false,
      risk: false,
      treatment: true,
    });
  }
  render() {
    return (
      <div className="container " style={{ padding: "100px 16px" }}>
        <div className="tab">
          <button
            className={this.state.overview ? "tablinks active " : "tablinks"}
            onClick={this.onClickOverview}
          >
            Overview
          </button>

          <button
            className={
              this.state.signs
                ? "tablinks active accordion"
                : "tablinks accordion"
            }
            onClick={this.onClickSigns}
          >
            Signs and Symptoms
          </button>
          <div
            className={
              this.state.signs ? "tablinks active panel" : "tablinks panel"
            }
            style={{ display: this.state.signs ? "block" : "none" }}
          >
            <button
              className={
                this.state.generalized ? "tablinks active" : "tablinks"
              }
              onClick={this.onClickGeneralized}
            >
              Generalized Anxiety Disorder
            </button>
            <button
              className={this.state.panic ? "tablinks active" : "tablinks"}
              onClick={this.onClickPanic}
            >
              Panic Disorder
            </button>
            <button
              className={this.state.phobia ? "tablinks active" : "tablinks"}
              onClick={this.onClickPhobia}
            >
              Phobia-related disorders
            </button>
          </div>
          <button
            className={
              this.state.risk
                ? "tablinks active accordion"
                : "tablinks accordion"
            }
            onClick={this.onClickRisk}
          >
            Risk Factors
          </button>
          <button
            className={
              this.state.treatment
                ? "tablinks active accordion"
                : "tablinks accordion"
            }
            onClick={this.onClickTreatment}
          >
            Treatment and Therapies
          </button>
        </div>

        <div
          id="Overview"
          className="tabcontent"
          style={{
            display: this.state.overview ? "block" : "none",
            overflowY: "scroll",
          }}
        >
          <h1>Anxiety Disorders</h1>
          <hr />
          <h3>Overview</h3>
          <p>
            Occasional anxiety is an expected part of life. You might feel
            anxious when faced with a problem at work, before taking a test, or
            before making an important decision. But anxiety disorders involve
            more than temporary worry or fear. For a person with an anxiety
            disorder, the anxiety does not go away and can get worse over time.
            The symptoms can interfere with daily activities such as job
            performance, school work, and relationships.
          </p>
          <p>
            There are several types of anxiety disorders, including generalized
            anxiety disorder, panic disorder, and various phobia-related
            disorders.
          </p>
          <hr />
        </div>

        <div
          id="Signs"
          className="tabcontent"
          style={{
            display: this.state.signs ? "block" : "none",
            overflowY: "scroll",
          }}
        >
          <h1>Anxiety Disorders</h1>
          <hr />
          <h3>Signs and Symptoms</h3>
          <div
            id="Generalized"
            style={{ display: this.state.generalized ? "block" : "none" }}
          >
            <h5>Generalized Anxiety Disorder</h5>
            <p>
              People with generalized anxiety disorder (GAD) display excessive
              anxiety or worry, most days for at least 6 months, about a number
              of things such as personal health, work, social interactions, and
              everyday routine life circumstances. The fear and anxiety can
              cause significant problems in areas of their life, such as social
              interactions, school, and work.
            </p>
            <p>Generalized anxiety disorder symptoms include:</p>
            <ul style={{ paddingLeft: "12px" }}>
              <li>Feeling restless, wound-up, or on-edge</li>
              <li>Being easily fatigued</li>
              <li>Having difficulty concentrating; mind going blank</li>
              <li>Being irritable</li>
              <li>Having muscle tension</li>
              <li>Difficulty controlling feelings of worry</li>
              <li>
                Having sleep problems, such as difficulty falling or staying
                asleep, restlessness, or unsatisfying sleep
              </li>
            </ul>
          </div>

          <div
            id="Panic"
            style={{ display: this.state.panic ? "block" : "none" }}
          >
            <h5>Panic Disorder</h5>
            <p>
              People with panic disorder have recurrent unexpected panic
              attacks. Panic attacks are sudden periods of intense fear that
              come on quickly and reach their peak within minutes. Attacks can
              occur unexpectedly or can be brought on by a trigger, such as a
              feared object or situation.
            </p>
            <p>During a panic attack, people may experience:</p>
            <ul style={{ paddingLeft: "12px" }}>
              <li>
                Heart palpitations, a pounding heartbeat, or an accelerated
                heartrate
              </li>
              <li>Sweating</li>
              <li>Trembling or shaking</li>
              <li>Sensations of shortness of breath, smothering, or choking</li>
              <li>Feelings of impending doom</li>
              <li>Feelings of being out of control</li>
            </ul>
            <p>
              People with panic disorder often worry about when the next attack
              will happen and actively try to prevent future attacks by avoiding
              places, situations, or behaviors they associate with panic
              attacks. Worry about panic attacks, and the effort spent trying to
              avoid attacks, cause significant problems in various areas of the
              person’s life, including the development of agoraphobia (see
              below).
            </p>
          </div>

          <div
            id="Phobia"
            style={{ display: this.state.phobia ? "block" : "none" }}
          >
            <h5>Phobia-related disorders</h5>
            <p>
              A phobia is an intense fear of—or aversion to—specific objects or
              situations. Although it can be realistic to be anxious in some
              circumstances, the fear people with phobias feel is out of
              proportion to the actual danger caused by the situation or object.
            </p>
            <p>People with a phobia:</p>
            <ul style={{ paddingLeft: "12px" }}>
              <li>
                May have an irrational or excessive worry about encountering the
                feared object or situation
              </li>
              <li>Take active steps to avoid the feared object or situation</li>
              <li>
                Experience immediate intense anxiety upon encountering the
                feared object or situation
              </li>
              <li>Sensations of shortness of breath, smothering, or choking</li>
              <li>
                Endure unavoidable objects and situations with intense anxiety
              </li>
            </ul>
          </div>

          <hr />
        </div>
        <div
          id="Risk"
          className="tabcontent"
          style={{ display: this.state.risk ? "block" : "none" }}
        >
          <h1>Anxiety Disorders</h1>
          <hr />
          <h3>Risk Factors</h3>

          <p>
            Researchers are finding that both genetic and environmental factors
            contribute to the risk of developing an anxiety disorder. Although
            the risk factors for each type of anxiety disorder can vary, some
            general risk factors for all types of anxiety disorders include:
          </p>

          <ul style={{ paddingLeft: "12px" }}>
            <li>
              Temperamental traits of shyness or behavioral inhibition in
              childhood
            </li>
            <li>
              Exposure to stressful and negative life or environmental events in
              early childhood or adulthood
            </li>
            <li>
              A history of anxiety or other mental illnesses in biological
              relatives
            </li>
            <li>
              Some physical health conditions, such as thyroid problems or heart
              arrhythmias, or caffeine or other substances/medications, can
              produce or aggravate anxiety symptoms; a physical health
              examination is helpful in the evaluation of a possible anxiety
              disorder.
            </li>
          </ul>

          <hr />
        </div>
        <div
          id="Treatment"
          className="tabcontent"
          style={{ display: this.state.treatment ? "block" : "none" }}
        >
          <h1>Anxiety Disorders</h1>
          <hr />
          <h3>Treatments and Therapies</h3>

          <p>
            Anxiety disorders are generally treated with psychotherapy,
            medication, or both. There are many ways to treat anxiety and people
            should work with their doctor to choose the treatment that is best
            for them.
          </p>

          <h5>Psychotherapy</h5>
          <p>
            Anxiety disorders are generally treated with psychotherapy,
            medication, or both. There are many ways to treat anxiety and people
            should work with their doctor to choose the treatment that is best
            for them.
          </p>

          <h5>Cognitive Behavioral Therapy</h5>
          <p>
            Anxiety disorders are generally treated with psychotherapy,
            medication, or both. There are many ways to treat anxiety and people
            should work with their doctor to choose the treatment that is best
            for them.
          </p>

          <ul style={{ paddingLeft: "12px" }}>
            <li>
              Temperamental traits of shyness or behavioral inhibition in
              childhood
            </li>
            <li>
              Exposure to stressful and negative life or environmental events in
              early childhood or adulthood
            </li>
            <li>
              A history of anxiety or other mental illnesses in biological
              relatives
            </li>
            <li>
              Some physical health conditions, such as thyroid problems or heart
              arrhythmias, or caffeine or other substances/medications, can
              produce or aggravate anxiety symptoms; a physical health
              examination is helpful in the evaluation of a possible anxiety
              disorder.
            </li>
          </ul>

          <hr />
        </div>
      </div>
    );
  }
}

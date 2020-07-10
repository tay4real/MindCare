import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BorderlinePersonalityDisorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: true,
      symptoms: false,
      causes: false,
      diagnosis: false,
      treatment: false,
      related: false,
    };
    this.onClickOverview = this.onClickOverview.bind(this);
    this.onClickSymptoms = this.onClickSymptoms.bind(this);
    this.onClickCauses = this.onClickCauses.bind(this);
    this.onClickDiagnosis = this.onClickDiagnosis.bind(this);
    this.onClickTreatment = this.onClickTreatment.bind(this);
    this.onClickRelated = this.onClickRelated.bind(this);
  }

  onClickOverview() {
    this.setState({
      overview: true,
      symptoms: false,
      causes: false,
      diagnoses: false,
      treatment: false,
      related: false,
    });
  }

  onClickSymptoms() {
    this.setState({
      overview: false,
      symptoms: true,
      causes: false,
      diagnoses: false,
      treatment: false,
      related: false,
    });
  }

  onClickCauses() {
    this.setState({
      overview: false,
      symptoms: false,
      causes: true,
      diagnoses: false,
      treatment: false,
      related: false,
    });
  }
  onClickDiagnosis() {
    this.setState({
      overview: false,
      symptoms: true,
      causes: false,
      diagnoses: true,
      treatment: false,
      related: false,
    });
  }

  onClickTreatment() {
    this.setState({
      overview: false,
      symptoms: false,
      causes: false,
      diagnoses: false,
      treatment: true,
      related: false,
    });
  }

  onClickRelated() {
    this.setState({
      overview: false,
      symptoms: false,
      causes: false,
      diagnoses: false,
      treatment: false,
      related: true,
    });
  }

  render() {
    let condition = "Borderline Personality Disorder";
    return (
      <div className="container " style={{ padding: "100px 16px" }}>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item">
              <Link to="/learn">Learn</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {condition}
            </li>
          </ol>
        </nav>
        <div className="tab">
          <button
            className={this.state.overview ? "tablinks active " : "tablinks"}
            onClick={this.onClickOverview}
          >
            Overview
          </button>

          <button
            className={this.state.symptoms ? "tablinks active accordion" : "tablinks"}
            onClick={this.onClickSymptoms}
          >
            Symptoms
          </button>

          <button
            className={this.state.causes ? "tablinks active " : "tablinks"}
            onClick={this.onClickCauses}
          >
            Causes
          </button>
          <button
            className={this.state.diagnosis ? "tablinks active" : "tablinks"}
            onClick={this.onClickDiagnosis}
          >
            Diagnosis
          </button>
          <button
            className={this.state.treatment ? "tablinks active" : "tablinks"}
            onClick={this.onClickTreatment}
          >
            Treatment
          </button>
          <button
            className={this.state.related ? "tablinks active" : "tablinks"}
            onClick={this.onClickRelated}
          >
            Related Conditions
          </button>
        </div>

        <div
          id="Overview"
          className="tabcontent"
          style={{ display: this.state.overview ? "block" : "none" }}
        >
          <h1>{condition}</h1>
          <hr />
          <h3>Overview</h3>
          <p>
            Borderline Personality Disorder (BPD) is a condition characterized
            by difficulties regulating emotion. This means that people who
            experience BPD feel emotions intensely and for extended periods of
            time, and it is harder for them to return to a stable baseline after
            an emotionally triggering event.
          </p>
          <p>
            This difficulty can lead to impulsivity, poor self-image, stormy
            relationships and intense emotional responses to stressors.
            Struggling with self-regulation can also result in dangerous
            behaviors such as self-harm (e.g. cutting).
          </p>
          <p>
            Nearly 75% of people diagnosed with BPD are women. Recent research
            suggests that men may be equally affected by BPD, but are commonly
            misdiagnosed with PTSD or depression.
          </p>
          <hr />
        </div>

        <div
          id="Symptoms"
          className="tabcontent"
          style={{ display: this.state.symptoms ? "block" : "none" }}
        >
          <h1>{condition}</h1>
          <hr />
          <h3>Symptoms</h3>

          <p>
            People with BPD experience wide mood swings and can feel a great
            sense of instability and insecurity. According to the Diagnostic and
            Statistical Manual diagnostic framework, some key signs and symptoms
            may include:
          </p>

          <ul style={{ paddingLeft: "12px" }}>
            <li>
              Frantic efforts to avoid real or imagined abandonment by friends
              and family.
            </li>
            <li>
              Unstable personal relationships that alternate between
              idealization (“I’m so in love!”) and devaluation (“I hate her”).
              This is also sometimes known as "splitting."
            </li>
            <li>
              Distorted and unstable self-image, which affects moods, values,
              opinions, goals and relationships.
            </li>
            <li>
              Impulsive behaviors that can have dangerous outcomes, such as
              excessive spending, unsafe sex, reckless driving, or misuse or
              overuse of substances.
            </li>
            <li>
              Self-harming behavior including suicidal threats or attempts.
            </li>
            <li>
              Periods of intense depressed mood, irritability or anxiety lasting
              a few hours to a few days.
            </li>
            <li>Chronic feelings of boredom or emptiness.</li>
            <li>
              Inappropriate, intense or uncontrollable anger—often followed by
              shame and guilt.
            </li>
            <li>
              Dissociative feelings—disconnecting from your thoughts or sense of
              identity or “out of body” type of feelings—and stress-related
              paranoid thoughts. Severe cases of stress can also lead to brief
              psychotic episodes.
            </li>
          </ul>

          <hr />
        </div>
        <div
          id="Causes"
          className="tabcontent"
          style={{ display: this.state.causes ? "block" : "none" }}
        >
          <h1>{condition}</h1>
          <hr />
          <h3>Causes</h3>

          <p>
            The causes of BPD are not fully understood, but scientists agree
            that it is the result of a combination of factors, including:
          </p>

          <ul style={{ paddingLeft: "12px" }}>
            <li>
              <b>Genetics.</b> While no specific gene or gene profile has been
              shown to directly cause BPD, research suggests that people who
              have a close family member with BPD may be at a higher risk of
              developing the disorder.
            </li>
            <li>
              <b>Environmental factors.</b> People who experience traumatic life
              events—such as physical or sexual abuse during childhood or
              neglect and separation from parents—are at increased risk of
              developing BPD.
            </li>
            <li>
              <b>Brain function.</b> The emotional regulation system may be
              different in people with BPD, suggesting that there is a
              neurological basis for some of the symptoms. Specifically, the
              portions of the brain that control emotions and
              decision-making/judgment may not communicate optimally with one
              another.
            </li>
          </ul>

          <hr />
        </div>
        <div
          id="Diagnosis"
          className="tabcontent"
          style={{ display: this.state.diagnosis ? "block" : "none" }}
        >
          <h1>{condition}</h1>
          <hr />
          <h3>Diagnosis</h3>

          <p>
            There is no definitive medical test to diagnose BPD, and a diagnosis
            is not based on one specific sign or symptom. BPD is best diagnosed
            by a mental health professional following a comprehensive clinical
            interview that may include talking with previous clinicians,
            reviewing previous medical evaluations and, when appropriate,
            interviews with friends and family.
          </p>

          <hr />
        </div>
        <div
          id="Treatment"
          className="tabcontent"
          style={{ display: this.state.treatment ? "block" : "none" }}
        >
          <h1>{condition}</h1>
          <hr />
          <h3>Treatment</h3>

          <p>
            An effective treatment plan should include your preferences while
            also addressing any other co-existing conditions you may have.
            Examples of treatment options include psychotherapy; medications;
            and group, peer and family support. The overarching goal of
            treatment is for a person with BPD to increasingly self-direct their
            own treatment plan as they learn what works and what doesn’t.
          </p>
          <ul style={{ paddingLeft: "12px" }}>
            <li>
              <b>Psychotherapy</b> —such as dialectical behavioral therapy
              (DBT), cognitive behavioral therapy (CBT) and psychodynamic
              psychotherapy—is the first line of choice for BPD. Learning ways
              to cope with emotional dysregulation in a therapeutic setting is
              often the key to long-term improvement for those experiencing BPD.
            </li>
            <li>
              <b>Medications</b> may be instrumental to a treatment plan, but
              there is no one medication specifically made to treat the core
              symptoms of BPD. Rather, several medications can be used off-label
              to treat various symptoms. For example, mood stabilizers and
              antidepressants help with mood swings and dysphoria. And for some,
              low-dose antipsychotic medication may help control symptoms such
              as disorganized thinking.
            </li>
            <li>
              <b>Brain function.</b> Short-term hospitalization may be necessary
              during times of extreme stress, and/or impulsive or suicidal
              behavior to ensure safety.
            </li>
          </ul>
          <hr />
        </div>

        <div
          id="Treatment"
          className="tabcontent"
          style={{ display: this.state.related ? "block" : "none" }}
        >
          <h1>{condition}</h1>
          <hr />
          <h3>Related Conditions</h3>

          <p>
            BPD can be difficult to diagnose and treat, and successful treatment
            includes addressing any other conditions a person might have. Many
            with BPD also experience additional conditions like:
          </p>
          <ul style={{ paddingLeft: "12px" }}>
            <li>
              <Link to="/anxiety-disorders">Anxiety Disorders</Link>
            </li>
            <li>
              <Link to="/posttraumatic-stress-disorder">
                Posttraumatic Stress Disorder
              </Link>
            </li>
            <li>
              <Link to="/bipolar-disorder">Bipolar Disorder</Link>
            </li>
            <li>
              <Link to="/depression">Depression</Link>
            </li>
            <li>
              <Link to="/eating-disorders">Eating Disorders</Link> (notably
              bulimia nervosa)
            </li>
            <li>Substance Use Disorders / Dual Diagnosis</li>
          </ul>
          <hr />
        </div>
      </div>
    );
  }
}

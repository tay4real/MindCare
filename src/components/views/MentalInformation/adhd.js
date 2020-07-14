import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ADHD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: true,
      symptoms: false,
      inattention: false,
      hyperactivity: false,
      impulsivity: false,
      causes: false,
      diagnosis: false,
      treatment: false,
      related: false,
    };
    this.onClickOverview = this.onClickOverview.bind(this);
    this.onClickSymptoms = this.onClickSymptoms.bind(this);
    this.onClickImpulsivity = this.onClickImpulsivity.bind(this);
    this.onClickInattention = this.onClickInattention.bind(this);
    this.onClickHyperactivity = this.onClickHyperactivity(this);
    this.onClickCauses = this.onClickCauses.bind(this);
    this.onClickDiagnosis = this.onClickDiagnosis.bind(this);
    this.onClickTreatment = this.onClickTreatment.bind(this);
    this.onClickRelated = this.onClickRelated.bind(this);
  }

  onClickOverview() {
    this.setState({
      overview: true,
      symptoms: false,
      inattention: false,
      hyperactivity: false,
      impulsivity: false,
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
      inattention: true,
      hyperactivity: false,
      impulsivity: false,
      causes: false,
      diagnosis: false,
      treatment: false,
      related: false,
    });
  }

  onClickInattention() {
    this.setState({
      overview: false,
      symptoms: true,
      inattention: true,
      hyperactivity: false,
      impulsivity: false,
      causes: false,
      diagnosis: false,
      treatment: false,
      related: false,
    });
  }

  onClickHyperactivity() {
    this.setState({
      overview: false,
      symptoms: true,
      inattention: false,
      hyperactivity: true,
      impulsivity: false,
      causes: false,
      diagnosis: false,
      treatment: false,
      related: false,
    });
  }

  onClickImpulsivity() {
    this.setState({
      overview: false,
      symptoms: true,
      inattention: false,
      hyperactivity: false,
      impulsivity: true,
      causes: false,
      diagnosis: false,
      treatment: false,
      related: false,
    });
  }
  onClickDiagnosis() {
    this.setState({
      overview: false,
      symptoms: false,
      inattention: false,
      hyperactivity: false,
      impulsivity: false,
      causes: false,
      diagnosis: true,
      treatment: false,
      related: false,
    });
  }

  onClickTreatment() {
    this.setState({
      overview: false,
      symptoms: false,
      inattention: false,
      hyperactivity: false,
      impulsivity: false,
      causes: false,
      diagnosis: false,
      treatment: true,
      related: false,
    });
  }

  onClickRelated() {
    this.setState({
      overview: false,
      symptoms: false,
      inattention: false,
      hyperactivity: false,
      impulsivity: true,
      causes: false,
      diagnosis: false,
      treatment: false,
      related: true,
    });
  }

  onClickCauses() {
    this.setState({
      overview: false,
      symptoms: false,
      inattention: false,
      hyperactivity: false,
      impulsivity: false,
      causes: true,
      diagnosis: false,
      treatment: false,
      related: false,
    });
  }

  render() {
    let condition = "Attention-Deficit Hyperactivity Disorder";

    return (
      <div className="container" style={{ padding: "100px 16px" }}>
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
            className={this.state.overview ? "tablinks active " : "tablinks "}
            onClick={this.onClickOverview}
          >
            Overview
          </button>

          <button
            className={
              this.state.symptoms
                ? "tablinks active accordion"
                : "tablinks accordion"
            }
            onClick={this.onClickSymptoms}
          >
            Symptoms
          </button>
          <div
            className={
              this.state.symptoms ? "tablinks active panel" : "tablinks panel"
            }
            style={{ display: this.state.symptoms ? "block" : "none" }}
          >
            <button
              className={
                this.state.inattention ? "tablinks active" : "tablinks"
              }
              onClick={this.onClickInattention}
            >
              Signs of inattention
            </button>
            <button
              className={
                this.state.hyperactivity ? "tablinks active" : "tablinks"
              }
              onClick={this.onClickHyperactivity}
            >
              Signs of hyperactivity
            </button>
            <button
              className={
                this.state.impulsivity ? "tablinks active" : "tablinks"
              }
              onClick={this.onClickImpulsivity}
            >
              Signs of Impulsivity
            </button>
          </div>
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
          style={{
            display: this.state.overview ? "block" : "none",
            overflowY: "scroll",
          }}
        >
          <h1>{condition}</h1>
          <hr />
          <h3>Overview</h3>
          <p>
            Attention deficit hyperactivity disorder (ADHD) is a condition in
            which characterized by inattention, hyperactivity and impulsivity.
            ADHD is most commonly diagnosed in young people. An estimated 8.8%
            of children aged 4-17 have ADHD. While ADHD is usually diagnosed in
            childhood, it does not only affect children. An estimated 4.4% of
            adults aged 18-44 have ADHD.
          </p>
          <p>
            With treatment, people with ADHD can be successful in school, work
            and lead productive lives. Researchers are using new tools such as
            brain imaging to better understand the condition and to find more
            effective ways to treat and prevent ADHD.
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
            While some behaviors associated with ADHD are "normal" and not a
            cause for concern to most people, someone with ADHD will have
            trouble controlling these behaviors and will show them much more
            frequently and for longer than 6 months.
          </p>

          <div
            id="inattention"
            style={{ display: this.state.inattention ? "block" : "none" }}
          >
            <p>Signs of inattention include:</p>

            <ul style={{ paddingLeft: "12px" }}>
              <li>
                Becoming easily distracted, and jumping from activity to
                activity.
              </li>
              <li>Becoming bored with a task quickly.</li>
              <li>
                Difficulty focusing attention or completing a single task or
                activity.
              </li>
              <li>Trouble completing or turning in homework assignments.</li>
              <li>Losing things such as school supplies or toys.</li>
              <li>Not listening or paying attention when spoken to.</li>
              <li>Daydreaming or wandering with lack of motivation.</li>
              <li>Difficulty processing information quickly.</li>
              <li>Struggling to follow directions.</li>
            </ul>
          </div>

          <div
            id="hyperactivity"
            style={{ display: this.state.hyperactivity ? "block" : "none" }}
          >
            <p>Signs of hyperactivity include:</p>

            <ul style={{ paddingLeft: "12px" }}>
              <li>Fidgeting and squirming, having trouble sitting still.</li>
              <li>Non-stop talking.</li>
              <li>Touching or playing with everything.</li>
              <li>Difficulty doing quiet tasks or activities.</li>
            </ul>
          </div>

          <div
            id="impulsivity"
            style={{ display: this.state.impulsivity ? "block" : "none" }}
          >
            <p>Signs of impulsivity include:</p>

            <ul style={{ paddingLeft: "12px" }}>
              <li>Impatience.</li>
              <li>
                Acting without regard for consequences, blurting things out.
              </li>
              <li>Difficulty taking turns, waiting or sharing.</li>
              <li>Interrupting others.</li>
            </ul>
          </div>

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

          <p>There are several factors believed to contribute to ADHD:</p>

          <ul style={{ paddingLeft: "12px" }}>
            <li>
              <b>Genetics.</b> Research shows that genes may be a large
              contributor to ADHD. ADHD often runs in families and some trends
              in specific brain areas that contribute to attention.
            </li>
            <li>
              <b>Environmental factors.</b> Studies show a link between
              cigarette smoking and alcohol use during pregnancy and children
              who have ADHD. Exposure to lead as a child has also been shown to
              increase the likelihood of ADHD in children.
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
            ADHD occurs in both children and adults, but is most often and
            diagnosed in childhood. Getting a diagnosis for ADHD can sometimes
            be difficult because the symptoms of ADHD are similar to typical
            behavior in most young children. Teachers are often the first to
            notice ADHD symptoms because they see children in a learning
            environment with peers every day.
          </p>

          <p>
            There is no one single test that can diagnose a child with ADHD, so
            meet with a doctor or mental health professional to gather all the
            necessary information to make a diagnosis. The goal is to rule out
            any outside causes for symptoms, such as environmental changes,
            difficulty in school, medical problems and ensure that a child is
            otherwise healthy.
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

          <p>ADHD is managed and treated in several ways:</p>
          <ul style={{ paddingLeft: "12px" }}>
            <li>
              <b>Medications</b>, including stimulants, nonstimulants and
              antidepressants
            </li>
            <li>
              <b>Behavioral therapy</b>
            </li>
            <li>
              <b>Self-management, education programs and assistance</b> through
              schools or work or alternative treatment approaches
            </li>
          </ul>
          <hr />
        </div>

        <div
          id="Related"
          className="tabcontent"
          style={{ display: this.state.related ? "block" : "none" }}
        >
          <h1>{condition}</h1>
          <hr />
          <h3>Related Conditions</h3>

          <p>
            Around two-thirds of children with ADHD also have another condition.
            Many adults are also impacted by the symptoms of another condition.
            Common conditions associated with ADHD include the following.
          </p>
          <ul style={{ paddingLeft: "12px" }}>
            <li>Learning disabilities</li>
            <li>
              Oppositional defiant disorder: refusal to accept directions or
              authority from adults or others
            </li>
            <li>
              Conduct disorder, persistent destructive or violent behaviors
            </li>
            <li>
              <Link to="/anxiety-disorders">Anxiety</Link> and{" "}
              <Link to="/depression">depression</Link>
            </li>
            <li>
              <Link to="/obsessive-compulsive-disorder">
                Obsessive-compulsive disorder
              </Link>
            </li>
            <li>
              <Link to="/bipolar-disorder">Bipolar Disorder</Link>
            </li>
            <li>Tourette's syndrome</li>
            <li>Sleep disorders</li>
            <li>Bed-wetting</li>
            <li>Substance use disorders/ Dual Diagnosis</li>
          </ul>
          <p>
            Symptoms from other conditions make treating ADHD more difficult.
            Talking to a skilled professional to help establish an accurate
            diagnosis can help increase the effectiveness of treatment.
          </p>
          <hr />
        </div>
      </div>
    );
  }
}

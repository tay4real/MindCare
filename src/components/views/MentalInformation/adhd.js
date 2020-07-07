import React, { Component } from "react";

export default class ADHD extends Component {
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
          style={{ display: this.state.overview ? "block" : "none" }}
        >
          <h1>Attention-Deficit/Hyperactivity Disorder</h1>
          <hr />
          <h3>Overview</h3>
          <p>
            Attention-deficit/hyperactivity disorder (ADHD) is a disorder marked
            by an ongoing pattern of inattention and/or
            hyperactivity-impulsivity that interferes with functioning or
            development.
          </p>
          <ul>
            <li>
              <strong>Inattention </strong> means a person wanders off task,
              lacks persistence, has difficulty sustaining focus, and is
              disorganized; and these problems are not due to defiance or lack
              of comprehension.
            </li>
            <li>
              <strong>Hyperactivity </strong> means a person seems to move about
              constantly, including in situations in which it is not
              appropriate; or excessively fidgets, taps, or talks. In adults, it
              may be extreme restlessness or wearing others out with constant
              activity.
            </li>
            <li>
              <strong>Impulsivity </strong>means a person makes hasty actions
              that occur in the moment without first thinking about them and
              that may have a high potential for harm, or a desire for immediate
              rewards or inability to delay gratification. An impulsive person
              may be socially intrusive and excessively interrupt others or make
              important decisions without considering the long-term
              consequences.
            </li>
          </ul>
          <hr />
        </div>

        <div
          id="Signs"
          className="tabcontent"
          style={{ display: this.state.signs ? "block" : "none" }}
        >
          <h1>Attention-Deficit/Hyperactivity Disorder</h1>
          <hr />
          <h3>Signs and Symptoms</h3>
          <p>
            Inattention and hyperactivity/impulsivity are the key behaviors of
            ADHD. Some people with ADHD only have problems with one of the
            behaviors, while others have both inattention and
            hyperactivity-impulsivity. Most children have the combined type of
            ADHD.
          </p>
          <p>In preschool, the most common ADHD symptom is hyperactivity.</p>
          <p>
            It is normal to have some inattention, unfocused motor activity, and
            impulsivity, but for people with ADHD, these behaviors:
          </p>
          <ul>
            <li>are more severe</li>
            <li>occur more often</li>
            <li>
              interfere with or reduce the quality of how they function
              socially, at school, or in a job
            </li>
          </ul>
          <div
            id="Inattention"
            style={{ display: this.state.inattension ? "block" : "none" }}
          >
            <h5>Inattention</h5>
            <p>People with symptoms of inattention may often:</p>

            <ul>
              <li>
                Overlook or miss details, make careless mistakes in schoolwork,
                at work, or during other activities
              </li>
              <li>
                Have problems sustaining attention in tasks or play, including
                conversations, lectures, or lengthy reading
              </li>
              <li>Not seem to listen when spoken to directly</li>
              <li>Being irritable</li>
              <li>Having muscle tension</li>
              <li>Difficulty controlling feelings of worry</li>
              <li>
                Not follow through on instructions and fail to finish
                schoolwork, chores, or duties in the workplace or start tasks
                but quickly lose focus and get easily sidetracked
              </li>
              <li>
                Have problems organizing tasks and activities, such as what to
                do in sequence, keeping materials and belongings in order,
                having messy work and poor time management, and failing to meet
                deadlines
              </li>
              <li>
                Avoid or dislike tasks that require sustained mental effort,
                such as schoolwork or homework, or for teens and older adults,
                preparing reports, completing forms, or reviewing lengthy papers
              </li>
              <li>
                Lose things necessary for tasks or activities, such as school
                supplies, pencils, books, tools, wallets, keys, paperwork,
                eyeglasses, and cell phones
              </li>
              <li>Be easily distracted by unrelated thoughts or stimuli</li>
              <li>
                Be forgetful in daily activities, such as chores, errands,
                returning calls, and keeping appointments
              </li>
            </ul>
          </div>

          <div
            id="Hyperactivity-Impulsivity"
            style={{ display: this.state.inattension ? "block" : "none" }}
          >
            <h5>Hyperactivity-Impulsivity</h5>
            <p>People with symptoms of hyperactivity-impulsivity may often:</p>

            <ul>
              <li>Fidget and squirm in their seats</li>
              <li>
                Have problems sustaining attention in tasks or play, including
                conversations, lectures, or lengthy reading
              </li>
              <li>Neing irritableot seem to listen when spoken to directly</li>
              <li>
                Leave their seats in situations when staying seated is expected,
                such as in the classroom or the office
              </li>
              <li>
                Run or dash around or climb in situations where it is
                inappropriate or, in teens and adults, often feel restless
              </li>
              <li>Difficulty controlling feelings of worry</li>
              <li>
                Not follow through on instructions and fail to finish
                schoolwork, chores, or duties in the workplace or start tasks
                but quickly lose focus and get easily sidetracked
              </li>
              <li>
                Have problems organizing tasks and activities, such as what to
                do in sequence, keeping materials and belongings in order,
                having messy work and poor time management, and failing to meet
                deadlines
              </li>
              <li>
                Avoid or dislike tasks that require sustained mental effort,
                such as schoolwork or homework, or for teens and older adults,
                preparing reports, completing forms, or reviewing lengthy papers
              </li>
              <li>
                Lose things necessary for tasks or activities, such as school
                supplies, pencils, books, tools, wallets, keys, paperwork,
                eyeglasses, and cell phones
              </li>
              <li>Be easily distracted by unrelated thoughts or stimuli</li>
              <li>
                Be forgetful in daily activities, such as chores, errands,
                returning calls, and keeping appointments
              </li>
              <li>Be unable to play or engage in hobbies quietly</li>
              <li>
                Be constantly in motion or “on the go,” or act as if “driven by
                a motor
              </li>
              <li>
                Interrupt or intrude on others, for example in conversations,
                games, or activities
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
            <ul>
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
            <ul>
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
            Researchers are not sure what causes ADHD. Like many other
            illnesses, several factors can contribute to ADHD, such as:
          </p>

          <ul>
            <li>Genes</li>
            <li>
              Cigarette smoking, alcohol use, or drug use during pregnancy
            </li>
            <li>
              Exposure to environmental toxins during pregnancy Exposure to
              environmental toxins, such as high levels of lead, at a young age
            </li>
            <li>Low birth weight </li>
            <li>Brain injuries</li>

            <li>
              Exposure to stressful and negative life or environmental events in
              early childhood or adulthood
            </li>
          </ul>

          <hr />
        </div>

        <div
          id="Treatment"
          className="tabcontent"
          style={{ display: this.state.treatment ? "block" : "none" }}
        >
          <h1>Attention-Deficit/Hyperactivity Disorder Overview</h1>
          <hr />
          <h3>Treatments and Therapies</h3>

          <p>
            While there is no cure for ADHD, currently available treatments can
            help reduce symptoms and improve functioning. Treatments include
            medication, psychotherapy, education or training, or a combination
            of treatments.
          </p>

          <h5>Medication</h5>
          <p>
            For many people, ADHD medications reduce hyperactivity and
            impulsivity and improve their ability to focus, work, and learn.
            Medication also may improve physical coordination. Sometimes several
            different medications or dosages must be tried before finding the
            right one that works for a particular person. Anyone taking
            medications must be monitored closely and carefully by their
            prescribing doctor.
          </p>

          <h5>Cognitive Behavioral Therapy</h5>
          <p>
            Anxiety disorders are generally treated with psychotherapy,
            medication, or both. There are many ways to treat anxiety and people
            should work with their doctor to choose the treatment that is best
            for them.
          </p>
        </div>
      </div>
    );
  }
}

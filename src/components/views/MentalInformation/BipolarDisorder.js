import React, { Component } from "react";

export default class BipolarDisorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: true,
      signs: false,
      diagnosis: false,
      otherconditions: false,
      risk: false,
      treatment: false,
    };
    this.onClickOverview = this.onClickOverview.bind(this);
    this.onClickSigns = this.onClickSigns.bind(this);
    this.onClickRisk = this.onClickRisk.bind(this);
    this.onClickDiagnosis = this.onClickDiagnosis.bind(this);
    this.onClickOtherConditions = this.onClickOtherConditions.bind(this);
    this.onClickTreatment = this.onClickTreatment.bind(this);
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

  onClickDiagnosis() {
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
  onClickOtherConditions() {
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
          <h1>Bipolar Disorder</h1>
          <hr />
          <h3>Overview</h3>
          <p>
            Bipolar disorder (formerly called manic-depressive illness or manic
            depression) is a mental disorder that causes unusual shifts in mood,
            energy, activity levels, concentration, and the ability to carry out
            day-to-day tasks.
          </p>
          <p>
            There are three types of bipolar disorder. All three types involve
            clear changes in mood, energy, and activity levels. These moods
            range from periods of extremely “up,” elated, irritable, or
            energized behavior (known as manic episodes) to very “down,” sad,
            indifferent, or hopeless periods (known as depressive episodes).
            Less severe manic periods are known as hypomanic episodes.
          </p>
          <ul style={{ paddingLeft: "12px" }}>
            <li>
              Bipolar I Disorder— defined by manic episodes that last at least 7
              days, or by manic symptoms that are so severe that the person
              needs immediate hospital care. Usually, depressive episodes occur
              as well, typically lasting at least 2 weeks. Episodes of
              depression with mixed features (having depressive symptoms and
              manic symptoms at the same time) are also possible.
            </li>
            <li>
              Bipolar II Disorder— defined by a pattern of depressive episodes
              and hypomanic episodes, but not the full-blown manic episodes that
              are typical of Bipolar I Disorder.
            </li>
            <li>
              Cyclothymic Disorder (also called Cyclothymia)— defined by periods
              of hypomanic symptoms as well as periods of depressive symptoms
              lasting for at least 2 years (1 year in children and adolescents).
              However, the symptoms do not meet the diagnostic requirements for
              a hypomanic episode and a depressive episode.
            </li>
          </ul>
          <p>
            Sometimes a person might experience symptoms of bipolar disorder
            that do not match the three categories listed above, which is
            referred to as “other specified and unspecified bipolar and related
            disorders.”
          </p>
          <p>
            Bipolar disorder is typically diagnosed during late adolescence
            (teen years) or early adulthood. Occasionally, bipolar symptoms can
            appear in children. Bipolar disorder can also first appear during a
            woman’s pregnancy or following childbirth. Although the symptoms may
            vary over time, bipolar disorder usually requires lifelong
            treatment. Following a prescribed treatment plan can help people
            manage their symptoms and improve their quality of life. Signs and
            Symptoms People with bipolar disorder experience periods of
            unusually intense emotion, changes in sleep patterns and activity
            levels, and uncharacteristic behaviors—often without recognizing
            their likely harmful or undesirable effects. These distinct periods
            are called “mood episodes.” Mood episodes are very different from
            the moods and behaviors that are typical for the person. During an
            episode, the symptoms last every day for most of the day. Episodes
            may also last for longer periods, such as several days or weeks.
            People having a manic episode may: People having a depressive
            episode may: Feel very “up,” “high,” elated, or irritable or touchy
            Feel very sad, “down,” empty, worried, or hopeless Feel “jumpy” or
            “wired” Feel slowed down or restless Have a decreased need for sleep
            Have trouble falling asleep, wake up too early, or sleep too much
            Have a loss of appetite Experience increased appetite and weight
            gain Talk very fast about a lot of different things Talk very
            slowly, feel like they have nothing to say, forget a lot Feel like
            their thoughts are racing Have trouble concentrating or making
            decisions Think they can do a lot of things at once Feel unable to
            do even simple things Do risky things that show poor judgment, such
            as eat and drink excessively, spend or give away a lot of money, or
            have reckless sex Have little interest in almost all activities, a
            decreased or absent sex drive, or an inability to experience
            pleasure (“anhedonia”) Feel like they are unusually important,
            talented, or powerful Feel hopeless or worthless, think about death
            or suicide Sometimes people experience both manic and depressive
            symptoms in the same episode. This kind of episode is called an
            episode with mixed features. People experiencing an episode with
            mixed features may feel very sad, empty, or hopeless, while, at the
            same, time feeling extremely energized. A person may have bipolar
            disorder even if their symptoms are less extreme. For example, some
            people with bipolar disorder (Bipolar II) experience hypomania, a
            less severe form of mania. During a hypomanic episode, a person may
            feel very good, be able to get things done, and keep up with
            day-to-day life. The person may not feel that anything is wrong, but
            family and friends may recognize the changes in mood or activity
            levels as possible bipolar disorder. Without proper treatment,
            people with hypomania can develop severe mania or depression.
            Diagnosis Proper diagnosis and treatment can help people with
            bipolar disorder lead healthy and active lives. Talking with a
            doctor or other licensed health care provider is the first step. The
            health care provider can complete a physical exam and order
            necessary medical tests to rule out other conditions. The health
            care provider may then conduct a mental health evaluation or provide
            a referral to a trained mental health care provider, such as a
            psychiatrist, psychologist, or clinical social worker who has
            experience in diagnosing and treating bipolar disorder. Mental
            health care providers usually diagnose bipolar disorder based on a
            person’s symptoms, lifetime history, experiences, and, in some
            cases, family history. Accurate diagnosis in youth is particularly
            important. You can find tips for talking with your health care
            provider in the NIMH fact sheet on Taking Control of Your Mental
            Health: Tips for Talking with Your Health Care Provider. Note for
            Health Care Providers: People with bipolar disorder are more likely
            to seek help when they are depressed than when they are experiencing
            mania or hypomania. Taking a careful medical history is essential to
            ensure that bipolar disorder is not mistaken for major depression.
            This is especially important when treating an initial episode of
            depression as antidepressant medications can trigger a manic episode
            in people who have an increased chance of having bipolar disorder.
            Bipolar Disorder and Other Conditions Some bipolar disorder symptoms
            are similar to those of other illnesses, which can make it
            challenging for a health care provider to make a diagnosis. In
            addition, many people may have bipolar disorder along with another
            mental disorder or condition, such as an anxiety disorder, substance
            use disorder, or an eating disorder. People with bipolar disorder
            have an increased chance of having thyroid disease, migraine
            headaches, heart disease, diabetes, obesity, and other physical
            illnesses. Psychosis: Sometimes, a person with severe episodes of
            mania or depression may experience psychotic symptoms, such as
            hallucinations or delusions. The psychotic symptoms tend to match
            the person’s extreme mood. For example: People having psychotic
            symptoms during a manic episode may have the unrealistic belief that
            they are famous, have a lot of money, or have special powers. People
            having psychotic symptoms during a depressive episode may falsely
            believe they are financially ruined and penniless, have committed a
            crime, or have an unrecognized serious illness. As a result, people
            with bipolar disorder who also have psychotic symptoms are sometimes
            incorrectly diagnosed with schizophrenia. When people have symptoms
            of bipolar disorder and also experience periods of psychosis that
            are separate from mood episodes, the appropriate diagnosis may be
            schizoaffective disorder. Anxiety: It is common for people with
            bipolar disorder to also have an anxiety disorder. Attention-Deficit
            Hyperactivity Disorder (ADHD): It is common for people with bipolar
            disorder to also have ADHD. Misuse of Drugs or Alcohol: People with
            bipolar disorder may misuse alcohol or drugs and engage in other
            high-risk behaviors at times of impaired judgment during manic
            episodes. Although the negative effects of alcohol use or drug use
            may be most evident to family, friends, and health care providers,
            it is important to recognize the presence of an associated mental
            disorder. Eating Disorders: In some cases, people with bipolar
            disorder also have an eating disorder, such as binge eating or
            bulimia. Risk Factors Researchers are studying the possible causes
            of bipolar disorder. Most agree that there is no single cause and it
            is likely that many factors contribute to a person’s chance of
            having the illness. Brain Structure and Functioning: Some studies
            indicate that the brains of people with bipolar disorder may differ
            from the brains of people who do not have bipolar disorder or any
            other mental disorder. Learning more about these differences may
            help scientists understand bipolar disorder and determine which
            treatments will work best. At this time, health care providers base
            the diagnosis and treatment plan on a person’s symptoms and history,
            rather than brain imaging or other diagnostic tests. Genetics: Some
            research suggests that people with certain genes are more likely to
            develop bipolar disorder. Research also shows that people who have a
            parent or sibling with bipolar disorder have an increased chance of
            having the disorder themselves. Many genes are involved, and no one
            gene can cause the disorder. Learning more about how genes play a
            role in bipolar disorder may help researchers develop new
            treatments. Treatments and Therapies Treatment can help many people,
            including those with the most severe forms of bipolar disorder. An
            effective treatment plan usually includes a combination of
            medication and psychotherapy, also called “talk therapy.” Bipolar
            disorder is a lifelong illness. Episodes of mania and depression
            typically come back over time. Between episodes, many people with
            bipolar disorder are free of mood changes, but some people may have
            lingering symptoms. Long-term, continuous treatment can help people
            manage these symptoms. Medications Certain medications can help
            manage symptoms of bipolar disorder. Some people may need to try
            several different medications and work with their health care
            provider before finding medications that work best. Medications
            generally used to treat bipolar disorder include mood stabilizers
            and second-generation (“atypical”) antipsychotics. Treatment plans
            may also include medications that target sleep or anxiety. Health
            care providers often prescribe antidepressant medication to treat
            depressive episodes in bipolar disorder, combining the
            antidepressant with a mood stabilizer to prevent triggering a manic
            episode. People taking medication should: Talk with their health
            care provider to understand the risks and benefits of the
            medication. Tell their health care provider about any prescription
            drugs, over-the-counter medications, or supplements they are already
            taking. Report any concerns about side effects to a health care
            provider right away. The health care provider may need to change the
            dose or try a different medication. Remember that medication for
            bipolar disorder must be taken consistently, as prescribed, even
            when one is feeling well. Avoid stopping a medication without
            talking to a health care provider first. Suddenly stopping a
            medication may lead to a “rebound” or worsening of bipolar disorder
            symptoms. For basic information about medications, visit NIMH’s
            Mental Health Medications webpage. For the most up-to-date
            information on medications, side effects, and warnings, visit the
            U.S. Food and Drug Administration (FDA) Medication Guides website.
            Psychotherapy Psychotherapy, also called “talk therapy,” can be an
            effective part of the treatment plan for people with bipolar
            disorder. Psychotherapy is a term for a variety of treatment
            techniques that aim to help a person identify and change troubling
            emotions, thoughts, and behaviors. It can provide support,
            education, and guidance to people with bipolar disorder and their
            families. Treatment may include therapies such as
            cognitive-behavioral therapy (CBT) and psychoeducation, which are
            used to treat a variety of conditions. Treatment may also include
            newer therapies designed specifically for the treatment of bipolar
            disorder, including interpersonal and social rhythm therapy (IPSRT)
            and family-focused therapy. Determining whether intensive
            psychotherapeutic intervention at the earliest stages of bipolar
            disorder can prevent or limit its full-blown onset is an important
            area of ongoing research. Visit NIMH’s Psychotherapies webpage to
            learn about the various types of psychotherapies. Other Treatment
            Options Some people may find other treatments helpful in managing
            their bipolar symptoms, including: Electroconvulsive Therapy (ECT):
            ECT is a brain stimulation procedure that can help people get relief
            from severe symptoms of bipolar disorder. With modern ECT, a person
            usually goes through a series of treatment sessions over several
            weeks. ECT is delivered under general anesthesia and is safe. It can
            be effective in treating severe depressive and manic episodes, which
            occur most often when medication and psychotherapy are not effective
            or are not safe for a particular patient. ECT can also be effective
            when a rapid response is needed, as in the case of suicide risk or
            catatonia (a state of unresponsiveness). More research is needed to
            determine the effects of other treatments, including: Transcranial
            magnetic stimulation (TMS): TMS is a newer approach to brain
            stimulation that uses magnetic waves. It is delivered to an awake
            patient most days for 1 month. Research shows that TMS is helpful
            for many people with various subtypes of depression, but its role in
            the treatment of bipolar disorder is still under study. Supplements:
            Although there are reports that some supplements and herbs may help,
            not enough research has been conducted to fully understand how these
            supplements may affect people with bipolar disorder. It is important
            for a health care provider to know about all prescription drugs,
            over-the-counter medications, and supplements a patient is taking.
            Certain medications and supplements taken together may cause
            unwanted or dangerous effects. Beyond Treatment: Things You Can Do
            Regular Exercise: Regular aerobic exercise, such as jogging, brisk
            walking, swimming, or bicycling, helps with depression and anxiety,
            promotes better sleep, and is healthy for your heart and brain.
            There is also some evidence that anaerobic exercise such as
            weightlifting, yoga, and Pilates can be helpful. Check with your
            health care provider before you start a new exercise regimen.
            Keeping a Life Chart: Even with proper treatment, mood changes can
            occur. Treatment is more effective when a patient and health care
            provider work together and talk openly about concerns and choices.
            Keeping a life chart that records daily mood symptoms, treatments,
            sleep patterns, and life events can help patients and health care
            providers track and treat bipolar disorder over time. Patients can
            easily share data collected via smartphone apps – including
            self-reports, self- ratings, and activity data – with their health
            care providers and therapists. Finding Treatment A family health
            care provider or doctor is a good resource and can be the first stop
            in searching for help. For tips for talking with your health care
            provider, see NIMH’s Taking Control of Your Mental Health: Tips for
            Talking with Your Health Care Provider fact sheet. For general
            information on mental health and to find local treatment services,
            call the Substance Abuse and Mental Health Services Administration
            (SAMHSA) Treatment Referral Helpline at 1-800-662-HELP (4357). The
            SAMHSA website has a Behavioral Health Treatment Services Locator
            that can search for treatment information by address, city, or ZIP
            code. Visit NIMH’s Help for Mental Illnesses webpage for more
            information and resources. For Immediate Help If you are in crisis:
            Call the toll-free National Suicide Prevention Lifeline at
            1-800-273-TALK (8255), available 24 hours a day, 7 days a week. The
            service is available to everyone. All calls are confidential.
            Contact social media outlets directly if you are concerned about a
            friend’s social media updates or dial 911 in an emergency. If you
            are thinking about harming yourself or thinking about suicide: Tell
            someone who can help right away. Call your licensed mental health
            professional if you are already working with one. Call your doctor
            or health care provider. Go to the nearest hospital emergency
            department or call 911. If a loved one is considering suicide: Do
            not leave him or her alone. Try to get your loved one to seek
            immediate help from a doctor, health care provider, or the nearest
            hospital emergency room or call 911. Remove access to firearms or
            other potential tools for suicide, including medications. Coping
            with Bipolar Disorder Living with bipolar disorder can be
            challenging, but there are ways to help make it easier for yourself,
            a friend, or a loved one. Get treatment and stick with it—recovery
            takes time and it’s not easy. But treatment is the best way to start
            feeling better. Keep medical and therapy appointments and talk with
            the provider about treatment options. Take all medicines as
            directed. Structure activities: keep a routine for eating and
            sleeping, and make sure to get enough sleep and exercise. Learn to
            recognize your mood swings and warning signs, such as decreased
            sleep. Ask for help when trying to stick with your treatment. Be
            patient; improvement takes time. Social support helps. Avoid misuse
            of alcohol and drugs. Remember: Bipolar disorder is a lifelong
            illness, but long-term, ongoing treatment can help control symptoms
            and enable you to live a healthy life. Join a Study Clinical trials
            are research studies that look at new ways to prevent, detect, or
            treat diseases and conditions. The goal of clinical trials is to
            determine if a new test or treatment works and is safe. Although
            individuals may benefit from being part of a clinical trial,
            participants should be aware that the primary purpose of a clinical
            trial is to gain new scientific knowledge so that others may be
            better helped in the future. Researchers at NIMH and around the
            country conduct many studies with patients and healthy volunteers.
            We have new and better treatment options today because of what
            clinical trials uncovered years ago. Be part of tomorrow’s medical
            breakthroughs. Talk to your health care provider about clinical
            trials, their benefits and risks, and whether one is right for you.
            To learn more about participating in clinical trials, visit NIMH’s
            Clinical Trials webpage. Learn More Free Brochures Bipolar Disorder:
            A brochure on bipolar disorder that offers basic information on
            signs and symptoms, treatment, and finding help. Also available en
            Español. Bipolar Disorder in Children and Teens: A brochure on
            bipolar disorder in children and teens that offers basic information
            on signs and symptoms, treatment, and finding help. Also available
            en Español. Bipolar Disorder in Teens and Young Adults: Know the
            Signs: An infographic presenting common signs and symptoms of
            bipolar disorder in teens and young adults. Also available en
            Español. Research and Clinical Trials Treatment for Bipolar Disorder
            in Adults: A Systematic Review: A review from the Agency for
            Healthcare Research and Quality that assesses the effectiveness of
            medications and other therapies for treating mania or depression
            symptoms and preventing relapse in adults with bipolar disorder
            diagnoses. Bipolar Disorder Statistics: An NIMH webpage that
            provides information on the prevalence of bipolar disorder among
            adults and adolescents. Join a Study: Bipolar Disorder – Adults: An
            NIMH webpage lists bipolar disorder clinical trials that are
            recruiting adults. Last Revised: January 2020 Unless otherwise
            specified, NIMH information and publications are in the public
            domain and available for use free of charge. Citation of the NIMH is
            appreciated. Please see our Citing NIMH Information and Publications
            page for more information. Share Share this page on Facebook. Share
            this page on Twitter Share this page by Email Launch NIMH print
            application. Science News About Bipolar Disorder brain scan showing
            molecular structureHow Psychiatric Risk Genes Work National
            Institute of Mental HealthStudy Suggests New Focus for Treatment of
            Depression MRI of infant's brainMom’s Inflammation Linked to Child’s
            Brain Development MORE Join A Study Bipolar Disorder Studies for
            Adults Publication About Bipolar Disorder cover image from NIMH
            brochure on Bipolar Disorder Bipolar Disorder This brochure
            describes the signs and symptoms, risk factors, and treatment
            options for bipolar disorder (also known as manic-depressive
            illness), a brain disorder that causes unusual shifts in mood,
            energy, activity levels, and the ability to carry out day-to-day
            tasks. More Publications About Bipolar Disorder Research Results
            Systematic Treatment Enhancement Program for Bipolar Disorder
            (STEP-BD) PubMed: Journal Articles about{" "}
          </p>
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
          <ul style={{ paddingLeft: "12px" }}>
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

            <ul style={{ paddingLeft: "12px" }}>
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

            <ul style={{ paddingLeft: "12px" }}>
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
            Researchers are not sure what causes ADHD. Like many other
            illnesses, several factors can contribute to ADHD, such as:
          </p>

          <ul style={{ paddingLeft: "12px" }}>
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

import React, { Component } from "react";
import { Link } from "react-router-dom";

let mentalconditions = [
  {
    id: 0,
    slug: "adhd",
    condition: "Attention Deficit Hyperactivity Disorder (ADHD)",
    imgpath: "/images/adhd.jpg",
    intro: {
      paragraph: [
        {
          id: 1,
          body:
            "ADHD is a developmental disorder defined by inattention (trouble staying on task, listening); disorganization (losing materials); and hyperactivity-impulsivity (fidgeting, difficulty staying seated or waiting).",
        },
        {
          id: 2,
          body:
            "Attention deficit hyperactivity disorder (ADHD) is a condition in which characterized by inattention, hyperactivity and impulsivity. ADHD is most commonly diagnosed in young people. An estimated 8.8% of children aged 4-17 have ADHD. While ADHD is usually diagnosed in childhood, it does not only affect children. An estimated 4.4% of adults aged 18-44 have ADHD.",
        },
        {
          id: 3,
          body:
            "With treatment, people with ADHD can be successful in school, work and lead productive lives. Researchers are using new tools such as brain imaging to better understand the condition and to find more effective ways to treat and prevent ADHD.",
        },
      ],
    },
    symptoms: {
      title: "Symptoms",
      paragraph: [
        {
          id: 1,
          body:
            'While some behaviors associated with ADHD are "normal" and not a cause for concern to most people, someone with ADHD will have trouble controlling these behaviors and will show them much more frequently and for longer than 6 months.',
          bulletpoint: [],
        },
        {
          id: 2,
          body: "Signs of inattention include:",
          bulletpoint: [
            {
              id: 1,
              point:
                "Becoming easily distracted, and jumping from activity to activity.",
            },
            {
              id: 2,
              point: "Becoming bored with a task quickly.",
            },
            {
              id: 3,
              point:
                "Difficulty focusing attention or completing a single task or activity",
            },
            {
              id: 4,
              point: "Trouble completing or turning in homework assignments.",
            },
            {
              id: 5,
              point: "Losing things such as school supplies or toys.",
            },
            {
              id: 6,
              point: "Not listening or paying attention when spoken to.",
            },
            {
              id: 7,
              point: "Daydreaming or wandering with lack of motivation.",
            },
            {
              id: 8,
              point: "Difficulty processing information quickly.",
            },
            {
              id: 9,
              point: "Struggling to follow directions.",
            },
          ],
        },
        {
          id: 3,
          body: "Signs of hyperactivity include:",
          bulletpoint: [
            {
              id: 1,
              point: "Fidgeting and squirming, having trouble sitting still.",
            },
            {
              id: 2,
              point: "Non-stop talking.",
            },
            {
              id: 3,
              point: "Touching or playing with everything.",
            },
            {
              id: 4,
              point: "Difficulty doing quiet tasks or activities.",
            },
          ],
        },
        {
          id: 4,
          body: "Signs of impulsivity include:",
          bulletpoint: [
            {
              id: 1,
              point: "Impatience.",
            },
            {
              id: 2,
              point:
                "Acting without regard for consequences, blurting things out.",
            },
            {
              id: 3,
              point: "Difficulty taking turns, waiting or sharing.",
            },
            {
              id: 4,
              point: "Interrupting others.",
            },
          ],
        },
      ],
    },
    causes: {
      title: "Causes",
      intro: "There are several factors believed to contribute to ADHD:",
      bulletpoint: [
        {
          id: 1,
          header: "Genetics.",
          body:
            "Research shows that genes may be a large contributor to ADHD. ADHD often runs in families and some trends in specific brain areas that contribute to attention.",
        },
        {
          id: 2,
          header: "Environmental factors.",
          body:
            "Studies show a link between cigarette smoking and alcohol use during pregnancy and children who have ADHD. Exposure to lead as a child has also been shown to increase the likelihood of ADHD in children.",
        },
      ],
    },
    diagnosis: {
      title: "Diagnosis",
      paragraph: [
        {
          id: 1,
          body:
            "There is no one single test that can diagnose a child with ADHD, so meet with a doctor or mental health professional to gather all the necessary information to make a diagnosis. The goal is to rule out any outside causes for symptoms, such as environmental changes, difficulty in school, medical problems and ensure that a child is otherwise healthy.",
        },
        {
          id: 2,
          body:
            "There is no one single test that can diagnose a child with ADHD, so meet with a doctor or mental health professional to gather all the necessary information to make a diagnosis. The goal is to rule out any outside causes for symptoms, such as environmental changes, difficulty in school, medical problems and ensure that a child is otherwise healthy.",
        },
      ],
    },
    treatment: {
      title: "Treatment",
      paragraph: [
        {
          id: 1,
          body: "ADHD is managed and treated in several ways:",
          bulletpoint: [
            {
              id: 1,
              point:
                "Medications, including stimulants, nonstimulants and antidepressants",
            },
            {
              id: 2,
              point: "Behavioral therapy",
            },
            {
              id: 3,
              point:
                "Self-management, education programs and assistance through schools or work or alternative treatment approaches",
            },
          ],
        },
      ],
    },
    related_conditions: {
      title: "Related Conditions",
      paragraph: [
        {
          id: 1,
          body:
            "Around two-thirds of children with ADHD also have another condition. Many adults are also impacted by the symptoms of another condition. Common conditions associated with ADHD include the following.",
          bulletpoint: [
            {
              id: 1,
              point: "Learning disabilities",
              slug: "",
            },
            {
              id: 2,
              point:
                "Oppositional defiant disorder: refusal to accept directions or authority from adults or others",
              slug: "",
            },
            {
              id: 3,
              point:
                "Conduct disorder, persistent destructive or violent behaviors",
              slug: "",
            },
            {
              id: 4,
              point: "Anxiety and depression",
              slug: "",
            },
            {
              id: 5,
              point: "Obsessive-compulsive disorder",
              slug: "obsessive-compulsive",
            },
            {
              id: 6,
              point: "Bipolar disorder",
              slug: "bipolar-disorder",
            },
            {
              id: 7,
              point: "Tourette's syndrome",
              slug: "",
            },
            {
              id: 8,
              point: "Sleep disorders",
              slug: "",
            },
            {
              id: 9,
              point: "Bed-wetting",
              slug: "",
            },
            {
              id: 10,
              point: "Substance use disorders/ Dual Diagnosis",
              slug: "",
            },
          ],
        },
        {
          id: 2,
          body:
            "Symptoms from other conditions make treating ADHD more difficult. Talking to a skilled professional to help establish an accurate diagnosis can help increase the effectiveness of treatment.",
          bulletpoint: [],
        },
        {
          id: 3,
          body:
            "ADHD is one of the conditions most strongly linked to genetics. People with ADHD do not lack intelligence or discipline. They are just challenged at focusing to complete tasks.",
          bulletpoint: [],
        },
      ],
    },
    selfhelp: {
      title: "Helping Yourself",
      paragraph: [
        {
          id: 1,
          body:
            "Many of the strategies that help youth with ADHD, including structure, organizational tips and coaching as well as medication can be helpful for adults living with ADHD as well. An individualized approach to treatment that focuses on strengths and circumstances is critical for adult and children.",
          bulletpoint: [],
        },

        {
          id: 2,
          body:
            "One of the major areas of focus for adults living with ADHD is learning to manage the disorder in the workplace. Symptoms can cause difficulties in some or all the following areas:",
          bulletpoint: [
            {
              id: 1,
              point:
                "Organizing paperwork, prioritizing tasks and estimating the amount of time it takes to get started on and complete projects on time",
            },
            {
              id: 2,
              point:
                "Focusing, sustaining and shifting attention from one project to another",
            },
            {
              id: 3,
              point:
                "Staying alert, sustaining effort and processing information in a reasonable amount of time",
            },
            {
              id: 4,
              point:
                "Regulating impulsivity and picking up on the nonverbal cues from others",
            },
          ],
        },
        {
          id: 3,
          body:
            "There are a lot of things you can do to keep yourself organized and work with a low level of stress. Know your rights and work with your employer to make your environment suitable for your needs. Some common accommodations include:",
          bulletpoint: [
            {
              id: 1,
              point:
                "Scheduling regular meetings with supervisor to prioritize tasks",
            },
            {
              id: 2,
              point:
                "Developing a checklist of assignments, and a workflow chart that provides an idea of time required for each project",
            },
            {
              id: 3,
              point: "Using an electronic filing system",
            },
            {
              id: 4,
              point: "Extending deadlines on projects and tasks",
            },
            {
              id: 5,
              point: "Providing a distraction-free workspace",
            },
            {
              id: 6,
              point: "Breaking up big assignments into smaller tasks",
            },
            {
              id: 7,
              point: "Providing structured breaks",
            },
            {
              id: 8,
              point: "Integrating interesting projects with more mundane tasks",
            },
            {
              id: 9,
              point:
                "Allowing the employee to audio record instructions and meetings, and/or providing written instructions on projects and training",
            },
            {
              id: 10,
              point: "Allowing the employee to work from home",
            },
            {
              id: 11,
              point: "Engaging the help of a job coach",
            },
            {
              id: 12,
              point: "Allowing the employee to skip social events",
            },
            {
              id: 13,
              point: "Assigning a mentor to assist the employee",
            },
          ],
        },
        {
          id: 4,
          body:
            "You will want to talk with your supervisor and ensure that these accommodations will not cause a burden on your place of employment.",
          bulletpoint: [],
        },
      ],
    },
  },
  {
    id: 1,
    slug: "seasonal-pattern-depression",
    condition: "Seasonal Pattern Depression",
    imgpath: "/images/bipolar.jpg",
    intro: {
      paragraph: [
        {
          id: 1,
          body:
            "Major Depressive Disorder with a Seasonal Pattern (formerly known as seasonal affective disorder, or SAD) is characterized by recurrent episodes of depression in late fall and winter, alternating with periods of normal mood the rest of the year.",
          bulletpoint: [],
        },
        {
          id: 2,
          body:
            "Researchers at the National Institute of Mental Health were the first to suggest this condition was a response to decreased light and experimented with the use of bright light to address the symptoms. Scientists have identified that the neurotransmitter serotonin may not be working optimally in many people who experience this disorder.",
          bulletpoint: [],
        },
        {
          id: 3,
          body:
            "The prevalence of this condition appears to vary with latitude, age and sex:",
          bulletpoint: [
            {
              id: 1,
              point:
                "Prevalence increases among people living in higher/northern latitudes.",
            },
            {
              id: 2,
              point: "Younger persons are at higher risk.",
            },
            {
              id: 3,
              point:
                "Women are more likely than men to experience this condition.",
            },
          ],
        },
      ],
    },
    symptoms: {
      title: "Symptoms",
      paragraph: [
        {
          id: 1,
          body:
            "This disorder’s most common presentation is of an atypical depression. With classic depression, people tend to lose weight and sleep less. This condition is the kind of atypical depression often seen in bipolar disorder—people tend to gain weight and sleep more.",
          bulletpoint: [],
        },
        {
          id: 2,
          body:
            "Although not everyone experiences all the following symptoms, the classic characteristics of Major Depressive Disorder with a Seasonal Pattern include:",
          bulletpoint: [
            {
              id: 1,
              point: "Hypersomnia (or oversleeping)",
            },
            {
              id: 2,
              point: "Daytime fatigue",
            },
            {
              id: 3,
              point: "Overeating",
            },
            {
              id: 4,
              point: "Weight gain",
            },
            {
              id: 5,
              point: "Craving carbohydrates",
            },
          ],
        },
        {
          id: 3,
          body: "Many people may experience other symptoms as well, including:",
          bulletpoint: [
            {
              id: 1,
              point: "Decreased sexual interest",
            },
            {
              id: 2,
              point: "Lethargy",
            },
            {
              id: 3,
              point: "Hopelessness",
            },
            {
              id: 4,
              point: "Suicidal thoughts",
            },
            {
              id: 5,
              point:
                "Lack of interest in usual activities and decreased socialization",
            },
          ],
        },
      ],
    },
    causes: {},
    diagnosis: {
      title: "Diagnosis",
      paragraph: [
        {
          id: 1,
          body:
            "The key to an accurate diagnose of this condition is recognizing its pattern. Symptoms usually begin in October/November and subside in March/April. Some people begin to experience a “slump” as early as August, while others remain well until January. Regardless of the time of onset, most people don’t feel fully “back to normal” until early May.",
        },
        {
          id: 2,
          body:
            "For a diagnosis to be made, this pattern of onset and remission must have occurred during at least a two-year period, without the occurrence of any non-seasonal episodes during that same period.",
        },
        {
          id: 3,
          body:
            "This means you will not receive this diagnosis the first time you experience symptoms. If you believe you may have a seasonal depressive pattern, it’s important to pay attention to the pattern. Track your symptoms, noting when they begin and when they subside. This self-awareness can help. Mental health professionals will ask you about your observations and also your family history since mood disorders tend to run in families.",
        },
      ],
    },
    treatment: {
      title: "Treatment",
      paragraph: [
        {
          id: 1,
          body:
            "As with most depressive disorders, the best treatment includes a combination of antidepressant medications, cognitive behavioral therapy and exercise. Unlike other depressive disorders, this condition can also be treated with light therapy. Light therapy consists of regular, daily exposure to a “light box,” which artificially simulates high-intensity sunlight. Be aware that ordinary indoor light is not sufficient to treat this condition",
          bulletpoint: [],
        },
        {
          id: 2,
          body:
            "Some primary care doctors have experience treating this disorder. Remember that this condition is a subset of major depression. If your primary care doctor prescribes you an antidepressant, orders you a light box and sends you to a social worker—and you have trouble the following year—consider seeking consultation from a psychiatrist. Treatment planning needs to match the severity of the condition for each individual.",
          bulletpoint: [],
        },
      ],
    },
    planning_ahead: {
      title: "Planning Ahead",
      paragraph: [
        {
          id: 1,
          body:
            "If you know you have a seasonal pattern, ask yourself “How can I plan for this?” Because this disorder has a specific pattern, those who experience it can prepare for its arrival in the following ways, for example:",
          bulletpoint: [
            {
              id: 1,
              body: "Exercise more toward the end of summer",
            },
            {
              id: 2,
              body: "Get into therapy around September",
            },
            {
              id: 3,
              body: "Start your lightbox in October",
            },
            {
              id: 4,
              body: "Plan a vacation to a sunny spot in January",
            },
          ],
        },
        {
          id: 2,
          body:
            "Some people may require treatment only during the time of the year in which they experience symptoms, or they may need treatment that begins before symptoms are most severe. Others may choose year-round treatment.",
          bulletpoint: [],
        },
      ],
    },
  },
  {
    id: 2,
    slug: "anxiety-disorders",
    condition: "Anxiety Disorders",
    imgpath: "/images/anxiety2.jpg",
    intro: {
      paragraph: [
        {
          id: 1,

          body:
            "Everyone can experience anxiety, but when symptoms are overwhelming and constant — often impacting everyday living — it may be an anxiety disorder.",
          bulletpoint: [],
        },
        {
          id: 2,

          body:
            "We all experience anxiety. For example, speaking in front of a group can make us anxious, but that anxiety also motivates us to prepare and practice. Driving in heavy traffic is another common source of anxiety, but it helps keep us alert and cautious to avoid accidents. However, when feelings of intense fear and distress become overwhelming and prevent us from doing everyday activities, an anxiety disorder may be the cause.",
        },
      ],
    },
    symptoms: {
      title: "Symptoms",
      paragraph: [
        {
          id: 1,
          body:
            "Anxiety disorders are a group of related conditions, each having unique symptoms. However, all anxiety disorders have one thing in common: persistent, excessive fear or worry in situations that are not threatening. People typically experience one or more of the following symptoms:",
          bulletpoint: [],
        },
        {
          id: 2,
          body: "Emotional symptoms:",
          bulletpoint: [
            {
              id: 1,
              point: "Feelings of apprehension or dread",
            },
            {
              id: 2,
              point: "Feeling tense or jumpy",
            },
            {
              id: 3,
              point: "Restlessness or irritability",
            },
            {
              id: 4,
              point:
                "Anticipating the worst and being watchful for signs of danger",
            },
          ],
        },
        {
          id: 3,
          body: "Physical symptoms:",
          bulletpoint: [
            {
              id: 1,
              point: "Pounding or racing heart and shortness of breath",
            },
            {
              id: 2,
              point: "Sweating, tremors and twitches",
            },
            {
              id: 3,
              point: "Headaches, fatigue and insomnia",
            },
            {
              id: 4,
              point: "Upset stomach, frequent urination or diarrhoea",
            },
          ],
        },
      ],
    },
    types: {
      title: "Types Of Anxiety Disorders",
      paragraph: [
        {
          id: 1,
          subtitle: "",
          body:
            "There are many types of anxiety disorders, each with different symptoms. The most common types of anxiety disorders include:",
          bulletpoint: [],
        },
        {
          id: 2,
          subtitle: "Generalized Anxiety Disorder (GAD)",
          body:
            "GAD produces chronic, exaggerated worrying about everyday life. This worrying can consume hours each day, making it hard to concentrate or finish daily tasks. A person with GAD may become exhausted by worry and experience headaches, tension or nausea.",
          bulletpoint: [],
        },
        {
          id: 2,
          subtitle: "Social Anxiety Disorder",
          body:
            "More than shyness, this disorder causes intense fear about social interaction, often driven by irrational worries about humiliation (e.g. saying something stupid or not knowing what to say). Someone with social anxiety disorder may not take part in conversations, contribute to class discussions or offer their ideas, and may become isolated. Panic attacks are a common reaction to anticipated or forced social interaction.",
          bulletpoint: [],
        },
        {
          id: 3,
          subtitle: "Panic Disorder",
          body:
            "This disorder is characterized by panic attacks and sudden feelings of terror sometimes striking repeatedly and without warning. Often mistaken for a heart attack, a panic attack causes powerful physical symptoms including chest pain, heart palpitations, dizziness, shortness of breath and stomach upset. Many people will go to desperate measures to avoid an attack, including social isolation.",
          bulletpoint: [],
        },
        {
          id: 4,
          subtitle: "Phobias",
          body:
            "We all tend to avoid certain things or situations that make us uncomfortable or even fearful. But for someone with a phobia, certain places, events or objects create powerful reactions of strong, irrational fear. Most people with specific phobias have several things that can trigger those reactions; to avoid panic, they will work hard to avoid their triggers. Depending on the type and number of triggers, attempts to control fear can take over a person’s life.",
          bulletpoint: [],
        },
        {
          id: 4,
          subtitle: "",
          body: "Other anxiety disorders include:",
          bulletpoint: [
            {
              id: 1,
              point: "Agoraphobia",
            },
            {
              id: 2,
              point: "Selective mutism",
            },
            {
              id: 3,
              point: "Separation anxiety disorder",
            },
            {
              id: 4,
              point:
                "Substance/medication-induced anxiety disorder, involving intoxication or withdrawal or medication treatment",
            },
          ],
        },
      ],
    },
    causes: {
      title: "Causes",
      paragraph: [
        {
          id: 1,
          subtitle: "",
          body:
            "Scientists believe that many factors combine to cause anxiety disorders:",
          bulletpoint: [
            {
              id: 1,
              point: "Genetics.",
              body:
                "Studies support the evidence that anxiety disorders “run in families,” as some families have a higher-than-average amount of anxiety disorders among relatives.",
            },
            {
              id: 2,
              point: "Environment.",
              body:
                "A stressful or traumatic event such as abuse, death of a loved one, violence or prolonged illness is often linked to the development of an anxiety disorder.",
            },
          ],
        },
      ],
    },
    diagnosis: {
      title: "Diagnosis",
      paragraph: [
        {
          id: 1,
          body:
            "Physical symptoms of an anxiety disorder can be easily confused with other medical conditions, like heart disease or hyperthyroidism. Therefore, a doctor will likely perform an evaluation involving a physical examination, an interview and lab tests. After ruling out an underlying physical illness, a doctor may refer a person to a mental health professional for evaluation.",
        },
        {
          id: 2,
          body:
            "Using the Diagnostic and Statistical Manual of Mental Disorders (DSM) a mental health professional is able to identify the specific type of anxiety disorder causing symptoms as well as any other possible disorders that may be involved. Tackling all disorders through comprehensive treatment is the best recovery strategy.",
        },
      ],
    },
    treatment: {
      title: "Treatment",
      paragraph: [
        {
          id: 1,
          body:
            "Different anxiety disorders have their own distinct sets of symptoms. This means that each type of anxiety disorder also has its own treatment plan. But there are common types of treatment that are used. ",
          bulletpoint: [
            {
              id: 1,
              point: "Psychotherapy, including cognitive behavioral therapy",
            },
            {
              id: 2,
              point:
                "Medications, including antianxiety medications and antidepressants",
            },
            {
              id: 3,
              point:
                "Complementary health approaches, including stress and relaxation techniques",
            },
          ],
        },
      ],
    },

    related_conditions: {
      title: "Related Conditions",
      paragraph: [
        {
          id: 1,
          body:
            "Anxiety disorders can occur along with other mental health conditions, and they can often make related conditions worse. So, talk with a mental health care professional if you are experiencing anxiety and any of the following:",
          bulletpoint: [
            {
              id: 1,
              point: "Depression",
              slug: "depression",
            },
            {
              id: 2,
              point: "Substance Use",
              slug: "",
            },
            {
              id: 3,
              point: "Attention Deficit Hyperactivity Disorder (ADHD)",
              slug: "adhd",
            },
            {
              id: 4,
              point: "Eating Disorders",
              slug: "eating-disorders",
            },
            {
              id: 5,
              point: "Trouble Sleeping",
              slug: "",
            },
          ],
        },
        {
          id: 2,
          body:
            "Symptoms from other conditions make treating ADHD more difficult. Talking to a skilled professional to help establish an accurate diagnosis can help increase the effectiveness of treatment.",
          bulletpoint: [],
        },
        {
          id: 3,
          body:
            "ADHD is one of the conditions most strongly linked to genetics. People with ADHD do not lack intelligence or discipline. They are just challenged at focusing to complete tasks.",
          bulletpoint: [],
        },
      ],
    },
    selfhelp: {
      title: "Helping Yourself",
      paragraph: [
        {
          id: 1,
          body:
            "Anxiety disorders can impact even the smallest details of life. It’s important to get help and learn how to remain resilient during difficult times. Here are some ways you can help yourself move forward:",
          bulletpoint: [
            {
              id: 1,
              subtitle: "Become an expert.",
              point:
                "Learn about medication and treatment options. Keep up with current research. Build a personal library of useful websites and helpful books.",
            },
            {
              id: 2,
              subtitle: "Know your triggers and stressors.",
              point:
                "If large groups make you nervous, go to a park and sit on an out-of-the-way bench. If taking a walk outdoors reduces your anxiety before a big meeting, schedule a 10-minute walk before the meeting starts. Being mindful of triggers and stressors will help you live your life with fewer limitations.",
            },
            {
              id: 3,
              subtitle: "Partner with your health care providers.",
              point:
                "Actively participate in your treatment by working with mental health care professionals to develop a plan that works for you. Talk with them about your goals, decide on a recovery pace you’re comfortable with and stick to your plan. Don’t quit when something doesn’t go well. Instead, talk to your doctor or therapist about possible changes.",
            },
            {
              id: 4,
              subtitle: "Get healthy.",
              point:
                "Studies have reported that 30 minutes of vigorous, aerobic exercise can eliminate symptoms, while low-key activities like meditation, yoga or Tai Chi relieve stress. Regular exercise can reduce many symptoms. Diet is also an important factor, so try to eat healthy, balanced meals and pay attention to food sensitivities. In some people, certain foods or additives can cause unpleasant physical reactions, which may lead to irritability or anxiety.",
            },
            {
              id: 5,
              subtitle: "Avoid drugs and alcohol.",
              point:
                "These substances may seem to help with anxiety at first, but can disrupt emotional balance, sleep cycles and interact with medications. Coffee, energy drinks and cigarettes worsen anxiety.",
            },
            {
              id: 5,
              subtitle: "Find support.",
              point: "Share your thoughts, fears and questions with others.",
            },
          ],
        },
        {
          id: 3,
          body:
            "Learn more about managing your mental health and finding support while living with mental illness.",
          bulletpoint: [],
        },
      ],
    },
  },
];

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      condition: mentalconditions,
    };
  }

  render() {
    return (
      <div id="home">
        <div className="home_slider_container">
          <div className="owl-carousel owl-theme home_slider">
            {this.state.condition.map((mentalcondition) => {
              const {
                intro,
                condition,
                slug,
                imgpath,
                symptoms,
                causes,
                diagnosis,
                treatment,
                related_conditions,
                selfhelp,
                planning_ahead,
              } = mentalcondition;

              return (
                <div className="owl-item" key={slug}>
                  <div
                    className="background_image"
                    style={{ backgroundImage: `url(${imgpath})` }}
                  ></div>
                  <div className="home_container">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <section className="text-white">
                            <div className="home_content">
                              <h2 className="text-white">
                                Know Your Mental Health Status
                              </h2>
                              <h3 className="text-white">{condition}</h3>
                              <div className="home_text">
                                <p className="text-white">
                                  {mentalcondition.intro.paragraph[0].body}
                                </p>
                              </div>
                            </div>
                            <div className="home_buttons d-flex flex-row align-items-center justify-content-start">
                              <div className="button button_1 trans_200">
                                {" "}
                                <Link
                                  to={{
                                    pathname: "/mentalinfo",
                                    category: {
                                      intro: { intro },
                                      condition: { condition },
                                      slug: { slug },
                                      imgpath: { imgpath },
                                      symptoms: { symptoms },
                                      causes: { causes },
                                      diagnosis: { diagnosis },
                                      treatment: { treatment },
                                      related_conditions: {
                                        related_conditions,
                                      },
                                      selfhelp: { selfhelp },
                                      planning_ahead: { planning_ahead },
                                    },
                                  }}
                                  key={slug}
                                >
                                  Learn More...
                                </Link>
                              </div>
                              <div className="button button_2 trans_200">
                                {" "}
                                <Link to="/" onClick={this.props.openModal}>
                                  Take a Test
                                </Link>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <!-- Home Slider Dots --> */}

          <div className="home_slider_dots">
            <ul
              id="home_slider_custom_dots"
              className="home_slider_custom_dots d-flex flex-row align-items-center justify-content-start"
            >
              <li className="home_slider_custom_dot trans_200 active"></li>
              <li className="home_slider_custom_dot trans_200"></li>
              <li className="home_slider_custom_dot trans_200"></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

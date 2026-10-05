import { compileBook } from "../compile";
import type { Block, Chapter } from "../types";

const p = (v: string): Block => ({ t: "p", v });
const h = (v: string): Block => ({ t: "h", v });
const h2 = (v: string): Block => ({ t: "h2", v });
const ul = (v: string[]): Block => ({ t: "ul", v });
const note = (v: string, k?: string): Block => ({ t: "note", v, k });
const dlg = (v: { who: string; text: string }[]): Block => ({ t: "dlg", v });
const ex = (v: string[]): Block => ({ t: "ex", v });

const chapters: Chapter[] = [
  {
    n: "1",
    title: "Welcome aboard",
    blocks: [
      h("Classroom English"),
      p("This course follows a 9th-grade English programme: present and past tenses, conditionals, vocabulary for travel, school and Kyrgyzstan, plus short reading passages. Work through the dialogues aloud."),
      dlg([
        { who: "Aida", text: "Have you ever flown? I took off from Manas last June." },
        { who: "Timur", text: "Not yet. I usually take the train to Osh. It’s slower, but I can read." },
        { who: "Aida", text: "If I had more time, I would travel around Issyk-Kul by bike." },
      ]),
      h2("Useful chunks"),
      ul([
        "take off — взлететь; also: снять одежду. Контекст решает.",
        "look forward to + V-ing — ждать с нетерпением.",
        "used to + V — раньше делал, сейчас нет.",
        "as soon as / unless / in case — связки времени и условия.",
      ]),
      note("The original pupil’s book is built around travel. We keep that metaphor: each unit is a leg of the journey.", "Course map"),
    ],
  },
  {
    n: "2",
    title: "Tenses that move",
    blocks: [
      h("Present perfect vs past simple"),
      p("Use past simple for a finished time: yesterday, in 2019, last summer. Use present perfect for experience and results that matter now: I have been to Bishkek three times. I have lost my pass — so I cannot enter."),
      ul([
        "I went to the museum on Monday. (when is known)",
        "I have already seen that exhibition. (experience)",
        "She has lived here since 2018. (started in the past, still true)",
      ]),
      h2("Future in English"),
      p("will — решение в момент речи, обещание, прогноз. be going to — план и видимая улика (Look at those clouds — it’s going to snow). Present continuous — договорённость с временем: I’m meeting the tutor at 5."),
      ex([
        "Choose: I (saw / have seen) this film last year.",
        "Complete: If it rains tomorrow, we … (stay) at home.",
        "Write four sentences about places you have never visited.",
      ]),
    ],
  },
  {
    n: "3",
    title: "Conditionals",
    blocks: [
      h("Zero, first, second"),
      p("Zero: facts. If you heat ice, it melts. First: real future. If I pass the test, I will call you. Second: unreal now. If I were you, I would revise phrasal verbs every day."),
      p("Unless = if not. I won’t go unless you come too. Wish + past: I wish I spoke Kyrgyz more fluently — о желании в настоящем."),
      note("Were is used with I/he/she in the second conditional in careful English: If I were taller… In speech people also say If I was.", "Grammar note"),
    ],
  },
  {
    n: "4",
    title: "Reading: a letter from Karakol",
    blocks: [
      h("Text"),
      p("Dear friend, we arrived in Karakol after a dusty ride. The mountains stood so close that the afternoon light turned the slopes copper. In the bazaar a woman sold smoked Issyk-Kul trout and jam from sea-buckthorn. My host family asked whether I liked kymyz. I said I would try a little. At night the stars looked nearer than the streetlamps. If you ever come, bring a warm jacket — July evenings here are honest."),
      h2("Tasks"),
      ex([
        "Find three adjectives of place and weather.",
        "Change the letter into the past perfect where it fits.",
        "Write a reply of 80–100 words about a place in your region.",
      ]),
    ],
  },
  {
    n: "5",
    title: "Phrasal verbs and school life",
    blocks: [
      h("High-frequency verbs"),
      ul([
        "look up — искать в словаре; look after — присматривать; look forward to — ждать.",
        "give up — бросить; give in — уступить.",
        "turn on / off / up / down — техника и звук.",
        "get on with — ладить; get through — справиться, дозвониться.",
      ]),
      dlg([
        { who: "Teacher", text: "Hand in your essays by Friday. Don’t put it off." },
        { who: "Student", text: "I’ll go over the draft tonight and fill in the gaps." },
      ]),
      p("A short essay frame: In my opinion… / One reason is… / For example… / On the other hand… / To sum up… Keep sentences short. Examiners prefer clear English to decorated English."),
    ],
  },
];

export const englishBook = compileBook(
  {
    id: "english",
    title: "Take Off with English",
    subtitle: "Pupil’s Book",
    authors: "Grade 9 course",
    subject: "english",
    subjectLabel: "English",
    grade: "9",
    lang: "en",
    year: "2014",
    publisher: "Pupil’s Book",
    blurb:
      "Dialogues, tenses, conditionals and a travel-themed reader for Grade 9. Read aloud, then do the tasks.",
    pagesEstimate: 160,
  },
  chapters,
);

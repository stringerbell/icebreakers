import { useState } from "react";

export default function useIceBreakers() {
  const [index, setIndex] = useState(0);

  const icebreakers = () => {
    return [
      {
        category: "christian",
        entries: [
          { text: "What do you think is the name of your guardian angel?" },
          {
            text:
              "If you got one chance to make the baby Jesus laugh what would you do?",
          },
          {
            text:
              "When’s the last time you felt the Lord’s presence in your life?",
          },
          {
            text:
              "If you could have any of the spiritual gifts which one would you pick and why?",
          },
          {
            text:
              "If you could have dinner with anyone from the Bible who would it be and why",
          },
          { text: "What would you do if it was your last night on earth?" },
          { text: "Share an example of a real life miracle you’ve witnessed" },
          { text: "What does and does not count as masturbation?" },
          { text: "Which animal is best?" },
          { text: "What does giving 110% mean to you?" },
          { text: "What’s your favorite lie to tell your kids?" },
          { text: "What celebrity would you want to pray with?" },
          { text: "What’s your favorite clean joke?" },
          { text: "How many chairs can you carry after a church service?" },
          {
            text:
              "If you could change one thing about the world, what would it be?",
          },
          {
            text:
              "If you could ask God for anything and he HAD to give it to you what would you ask for?",
          },
          {
            text:
              "Could God create a burrito so big that even he couldn’t eat it?",
          },
          { text: "What’s your favorite psalm?" },
          {
            text:
              "When someone asks you these ice breakers where does it hurt in your body?",
          },
          {
            text: "Have you ever been so far as what to do or look more like?",
          },
          { text: "What is your least favorite Bible story?" },
          {
            text:
              "If you could bring any of the marvel superheroes to church with you who would it be?",
          },
          {
            text:
              "Would you rather make a gagging noise for 30 seconds or do another icebreaker?",
          },
          {
            text:
              "Do you think Jesus loves a hard worker or a good listener more?",
          },
          {
            text:
              "If you could catapult one unrepentant sinner into the sun who would it be and why?",
          },
          {
            text:
              "If the lord told you to vote for a specific orange president would you obey?",
          },
          {
            text:
              "Name 3 ways you can show Christ’s love to your neighbors today",
          },
          { text: "When is the last time you turned the other cheek?" },
          { text: "How can you thoughtfully submit to your leaders today?" },
          {
            text: "Name 3 ways that you feel your work is pleasing to the lord",
          },
          { text: "Name 3 things you would rather be doing than this meeting" },
          {
            text:
              "For a fun little icebreaker activity I want you to turn to the person on your right and speak a prophetic word over them",
          },
          {
            text:
              "Word association time: what’s the first thing that comes to mind when I say the following: 1) submission 2) obedience 3) stewardship 4) sowing 5) harvest",
          },
          { text: "What’s the best part about saving yourself for marriage?" },
          {
            text: "What’s something you had to guard your heart against today?",
          },
          { text: "Describe your testimony in five words or less" },
          {
            text: "What’s your favorite curse word replacements/alternatives?",
          },
          {
            text:
              "What people group do you feel Christians have alienated the most?",
          },
          { text: "What Bible verse best describes your mood today?" },
        ],
      },
      {
        category: "shame",
        entries: [
          { text: "Tell us three embarrassing things about yourself." },
          { text: "What's your least favorite attribute?" },
          { text: "What are you most ashamed of?" },
          { text: "How often do you find yourself repulsed by yourself?" },
          { text: "What's the worst rumor you've told?" },
          { text: "What's the worst rumor that's been told about you?" },
          { text: "Why are you awful?" },
          { text: "What's the most shameful thing you've done?" },
          { text: "Do you wish you were less ashamed?" },
          { text: "How could you? (How dare you?)" },
          {
            text:
              "Tell us two truths and a lie. All of them must be embarrassing.",
          },
          { text: "What's the earliest you remember feeling ashamed?" },
          {
            text:
              "When you're in a group setting asking people to reveal shameful things about themselves, are you ashamed of yourself? (so meta)",
          },
        ],
      },
      {
        category: "celebrities",
        entries: [
          {
            text:
              "If you could have lunch with any celebrity, who would it be?",
          },
          {
            text:
              "If you could have dinner with any celebrity, who would it be?",
          },
          {
            text:
              "If you could have breakfast with any celebrity, who would it be?",
          },
          {
            text:
              "If you could almost have lunch with any celebrity, who would it be? Why would it be Jeff Goldblum?",
          },
          {
            text:
              "What the closest you've ever been in your life to having lunch with Jeff Goldblum?",
          },
          { text: "How many celebrities have you met?" },
          { text: "How many celebrities have you never met?" },
          { text: "How badly do you wish you were famous?" },
          { text: "What is the best celebrity?" },
          { text: "Who is the hottest dude celebrity?" },
          { text: "Who is the ugliest dude celebrity?" },
          { text: "Which celebrity has the biggest muscles?" },
          { text: "How many celebrities do you want to make out with?" },
          { text: "Who would be the best celebrity to tickle?" },
          { text: "Why can't you be a celebrity?" },
          { text: "If you were casting Ocean's 11, who would be in it?" },
          { text: "Is Christian Bale actually a Christian?" },
          { text: "Which celebrity is the tallest?" },
          { text: "Which celebrity has the nicest arms?" },
          { text: "Which celebrity has the kindest eyes?" },
          { text: "Which celebrity has the strongest quads?" },
          { text: "Which celebrity has the gentlest touch?" },
          { text: "What celebrity would you want to pray with?" },
        ],
      },
      {
        category: "women",
        entries: [
          {
            text: "NAME A WOMAN!!!!",
            citation:
              'from <a href="https://youtu.be/bzDlS6JPUtE?t=22">https://youtu.be/bzDlS6JPUtE?t=22</a>',
          },
        ],
      },
      {
        category: "JEFFREY-BEZOS",
        embed:
          '<iframe width="560" height="349" src="https://www.youtube.com/embed/lI5w2QwdYik?&autoplay=1&loop=1&&list=PL-VZFT0aRVfaco7zsCoMrdaqE5zRJJYLT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        entries: [
          {
            text:
              "How many polar bears do you think Jeff Bezos personally kills every day?",
          },
          {
            text:
              "What do you think is Jeffrey Bezos favorite part of human flesh?",
          },
          { text: "How high can Jeffrey Bezos jump?" },
          { text: "What is Jeffrey Bezos worst fear?" },
          {
            text:
              "If you could travel back in time and swap baby Jeff Bezos for baby hitler would you do it?",
          },
          { text: "Who is Jeffrey Bezos jealous of?" },
          { text: "What keeps Jeff Bezos awake at three in the morning?" },
          {
            text:
              "Have you ever made so much money that the suffering you cause seems so insignificant by comparison and you slowly lose your grip on reality and your conscience and you can’t relate to other human beings anymore?",
          },
          {
            text:
              "What would you do if you lost 10 billion dollars in a divorce but it didn’t even put a dent in your wealth?",
          },
          { text: "What kind of penis is the best shape for a spaceship?" },
          { text: "Do you think you can pull off a cowboy hat?" },
          {
            text:
              "If you could buy a space-penis or pay your taxes what would you do and why?",
          },
          {
            text:
              "If you could buy a space-penis or pay your workers a living wage what planet would you visit first?",
          },
          { text: "What does Jeff Bezos keep in his pockets?" },
          {
            text:
              "Why does Jeffrey Bezos insist on licking every Amazon package before it leaves the factory? Discuss.",
          },
          { text: "Do you think poor people deserve to live." },
          {
            text:
              "How happy are you to have help funded Jeff's space dick? (scale of 10-10)",
          },
          { text: "Thoughts on next space ride?" },
          {
            text: "Is Jeff a real astronaut?",
            citation:
              "Acceptable answers: A. Absolutely\n" +
              "B. Definitely\n" +
              "C. The best there ever was",
          },
          {
            text: "Draw a picture of Jeff Bezos b̶e̶i̶n̶g̶ ̶b̶e̶t̶t̶e̶r̶ ̶t̶h̶a̶n̶ ̶y̶o̶u̶ in space",
          },
          {
            text:
              "If Jeff Bezos were you for a day, how would he fix your shitty little life?",
          },
        ],
      },
      {
        category: "open-ended",
        entries: [
          { text: "Humblebrag about thing(s) you've done." },
          { text: "Did you have a good weekend?" },
          { text: "What's your favorite?" },
          { text: "Who are you secretly in love with?" },
          { text: "Have you ever?" },
          { text: "Do you have brown hair?" },
          { text: "How do you think you would?" },
          { text: "Do you have a case of the Mondays?" },
          { text: "Have you ever experienced a time in your life?" },
          { text: "Tell us about a time in your life." },
          { text: "Tell us about a time you almost did something." },
          { text: "What's the last time you almost?" },
          { text: "Why did you do that?" },
          { text: "How many do you think it'd take?" },
          { text: "How high is too high?" },
          { text: "How low is too low?" },
          { text: "Name the best measurement." },
          { text: "What is the best car?" },
          { text: "Should we continue?" },
          { text: "When will it end?" },
          { text: "What is your least racist opinion?" },
          { text: "Do you like colonialism?" },
          { text: "Will it though? Really? How can you be sure?" },
          { text: 'What\'s your favorite time to say, "well, actually"?' },
          { text: "Do you have time for a quick chat?" },
          { text: "Will you keep doing that?" },
          { text: "Will you please stop?" },
        ],
      },
      {
        category: "Soul-Yogurt",
        entries: [
          { text: "What color was your hair when you were a child?" },
          { text: "How many fingers am I holding up behind my back?" },
          {
            text:
              "Raise your hand if you have ever thought something was water but it WASN'T and you DRANK it!",
          },
          { text: "What would you want to eat on your cheat days?" },
          { text: "What famous person do you admire?" },
          { text: "What would you do with a million doll hairs?  (dollars ;)" },
          {
            text:
              "How much does your soul curdle when participating in these icebreakers?",
          },
        ],
      },
      {
        category: "Team-Building-(at/during-Work)",
        entries: [
          { text: "Be honest, how often do you work from bed?" },
          { text: "Do you have a dedicated office space at home?" },
          { text: "Is your workspace free from distractions?" },
          { text: "How often do you goof around while on the clock at work." },
          {
            text:
              "Do you day drink? (Looking at you, _______) <- (make them feel ashamed, but don't read this part out loud to the group.)",
          },
          {
            text:
              "What’s the last great TV show or movie you watched (not on work time though)?",
          },
          { text: "Be honest, are you wearing pants during this zoom call?" },
          { text: "Who is the worst member of your team?" },
          { text: "How do we get to the part where we all trust each other?" },
          { text: "Would any of you ever date a boss or supervisor?" },
          { text: "What’s the laziest thing you’ve ever done while working?" },
          {
            text:
              "If you could learn one new personal skill, what would it be?",
          },
          {
            text: "If you were good at your job, what would you attempt to do?",
          },
          { text: "What would it take for you to actually do your job?" },
          { text: "Who would be your favorite kickball partner?" },
          { text: "Who is the oldest person on your team and why?" },
          { text: "Who is the smartest person on your team?" },
          { text: "Who is your favorite boss?" },
          {
            text:
              "How do you stay productive and motivated working virtually? Like. The pandemic, right? How do you continually have enough resources to actually give any shits about the bullshit that we work on here? Like who actually gives any shits? At all. Like AT. ALL.",
          },
          { text: "Are you lonely?" },
          { text: "Do you ever leave unfinihs" },
        ],
      },
    ];
  };
  const [ib, setIB] = useState(icebreakers());
  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  return {
    next: (category) => {
      setIndex(index + 1);
      const entries = ib.filter((i) => i.category === category)[0].entries;
      return entries[index % entries.length];
    },
    shuffle: () => {
      setIB(
        ib.map((i) => {
          i.entries = shuffle(i.entries);
          return i;
        })
      );
    },
    parent: (category) => {
      return ib.filter((i) => i.category === category)[0];
    },
    categories: () => {
      return ib.map((i) => i.category);
    },
  };
}

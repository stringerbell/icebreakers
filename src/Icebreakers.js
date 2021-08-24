import {useState} from "react";

export default function useIceBreakers() {
    const [index, setIndex] = useState(0)

    const icebreakers = () => {
        return [
            {
                category: "christian",
                entries: [
                    {text: "What do you think is the name of your guardian angel?"},
                    {text: "If you got one chance to make the baby Jesus laugh what would you do?"},
                    {text: "When’s the last time you felt the Lord’s presence in your life?"},
                    {text: "If you could have any of the spiritual gifts which one would you pick and why?"},
                    {text: "If you could have dinner with anyone from the Bible who would it be and why"},
                    {text: "What would you do if it was your last night on earth?"},
                    {text: "Share an example of a real life miracle you’ve witnessed"},
                    {text: "What does and does not count as masturbation?"},
                    {text: "Which animal is best?"},
                    {text: "What does giving 110% mean to you?"},
                    {text: "What’s your favorite lie to tell your kids?"},
                    {text: "What celebrity would you want to pray with?"},
                    {text: "What’s your favorite clean joke?"},
                    {text: "How many chairs can you carry after a church service?"},
                    {text: "If you could change one thing about the world, what would it be?"},
                    {text: "If you could ask God for anything and he HAD to give it to you what would you ask for?"},
                    {text: "Could God create a burrito so big that even he couldn’t eat it?"},
                    {text: "What’s your favorite psalm?"},
                    {text: "When someone asks you these ice breakers where does it hurt in your body?"},
                    {text: "Have you ever been so far as what to do or look more like?"},
                    {text: "What is your least favorite Bible story?"},
                    {text: "If you could bring any of the marvel superheroes to church with you who would it be?"},
                    {text: "Would you rather make a gagging noise for 30 seconds or do another icebreaker?"},
                    {text: "Do you think Jesus loves a hard worker or a good listener more?"},
                    {text: "If you could catapult one unrepentant sinner into the sun who would it be and why?"},
                    {text: "If the lord told you to vote for a specific orange president would you obey?"},
                    {text: "Name 3 ways you can show Christ’s love to your neighbors today"},
                    {text: "When is the last time you turned the other cheek?"},
                    {text: "How can you thoughtfully submit to your leaders today?"},
                    {text: "Name 3 ways that you feel your work is pleasing to the lord"},
                    {text: "Name 3 things you would rather be doing than this meeting"},
                    {text: "For a fun little icebreaker activity I want you to turn to the person on your right and speak a prophetic word over them"},
                    {text: "Word association time: what’s the first thing that comes to mind when I say the following: 1) submission 2) obedience 3) stewardship 4) sowing 5) harvest"},
                    {text: "What’s the best part about saving yourself for marriage?"},
                    {text: "What’s something you had to guard your heart against today?"},
                    {text: "Describe your testimony in five words or less"},
                    {text: "What’s your favorite curse word replacements/alternatives?"},
                    {text: "What people group do you feel Christians have alienated the most?"},
                    {text: "What Bible verse best describes your mood today?"},
                ],
            },
            {
                category: "shame",
                entries: [
                    {text: "Tell us three embarrassing things about yourself."},
                    {text: "What's your least favorite attribute?"},
                    {text: "What are you most ashamed of?"},
                    {text: "How often do you find yourself repulsed by yourself?"},
                    {text: "What's the worst rumor you've told?"},
                    {text: "What's the worst rumor that's been told about you?"},
                    {text: "Why are you awful?"},
                    {text: "What's the most shameful thing you've done?"},
                    {text: "Do you wish you were less ashamed?"},
                    {text: "How could you? (How dare you?)"},
                    {text: "Tell us two truths and a lie. All of them must be embarrassing."},
                    {text: "What's the earliest you remember feeling ashamed?"},
                    {text: "When you're in a group setting asking people to reveal shameful things about themselves, are you ashamed of yourself? (so meta)"},
                ]
            },
            {
                category: "celebrities",
                entries: [
                    {text: "If you could have lunch with any celebrity, who would it be?"},
                    {text: "If you could have dinner with any celebrity, who would it be?"},
                    {text: "If you could have breakfast with any celebrity, who would it be?"},
                    {text: "If you could almost have lunch with any celebrity, who would it be? Why would it be Jeff Goldblum?"},
                    {text: "How many celebrities have you met?"},
                    {text: "How many celebrities have you never met?"},
                    {text: "How badly do you wish you were famous?"},
                    {text: "What is the best celebrity?"},
                    {text: "Who is the hottest dude celebrity?"},
                    {text: "Who is the ugliest dude celebrity?"},
                    {text: "Which celebrity has the biggest muscles?"},
                    {text: "How many celebrities do you want to make out with?"},
                    {text: "Who would be the best celebrity to tickle?"},
                    {text: "Why can't you be a celebrity?"},
                    {text: "If you were casting Ocean's 11, who would be in it?"},
                    {text: "Is Christian Bale actually a Christian?"},
                    {text: "Which celebrity is the tallest?"},
                    {text: "Which celebrity has the nicest arms?"},
                    {text: "Which celebrity has the kindest eyes?"},
                    {text: "Which celebrity has the strongest quads?"},
                    {text: "Which celebrity has the gentlest touch?"},
                    {text: "What celebrity would you want to pray with?"},
                ]
            },
            {
                category: "women",
                entries: [{text: "NAME A WOMAN!!!!", citation: "from <a href=\"https://youtu.be/bzDlS6JPUtE?t=22\">https://youtu.be/bzDlS6JPUtE?t=22</a>"}]
            }
        ]
    }
    const [ib, setIB] = useState(icebreakers())
    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }
    return {
        next: (category) => {
            setIndex(index + 1)
            const entries = ib.filter(i => i.category === category)[0].entries
            return entries[index % entries.length]
        },
        shuffle: () => {
            setIB(ib.map((i => {
                i.entries = shuffle(i.entries)
                return i
            })))
        }
    }
};













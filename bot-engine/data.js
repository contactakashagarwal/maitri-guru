const intents = {
    INVITATIONS: 'invitations',
    INVITATIONS_NEG: 'invitations.neg',
    STARTERS: 'starters',
    TOPICS: 'topics',
    TOPICS_INLAWS_CONNECTION: 'topics.inlaws.connection',
    TOPICS_INLAWS_HURTFUL: 'topics.inlaws.hurtful',
    TOPICS_INLAWS_CRITISIZE: 'topics.inlaws.critisize',
    TOPICS_INLAWS_VIOLATES: 'topics.inlaws.violates',
    TOPICS_INLAWS_BREAK: 'topics.inlaws.break',
    TOPICS_INLAWS_CRITICALTOFAMILY: 'topics.inlaws.criticaltofamily',
    TOPICS_DIVISIONOFLABOR_WORK: 'topics.divisionoflabour.work',
    TOPICS_DIVISIONOFLABOR_FUNPARENT: 'topics.divisionoflabour.funparent',
    TOPICS_DIVISIONOFLABOR_HELPED: 'topics.divisionoflabour.helped',
    TOPICS_DIVISIONOFLABOR_STATYHOME: 'topics.divisionoflabour.stayathome',
    TOPICS_DIVISIONOFLABOR_MENTALLOAD: 'topics.divisionoflabour.mentalload',
    TOPICS_DIVISIONOFLABOR_DIFFPRIO: 'topics.divisionoflabour.diffprio',
    TOPICS_DIVISIONOFLABOR_MOREHELP: 'topics.divisionoflabour.morehelp',
    TOPICS_PARENTING_DISAGREE: 'topics.parenting.disagree',
    TOPICS_PARENTING_AUTHORITARIAN: 'topics.parenting.authoritarian',
    TOPICS_PARENTING_DIFFSTYLE: 'topics.parenting.diffstyle',
    TOPICS_PARENTING_SLEEPTRAIN: 'topics.parenting.sleeptrain',
    TOPICS_PARENTING_BEDTIMEDIFF: 'topics.parenting.bedtimediff',
    TOPICS_INTIMACY_TIMETOGETHER: 'topics.intimacy.timetogether',
    TOPICS_INTIMACY_ROOMMATES: 'topics.intimacy.roommates',
    TOPICS_INTIMACY_MORESEX: 'topics.intimacy.moresex',
    TOPICS_INTIMACY_YOUWANTSEX: 'topics.intimacy.youwantsex',
    TOPICS_INTIMACY_WHERETOSTART: 'topics.intimacy.wheretostart',
    TOPICS_CLOSERS: 'topics.closers',
    TOPICS_CLOSERS_HEATED: 'topics.closers.heated',
    TOPICS_ROADBLOCKS_DISENGAGED: 'topics.roadblocks.disengaged',
    TOPICS_ROADBLOCKS_DEFENSIVE: 'topics.roadblocks.defensive',
    TOPICS_ROADBLOCKS_ONEUPPING: 'topics.roadblocks.oneupping',
    TOPICS_THANKING: 'topics.thanking',
};

const documents = [
    {
        utterance: `Timing is everything when it comes to tough conversations. First, check in with yourself to see if you have the mental and emotional capacity for a healthy conversation. If you feel triggered or you’re having a tough time regulating your emotions, take some time to downshift. If you’re in a good place, then invite your partner into a conversation`,
        intent: intents.INVITATIONS,
    },
    {
        utterance: `How can I start tough conversation with my patner`,
        intent: intents.INVITATIONS,
    },

    {
        utterance: `If your partner doesn’t want to talk right then, say something like`,
        intent: intents.INVITATIONS_NEG,
    },
    {
        utterance: `Tough conversations go better when you’re allies rather than adversaries. The best way to begin is by expressing appreciation to your partner for their willingness to take the time to talk. This puts you on the same side–you and your partner against the problem together.`,
        intent: intents.STARTERS,
    },
    {
        utterance: `When the timing is right and you’ve connected with your partner through appreciation, it’s time to have the conversation. You’ll notice each of these scripts follows a similar pattern`,
        intent: intents.TOPICS,
    },
    {
        utterance: `When your partner is overly connected with their mother`,
        intent: intents.TOPICS_INLAWS_CONNECTION,
    },
    {
        utterance: `When your in-laws say something hurtful to your child`,
        intent: intents.TOPICS_INLAWS_HURTFUL,
    },
    {
        utterance: `When your in-laws criticize you`,
        intent: intents.TOPICS_INLAWS_CRITISIZE,
    },
    {
        utterance: `When your in-laws violate your boundaries`,
        intent: intents.TOPICS_INLAWS_CRITISIZE,
    },
    {
        utterance: `When you need a break from holiday gatherings`,
        intent: intents.TOPICS_INLAWS_BREAK,
    },
    {
        utterance: `When your partner is critical of your family`,
        intent: intents.TOPICS_INLAWS_CRITICALTOFAMILY,
    },
    {
        utterance: `When both of you work`,
        intent: intents.TOPICS_DIVISIONOFLABOR_WORK,
    },
    {
        utterance: `When your partner gets to be the “fun” parent`,
        intent: intents.TOPICS_DIVISIONOFLABOR_FUNPARENT,
    },
    {
        utterance: `When your partner helped for a while then stopped`,
        intent: intents.TOPICS_DIVISIONOFLABOR_HELPED,
    },
    {
        utterance: `When you stay home with your kids`,
        intent: intents.TOPICS_DIVISIONOFLABOR_STATYHOME,
    },
    {
        utterance: `When you carry the mental load`,
        intent: intents.TOPICS_DIVISIONOFLABOR_MENTALLOAD,
    },
    {
        utterance: `When you have different priorities`,
        intent: intents.TOPICS_DIVISIONOFLABOR_DIFFPRIO,
    },
    {
        utterance: `When you need more help with the kids`,
        intent: intents.TOPICS_DIVISIONOFLABOR_MOREHELP,
    },
    {
        utterance: `When you need more help with the kids`,
        intent: intents.TOPICS_DIVISIONOFLABOR_MOREHELP,
    },
    {
        utterance: `When you disagree about screen time`,
        intent: intents.TOPICS_PARENTING_DISAGREE,
    },
    {
        utterance: `When your partner is authoritarian`,
        intent: intents.TOPICS_PARENTING_AUTHORITARIAN,
    },
    {
        utterance: `When you have different parenting styles`,
        intent: intents.TOPICS_PARENTING_DIFFSTYLE,
    },
    {
        utterance: `When you disagree on sleep training`,
        intent: intents.TOPICS_PARENTING_SLEEPTRAIN,
    },
    {
        utterance: `When you approach bedtime differently`,
        intent: intents.TOPICS_PARENTING_BEDTIMEDIFF,
    },

    {
        utterance: `When you haven’t had time together for a while`,
        intent: intents.TOPICS_INTIMACY_TIMETOGETHER,
    },
    {
        utterance: `When you feel like roommates`,
        intent: intents.TOPICS_INTIMACY_ROOMMATES,
    },
    {
        utterance: `When your partner wants more sex`,
        intent: intents.TOPICS_INTIMACY_MORESEX,
    },
    {
        utterance: `When you want more sex`,
        intent: intents.TOPICS_INTIMACY_YOUWANTSEX,
    },
    {
        utterance: `When you’re not even sure where to start the conversation`,
        intent: intents.TOPICS_INTIMACY_WHERETOSTART,
    },
    {
        utterance: `At the end of your conversation, it’s helpful to bring it to an intentional close`,
        intent: intents.TOPICS_CLOSERS,
    },
    {
        utterance: `At the end of your conversation, close conversation`,
        intent: intents.TOPICS_CLOSERS,
    },
    {
        utterance: `At the end of your conversation, close conversation, If your conversation gets heated and you need to take a breather, try these`,
        intent: intents.TOPICS_CLOSERS_HEATED,
    },
    {
        utterance: `When your partner seems disengaged during the conversation`,
        intent: intents.TOPICS_ROADBLOCKS_DISENGAGED,
    },
    {
        utterance: `When your partner gets defensive`,
        intent: intents.TOPICS_ROADBLOCKS_DEFENSIVE,
    },
    {
        utterance: `When your partner starts one-upping you`,
        intent: intents.TOPICS_ROADBLOCKS_ONEUPPING,
    },
    {
        utterance: `Finally, be intentional about thanking your partner for their follow- through. You know how amazing it feels when someone sees and acknowledges your efforts? It's so motivating, isn't it? It will be for your partner, too!`,
        intent: intents.TOPICS_THANKING,
    },
];

const answers = [
    {
        answer: `I need to chat about something that feels a little tricky. Is now a good time?`,
        intent: intents.INVITATIONS,
    },
    {
        answer: `I want to talk with you about something, and I’m feeling pretty vulnerable about it. Is it OK to start the conversation now, or would after dinner be better for you?`,
        intent: intents.INVITATIONS,
    },
    {
        answer: `I have a concern about X. Since it’s been on my mind for a couple of days now, I think I need to talk it out with you. Are you game for that?`,
        intent: intents.INVITATIONS,
    },
    {
        answer: `I can sense some tension between us lately. Can we talk?`,
        intent: intents.INVITATIONS,
    },
    {
        answer: `I understand now is not a good time for this conversation. Thanks for being honest with me. Can we talk tomorrow after work?`,
        intent: intents.INVITATIONS_NEG,
    },
    {
        answer: `I want you to know how much I appreciate your willingness to talk about this today`,
        intent: intents.STARTERS,
    },
    {
        answer: `Thanks for sitting down with me. I feel cared for when you make our relationship a priority.`,
        intent: intents.STARTERS,
    },
    {
        answer: `I know talking about X can be frustrating. I want you to know how grateful I am that we can work things out together.`,
        intent: intents.STARTERS,
    },
    {
        answer: `Thank you for helping me think through this today`,
        intent: intents.STARTERS,
    },
    {
        answer: `I know we have a lot going on and the last thing you might want to talk about right now is X. So thanks for sitting down with me`,
        intent: intents.STARTERS,
    },
    {
        answer: `Affirm your partner`,
        intent: intents.TOPICS,
    },
    {
        answer: `Express your concern–as specifically as you can`,
        intent: intents.TOPICS,
    },
    {
        answer: `Label your feelings`,
        intent: intents.TOPICS,
    },
    {
        answer: `Invite your partner’s response`,
        intent: intents.TOPICS,
    },
    {
        answer: `I know your mom is so important to you, and your relationship is really special. Sometimes it feels like what your mom wants takes priority over spending time with me and our kids. I feel frustrated and hurt by that, and I’d like us to find more balance. Do you have any thoughts about that?`,
        intent: intents.TOPICS_INLAWS_CONNECTION,
    },
    {
        answer: `I’m so grateful our kids get to spend so much time with their grandparents. I noticed this week that your dad said X to our son, and I’m feeling upset. I’m not sure how we should handle that. What do you think?`,
        intent: intents.TOPICS_INLAWS_HURTFUL,
    },
    {
        answer: `I want you to know how much I appreciate living near your family. I realize some couples don’t have support nearby! Recently, I’ve felt criticized by some things your mom has said about my parenting— like X and Y. First, I want to check in with you to make sure we’re still on the same page about those things. If so, I would like you to back me up next time she offers her opinion. How do you feel about that?`,
        intent: intents.TOPICS_INLAWS_CRITISIZE,
    },
    {
        answer: `I can tell you’ve been trying to set better boundaries with your parents, and I’m so grateful! It seems like things haven’t gotten any better, even though we’ve had a couple of tough conversations with them. I’m starting to feel resentful, and that’s not a path I want to go down. What do you think we should do next?`,
        intent: intents.TOPICS_INLAWS_VIOLATES,
    },
    {
        answer: `I know how much you enjoy hosting everyone for X, and it’s been fun for the last few years. I’m feeling pretty run down, and I could use a break. What do you think about asking your parents to host this year? And can we talk about spending just a couple of hours over there? Getting some downtime feels worth having an awkward conversation. What do you think?`,
        intent: intents.TOPICS_INLAWS_BREAK,
    },
    {
        answer: `I appreciate how hard you’re trying to get along with my family. I know they’re still doing some things that upset you, and I want you to talk with me when those things happen. I feel frustrated when you bring up past conflicts that we’ve done quite a bit of work on. I’m assuming you’re still upset about those things since you want to talk about them. How can we repair so we can tackle what’s happening now?`,
        intent: intents.TOPICS_INLAWS_CRITICALTOFAMILY,
    },

    {
        answer: `I love watching you play with our kids. They lucked out with you as their parent! To be honest, I’m actually feeling jealous of how much fun you have together, and I’d like to have more free time with them. Could you be in charge of meal planning and shopping on Sundays so I can do that?`,
        intent: intents.TOPICS_DIVISIONOFLABOR_FUNPARENT,
    },
    {
        answer: `I felt so supported by the conversation we had a couple of weeks ago about sharing household tasks. I know it takes some time to build new habits, and I’ve noticed we’ve both fallen back into the pattern of me doing X instead of you. At first, I felt annoyed, and now I’m starting to feel angry. Can we revisit our plan and try again?`,
        intent: intents.TOPICS_DIVISIONOFLABOR_HELPED,
    },
    {
        answer: `I feel really lucky that I get to be with the kids during the day, and I’m grateful your hard work helps make that possible. I’m finding it difficult to be the parent I want to be while also keeping up with housework and all the other adulting to be done. I feel so discouraged. I’d like to brainstorm some ideas for how to ease the load I’m feeling.`,
        intent: intents.TOPICS_DIVISIONOFLABOR_STATYHOME,
    },
    {
        answer: `I love how when I ask for help with something, you jump right in and do it without complaining. Like when I asked you to X, you didn’t bat an eye. Thank you! Lately, I’ve noticed I’m feeling burned out from keeping track of what needs to be done and when, and sometimes when I ask for your help I feel like I’m nagging you. Do you feel that way, too? What can we do together?`,
        intent: intents.TOPICS_DIVISIONOFLABOR_MENTALLOAD,
    },
    {
        answer: `One of my favorite things about you is that not much bothers you. That helps me feel safe and secure in our relationship. I’ve noticed something really interesting lately, and I wanted to share it with you. You don’t seem to care when the house is a mess... whereas I feel overwhelmed by clutter. Could we create a routine of picking up together after dinner? That would help me start the next day with more energy.`,
        intent: intents.TOPICS_DIVISIONOFLABOR_DIFFPRIO,
    },
    {
        answer: `I really appreciate you doing X around the house. So many of my friends complain about how their partners don’t do anything! What’s really burning me out these days is all the kid stuff... and I’m realizing my patience is wearing thin. Could we make some changes to who does what? I know the kids would love to have more time with you, too!`,
        intent: intents.TOPICS_DIVISIONOFLABOR_MOREHELP,
    },

    {
        answer: `I’m grateful that we’re on the same page about so much when it comes to parenting. Right now though, it seems like we’re getting stuck on screen time. I know you’d rather X, but I’m more like Y. I can feel the tension around this building. Can we talk about some potential solutions?`,
        intent: intents.TOPICS_PARENTING_DISAGREE,
    },
    {
        answer: `When our kids X, I appreciate that you try to resolve the situation. Sometimes, I feel uncomfortable with how those interactions go, like when Y. Can we revisit our values around discipline to make sure we’re on the same page?`,
        intent: intents.TOPICS_PARENTING_AUTHORITARIAN,
    },
    {
        answer: `Parenting feels really tricky some days, and I’m grateful to have you as my partner in this. I know we grew up in very different households, and I’m noticing more and more how that’s showing up in each of our parenting styles. For example, X. I feel concerned our kids might be confused when we’re not consistent. What’s most important to you when it comes to parenting?`,
        intent: intents.TOPICS_PARENTING_DIFFSTYLE,
    },
    {
        answer: `I know we’ve both been running on fumes the last few months, and you’ve mentioned wanting to start sleep training. I appreciate you being honest about where you are with it. When I think about sleep training, I feel anxious and worried. Can we do some research together? That way we can both feel comfortable with our approach?`,
        intent: intents.TOPICS_PARENTING_SLEEPTRAIN,
    },
    {
        answer: `I want to thank you for tackling bedtime with me. I’m usually exhausted by the time they go down, and I’m sure you are, too! I know it’s been especially rough lately, so I wanted to check in. The last time we talked, we agreed to X, and that’s not been happening. That’s important to me, so I’m feeling frustrated. Can we rethink the plan?`,
        intent: intents.TOPICS_PARENTING_BEDTIMEDIFF,
    },

    {
        answer: `You do such a great job of showing up for our kids. Seeing how much they love being with you actually makes me miss having time with just you. Can we put a couple of date nights on the calendar? Maybe you can plan one, including finding a sitter, and I’ll plan the other one?`,
        intent: intents.TOPICS_INTIMACY_TIMETOGETHER,
    },
    {
        answer: `We both have a lot going on right now, and I want you to know I appreciate everything you do for our family. It seems like our busy schedules are getting in the way of having time together, and I’m feeling pretty lonely. Can we talk about some intentional ways we can reconnect every day?`,
        intent: intents.TOPICS_INTIMACY_ROOMMATES,
    },
    {
        answer: `I know sex is important to you, and I realize I haven’t been as receptive as you’d like. I want you to know it’s not because I don’t love you, and it’s not because I’m not attracted to you. The truth is, X. What would help me is Y. Can we try that?`,
        intent: intents.TOPICS_INTIMACY_MORESEX,
    },
    {
        answer: `Before we had kids, we had a great sex life. These days, I get the sense you’re not interested in me anymore, and I miss how close I felt to you back then. I know this is a vulnerable topic. Can we try having a conversation about it anyway? I really want to know what you’re thinking and feeling.`,
        intent: intents.TOPICS_INTIMACY_YOUWANTSEX,
    },
    {
        answer: `Today, I was thinking about that time when we X, and it absolutely made my day. It got me thinking about how different our lives are now that we have kids. I feel like something’s off between us because Y. Do you feel that, too?`,
        intent: intents.TOPICS_INTIMACY_WHERETOSTART,
    },

    {
        answer: `Thank you for talking with me about this. I feel loved when you listen to my concerns and help me think through solutions.`,
        intent: intents.TOPICS_CLOSERS,
    },
    {
        answer: `I’m grateful for this conversation. It wasn’t easy to talk about these things and I feel closer to you now than I did earlier today. Thank you.`,
        intent: intents.TOPICS_CLOSERS,
    },
    {
        answer: `It felt really good to talk with you about this, even though it wasn’t easy. Thanks for sticking with me in the conversation`,
        intent: intents.TOPICS_CLOSERS,
    },

    {
        answer: `I want to take a break from this conversation. I’m not feeling heard, and I can feel myself getting angrier. Let’s decide on a time to pick back up.`,
        intent: intents.TOPICS_CLOSERS_HEATED,
    },
    {
        answer: `I get the sense you need a break. I could use one, too. Can we come back together in 30 minutes or so?`,
        intent: intents.TOPICS_CLOSERS_HEATED,
    },

    {
        answer: `I feel frustrated because it doesn’t seem like you’re really listening to me. You’re nodding your head and saying “OK,” but you also seem disengaged. Can you help me understand what’s going on right now?`,
        intent: intents.TOPICS_ROADBLOCKS_DISENGAGED,
    },
    {
        answer: `It seems like you feel attacked right now. Can you tell me what you’re thinking and feeling? I’m just going to listen`,
        intent: intents.TOPICS_ROADBLOCKS_DEFENSIVE,
    },
    {
        answer: `I’ve noticed that when I come to you with a concern, you tend to point out something I’ve done to you. I feel dismissed when that happens—like you don’t care about my perspective. I want us both to have a chance to talk and be heard. Would you like to start?`,
        intent: intents.TOPICS_ROADBLOCKS_ONEUPPING,
    },
    {
        answer: `I really appreciated how you backed me up when your mom said something about what the kids were eating for dinner.`,
        intent: intents.TOPICS_THANKING,
    },
    {
        answer: `Thank you so much for running to the grocery store this week. It was so nice to be able to play with the kids without being distracted by my to-do list!`,
        intent: intents.TOPICS_THANKING,
    },
    {
        answer: `I saw you take a pause before you responded to our daughter’s tantrum this morning. Did you notice how much faster she calmed down when you offered to give her a hug? That was so sweet to watch!`,
        intent: intents.TOPICS_THANKING,
    },
    {
        answer: `Oh my gosh thank you for taking care of the dishes tonight. I feel so supported right now.`,
        intent: intents.TOPICS_THANKING,
    },
    {
        answer: `I know you had a tough week and really wanted to just veg out in front of the TV. It means so much that you kept our date instead. I love spending time with just you`,
        intent: intents.TOPICS_THANKING,
    },
];

module.exports.documents = documents;
module.exports.answers = answers;

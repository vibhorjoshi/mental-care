const questions = [

    {
        question: "What's your age?",
        placeholder: "18-25",
        type: "num",
        label: "Age"
    },
    {
        question: "What's your gender?",
        type: "mcq",
        options: [
            "Female",
            "Male"
        ],
        label: "Gender"
    },
    {
        question: "How much are you satisfied with your CGPA?",
        type: "mcq",
        options:
            [
                "very satisfied",
                "satisfied",
                "moderate",
                "disappointed"
            ],
        label: "CGPA"

    },
    {
        question: "How much time do you spend on social media(in hours)?",
        placeholder: "0-24",
        type: "num",
        label: "social_media"
    }
    ,
    {
        question: "Do you find difficult to relax?",
        type: "mcq",
        options:
            [
                "never",
                "sometimes",
                "often",
                "always"
            ],
        label: "difficult_relax"

    }
    ,
    {
        question: "How much free time do you have in a day(in hours)?",
        placeholder: "0-24",
        type: "num",
        label: "free_time"
    },
    {
        question: "Do you feel that you have nothing to look forward to?",
        type: "mcq",
        options:
            [
                "never",
                "sometimes",
                "often",
                "always"
            ],
        label: "look_forward"

    }
    ,
    {
        question: "Do you tend to overreact to things?",
        type: "mcq",
        options:
            [
                "never",
                "sometimes",
                "often",
                "always"
            ],
        label: "overreact"

    }
    ,
    {
        question: "Are you aware of dryness of your mouth?",
        type: "mcq",
        options:
            [
                "never",
                "sometimes",
                "often",
                "always"
            ],
        label: "dry_mouth"

    }
    ,
    {
        question: "Do you experience difficulty in breathing or trembling in hands?",
        type: "mcq",
        options:
            [
                "never",
                "sometimes",
                "often",
                "always"
            ],
        label: "trembling_suffocation"

    },
    {
        question: "How often are you unable to become enthusiastic about anything?",
        type: "mcq",
        options:
            [
                "never",
                "sometimes",
                "often",
                "always"
            ],
        label: "least_enthusiasm"

    },
    {
        question: "Do you feel scared without any good reason?",
        type: "mcq",
        options:
            [
                "never",
                "sometimes",
                "often",
                "always"
            ],
        label: "feel_scared"

    },
    {
        question: "How much time you spend on digital entertainment (eg: video games,netflix,etc.)?",
        type: "num",
        placeholder: "0-24",
        label: "games_OTT_platforms"

    },
    {
        question: "Do you easily get offended?",
        type: "mcq",
        options:
            [
                "never",
                "sometimes",
                "often",
                "always"
            ],
        label: "offended"

    },
    {
        question: "Do you find it hard to stay positive?",
        type: "mcq",
        options:
            [
                "never",
                "sometimes",
                "often",
                "always"
            ],
        label: "stay_negative"

    }
]

export default questions
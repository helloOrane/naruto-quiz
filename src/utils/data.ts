import { QuizzType } from "./types";

export const quizz: QuizzType = {
    débutant: [
        {
            id: 1,
            question: "Qui est le mentor de Naruto ?",
            options: ["Kakashi", "Jiraya", "Sasuke", "Itachi"],
            answer: "Jiraya",
            heroId: 1
        },
        {
            id: 2,
            question: "Qui est le rival de Naruto depuis son enfance ?",
            options: ["Kakashi", "Sasuke", "Gaara", "Neji"],
            answer: "Sasuke",
            heroId: 2
        },
        {
            id: 3,
            question: "De qui Sakura est-elle amoureuse ?",
            options: ["Naruto", "Kakashi Hatake", "Sasuke Uchiwa", "Orochimaru"],
            answer: "Sasuke Uchiwa",
            heroId: 3
        },
        {
            id: 4,
            question: "Qui est l'hôte du démon-renard à neuf queues ?",
            options: ["Naruto", "Sasuke", "Kakashi", "Gaara"],
            answer: "Naruto",
            heroId: 4
        },
        {
            id: 5,
            question: "Quel est le village natal de Naruto ?",
            options: ["Konoha", "Suna", "Kiri", "Iwa"],
            answer: "Konoha",
            heroId: 5
        },
        {
            id: 6,
            question: "Qui est le père de Naruto ?",
            options: ["Minato Namikaze", "Jiraiya", "Kakashi Hatake", "Obito Uchiha"],
            answer: "Minato Namikaze",
            heroId: 6
        },
        {
            id: 7,
            question: "Qui est la mère de Naruto ?",
            options: ["Kushina Uzumaki", "Tsuyu Asui", "Hinata Hyuga", "Sakura Haruno"],
            answer: "Kushina Uzumaki",
            heroId: 7
        },
        {
            id: 8,
            question: "Qui est le frère de Sasuke Uchiwa ?",
            options: ["Itachi Uchiwa", "Madara Uchiwa", "Neji Hyuga", "Gaara"],
            answer: "Itachi Uchiwa",
            heroId: 8
        },
        {
            id: 9,
            question: "Quel est le nom de famille de Sakura ?",
            options: ["Uchiwa", "Hyuga", "Namikaze", "Haruno"],
            answer: "Haruno",
            heroId: 9
        },
        {
            id: 10,
            question: "Qui est l'héritier du clan Hyuga ?",
            options: ["Hinata Hyuga", "Sasuke Uchiha", "Naruto Uzumaki", "Sakura Haruno"],
            answer: "Hinata Hyuga",
            heroId: 10
        }
    ],
    confirmé: [
        {
            id: 1,
            question: "Que signifie Akatsuki ?",
            options: ["Aube", "Crépuscule", "Ondée", "Tempête"],
            answer: "Aube",
            heroId: 11
        },
        {
            id: 2,
            question: "Quel membre de l'Akatsuki possède le Sharingan éternel ?",
            options: ["Itachi Uchiwa", "Madara Uchiwa", "Kisame Hoshigaki", "Deidara"],
            answer: "Madara Uchiwa",
            heroId: 12
        },
        {
            id: 3,
            question: "Qui est le 1er hokage de Konoha ?",
            options: ["Madara Uchiha", "Hashirama Senju", "Hiruzen Sarutobi", "Tobirama Senju"],
            answer: "Hashirama Senju",
            heroId: 13
        },
        {
            id: 4,
            question: "Qui faisait partie de l'équipe Jiraya ?",
            options: ["Minato Namikaze", "Nagato", "Konan", "Kakashi Hatake"],
            answer: "Minato Namikaze",
            heroId: 14
        },
        {
            id: 5,
            question: "Qui est la grand-mère de Sasori?",
            options: ["Sarada", "Hinata", "Chiyo", "Kaguya"],
            answer: "Chiyo",
            heroId: 15
        },
        {
            id: 6,
            question: "Quel est le vrai nom de Pain ?",
            options: ["Nagato", "Obito Uchiha", "Kabuto Yakushi", "Sasori"],
            answer: "Nagato",
            heroId: 16
        },
        {
            id: 7,
            question: "Qui est le membre le plus jeune à avoir rejoint l'Akatsuki ?",
            options: ["Konan", "Kisame Hoshigaki", "Sasori", "Deidara"],
            answer: "Deidara",
            heroId: 17
        },
        {
            id: 8,
            question: "Quel personnage possède le Rinnegan ?",
            options: ["Naruto Uzumaki", "Kakashi Hatake", "Nagato", "Madara Uzumaki"],
            answer: "Nagato",
            heroId: 18
        },
        {
            id: 9,
            question: "Qui est le frère cadet de Tobirama Senju ?",
            options: ["Madara Uchiha", "Hashirama Senju", "Hiruzen Sarutobi", "Itachi Uchiha"],
            answer: "Hashirama Senju",
            heroId: 19
        },
        {
            id: 10,
            question: "Quel est le surnom donné à Sasori de l'Akatsuki ?",
            options: ["Le marionnettiste", "Le manipulateur de sable", "Sasori du sable rouge", "Le manipulateur de marionnettes"],
            answer: "Sasori du sable rouge",
            heroId: 20
        }
    ],
    expert: [
        {
            id: 1,
            question: "Qui est l'ancien leader de l'Akatsuki ?",
            options: ["Obito Uchiha", "Madara Uchiha", "Tobi", "Itachi Uchiha"],
            answer: "Tobi",
            heroId: 21
        },
        {
            id: 2,
            question: "Qui a fondé l'organisation secrète de la Racine ?",
            options: ["Hiruzen Sarutobi", "Danzo Shimura", "Tobirama Senju", "Hashirama Senju"],
            answer: "Danzo Shimura",
            heroId: 22
        },
        {
            id: 3,
            question: "Qui a fondé l'Akatsuki ?",
            options: ["Orochimaru", "Sasuke Uchiha", "Tobi", "Yahiko"],
            answer: "Yahiko",
            heroId: 23
        },
        {
            id: 4,
            question: "Quel clan est le rival du clan Uchiwa ?",
            options: ["Le clan Hyuga", "Le clan Senju", "Le clan Sarutobi", "Le clan Yamanaka"],
            answer: "Le clan Senju",
            heroId: 24
        },
        {
            id: 5,
            question: "Quel est le surnom de Kakashi Hatake ?",
            options: ["L'œil du désert", "Le ninja blanc", "Le ninja copieur", "L'ombre de la feuille"],
            answer: "Le ninja copieur",
            heroId: 25
        },
        {
            id: 6,
            question: "Qui est la Salamandre ?",
            options: ["Mifune", "Hanzô", "Tsunade", "Chiyo"],
            answer: "Hanzô",
            heroId: 26
        },
        {
            id: 7,
            question: "Qui est le maître de l'équipe dont fait partie Shino Aburame ?",
            options: ["Jiraiya", "Hiruzen Sarutobi", "Tobirama Senju", "Kurenaï Yûhi"],
            answer: "Kurenaï Yûhi",
            heroId: 27
        },
        {
            id: 8,
            question: "De quelle équipe fait partie Metal Lee ?",
            options: ["Gaï", "Konohamaru", "Saï", "Udon"],
            answer: "Udon",
            heroId: 28
        },
        {
            id: 9,
            question: "Quelle est la véritable identité du père de Kakashi Hatake ?",
            options: ["Sakumo Hatake", "Rin Nohara", "Minato Namikaze", "Tobirama Senju"],
            answer: "Sakumo Hatake",
            heroId: 29
        },
        {
            id: 10,
            question: "Quel binome a fait partie de l'Akatsuki ?",
            options: ["Orochimaru et Deidara", "Sasori et Tobi", "Tobi et Kisame", "Itachi et Kisame"],
            answer: "Itachi et Kisame",
            heroId: 30
        }
    ],
    
};
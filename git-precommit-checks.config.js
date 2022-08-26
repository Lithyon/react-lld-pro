module.exports = {
    display: {
        notifications: true,
        offendingContent: true,
        rulesSummary: false,
        shortStats: true,
        verbose: true
    },
    rules: [
        // Règles globales, appliquées sur tous les contenus ajoutés
        {
            // On renseigne le message qui doit nous être affiché en cas de problème.
            message: "Arrêt du commit : Aurais-tu oublié de terminer certaines tâches ?",
            // Ici on indique qu’on veut juste une alerte, sans stopper le commit. Par défaut c'est renseigné à "false".
            nonBlocking: true,
            // On passe sous forme de texte ou d’expression rationnelle les contenus à rechercher.
            regex: /(TODO|FIXME|todo|fixme)\s?:\D?\w+/
        },
        {
            message: "Arrêt du commit : Tu as des marqueurs de conflits qui traînent",
            regex: /^[<>|=]{4,}/m
        },
        // Ensuite on peut spécifier des fichiers ou motifs particuliers pour appliquer nos règles, ça se fait avec la propriété "filter".
        {
            // Là encore on peut utiliser une expression rationnelle
            filter: /\.ts$/,
            message: 'Arrêt du commit : 🤔 Hum ! N’as-tu pas oublié de retirer du "console.log(…)" ?',
            regex: /^\s*console\.(log|info|warn|debug)/
        }
    ]
};

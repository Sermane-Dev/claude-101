/* =========================================================
   DONNÉES DU COURS — le seul fichier à modifier
   Pour ajouter une fiche :
   1. Déposer le fichier HTML dans fiches/module-X/
   2. Renseigner son chemin dans "fiche" de la leçon concernée
   3. Passer "done" à true quand la leçon est terminée sur DataCamp
   ========================================================= */
const COURSE = {
  title: "Claude 101",
  provider: "DataCamp",
  modules: [
    {
      id: 1,
      title: "Meet Claude",
      titleFr: "Découvrir Claude",
      summary: "Premiers prompts sur des cas métier réels, méthode du prompt en 3 éléments, les 4D de l'AI Fluency, itération sur les brouillons, et les modes Chat, Cowork et Code de l'application de bureau.",
      tags: ["Prompting", "4D Framework", "Itération"],
      lessons: [
        { title: "Getting started with Claude!", type: "lecture", done: true },
        { title: "What is Claude?", type: "lecture", done: true },
        { title: "Video: Your first conversation with Claude", type: "video", done: true,
          fiche: "fiches/module-1/your-first-conversation.html" },
        { title: "Your first conversation with Claude", type: "lecture", done: true,
          fiche: "fiches/module-1/your-first-conversation.html" },
        { title: "The headline, not the novel", type: "lecture", done: false },
        { title: "Getting better results", type: "lecture", done: false },
        { title: "Corporate voice, begone!", type: "lecture", done: false },
        { title: "Claude desktop app: Chat, Cowork, Code", type: "lecture", done: false }
      ]
    },
    {
      id: 2,
      title: "Organizing Your Work and Knowledge",
      titleFr: "Organiser son travail et ses connaissances",
      summary: "Les Projets Claude avec base de connaissances partagée et instructions personnalisées, la création d'artefacts interactifs (rapports, tableaux de bord) à publier ou partager, et les Skills réutilisables.",
      tags: ["Projects", "Artifacts", "Skills"],
      lessons: [
        { title: "Video: Introduction to projects", type: "video", done: false },
        { title: "Introduction to Projects", type: "lecture", done: false },
        { title: "Setting Up a Project", type: "exercise", done: false },
        { title: "Creating with Artifacts", type: "lecture", done: false },
        { title: "Working with Skills", type: "lecture", done: false },
        { title: "Skills vs. Projects", type: "exercise", done: false }
      ]
    },
    {
      id: 3,
      title: "Expanding Claude's Reach",
      titleFr: "Étendre la portée de Claude",
      summary: "Connecter Claude à ses outils (Google Drive, Slack) en respectant les permissions, la recherche Enterprise dans les données internes, et le mode Research pour des enquêtes multi-sources avec citations.",
      tags: ["Connecteurs", "Enterprise Search", "Research"],
      lessons: [
        { title: "Connecting your tools", type: "lecture", done: false },
        { title: "Enterprise search", type: "lecture", done: false },
        { title: "Research mode for deep dives", type: "lecture", done: false }
      ]
    },
    {
      id: 4,
      title: "Putting It All Together",
      titleFr: "Tout mettre en pratique",
      summary: "Claude au quotidien en vente, marketing et gestion de projet, au-delà de claude.ai avec Excel, Chrome et Slack, et choisir le bon produit Claude selon le rôle et le besoin.",
      tags: ["Cas d'usage", "Excel · Chrome · Slack", "Par métier"],
      lessons: [
        { title: "Claude in action - use-cases by role", type: "lecture", done: false },
        { title: "Other ways to work with Claude", type: "lecture", done: false },
        { title: "What's next?", type: "lecture", done: false }
      ]
    }
  ]
};

export interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Qui suis-je ?",
    children: [
      {
        label: "Mon histoire",
        subLabel: "Pourquoi le dev ?",
        href: "#",
      },
      {
        label: "Mes compétences",
        subLabel: "Qu'est ce qui m'anime ?",
        href: "#",
      },
      {
        label: "Expériences",
        subLabel: "Qu'est ce que j'ai fait ?",
        href: "#",
      },
    ],
  },
  {
    label: "Mes projets",
    children: [
      {
        label: "Tous les projets",
        subLabel: "Projets de cours, side project ...",
        href: "#",
      },
      {
        label: "Tookea",
        subLabel: "Le projet d'une vie",
        href: "#",
      },
      {
        label: "Numérique responsable",
        subLabel: "Ressources, formation, où j'en suis ?",
        href: "#",
      },
    ],
  },
  {
    label: "Blog",
    href: "#",
  },
]

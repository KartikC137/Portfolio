import { validPins } from "@/hooks/PinnedPagesContext";

export const PIN_DATA: Record<
  validPins,
  { title: string; description: string }
> = {
  p_cc: {
    title: "Project: Custody Chain",
    description: "Blockchain based chain of custody",
  },
  p_pm: {
    title: "Project: People's Mandate",
    description: "Blockchain based electoral system",
  },
  p_mfp: {
    title: "Misc. Foundry Projects",
    description: "various web3 projects",
  },
  p_lfs: {
    title: "Project: Linux From Scratch",
    description: "A basic linux OS",
  },
  p_rp: {
    title: "Project: Misc. React Projects",
    description: "various react projects",
  },
  c_fel: {
    title: "Certificate: Front end libraries",
    description: "front end development by fcc",
  },
  c_gcs: {
    title: "Certificate: Google Cybersecurity",
    description: "professional cybersecurity course",
  },
  c_at: {
    title: "Certificate: AstroTech",
    description: "technologies used in astronomy",
  },
  osc_a: { title: "Open Source Contribution", description: "kanjimap" },
  lu: {
    title: "Latest Updates",
    description: "latest updates about my development",
  },
};

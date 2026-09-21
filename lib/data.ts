import { Customer, Product, Sector } from "./types";
export const sectorCopy: Record<Sector, { label: string; title: string; subtitle: string }> = {
  creator: { label: "Creador", title: "Convierte tu audiencia en negocio", subtitle: "Vende recursos, membresías y experiencias a tu comunidad." },
  coach: { label: "Entrenador", title: "Haz crecer tu negocio de coaching", subtitle: "Programas, sesiones y seguimiento premium en un solo lugar." },
  academy: { label: "Academia", title: "Una academia que escala contigo", subtitle: "Cursos, alumnos y suscripciones sin fricción." },
  analyst: { label: "Analista", title: "Monetiza tu conocimiento", subtitle: "Informes, señales y análisis exclusivos para tus suscriptores." },
  community: { label: "Comunidad", title: "Tu comunidad, más cerca", subtitle: "Contenido, acceso y conversaciones para miembros premium." }
};
export const products: Product[] = [
  { id: "PRD-104", name: "Masterclass Creator Pro", type: "Pago único", price: 89, sales: 128, status: "Activo" },
  { id: "PRD-103", name: "Club Insider", type: "Suscripción", price: 19, sales: 84, status: "Activo" },
  { id: "PRD-102", name: "Pack de recursos", type: "Pago único", price: 39, sales: 57, status: "Activo" },
  { id: "PRD-101", name: "Mentoría 1:1", type: "Pago único", price: 199, sales: 12, status: "Borrador" }
];
export const customers: Customer[] = [
  { id: "CUS-204", name: "Lucía Moreno", email: "lucia@example.com", product: "Club Insider", spent: 228, joinedAt: "Hoy, 10:42" },
  { id: "CUS-203", name: "Carlos Vega", email: "carlos@example.com", product: "Masterclass Creator Pro", spent: 89, joinedAt: "Ayer, 18:20" },
  { id: "CUS-202", name: "Marta Silva", email: "marta@example.com", product: "Pack de recursos", spent: 39, joinedAt: "18 Sep 2026" },
  { id: "CUS-201", name: "Diego Ruiz", email: "diego@example.com", product: "Club Insider", spent: 152, joinedAt: "16 Sep 2026" }
];

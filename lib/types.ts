export type Sector = "creator" | "coach" | "academy" | "analyst" | "community";
export interface Product { id: string; name: string; type: "Pago único" | "Suscripción"; price: number; sales: number; status: "Activo" | "Borrador"; }
export interface Customer { id: string; name: string; email: string; product: string; spent: number; joinedAt: string; }

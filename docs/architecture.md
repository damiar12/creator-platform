# Arquitectura del MVP

- **Presentación:** App Router y componentes reutilizables en `components/`.
- **Dominio:** tipos y datos provisionales en `lib/`; el esquema relacional documenta los agregados para sustituir los fixtures por repositorios.
- **Integraciones:** Stripe está aislado en `lib/stripe.ts` y rutas bajo `app/api/stripe`. Telegram y Discord se incorporarán como adaptadores que implementen el registro `integrations`.
- **Multi-tenant:** toda entidad de negocio pertenece a un `workspace`; la autorización de producción debe filtrar siempre por el espacio del usuario autenticado.
- **Pagos:** Stripe aloja la captura de tarjeta. La aplicación conserva únicamente IDs externos, estado e importes. Los webhooks deben persistirse por `event.id` antes de ejecutar efectos para ofrecer idempotencia.

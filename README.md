# Creator Platform (Nexo)

MVP SaaS para vender productos digitales, suscripciones y acceso premium. Incluye onboarding sectorial, dashboard adaptable, productos, clientes, métricas y base para Stripe Connect.

## Inicio

```bash
cp .env.example .env.local
npm install
npm run dev
```

## Stripe

Configura las claves del entorno. `POST /api/stripe/connect` crea una cuenta Express y su enlace de onboarding. Envía los eventos de Stripe a `POST /api/stripe/webhook`; el cuerpo se valida con `STRIPE_WEBHOOK_SECRET`. La plataforma nunca recibe ni almacena datos de tarjetas.

En producción, persiste los identificadores de cuenta y eventos procesados en una base de datos, añade autenticación y comprueba la propiedad del usuario antes de crear cuentas Connect.

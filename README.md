# TechArtisan - Site Web Professionnel

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-netlify-site-id/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)

Site web professionnel pour TechArtisan, freelance spécialisé en solutions informatiques et électroniques.

## 🚀 Déploiement sur Netlify

### Configuration automatique

Le projet est configuré pour un déploiement automatique sur Netlify :

1. **Connectez votre compte GitHub à Netlify**
2. **Importez le dépôt** : `https://github.com/Mekkou1/techartisan`
3. **Paramètres de build** :
   - **Branch** : `main`
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`

### Configuration manuelle

Si vous préférez configurer manuellement :

1. Créez un nouveau site sur [Netlify](https://netlify.com)
2. Liez votre dépôt GitHub
3. Les fichiers `netlify.toml` et `public/_redirects` sont déjà configurés

## 🛠️ Technologies utilisées

- **Vue.js 3** - Framework JavaScript progressif
- **Vue Router** - Routage officiel pour Vue.js
- **EmailJS** - Service d'envoi d'emails
- **SCSS** - Préprocesseur CSS
- **Netlify** - Plateforme de déploiement

## 📁 Structure du projet

```
techartisan/
├── public/
│   ├── _redirects          # Configuration des redirections SPA
│   └── index.html
├── src/
│   ├── assets/             # Images et ressources
│   ├── components/         # Composants Vue.js
│   ├── views/              # Pages de l'application
│   ├── router/             # Configuration des routes
│   └── App.vue
├── netlify.toml            # Configuration Netlify
└── package.json
```

## 🚀 Démarrage en local

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run serve

# Build pour la production
npm run build
```

## 📧 Configuration EmailJS

Pour que les formulaires de contact et devis fonctionnent :

1. Créez un compte sur [EmailJS](https://emailjs.com)
2. Configurez un service email (Gmail, Outlook, etc.)
3. Créez deux templates :
   - `template_contact` - Pour les demandes de contact
   - `template_devis` - Pour les demandes de devis
4. Mettez à jour les clés dans :
   - `src/components/MessageForm.vue`
   - `src/components/QuoteForm.vue`

## 📱 Fonctionnalités

- ✅ **Design responsive** - Optimisé pour tous les appareils
- ✅ **SEO optimisé** - Meta tags et structure sémantique
- ✅ **Performance** - Lazy loading et optimisation des assets
- ✅ **Accessibilité** - Conformité WCAG
- ✅ **Multilingue** - Prêt pour l'internationalisation

## 📞 Contact

**Mekingbin Franck Kouadio**
- Email : direction.techartisan@gmail.com
- Téléphone : +225 05 55 66 74 23
- Site web : [https://techartisan.netlify.app](https://techartisan.netlify.app)

## 📄 Licence

Ce projet est privé et propriété de TechArtisan.

---

*Développé avec ❤️ par TechArtisan*
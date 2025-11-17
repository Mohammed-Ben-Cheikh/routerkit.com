# Version Management System

Ce système permet de gérer la version de Router-Kit de manière centralisée dans toute la documentation et l'application.

## Configuration

La version est définie dans le fichier `src/config/version.ts` :

```typescript
export const ROUTER_KIT_VERSION = "1.3.4";
```

## Utilisation

### Dans les composants React

Utilisez le hook `useRouterKitVersion` pour accéder à la version :

```typescript
import { useRouterKitVersion } from '../hooks/useRouterKitVersion';

const MyComponent = () => {
  const { version, npmInstallCommand } = useRouterKitVersion();

  return (
    <div>
      <p>Version actuelle : {version}</p>
      <code>{npmInstallCommand}</code>
    </div>
  );
};
```

### Dans les utilitaires

```typescript
import {
  getRouterKitVersion,
  getRouterKitInstallCommand,
} from "../hooks/useRouterKitVersion";

const version = getRouterKitVersion(); // '1.3.4'
const installCmd = getRouterKitInstallCommand(); // 'npm install router-kit@1.3.4'
```

## Mise à jour de la version

### Méthode manuelle

1. Modifier la constante `ROUTER_KIT_VERSION` dans `src/config/version.ts`
2. Exécuter le script de mise à jour :

```bash
npm run update-version
```

### Fichiers mis à jour automatiquement

- `src/docs/DOCUMENTATION.md`
- `src/docs/README.md`
- `src/docs/CHANGELOG.md`
- `package.json`

### Fichiers utilisant la version dynamiquement

- `src/pages/Home/index.tsx`
- `src/pages/Docs/index.tsx`

## Exemple de mise à jour

Pour mettre à jour vers la version 1.3.5 :

1. Modifier `src/config/version.ts` :

```typescript
export const ROUTER_KIT_VERSION = "1.3.5";
```

2. Exécuter :

```bash
npm run update-version
```

3. Tous les fichiers seront automatiquement mis à jour avec la nouvelle version.

## Avantages

- ✅ **Source unique de vérité** : Une seule variable à modifier
- ✅ **Mise à jour automatique** : Script automatisé pour tous les fichiers
- ✅ **Cohérence garantie** : Impossible d'avoir des versions différentes
- ✅ **TypeScript support** : Typé et auto-complété
- ✅ **React intégration** : Hook dédié pour les composants

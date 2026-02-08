"use client";
import React, { createContext, useContext, useState } from "react";

// Créer un type pour les données
type PlantData = {
  title: string;
  text: string;
  img: string;
};

// Créer le contexte avec valeurs par défaut
export const PlantContext = createContext({
  plantData: null as PlantData | null, // null si aucune plante selectionnée
  setPlantData: (data: PlantData | null) => {}, // change les données
});

// Créer le provider, va partager les données
export function PlantProvider({ children }: { children: React.ReactNode }) {
  // State pour stocker les données
  const [plantData, setPlantData] = useState<PlantData | null>(null);

  return (
    // Partage aux enfants
    <PlantContext.Provider value={{ plantData, setPlantData }}>
      {children}
    </PlantContext.Provider>
  );
}

// Hook personnalisé
export function usePlant() {
  return useContext(PlantContext);
}


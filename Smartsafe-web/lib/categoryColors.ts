export const CATEGORY_COLORS: Record<string, string> = {
    // Core SmartSafe Categories (Green Identity)
    'herramientas-ev': '#156642', // Brand Primary
    'scanners-pro': '#156642', // Brand Primary
    'scanner-automotriz': '#156642', // Brand Primary
    'scanners-independientes': '#b45309', // Amber 700 (Warning/Industrial)

    // Lift & Align (Industrial Blue/Orange)
    'elevadores': '#0369a1', // Sky 700 (Status Info)
    'alineadoras': '#c2410c', // Orange 700 (Industrial)

    // Fluidos & AC
    'aceites-y-fluidos': '#854d0e', // Yellow 800 (Industrial Gold)
    'aire-acondicionado': '#0e7490', // Cyan 700
    'limpia-inyectores': '#7e22ce', // Purple 700

    // Others
    'adas': '#0e7490', // Cyan 700
    'tpms': '#c2410c', // Orange 700
    'programadores': '#be185d', // Pink 700
    'accesorios': '#334155', // Slate 600
    'carros-de-herramientas': '#b91c1c', // Red 700 (Retained for specific tool storage contrast)
    'linea-hantek': '#0f766e', // Teal 700
    'linea-pesada': '#374151', // Gray 700

    // Legacy / Fallbacks
    'balanceadoras': '#15803d', // Green 700
    'desmontadoras': '#7e22ce', // Purple 700

    // Default fallback
    'default': '#156642' // Brand Primary
};

export const getCategoryColor = (slug: string): string => {
    return CATEGORY_COLORS[slug] || CATEGORY_COLORS['default'];
};
